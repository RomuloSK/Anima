"""Bounded C2 key curves. Keys, including contact poses, are interpolated exactly."""
from bisect import bisect_right


class SampleSpline:
    """Natural C2 cubic interpolation of dense, uniformly sampled vectors.

    Used for retiming existing tracks. Linear resampling creates acceleration
    impulses at the old sample boundaries and can defeat a jerk budget even
    when slowing down. Exact samples and continuous derivatives survive here.
    This is not a bounds solver: the resampled output must still be validated.
    """
    def __init__(self, values):
        self.values=values;n=len(values);width=len(values[0])
        if n<2:raise ValueError('A sampled curve needs at least two values')
        self.second=[[0.]*width for _ in values]
        diagonal=[4.]*(n-2);rhs=[]
        for i in range(1,n-1):
            row=[6*(c-2*b+a) for a,b,c in zip(values[i-1],values[i],values[i+1])]
            if i>1:
                factor=1/diagonal[i-2];diagonal[i-1]-=factor
                row=[a-factor*b for a,b in zip(row,rhs[-1])]
            rhs.append(row)
        for i in range(n-3,-1,-1):
            self.second[i+1]=[(a-b)/diagonal[i] for a,b in zip(rhs[i],self.second[i+2])]

    def __call__(self,sample):
        i=min(len(self.values)-2,max(0,int(sample)));u=max(0,min(1,sample-i));v=1-u
        return [v*a+u*b+((v**3-v)*c+(u**3-u)*d)/6
                for a,b,c,d in zip(self.values[i],self.values[i+1],self.second[i],self.second[i+1])]


class KeyCurve:
    def __init__(self, keys):
        self.times = [float(k[0]) for k in keys]
        self.values = [list(k[1:]) for k in keys]
        if len(keys) < 2 or any(b <= a for a, b in zip(self.times, self.times[1:])):
            raise ValueError('Curve times must be strictly increasing')
        n = len(keys); width = len(self.values[0])
        self.slopes = [[0.] * width for _ in keys]
        for i in range(1, n - 1):
            h0 = self.times[i] - self.times[i-1]; h1 = self.times[i+1] - self.times[i]
            for c in range(width):
                a = (self.values[i][c] - self.values[i-1][c]) / h0
                b = (self.values[i+1][c] - self.values[i][c]) / h1
                if a * b > 0:
                    w0 = 2*h1+h0; w1 = h1+2*h0
                    v = (w0+w1)/(w0/a+w1/b)
                    self.slopes[i][c] = (1 if v > 0 else -1)*min(abs(v), 1.5*abs(a), 1.5*abs(b))

    def __call__(self, t):
        if t <= self.times[0]: return self.values[0][:]
        if t >= self.times[-1]: return self.values[-1][:]
        i = bisect_right(self.times, t)-1
        h = self.times[i+1]-self.times[i]; u = (t-self.times[i])/h
        # Quintic Hermite basis with zero acceleration at each key.
        h0 = 1-10*u**3+15*u**4-6*u**5
        h1 = 10*u**3-15*u**4+6*u**5
        m0 = u-6*u**3+8*u**4-3*u**5
        m1 = -4*u**3+7*u**4-3*u**5
        return [h0*a+h1*b+h*(m0*da+m1*db) for a,b,da,db in zip(
            self.values[i], self.values[i+1], self.slopes[i], self.slopes[i+1])]

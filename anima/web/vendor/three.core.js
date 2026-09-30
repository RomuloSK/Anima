/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '180';

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsMouse}
 * @constant
 */
const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };

/**
 * Represents touch interaction types in context of controls.
 *
 * @type {ConstantsTouch}
 * @constant
 */
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };

/**
 * Disables face culling.
 *
 * @type {number}
 * @constant
 */
const CullFaceNone = 0;

/**
 * Culls back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceBack = 1;

/**
 * Culls front faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFront = 2;

/**
 * Culls both front and back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFrontBack = 3;

/**
 * Gives unfiltered shadow maps - fastest, but lowest quality.
 *
 * @type {number}
 * @constant
 */
const BasicShadowMap = 0;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm.
 *
 * @type {number}
 * @constant
 */
const PCFShadowMap = 1;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm with
 * better soft shadows especially when using low-resolution shadow maps.
 *
 * @type {number}
 * @constant
 */
const PCFSoftShadowMap = 2;

/**
 * Filters shadow maps using the Variance Shadow Map (VSM) algorithm.
 * When using VSMShadowMap all shadow receivers will also cast shadows.
 *
 * @type {number}
 * @constant
 */
const VSMShadowMap = 3;

/**
 * Only front faces are rendered.
 *
 * @type {number}
 * @constant
 */
const FrontSide = 0;

/**
 * Only back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const BackSide = 1;

/**
 * Both front and back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const DoubleSide = 2;

/**
 * No blending is performed which effectively disables
 * alpha transparency.
 *
 * @type {number}
 * @constant
 */
const NoBlending = 0;

/**
 * The default blending.
 *
 * @type {number}
 * @constant
 */
const NormalBlending = 1;

/**
 * Represents additive blending.
 *
 * @type {number}
 * @constant
 */
const AdditiveBlending = 2;

/**
 * Represents subtractive blending.
 *
 * @type {number}
 * @constant
 */
const SubtractiveBlending = 3;

/**
 * Represents multiply blending.
 *
 * @type {number}
 * @constant
 */
const MultiplyBlending = 4;

/**
 * Represents custom blending.
 *
 * @type {number}
 * @constant
 */
const CustomBlending = 5;

/**
 * A `source + destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const AddEquation = 100;

/**
 * A `source - destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const SubtractEquation = 101;

/**
 * A `destination - source` blending equation.
 *
 * @type {number}
 * @constant
 */
const ReverseSubtractEquation = 102;

/**
 * A blend equation that uses the minimum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MinEquation = 103;

/**
 * A blend equation that uses the maximum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MaxEquation = 104;

/**
 * Multiplies all colors by `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroFactor = 200;

/**
 * Multiplies all colors by `1`.
 *
 * @type {number}
 * @constant
 */
const OneFactor = 201;

/**
 * Multiplies all colors by the source colors.
 *
 * @type {number}
 * @constant
 */
const SrcColorFactor = 202;

/**
 * Multiplies all colors by `1` minus each source color.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcColorFactor = 203;

/**
 * Multiplies all colors by the source alpha value.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaFactor = 204;

/**
 * Multiplies all colors by 1 minus the source alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcAlphaFactor = 205;

/**
 * Multiplies all colors by the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const DstAlphaFactor = 206;

/**
 * Multiplies all colors by `1` minus the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstAlphaFactor = 207;

/**
 * Multiplies all colors by the destination color.
 *
 * @type {number}
 * @constant
 */
const DstColorFactor = 208;

/**
 * Multiplies all colors by `1` minus each destination color.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstColorFactor = 209;

/**
 * Multiplies the RGB colors by the smaller of either the source alpha
 * value or the value of `1` minus the destination alpha value. The alpha
 * value is multiplied by `1`.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaSaturateFactor = 210;

/**
 * Multiplies all colors by a constant color.
 *
 * @type {number}
 * @constant
 */
const ConstantColorFactor = 211;

/**
 * Multiplies all colors by `1` minus a constant color.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantColorFactor = 212;

/**
 * Multiplies all colors by a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const ConstantAlphaFactor = 213;

/**
 * Multiplies all colors by 1 minus a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantAlphaFactor = 214;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverDepth = 0;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysDepth = 1;

/**
 * Pass if the incoming value is less than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessDepth = 2;

/**
 * Pass if the incoming value is less than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessEqualDepth = 3;

/**
 * Pass if the incoming value equals the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const EqualDepth = 4;

/**
 * Pass if the incoming value is greater than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualDepth = 5;

/**
 * Pass if the incoming value is greater than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterDepth = 6;

/**
 * Pass if the incoming value is not equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const NotEqualDepth = 7;

/**
 * Multiplies the environment map color with the surface color.
 *
 * @type {number}
 * @constant
 */
const MultiplyOperation = 0;

/**
 * Uses reflectivity to blend between the two colors.
 *
 * @type {number}
 * @constant
 */
const MixOperation = 1;

/**
 * Adds the two colors.
 *
 * @type {number}
 * @constant
 */
const AddOperation = 2;

/**
 * No tone mapping is applied.
 *
 * @type {number}
 * @constant
 */
const NoToneMapping = 0;

/**
 * Linear tone mapping.
 *
 * @type {number}
 * @constant
 */
const LinearToneMapping = 1;

/**
 * Reinhard tone mapping.
 *
 * @type {number}
 * @constant
 */
const ReinhardToneMapping = 2;

/**
 * Cineon tone mapping.
 *
 * @type {number}
 * @constant
 */
const CineonToneMapping = 3;

/**
 * ACES Filmic tone mapping.
 *
 * @type {number}
 * @constant
 */
const ACESFilmicToneMapping = 4;

/**
 * Custom tone mapping.
 *
 * Expects a custom implementation by modifying shader code of the material's fragment shader.
 *
 * @type {number}
 * @constant
 */
const CustomToneMapping = 5;

/**
 * AgX tone mapping.
 *
 * @type {number}
 * @constant
 */
const AgXToneMapping = 6;

/**
 * Neutral tone mapping.
 *
 * Implementation based on the Khronos 3D Commerce Group standard tone mapping.
 *
 * @type {number}
 * @constant
 */
const NeutralToneMapping = 7;

/**
 * The skinned mesh shares the same world space as the skeleton.
 *
 * @type {string}
 * @constant
 */
const AttachedBindMode = 'attached';

/**
 * The skinned mesh does not share the same world space as the skeleton.
 * This is useful when a skeleton is shared across multiple skinned meshes.
 *
 * @type {string}
 * @constant
 */
const DetachedBindMode = 'detached';

/**
 * Maps textures using the geometry's UV coordinates.
 *
 * @type {number}
 * @constant
 */
const UVMapping = 300;

/**
 * Reflection mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeReflectionMapping = 301;

/**
 * Refraction mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeRefractionMapping = 302;

/**
 * Reflection mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularReflectionMapping = 303;

/**
 * Refraction mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularRefractionMapping = 304;

/**
 * Reflection mapping for PMREM textures.
 *
 * @type {number}
 * @constant
 */
const CubeUVReflectionMapping = 306;

/**
 * The texture will simply repeat to infinity.
 *
 * @type {number}
 * @constant
 */
const RepeatWrapping = 1000;

/**
 * The last pixel of the texture stretches to the edge of the mesh.
 *
 * @type {number}
 * @constant
 */
const ClampToEdgeWrapping = 1001;

/**
 * The texture will repeats to infinity, mirroring on each repeat.
 *
 * @type {number}
 * @constant
 */
const MirroredRepeatWrapping = 1002;

/**
 * Returns the value of the texture element that is nearest (in Manhattan distance)
 * to the specified texture coordinates.
 *
 * @type {number}
 * @constant
 */
const NearestFilter = 1003;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the `NearestFilter` criterion (the texel nearest to the center of the pixel)
 * to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the `NearestFilter` criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005; // legacy

/**
 * Returns the weighted average of the four texture elements that are closest to the specified
 * texture coordinates, and can include items wrapped or repeated from other parts of a texture,
 * depending on the values of `wrapS` and `wrapT`, and on the exact mapping.
 *
 * @type {number}
 * @constant
 */
const LinearFilter = 1006;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured and uses
 * the `LinearFilter` criterion (a weighted average of the four texels that are closest to the
 * center of the pixel) to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and uses
 * the `LinearFilter` criterion to produce a texture value from each mipmap. The final texture value
 * is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008; // legacy

/**
 * An unsigned byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedByteType = 1009;

/**
 * A byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const ByteType = 1010;

/**
 * A short data type for textures.
 *
 * @type {number}
 * @constant
 */
const ShortType = 1011;

/**
 * An unsigned short data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShortType = 1012;

/**
 * An int data type for textures.
 *
 * @type {number}
 * @constant
 */
const IntType = 1013;

/**
 * An unsigned int data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedIntType = 1014;

/**
 * A float data type for textures.
 *
 * @type {number}
 * @constant
 */
const FloatType = 1015;

/**
 * A half float data type for textures.
 *
 * @type {number}
 * @constant
 */
const HalfFloatType = 1016;

/**
 * An unsigned short 4_4_4_4 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort4444Type = 1017;

/**
 * An unsigned short 5_5_5_1 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort5551Type = 1018;

/**
 * An unsigned int 24_8 data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt248Type = 1020;

/**
 * An unsigned int 5_9_9_9 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt5999Type = 35902;

/**
 * An unsigned int 10_11_11 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt101111Type = 35899;

/**
 * Discards the red, green and blue components and reads just the alpha component.
 *
 * @type {number}
 * @constant
 */
const AlphaFormat = 1021;

/**
 * Discards the alpha component and reads the red, green and blue component.
 *
 * @type {number}
 * @constant
 */
const RGBFormat = 1022;

/**
 * Reads the red, green, blue and alpha components.
 *
 * @type {number}
 * @constant
 */
const RGBAFormat = 1023;

/**
 * Reads each element as a single depth value, converts it to floating point, and clamps to the range `[0,1]`.
 *
 * @type {number}
 * @constant
 */
const DepthFormat = 1026;

/**
 * Reads each element is a pair of depth and stencil values. The depth component of the pair is interpreted as
 * in `DepthFormat`. The stencil component is interpreted based on the depth + stencil internal format.
 *
 * @type {number}
 * @constant
 */
const DepthStencilFormat = 1027;

/**
 * Discards the green, blue and alpha components and reads just the red component.
 *
 * @type {number}
 * @constant
 */
const RedFormat = 1028;

/**
 * Discards the green, blue and alpha components and reads just the red component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RedIntegerFormat = 1029;

/**
 * Discards the alpha, and blue components and reads the red, and green components.
 *
 * @type {number}
 * @constant
 */
const RGFormat = 1030;

/**
 * Discards the alpha, and blue components and reads the red, and green components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGIntegerFormat = 1031;

/**
 * Discards the alpha component and reads the red, green and blue component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBIntegerFormat = 1032;

/**
 * Reads the red, green, blue and alpha components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBAIntegerFormat = 1033;

/**
 * A DXT1-compressed image in an RGB image format.
 *
 * @type {number}
 * @constant
 */
const RGB_S3TC_DXT1_Format = 33776;

/**
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT1_Format = 33777;

/**
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT3_Format = 33778;

/**
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3
 * compression in how the alpha compression is done.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT5_Format = 33779;

/**
 * PVRTC RGB compression in 4-bit mode. One block for each 4Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_4BPPV1_Format = 35840;

/**
 * PVRTC RGB compression in 2-bit mode. One block for each 8Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_2BPPV1_Format = 35841;

/**
 * PVRTC RGBA compression in 4-bit mode. One block for each 4Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_4BPPV1_Format = 35842;

/**
 * PVRTC RGBA compression in 2-bit mode. One block for each 8Ã—4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_2BPPV1_Format = 35843;

/**
 * ETC1 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC1_Format = 36196;

/**
 * ETC2 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC2_Format = 37492;

/**
 * ETC2 RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ETC2_EAC_Format = 37496;

/**
 * ASTC RGBA 4x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_4x4_Format = 37808;

/**
 * ASTC RGBA 5x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x4_Format = 37809;

/**
 * ASTC RGBA 5x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x5_Format = 37810;

/**
 * ASTC RGBA 6x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x5_Format = 37811;

/**
 * ASTC RGBA 6x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x6_Format = 37812;

/**
 * ASTC RGBA 8x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x5_Format = 37813;

/**
 * ASTC RGBA 8x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x6_Format = 37814;

/**
 * ASTC RGBA 8x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x8_Format = 37815;

/**
 * ASTC RGBA 10x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x5_Format = 37816;

/**
 * ASTC RGBA 10x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x6_Format = 37817;

/**
 * ASTC RGBA 10x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x8_Format = 37818;

/**
 * ASTC RGBA 10x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x10_Format = 37819;

/**
 * ASTC RGBA 12x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x10_Format = 37820;

/**
 * ASTC RGBA 12x12 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x12_Format = 37821;

/**
 * BPTC RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_BPTC_Format = 36492;

/**
 * BPTC Signed RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_SIGNED_Format = 36494;

/**
 * BPTC Unsigned RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_UNSIGNED_Format = 36495;

/**
 * RGTC1 Red format.
 *
 * @type {number}
 * @constant
 */
const RED_RGTC1_Format = 36283;

/**
 * RGTC1 Signed Red format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_RGTC1_Format = 36284;

/**
 * RGTC2 Red Green format.
 *
 * @type {number}
 * @constant
 */
const RED_GREEN_RGTC2_Format = 36285;

/**
 * RGTC2 Signed Red Green format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_GREEN_RGTC2_Format = 36286;

/**
 * Animations are played once.
 *
 * @type {number}
 * @constant
 */
const LoopOnce = 2200;

/**
 * Animations are played with a chosen number of repetitions, each time jumping from
 * the end of the clip directly to its beginning.
 *
 * @type {number}
 * @constant
 */
const LoopRepeat = 2201;

/**
 * Animations are played with a chosen number of repetitions, alternately playing forward
 * and backward.
 *
 * @type {number}
 * @constant
 */
const LoopPingPong = 2202;

/**
 * Discrete interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateDiscrete = 2300;

/**
 * Linear interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateLinear = 2301;

/**
 * Smooth interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateSmooth = 2302;

/**
 * Zero curvature ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroCurvatureEnding = 2400;

/**
 * Zero slope ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroSlopeEnding = 2401;

/**
 * Wrap around ending for animations.
 *
 * @type {number}
 * @constant
 */
const WrapAroundEnding = 2402;

/**
 * Default animation blend mode.
 *
 * @type {number}
 * @constant
 */
const NormalAnimationBlendMode = 2500;

/**
 * Additive animation blend mode. Can be used to layer motions on top of
 * each other to build complex performances from smaller re-usable assets.
 *
 * @type {number}
 * @constant
 */
const AdditiveAnimationBlendMode = 2501;

/**
 * For every three vertices draw a single triangle.
 *
 * @type {number}
 * @constant
 */
const TrianglesDrawMode = 0;

/**
 * For each vertex draw a triangle from the last three vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleStripDrawMode = 1;

/**
 * For each vertex draw a triangle from the first vertex and the last two vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleFanDrawMode = 2;

/**
 * Basic depth packing.
 *
 * @type {number}
 * @constant
 */
const BasicDepthPacking = 3200;

/**
 * A depth value is packed into 32 bit RGBA.
 *
 * @type {number}
 * @constant
 */
const RGBADepthPacking = 3201;

/**
 * A depth value is packed into 24 bit RGB.
 *
 * @type {number}
 * @constant
 */
const RGBDepthPacking = 3202;

/**
 * A depth value is packed into 16 bit RG.
 *
 * @type {number}
 * @constant
 */
const RGDepthPacking = 3203;

/**
 * Normal information is relative to the underlying surface.
 *
 * @type {number}
 * @constant
 */
const TangentSpaceNormalMap = 0;

/**
 * Normal information is relative to the object orientation.
 *
 * @type {number}
 * @constant
 */
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.

/**
 * No color space.
 *
 * @type {string}
 * @constant
 */
const NoColorSpace = '';

/**
 * sRGB color space.
 *
 * @type {string}
 * @constant
 */
const SRGBColorSpace = 'srgb';

/**
 * sRGB-linear color space.
 *
 * @type {string}
 * @constant
 */
const LinearSRGBColorSpace = 'srgb-linear';

/**
 * Linear transfer function.
 *
 * @type {string}
 * @constant
 */
const LinearTransfer = 'linear';

/**
 * sRGB transfer function.
 *
 * @type {string}
 * @constant
 */
const SRGBTransfer = 'srgb';

/**
 * Sets the stencil buffer value to `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroStencilOp = 0;

/**
 * Keeps the current value.
 *
 * @type {number}
 * @constant
 */
const KeepStencilOp = 7680;

/**
 * Sets the stencil buffer value to the specified reference value.
 *
 * @type {number}
 * @constant
 */
const ReplaceStencilOp = 7681;

/**
 * Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementStencilOp = 7682;

/**
 * Decrements the current stencil buffer value. Clamps to `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementStencilOp = 7683;

/**
 * Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing
 * the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementWrapStencilOp = 34055;

/**
 * Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable
 * unsigned value when decrementing a stencil buffer value of `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementWrapStencilOp = 34056;

/**
 * Inverts the current stencil buffer value bitwise.
 *
 * @type {number}
 * @constant
 */
const InvertStencilOp = 5386;

/**
 * Will never return true.
 *
 * @type {number}
 * @constant
 */
const NeverStencilFunc = 512;

/**
 * Will return true if the stencil reference value is less than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessStencilFunc = 513;

/**
 * Will return true if the stencil reference value is equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const EqualStencilFunc = 514;

/**
 * Will return true if the stencil reference value is less than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessEqualStencilFunc = 515;

/**
 * Will return true if the stencil reference value is greater than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterStencilFunc = 516;

/**
 * Will return true if the stencil reference value is not equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const NotEqualStencilFunc = 517;

/**
 * Will return true if the stencil reference value is greater than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualStencilFunc = 518;

/**
 * Will always return true.
 *
 * @type {number}
 * @constant
 */
const AlwaysStencilFunc = 519;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverCompare = 512;

/**
 * Pass if the incoming value is less than the texture value.
 *
 * @type {number}
 * @constant
 */
const LessCompare = 513;

/**
 * Pass if the incoming value equals the texture value.
 *
 * @type {number}
 * @constant
 */
const EqualCompare = 514;

/**
 * Pass if the incoming value is less than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const LessEqualCompare = 515;

/**
 * Pass if the incoming value is greater than the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterCompare = 516;

/**
 * Pass if the incoming value is not equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const NotEqualCompare = 517;

/**
 * Pass if the incoming value is greater than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualCompare = 518;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysCompare = 519;

/**
 * The contents are intended to be specified once by the application, and used many
 * times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticDrawUsage = 35044;

/**
 * The contents are intended to be respecified repeatedly by the application, and
 * used many times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicDrawUsage = 35048;

/**
 * The contents are intended to be specified once by the application, and used at most
 * a few times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamDrawUsage = 35040;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const StaticReadUsage = 35045;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const DynamicReadUsage = 35049;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried at most
 * a few times by the application
 *
 * @type {number}
 * @constant
 */
const StreamReadUsage = 35041;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used many times as
 * the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticCopyUsage = 35046;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and used many times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicCopyUsage = 35050;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used at most a few times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamCopyUsage = 35042;

/**
 * GLSL 1 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL1 = '100';

/**
 * GLSL 3 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL3 = '300 es';

/**
 * WebGL coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGLCoordinateSystem = 2000;

/**
 * WebGPU coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGPUCoordinateSystem = 2001;

/**
 * Represents the different timestamp query types.
 *
 * @type {ConstantsTimestampQuery}
 * @constant
 */
const TimestampQuery = {
	COMPUTE: 'compute',
	RENDER: 'render'
};

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsInterpolationSamplingType}
 * @constant
 */
const InterpolationSamplingType = {
	PERSPECTIVE: 'perspective',
	LINEAR: 'linear',
	FLAT: 'flat'
};

/**
 * Represents the different interpolation sampling modes.
 *
 * @type {ConstantsInterpolationSamplingMode}
 * @constant
 */
const InterpolationSamplingMode = {
	NORMAL: 'normal',
	CENTROID: 'centroid',
	SAMPLE: 'sample',
	FIRST: 'first',
	EITHER: 'either'
};

/**
 * This type represents mouse buttons and interaction types in context of controls.
 *
 * @typedef {Object} ConstantsMouse
 * @property {number} MIDDLE - The left mouse button.
 * @property {number} LEFT - The middle mouse button.
 * @property {number} RIGHT - The right mouse button.
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} DOLLY - A dolly interaction.
 * @property {number} PAN - A pan interaction.
 **/

/**
 * This type represents touch interaction types in context of controls.
 *
 * @typedef {Object} ConstantsTouch
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} PAN - A pan interaction.
 * @property {number} DOLLY_PAN - The dolly-pan interaction.
 * @property {number} DOLLY_ROTATE - A dolly-rotate interaction.
 **/

/**
 * This type represents the different timestamp query types.
 *
 * @typedef {Object} ConstantsTimestampQuery
 * @property {string} COMPUTE - A `compute` timestamp query.
 * @property {string} RENDER - A `render` timestamp query.
 **/

/**
 * Represents the different interpolation sampling types.
 *
 * @typedef {Object} ConstantsInterpolationSamplingType
 * @property {string} PERSPECTIVE - Perspective-correct interpolation.
 * @property {string} LINEAR - Linear interpolation.
 * @property {string} FLAT - Flat interpolation.
 */

/**
 * Represents the different interpolation sampling modes.
 *
 * @typedef {Object} ConstantsInterpolationSamplingMode
 * @property {string} NORMAL - Normal sampling mode.
 * @property {string} CENTROID - Centroid sampling mode.
 * @property {string} SAMPLE - Sample-specific sampling mode.
 * @property {string} FIRST - Flat interpolation using the first vertex.
 * @property {string} EITHER - Flat interpolation using either vertex.
 */

/**
 * This modules allows to dispatch event objects on custom JavaScript objects.
 *
 * Main repository: [eventdispatcher.js]{@link https://github.com/mrdoob/eventdispatcher.js/}
 *
 * Code Example:
 * ```js
 * class Car extends EventDispatcher {
 * 	start() {
 *		this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
 *	}
 *};
 *
 * // Using events with the custom object
 * const car = new Car();
 * car.addEventListener( 'start', function ( event ) {
 * 	alert( event.message );
 * } );
 *
 * car.start();
 * ```
 */
class EventDispatcher {

	/**
	 * Adds the given event listener to the given event type.
	 *
	 * @param {string} type - The type of event to listen to.
	 * @param {Function} listener - The function that gets called when the event is fired.
	 */
	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === -1 ) {

			listeners[ type ].push( listener );

		}

	}

	/**
	 * Returns `true` if the given event listener has been added to the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to check.
	 * @return {boolean} Whether the given event listener has been added to the given event type.
	 */
	hasEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return false;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== -1;

	}

	/**
	 * Removes the given event listener from the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to remove.
	 */
	removeEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== -1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	/**
	 * Dispatches an event object.
	 *
	 * @param {Object} event - The event that gets fired.
	 */
	dispatchEvent( event ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

/**
 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
 * (universally unique identifier).
 *
 * @return {string} The UUID.
 */
function generateUUID() {

	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

/**
 * Clamps the given value between min and max.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The min value.
 * @param {number} max - The max value.
 * @return {number} The clamped value.
 */
function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

/**
 * Computes the Euclidean modulo of the given parameters that
 * is `( ( n % m ) + m ) % m`.
 *
 * @param {number} n - The first parameter.
 * @param {number} m - The second parameter.
 * @return {number} The Euclidean modulo.
 */
function euclideanModulo( n, m ) {

	// https://en.wikipedia.org/wiki/Modulo_operation

	return ( ( n % m ) + m ) % m;

}

/**
 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
 * for the given value.
 *
 * @param {number} x - The value to be mapped.
 * @param {number} a1 - Minimum value for range A.
 * @param {number} a2 - Maximum value for range A.
 * @param {number} b1 - Minimum value for range B.
 * @param {number} b2 - Maximum value for range B.
 * @return {number} The mapped value.
 */
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

/**
 * Returns the percentage in the closed interval `[0, 1]` of the given value
 * between the start and end point.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} value - A value between start and end.
 * @return {number} The interpolation factor.
 */
function inverseLerp( x, y, value ) {

	// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

/**
 * Returns a value linearly interpolated from two known points based on the given interval -
 * `t = 0` will return `x` and `t = 1` will return `y`.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
 * @return {number} The interpolated value.
 */
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

/**
 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
 * time to maintain frame rate independent movement. For details, see
 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
 *
 * @param {number} x - The current point.
 * @param {number} y - The target point.
 * @param {number} lambda - A higher lambda value will make the movement more sudden,
 * and a lower value will make the movement more gradual.
 * @param {number} dt - Delta time in seconds.
 * @return {number} The interpolated value.
 */
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

/**
 * Returns a value that alternates between `0` and the given `length` parameter.
 *
 * @param {number} x - The value to pingpong.
 * @param {number} [length=1] - The positive value the function will pingpong to.
 * @return {number} The alternated value.
 */
function pingpong( x, length = 1 ) {

	// https://www.desmos.com/calculator/vcsjnyz7x4

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

/**
 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
 * the `min` and `max`.
 *
 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

/**
 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

/**
 * Returns a random integer from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random integer.
 */
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

/**
 * Returns a random float from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random float.
 */
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

/**
 * Returns a random integer from `<-range/2, range/2>` interval.
 *
 * @param {number} range - Defines the value range.
 * @return {number} A random float.
 */
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

/**
 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
 *
 * @param {number} [s] - The integer seed.
 * @return {number} A random float.
 */
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

/**
 * Converts degrees to radians.
 *
 * @param {number} degrees - A value in degrees.
 * @return {number} The converted value in radians.
 */
function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

/**
 * Converts radians to degrees.
 *
 * @param {number} radians - A value in radians.
 * @return {number} The converted value in degrees.
 */
function radToDeg( radians ) {

	return radians * RAD2DEG;

}

/**
 * Returns `true` if the given number is a power of two.
 *
 * @param {number} value - The value to check.
 * @return {boolean} Whether the given number is a power of two or not.
 */
function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

/**
 * Returns the smallest power of two that is greater than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The smallest power of two that is greater than or equal to the given number.
 */
function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

/**
 * Returns the largest power of two that is less than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The largest power of two that is less than or equal to the given number.
 */
function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

/**
 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
 * defined by the given angles and order.
 *
 * Rotations are applied to the axes in the order specified by order:
 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
 *
 * @param {Quaternion} q - The quaternion to set.
 * @param {number} a - The rotation applied to the first axis, in radians.
 * @param {number} b - The rotation applied to the second axis, in radians.
 * @param {number} c - The rotation applied to the third axis, in radians.
 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
 */
function setQuaternionFromProperEuler( q, a, b, c, order ) {

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

/**
 * Denormalizes the given value according to the given typed array.
 *
 * @param {number} value - The value to denormalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The denormalize (float) value in the range `[0,1]`.
 */
function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, -1 );

		case Int16Array:

			return Math.max( value / 32767.0, -1 );

		case Int8Array:

			return Math.max( value / 127.0, -1 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * Normalizes the given value according to the given typed array.
 *
 * @param {number} value - The float value in the range `[0,1]` to normalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The normalize value.
 */
function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * @class
 * @classdesc A collection of math utility functions.
 * @hideconstructor
 */
const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	/**
	 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
	 * (universally unique identifier).
	 *
	 * @static
	 * @method
	 * @return {string} The UUID.
	 */
	generateUUID: generateUUID,
	/**
	 * Clamps the given value between min and max.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to clamp.
	 * @param {number} min - The min value.
	 * @param {number} max - The max value.
	 * @return {number} The clamped value.
	 */
	clamp: clamp,
	/**
	 * Computes the Euclidean modulo of the given parameters that
	 * is `( ( n % m ) + m ) % m`.
	 *
	 * @static
	 * @method
	 * @param {number} n - The first parameter.
	 * @param {number} m - The second parameter.
	 * @return {number} The Euclidean modulo.
	 */
	euclideanModulo: euclideanModulo,
	/**
	 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
	 * for the given value.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to be mapped.
	 * @param {number} a1 - Minimum value for range A.
	 * @param {number} a2 - Maximum value for range A.
	 * @param {number} b1 - Minimum value for range B.
	 * @param {number} b2 - Maximum value for range B.
	 * @return {number} The mapped value.
	 */
	mapLinear: mapLinear,
	/**
	 * Returns the percentage in the closed interval `[0, 1]` of the given value
	 * between the start and end point.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} value - A value between start and end.
	 * @return {number} The interpolation factor.
	 */
	inverseLerp: inverseLerp,
	/**
	 * Returns a value linearly interpolated from two known points based on the given interval -
	 * `t = 0` will return `x` and `t = 1` will return `y`.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {number} The interpolated value.
	 */
	lerp: lerp,
	/**
	 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
	 * time to maintain frame rate independent movement. For details, see
	 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
	 *
	 * @static
	 * @method
	 * @param {number} x - The current point.
	 * @param {number} y - The target point.
	 * @param {number} lambda - A higher lambda value will make the movement more sudden,
	 * and a lower value will make the movement more gradual.
	 * @param {number} dt - Delta time in seconds.
	 * @return {number} The interpolated value.
	 */
	damp: damp,
	/**
	 * Returns a value that alternates between `0` and the given `length` parameter.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to pingpong.
	 * @param {number} [length=1] - The positive value the function will pingpong to.
	 * @return {number} The alternated value.
	 */
	pingpong: pingpong,
	/**
	 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
	 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
	 * the `min` and `max`.
	 *
	 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smoothstep: smoothstep,
	/**
	 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
	 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smootherstep: smootherstep,
	/**
	 * Returns a random integer from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random integer.
	 */
	randInt: randInt,
	/**
	 * Returns a random float from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random float.
	 */
	randFloat: randFloat,
	/**
	 * Returns a random integer from `<-range/2, range/2>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} range - Defines the value range.
	 * @return {number} A random float.
	 */
	randFloatSpread: randFloatSpread,
	/**
	 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
	 *
	 * @static
	 * @method
	 * @param {number} [s] - The integer seed.
	 * @return {number} A random float.
	 */
	seededRandom: seededRandom,
	/**
	 * Converts degrees to radians.
	 *
	 * @static
	 * @method
	 * @param {number} degrees - A value in degrees.
	 * @return {number} The converted value in radians.
	 */
	degToRad: degToRad,
	/**
	 * Converts radians to degrees.
	 *
	 * @static
	 * @method
	 * @param {number} radians - A value in radians.
	 * @return {number} The converted value in degrees.
	 */
	radToDeg: radToDeg,
	/**
	 * Returns `true` if the given number is a power of two.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to check.
	 * @return {boolean} Whether the given number is a power of two or not.
	 */
	isPowerOfTwo: isPowerOfTwo,
	/**
	 * Returns the smallest power of two that is greater than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The smallest power of two that is greater than or equal to the given number.
	 */
	ceilPowerOfTwo: ceilPowerOfTwo,
	/**
	 * Returns the largest power of two that is less than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The largest power of two that is less than or equal to the given number.
	 */
	floorPowerOfTwo: floorPowerOfTwo,
	/**
	 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
	 * defined by the given angles and order.
	 *
	 * Rotations are applied to the axes in the order specified by order:
	 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
	 *
	 * @static
	 * @method
	 * @param {Quaternion} q - The quaternion to set.
	 * @param {number} a - The rotation applied to the first axis, in radians.
	 * @param {number} b - The rotation applied to the second axis, in radians.
	 * @param {number} c - The rotation applied to the third axis, in radians.
	 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
	 */
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	/**
	 * Normalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The float value in the range `[0,1]` to normalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The normalize value.
	 */
	normalize: normalize,
	/**
	 * Denormalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to denormalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The denormalize (float) value in the range `[0,1]`.
	 */
	denormalize: denormalize
};

/**
 * Class representing a 2D vector. A 2D vector is an ordered pair of numbers
 * (labeled x and y), which can be used to represent a number of things, such as:
 *
 * - A point in 2D space (i.e. a position on a plane).
 * - A direction and length across a plane. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0)` to `(x, y)`
 * and the direction is also measured from `(0, 0)` towards `(x, y)`.
 * - Any arbitrary ordered pair of numbers.
 *
 * There are other things a 2D vector can be used to represent, such as
 * momentum vectors, complex numbers and so on, however these are the most
 * common uses in three.js.
 *
 * Iterating through a vector instance will yield its components `(x, y)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector2( 0, 1 );
 *
 * //no arguments; will be initialised to (0, 0)
 * const b = new THREE.Vector2( );
 *
 * const d = a.distanceTo( b );
 * ```
 */
class Vector2 {

	/**
	 * Constructs a new 2D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 */
	constructor( x = 0, y = 0 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector2.prototype.isVector2 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

	}

	/**
	 * Alias for {@link Vector2#x}.
	 *
	 * @type {number}
	 */
	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	/**
	 * Alias for {@link Vector2#y}.
	 *
	 * @type {number}
	 */
	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @return {Vector2} A reference to this vector.
	 */
	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector2} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @param {number} value - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector2} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to copy.
	 * @return {Vector2} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to add.
	 * @return {Vector2} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector2} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector2} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector2} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector2} v - The vector to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector2} v - The vector to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * Multiplies this vector (with an implicit 1 as the 3rd component) by
	 * the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to apply.
	 * @return {Vector2} A reference to this vector.
	 */
	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the given vector's x or y
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is less than the given vector's x or y
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the max vector's x or y
	 * value, it is replaced by the corresponding value.
	 * If this vector's x or y value is less than the min vector's x or y value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector2} min - The minimum x and y values.
	 * @param {Vector2} max - The maximum x and y values in the desired range.
	 * @return {Vector2} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );

		return this;

	}

	/**
	 * If this vector's x or y values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x or y values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x and y = -y.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	/**
	 * Calculates the cross product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the cross product with.
	 * @return {number} The result of the cross product.
	 */
	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Computes the angle in radians of this vector with respect to the positive x-axis.
	 *
	 * @return {number} The angle in radians.
	 */
	angle() {

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	/**
	 * Returns the angle between the given vector and this instance in radians.
	 *
	 * @param {Vector2} v - The vector to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	/**
	 * Computes the distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	/**
	 * Computes the squared distance from the given vector to this instance.
	 * If you are just comparing the distance with another distance, you should compare
	 * the distance squared instead as it is slightly more efficient to calculate.
	 *
	 * @param {Vector2} v - The vector to compute the squared distance to.
	 * @return {number} The squared distance.
	 */
	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	/**
	 * Computes the Manhattan distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the Manhattan distance to.
	 * @return {number} The Manhattan distance.
	 */
	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector2} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector2} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector2} v1 - The first vector.
	 * @param {Vector2} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector2} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]` and y
	 * value to be `array[ offset + 1 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector2} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector2} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	/**
	 * Rotates this vector around the given center by the given angle.
	 *
	 * @param {Vector2} center - The point around which to rotate.
	 * @param {number} angle - The angle to rotate, in radians.
	 * @return {Vector2} A reference to this vector.
	 */
	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

/**
 * Class for representing a Quaternion. Quaternions are used in three.js to represent rotations.
 *
 * Iterating through a vector instance will yield its components `(x, y, z, w)` in
 * the corresponding order.
 *
 * Note that three.js expects Quaternions to be normalized.
 * ```js
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 *
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 * ```
 */
class Quaternion {

	/**
	 * Constructs a new quaternion.
	 *
	 * @param {number} [x=0] - The x value of this quaternion.
	 * @param {number} [y=0] - The y value of this quaternion.
	 * @param {number} [z=0] - The z value of this quaternion.
	 * @param {number} [w=1] - The w value of this quaternion.
	 */
	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	/**
	 * Interpolates between two quaternions via SLERP. This implementation assumes the
	 * quaternion data are managed  in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @param {number} t - The interpolation factor in the range `[0,1]`.
	 * @see {@link Quaternion#slerp}
	 */
	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : -1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	/**
	 * Multiplies two quaternions. This implementation assumes the quaternion data are managed
	 * in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @return {Array<number>} The destination array.
	 * @see {@link Quaternion#multiplyQuaternions}.
	 */
	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	/**
	 * The x value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	/**
	 * The y value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	/**
	 * The z value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	/**
	 * The w value of this quaternion.
	 *
	 * @type {number}
	 * @default 1
	 */
	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	/**
	 * Sets the quaternion components.
	 *
	 * @param {number} x - The x value of this quaternion.
	 * @param {number} y - The y value of this quaternion.
	 * @param {number} z - The z value of this quaternion.
	 * @param {number} w - The w value of this quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Returns a new quaternion with copied values from this instance.
	 *
	 * @return {Quaternion} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	/**
	 * Copies the values of the given quaternion to this instance.
	 *
	 * @param {Quaternion} quaternion - The quaternion to copy.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the rotation specified by the given
	 * Euler angles.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the given axis and angle.
	 *
	 * @param {Vector3} axis - The normalized axis.
	 * @param {number} angle - The angle in radians.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the given rotation matrix.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion to the rotation required to rotate the direction vector
	 * `vFrom` to the direction vector `vTo`.
	 *
	 * @param {Vector3} vFrom - The first (normalized) direction vector.
	 * @param {Vector3} vTo - The second (normalized) direction vector.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < 1e-8 ) { // the epsilon value has been discussed in #31286

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	/**
	 * Returns the angle between this quaternion and the given one in radians.
	 *
	 * @param {Quaternion} q - The quaternion to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), -1, 1 ) ) );

	}

	/**
	 * Rotates this quaternion by a given angular step to the given quaternion.
	 * The method ensures that the final quaternion will not overshoot `q`.
	 *
	 * @param {Quaternion} q - The target quaternion.
	 * @param {number} step - The angular step in radians.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	/**
	 * Sets this quaternion to the identity quaternion; that is, to the
	 * quaternion that represents "no rotation".
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	/**
	 * Inverts this quaternion via {@link Quaternion#conjugate}. The
	 * quaternion is assumed to have unit length.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	invert() {

		return this.conjugate();

	}

	/**
	 * Returns the rotational conjugate of this quaternion. The conjugate of a
	 * quaternion represents the same rotation in the opposite direction about
	 * the rotational axis.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	conjugate() {

		this._x *= -1;
		this._y *= -1;
		this._z *= -1;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Calculates the dot product of this quaternion and the given one.
	 *
	 * @param {Quaternion} v - The quaternion to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	/**
	 * Computes the squared Euclidean length (straight-line length) of this quaternion,
	 * considered as a 4 dimensional vector. This can be useful if you are comparing the
	 * lengths of two quaternions, as this is a slightly more efficient calculation than
	 * {@link Quaternion#length}.
	 *
	 * @return {number} The squared Euclidean length.
	 */
	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	/**
	 * Computes the Euclidean length (straight-line length) of this quaternion,
	 * considered as a 4 dimensional vector.
	 *
	 * @return {number} The Euclidean length.
	 */
	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	/**
	 * Normalizes this quaternion - that is, calculated the quaternion that performs
	 * the same rotation as this one, but has a length equal to `1`.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	/**
	 * Multiplies this quaternion by the given one.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	/**
	 * Pre-multiplies this quaternion by the given one.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	/**
	 * Multiplies the given quaternions and stores the result in this instance.
	 *
	 * @param {Quaternion} a - The first quaternion.
	 * @param {Quaternion} b - The second quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Performs a spherical linear interpolation between quaternions.
	 *
	 * @param {Quaternion} qb - The target quaternion.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	/**
	 * Performs a spherical linear interpolation between the given quaternions
	 * and stores the result in this quaternion.
	 *
	 * @param {Quaternion} qa - The source quaternion.
	 * @param {Quaternion} qb - The target quaternion.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	/**
	 * Sets this quaternion to a uniformly random, normalized quaternion.
	 *
	 * @return {Quaternion} A reference to this quaternion.
	 */
	random() {

		// Ken Shoemake
		// Uniform random rotations
		// D. Kirk, editor, Graphics Gems III, pages 124-132. Academic Press, New York, 1992.

		const theta1 = 2 * Math.PI * Math.random();
		const theta2 = 2 * Math.PI * Math.random();

		const x0 = Math.random();
		const r1 = Math.sqrt( 1 - x0 );
		const r2 = Math.sqrt( x0 );

		return this.set(
			r1 * Math.sin( theta1 ),
			r1 * Math.cos( theta1 ),
			r2 * Math.sin( theta2 ),
			r2 * Math.cos( theta2 ),
		);

	}

	/**
	 * Returns `true` if this quaternion is equal with the given one.
	 *
	 * @param {Quaternion} quaternion - The quaternion to test for equality.
	 * @return {boolean} Whether this quaternion is equal with the given one.
	 */
	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	/**
	 * Sets this quaternion's components from the given array.
	 *
	 * @param {Array<number>} array - An array holding the quaternion component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	/**
	 * Writes the components of this quaternion to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The quaternion components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	/**
	 * Sets the components of this quaternion from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
	 * @param {number} index - The index into the attribute.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	/**
	 * This methods defines the serialization result of this class. Returns the
	 * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
	 *
	 * @return {Array<number>} The serialized quaternion.
	 */
	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

/**
 * Class representing a 3D vector. A 3D vector is an ordered triplet of numbers
 * (labeled x, y and z), which can be used to represent a number of things, such as:
 *
 * - A point in 3D space.
 * - A direction and length in 3D space. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0, 0)` to `(x, y, z)`
 * and the direction is also measured from `(0, 0, 0)` towards `(x, y, z)`.
 * - Any arbitrary ordered triplet of numbers.
 *
 * There are other things a 3D vector can be used to represent, such as
 * momentum vectors and so on, however these are the most
 * common uses in three.js.
 *
 * Iterating through a vector instance will yield its components `(x, y, z)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector3( 0, 1, 0 );
 *
 * //no arguments; will be initialised to (0, 0, 0)
 * const b = new THREE.Vector3( );
 *
 * const d = a.distanceTo( b );
 * ```
 */
class Vector3 {

	/**
	 * Constructs a new 3D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 * @param {number} [z=0] - The z value of this vector.
	 */
	constructor( x = 0, y = 0, z = 0 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector3.prototype.isVector3 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

		/**
		 * The z value of this vector.
		 *
		 * @type {number}
		 */
		this.z = z;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @param {number} z - The value of the z component.
	 * @return {Vector3} A reference to this vector.
	 */
	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector3} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Sets the vector's z component to the given value
	 *
	 * @param {number} z - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setZ( z ) {

		this.z = z;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
	 * @param {number} value - The value to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector3} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to copy.
	 * @return {Vector3} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to add.
	 * @return {Vector3} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector3} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector3|Vector4} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector3} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector3} v - The vector to subtract.
	 * @return {Vector3} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector3} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to multiply.
	 * @return {Vector3} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector3} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	/**
	 * Multiplies the given vectors and stores the result in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	/**
	 * Applies the given Euler rotation to this vector.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @return {Vector3} A reference to this vector.
	 */
	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	/**
	 * Applies a rotation specified by an axis and an angle to this vector.
	 *
	 * @param {Vector3} axis - A normalized vector representing the rotation axis.
	 * @param {number} angle - The angle in radians.
	 * @return {Vector3} A reference to this vector.
	 */
	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	/**
	 * Multiplies this vector with the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	/**
	 * Multiplies this vector by the given normal matrix and normalizes
	 * the result.
	 *
	 * @param {Matrix3} m - The normal matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	/**
	 * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
	 * divides by perspective.
	 *
	 * @param {Matrix4} m - The matrix to apply.
	 * @return {Vector3} A reference to this vector.
	 */
	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	/**
	 * Applies the given Quaternion to this vector.
	 *
	 * @param {Quaternion} q - The Quaternion.
	 * @return {Vector3} A reference to this vector.
	 */
	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	/**
	 * Projects this vector from world space into the camera's normalized
	 * device coordinate (NDC) space.
	 *
	 * @param {Camera} camera - The camera.
	 * @return {Vector3} A reference to this vector.
	 */
	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	/**
	 * Unprojects this vector from the camera's normalized device coordinate (NDC)
	 * space into world space.
	 *
	 * @param {Camera} camera - The camera.
	 * @return {Vector3} A reference to this vector.
	 */
	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	/**
	 * Transforms the direction of this vector by a matrix (the upper left 3 x 3
	 * subset of the given 4x4 matrix and then normalizes the result.
	 *
	 * @param {Matrix4} m - The matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector3} v - The vector to divide.
	 * @return {Vector3} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector3} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * If this vector's x, y or z value is greater than the given vector's x, y or z
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector3} v - The vector.
	 * @return {Vector3} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	/**
	 * If this vector's x, y or z value is less than the given vector's x, y or z
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector3} v - The vector.
	 * @return {Vector3} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	/**
	 * If this vector's x, y or z value is greater than the max vector's x, y or z
	 * value, it is replaced by the corresponding value.
	 * If this vector's x, y or z value is less than the min vector's x, y or z value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector3} min - The minimum x, y and z values.
	 * @param {Vector3} max - The maximum x, y and z values in the desired range.
	 * @return {Vector3} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );
		this.z = clamp( this.z, min.z, max.z );

		return this;

	}

	/**
	 * If this vector's x, y or z values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x, y or z values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector3} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );
		this.z = clamp( this.z, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector3} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector3} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector3} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector3} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector3} v1 - The first vector.
	 * @param {Vector3} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector3} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	/**
	 * Calculates the cross product of the given vector with this instance.
	 *
	 * @param {Vector3} v - The vector to compute the cross product with.
	 * @return {Vector3} The result of the cross product.
	 */
	cross( v ) {

		return this.crossVectors( this, v );

	}

	/**
	 * Calculates the cross product of the given vectors and stores the result
	 * in this instance.
	 *
	 * @param {Vector3} a - The first vector.
	 * @param {Vector3} b - The second vector.
	 * @return {Vector3} A reference to this vector.
	 */
	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	/**
	 * Projects this vector onto the given one.
	 *
	 * @param {Vector3} v - The vector to project to.
	 * @return {Vector3} A reference to this vector.
	 */
	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	/**
	 * Projects this vector onto a plane by subtracting this
	 * vector projected onto the plane's normal from this vector.
	 *
	 * @param {Vector3} planeNormal - The plane normal.
	 * @return {Vector3} A reference to this vector.
	 */
	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	/**
	 * Reflects this vector off a plane orthogonal to the given normal vector.
	 *
	 * @param {Vector3} normal - The (normalized) normal vector.
	 * @return {Vector3} A reference to this vector.
	 */
	reflect( normal ) {

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}
	/**
	 * Returns the angle between the given vector and this instance in radians.
	 *
	 * @param {Vector3} v - The vector to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	/**
	 * Computes the distance from the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	/**
	 * Computes the squared distance from the given vector to this instance.
	 * If you are just comparing the distance with another distance, you should compare
	 * the distance squared instead as it is slightly more efficient to calculate.
	 *
	 * @param {Vector3} v - The vector to compute the squared distance to.
	 * @return {number} The squared distance.
	 */
	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	/**
	 * Computes the Manhattan distance from the given vector to this instance.
	 *
	 * @param {Vector3} v - The vector to compute the Manhattan distance to.
	 * @return {number} The Manhattan distance.
	 */
	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	/**
	 * Sets the vector components from the given spherical coordinates.
	 *
	 * @param {Spherical} s - The spherical coordinates.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	/**
	 * Sets the vector components from the given spherical coordinates.
	 *
	 * @param {number} radius - The radius.
	 * @param {number} phi - The phi angle in radians.
	 * @param {number} theta - The theta angle in radians.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	/**
	 * Sets the vector components from the given cylindrical coordinates.
	 *
	 * @param {Cylindrical} c - The cylindrical coordinates.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	/**
	 * Sets the vector components from the given cylindrical coordinates.
	 *
	 * @param {number} radius - The radius.
	 * @param {number} theta - The theta angle in radians.
	 * @param {number} y - The y value.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	/**
	 * Sets the vector components to the position elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	/**
	 * Sets the vector components to the scale elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	/**
	 * Sets the vector components from the specified matrix column.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @param {number} index - The column index.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	/**
	 * Sets the vector components from the specified matrix column.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @param {number} index - The column index.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	/**
	 * Sets the vector components from the given Euler angles.
	 *
	 * @param {Euler} e - The Euler angles to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	/**
	 * Sets the vector components from the RGB components of the
	 * given color.
	 *
	 * @param {Color} c - The color to set.
	 * @return {Vector3} A reference to this vector.
	 */
	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector3} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
	 * and z value to be `array[ offset + 2 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector3} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector3} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	/**
	 * Sets this vector to a uniformly random point on a unit sphere.
	 *
	 * @return {Vector3} A reference to this vector.
	 */
	randomDirection() {

		// https://mathworld.wolfram.com/SpherePointPicking.html

		const theta = Math.random() * Math.PI * 2;
		const u = Math.random() * 2 - 1;
		const c = Math.sqrt( 1 - u * u );

		this.x = c * Math.cos( theta );
		this.y = u;
		this.z = c * Math.sin( theta );

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

/**
 * Represents a 3x3 matrix.
 *
 * A Note on Row-Major and Column-Major Ordering:
 *
 * The constructor and {@link Matrix3#set} method take arguments in
 * [row-major]{@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order}
 * order, while internally they are stored in the {@link Matrix3#elements} array in column-major order.
 * This means that calling:
 * ```js
 * const m = new THREE.Matrix();
 * m.set( 11, 12, 13,
 *        21, 22, 23,
 *        31, 32, 33 );
 * ```
 * will result in the elements array containing:
 * ```js
 * m.elements = [ 11, 21, 31,
 *                12, 22, 32,
 *                13, 23, 33 ];
 * ```
 * and internally all calculations are performed using column-major ordering.
 * However, as the actual ordering makes no difference mathematically and
 * most people are used to thinking about matrices in row-major order, the
 * three.js documentation shows matrices in row-major order. Just bear in
 * mind that if you are reading the source code, you'll have to take the
 * transpose of any matrices outlined here to make sense of the calculations.
 */
class Matrix3 {

	/**
	 * Constructs a new 3x3 matrix. The arguments are supposed to be
	 * in row-major order. If no arguments are provided, the constructor
	 * initializes the matrix as an identity matrix.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 */
	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Matrix3.prototype.isMatrix3 = true;

		/**
		 * A column-major list of matrix values.
		 *
		 * @type {Array<number>}
		 */
		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	/**
	 * Sets the elements of the matrix.The arguments are supposed to be
	 * in row-major order.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @return {Matrix3} A reference to this matrix.
	 */
	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	/**
	 * Sets this matrix to the 3x3 identity matrix.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Copies the values of the given matrix to this instance.
	 *
	 * @param {Matrix3} m - The matrix to copy.
	 * @return {Matrix3} A reference to this matrix.
	 */
	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	/**
	 * Extracts the basis of this matrix into the three axis vectors provided.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	/**
	 * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	/**
	 * Post-multiplies this matrix by the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to multiply with.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	/**
	 * Pre-multiplies this matrix by the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to multiply with.
	 * @return {Matrix3} A reference to this matrix.
	 */
	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	/**
	 * Multiples the given 3x3 matrices and stores the result
	 * in this matrix.
	 *
	 * @param {Matrix3} a - The first matrix.
	 * @param {Matrix3} b - The second matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	/**
	 * Multiplies every component of the matrix by the given scalar.
	 *
	 * @param {number} s - The scalar.
	 * @return {Matrix3} A reference to this matrix.
	 */
	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	/**
	 * Computes and returns the determinant of this matrix.
	 *
	 * @return {number} The determinant.
	 */
	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	/**
	 * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
	 * You can not invert with a determinant of zero. If you attempt this, the method produces
	 * a zero matrix instead.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	/**
	 * Transposes this matrix in place.
	 *
	 * @return {Matrix3} A reference to this matrix.
	 */
	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	/**
	 * Computes the normal matrix which is the inverse transpose of the upper
	 * left 3x3 portion of the given 4x4 matrix.
	 *
	 * @param {Matrix4} matrix4 - The 4x4 matrix.
	 * @return {Matrix3} A reference to this matrix.
	 */
	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	/**
	 * Transposes this matrix into the supplied array, and returns itself unchanged.
	 *
	 * @param {Array<number>} r - An array to store the transposed matrix elements.
	 * @return {Matrix3} A reference to this matrix.
	 */
	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	/**
	 * Sets the UV transform matrix from offset, repeat, rotation, and center.
	 *
	 * @param {number} tx - Offset x.
	 * @param {number} ty - Offset y.
	 * @param {number} sx - Repeat x.
	 * @param {number} sy - Repeat y.
	 * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
	 * @param {number} cx - Center x of rotation.
	 * @param {number} cy - Center y of rotation
	 * @return {Matrix3} A reference to this matrix.
	 */
	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	/**
	 * Scales this matrix with the given scalar values.
	 *
	 * @param {number} sx - The amount to scale in the X axis.
	 * @param {number} sy - The amount to scale in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	/**
	 * Rotates this matrix by the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix3} A reference to this matrix.
	 */
	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	/**
	 * Translates this matrix by the given scalar values.
	 *
	 * @param {number} tx - The amount to translate in the X axis.
	 * @param {number} ty - The amount to translate in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	/**
	 * Sets this matrix as a 2D translation transform.
	 *
	 * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
	 * @param {number} y - The amount to translate in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	/**
	 * Sets this matrix as a 2D rotational transformation.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a 2D scale transform.
	 *
	 * @param {number} x - The amount to scale in the X axis.
	 * @param {number} y - The amount to scale in the Y axis.
	 * @return {Matrix3} A reference to this matrix.
	 */
	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	/**
	 * Returns `true` if this matrix is equal with the given one.
	 *
	 * @param {Matrix3} matrix - The matrix to test for equality.
	 * @return {boolean} Whether this matrix is equal with the given one.
	 */
	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	/**
	 * Sets the elements of the matrix from the given array.
	 *
	 * @param {Array<number>} array - The matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Matrix3} A reference to this matrix.
	 */
	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	/**
	 * Writes the elements of this matrix to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The matrix elements in column-major order.
	 */
	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	/**
	 * Returns a matrix with copied values from this instance.
	 *
	 * @return {Matrix3} A clone of this instance.
	 */
	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

const TYPED_ARRAYS = {
	Int8Array: Int8Array,
	Uint8Array: Uint8Array,
	Uint8ClampedArray: Uint8ClampedArray,
	Int16Array: Int16Array,
	Uint16Array: Uint16Array,
	Int32Array: Int32Array,
	Uint32Array: Uint32Array,
	Float32Array: Float32Array,
	Float64Array: Float64Array
};

function getTypedArray( type, buffer ) {

	return new TYPED_ARRAYS[ type ]( buffer );

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

function createCanvasElement() {

	const canvas = createElementNS( 'canvas' );
	canvas.style.display = 'block';
	return canvas;

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

function probeAsync( gl, sync, interval ) {

	return new Promise( function ( resolve, reject ) {

		function probe() {

			switch ( gl.clientWaitSync( sync, gl.SYNC_FLUSH_COMMANDS_BIT, 0 ) ) {

				case gl.WAIT_FAILED:
					reject();
					break;

				case gl.TIMEOUT_EXPIRED:
					setTimeout( probe, interval );
					break;

				default:
					resolve();

			}

		}

		setTimeout( probe, interval );

	} );

}

const LINEAR_REC709_TO_XYZ = /*@__PURE__*/ new Matrix3().set(
	0.4123908, 0.3575843, 0.1804808,
	0.2126390, 0.7151687, 0.0721923,
	0.0193308, 0.1191948, 0.9505322
);

const XYZ_TO_LINEAR_REC709 = /*@__PURE__*/ new Matrix3().set(
	3.2409699, -1.5373832, -0.4986108,
	-0.9692436, 1.8759675, 0.0415551,
	0.0556301, -0.203977, 1.0569715
);

function createColorManagement() {

	const ColorManagement = {

		enabled: true,

		workingColorSpace: LinearSRGBColorSpace,

		/**
		 * Implementations of supported color spaces.
		 *
		 * Required:
		 *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
		 *	- whitePoint: reference white [ x y ]
		 *	- transfer: transfer function (pre-defined)
		 *	- toXYZ: Matrix3 RGB to XYZ transform
		 *	- fromXYZ: Matrix3 XYZ to RGB transform
		 *	- luminanceCoefficients: RGB luminance coefficients
		 *
		 * Optional:
		 *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
		 *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
		 *
		 * Reference:
		 * - https://www.russellcottrell.com/photo/matrixCalculator.htm
		 */
		spaces: {},

		convert: function ( color, sourceColorSpace, targetColorSpace ) {

			if ( this.enabled === false || sourceColorSpace === targetColorSpace || ! sourceColorSpace || ! targetColorSpace ) {

				return color;

			}

			if ( this.spaces[ sourceColorSpace ].transfer === SRGBTransfer ) {

				color.r = SRGBToLinear( color.r );
				color.g = SRGBToLinear( color.g );
				color.b = SRGBToLinear( color.b );

			}

			if ( this.spaces[ sourceColorSpace ].primaries !== this.spaces[ targetColorSpace ].primaries ) {

				color.applyMatrix3( this.spaces[ sourceColorSpace ].toXYZ );
				color.applyMatrix3( this.spaces[ targetColorSpace ].fromXYZ );

			}

			if ( this.spaces[ targetColorSpace ].transfer === SRGBTransfer ) {

				color.r = LinearToSRGB( color.r );
				color.g = LinearToSRGB( color.g );
				color.b = LinearToSRGB( color.b );

			}

			return color;

		},

		workingToColorSpace: function ( color, targetColorSpace ) {

			return this.convert( color, this.workingColorSpace, targetColorSpace );

		},

		colorSpaceToWorking: function ( color, sourceColorSpace ) {

			return this.convert( color, sourceColorSpace, this.workingColorSpace );

		},

		getPrimaries: function ( colorSpace ) {

			return this.spaces[ colorSpace ].primaries;

		},

		getTransfer: function ( colorSpace ) {

			if ( colorSpace === NoColorSpace ) return LinearTransfer;

			return this.spaces[ colorSpace ].transfer;

		},

		getToneMappingMode: function ( colorSpace ) {

			return this.spaces[ colorSpace ].outputColorSpaceConfig.toneMappingMode || 'standard';

		},

		getLuminanceCoefficients: function ( target, colorSpace = this.workingColorSpace ) {

			return target.fromArray( this.spaces[ colorSpace ].luminanceCoefficients );

		},

		define: function ( colorSpaces ) {

			Object.assign( this.spaces, colorSpaces );

		},

		// Internal APIs

		_getMatrix: function ( targetMatrix, sourceColorSpace, targetColorSpace ) {

			return targetMatrix
				.copy( this.spaces[ sourceColorSpace ].toXYZ )
				.multiply( this.spaces[ targetColorSpace ].fromXYZ );

		},

		_getDrawingBufferColorSpace: function ( colorSpace ) {

			return this.spaces[ colorSpace ].outputColorSpaceConfig.drawingBufferColorSpace;

		},

		_getUnpackColorSpace: function ( colorSpace = this.workingColorSpace ) {

			return this.spaces[ colorSpace ].workingColorSpaceConfig.unpackColorSpace;

		},

		// Deprecated

		fromWorkingColorSpace: function ( color, targetColorSpace ) {

			warnOnce( 'THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().' ); // @deprecated, r177

			return ColorManagement.workingToColorSpace( color, targetColorSpace );

		},

		toWorkingColorSpace: function ( color, sourceColorSpace ) {

			warnOnce( 'THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().' ); // @deprecated, r177

			return ColorManagement.colorSpaceToWorking( color, sourceColorSpace );

		},

	};

	/******************************************************************************
	 * sRGB definitions
	 */

	const REC709_PRIMARIES = [ 0.640, 0.330, 0.300, 0.600, 0.150, 0.060 ];
	const REC709_LUMINANCE_COEFFICIENTS = [ 0.2126, 0.7152, 0.0722 ];
	const D65 = [ 0.3127, 0.3290 ];

	ColorManagement.define( {

		[ LinearSRGBColorSpace ]: {
			primaries: REC709_PRIMARIES,
			whitePoint: D65,
			transfer: LinearTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
			workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		},

		[ SRGBColorSpace ]: {
			primaries: REC709_PRIMARIES,
			whitePoint: D65,
			transfer: SRGBTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		},

	} );

	return ColorManagement;

}

const ColorManagement = /*@__PURE__*/ createColorManagement();

function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

function LinearToSRGB( c ) {

	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;

}

let _canvas;

/**
 * A class containing utility functions for images.
 *
 * @hideconstructor
 */
class ImageUtils {

	/**
	 * Returns a data URI containing a representation of the given image.
	 *
	 * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
	 * @param {string} [type='image/png'] - Indicates the image format.
	 * @return {string} The data URI.
	 */
	static getDataURL( image, type = 'image/png' ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		return canvas.toDataURL( type );

	}

	/**
	 * Converts the given sRGB image data to linear color space.
	 *
	 * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
	 * @return {HTMLCanvasElement|Object} The converted image.
	 */
	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

/**
 * Represents the data source of a texture.
 *
 * The main purpose of this class is to decouple the data definition from the texture
 * definition so the same data can be used with multiple texture instances.
 */
class Source {

	/**
	 * Constructs a new video texture.
	 *
	 * @param {any} [data=null] - The data definition of a texture.
	 */
	constructor( data = null ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isSource = true;

		/**
		 * The ID of the source.
		 *
		 * @name Source#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		/**
		 * The UUID of the source.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The data definition of a texture.
		 *
		 * @type {any}
		 */
		this.data = data;

		/**
		 * This property is only relevant when {@link Source#needsUpdate} is set to `true` and
		 * provides more control on how texture data should be processed. When `dataReady` is set
		 * to `false`, the engine performs the memory allocation (if necessary) but does not transfer
		 * the data into the GPU memory.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.dataReady = true;

		/**
		 * This starts at `0` and counts how many times {@link Source#needsUpdate} is set to `true`.
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.version = 0;

	}

	/**
	 * Returns the dimensions of the source into the given target vector.
	 *
	 * @param {(Vector2|Vector3)} target - The target object the result is written into.
	 * @return {(Vector2|Vector3)} The dimensions of the source.
	 */
	getSize( target ) {

		const data = this.data;

		if ( ( typeof HTMLVideoElement !== 'undefined' ) && ( data instanceof HTMLVideoElement ) ) {

			target.set( data.videoWidth, data.videoHeight, 0 );

		} else if ( data instanceof VideoFrame ) {

			target.set( data.displayHeight, data.displayWidth, 0 );

		} else if ( data !== null ) {

			target.set( data.width, data.height, data.depth || 0 );

		} else {

			target.set( 0, 0, 0 );

		}

		return target;

	}

	/**
	 * When the property is set to `true`, the engine allocates the memory
	 * for the texture (if necessary) and triggers the actual texture upload
	 * to the GPU next time the source is used.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	/**
	 * Serializes the source into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized source.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

const _tempVec3 = /*@__PURE__*/ new Vector3();

/**
 * Base class for all textures.
 *
 * Note: After the initial use of a texture, its dimensions, format, and type
 * cannot be changed. Instead, call {@link Texture#dispose} on the texture and instantiate a new one.
 *
 * @augments EventDispatcher
 */
class Texture extends EventDispatcher {

	/**
	 * Constructs a new texture.
	 *
	 * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
	 * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
	 * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
	 * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
	 * @param {number} [magFilter=LinearFilter] - The mag filter value.
	 * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
	 * @param {number} [format=RGBAFormat] - The texture format.
	 * @param {number} [type=UnsignedByteType] - The texture type.
	 * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
	 * @param {string} [colorSpace=NoColorSpace] - The color space.
	 */
	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isTexture = true;

		/**
		 * The ID of the texture.
		 *
		 * @name Texture#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		/**
		 * The UUID of the material.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the material.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The data definition of a texture. A reference to the data source can be
		 * shared across textures. This is often useful in context of spritesheets
		 * where multiple textures render the same data but with different texture
		 * transformations.
		 *
		 * @type {Source}
		 */
		this.source = new Source( image );

		/**
		 * An array holding user-defined mipmaps.
		 *
		 * @type {Array<Object>}
		 */
		this.mipmaps = [];

		/**
		 * How the texture is applied to the object. The value `UVMapping`
		 * is the default, where texture or uv coordinates are used to apply the map.
		 *
		 * @type {(UVMapping|CubeReflectionMapping|CubeRefractionMapping|EquirectangularReflectionMapping|EquirectangularRefractionMapping|CubeUVReflectionMapping)}
		 * @default UVMapping
		*/
		this.mapping = mapping;

		/**
		 * Lets you select the uv attribute to map the texture to. `0` for `uv`,
		 * `1` for `uv1`, `2` for `uv2` and `3` for `uv3`.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.channel = 0;

		/**
		 * This defines how the texture is wrapped horizontally and corresponds to
		 * *U* in UV mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapS = wrapS;

		/**
		 * This defines how the texture is wrapped horizontally and corresponds to
		 * *V* in UV mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapT = wrapT;

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default LinearFilter
		 */
		this.magFilter = magFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default LinearMipmapLinearFilter
		 */
		this.minFilter = minFilter;

		/**
		 * The number of samples taken along the axis through the pixel that has the
		 * highest density of texels. By default, this value is `1`. A higher value
		 * gives a less blurry result than a basic mipmap, at the cost of more
		 * texture samples being used.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.anisotropy = anisotropy;

		/**
		 * The format of the texture.
		 *
		 * @type {number}
		 * @default RGBAFormat
		 */
		this.format = format;

		/**
		 * The default internal format is derived from {@link Texture#format} and {@link Texture#type} and
		 * defines how the texture data is going to be stored on the GPU.
		 *
		 * This property allows to overwrite the default format.
		 *
		 * @type {?string}
		 * @default null
		 */
		this.internalFormat = null;

		/**
		 * The data type of the texture.
		 *
		 * @type {number}
		 * @default UnsignedByteType
		 */
		this.type = type;

		/**
		 * How much a single repetition of the texture is offset from the beginning,
		 * in each direction U and V. Typical range is `0.0` to `1.0`.
		 *
		 * @type {Vector2}
		 * @default (0,0)
		 */
		this.offset = new Vector2( 0, 0 );

		/**
		 * How many times the texture is repeated across the surface, in each
		 * direction U and V. If repeat is set greater than `1` in either direction,
		 * the corresponding wrap parameter should also be set to `RepeatWrapping`
		 * or `MirroredRepeatWrapping` to achieve the desired tiling effect.
		 *
		 * @type {Vector2}
		 * @default (1,1)
		 */
		this.repeat = new Vector2( 1, 1 );

		/**
		 * The point around which rotation occurs. A value of `(0.5, 0.5)` corresponds
		 * to the center of the texture. Default is `(0, 0)`, the lower left.
		 *
		 * @type {Vector2}
		 * @default (0,0)
		 */
		this.center = new Vector2( 0, 0 );

		/**
		 * How much the texture is rotated around the center point, in radians.
		 * Positive values are counter-clockwise.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.rotation = 0;

		/**
		 * Whether to update the texture's uv-transformation {@link Texture#matrix}
		 * from the properties {@link Texture#offset}, {@link Texture#repeat},
		 * {@link Texture#rotation}, and {@link Texture#center}.
		 *
		 * Set this to `false` if you are specifying the uv-transform matrix directly.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixAutoUpdate = true;

		/**
		 * The uv-transformation matrix of the texture.
		 *
		 * @type {Matrix3}
		 */
		this.matrix = new Matrix3();

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Set this to `false` if you are creating mipmaps manually.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.generateMipmaps = true;

		/**
		 * If set to `true`, the alpha channel, if present, is multiplied into the
		 * color channels when the texture is uploaded to the GPU.
		 *
		 * Note that this property has no effect when using `ImageBitmap`. You need to
		 * configure premultiply alpha on bitmap creation instead.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.premultiplyAlpha = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Note that this property has no effect when using `ImageBitmap`. You need to
		 * configure the flip on bitmap creation instead.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.flipY = true;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 * The allowable values are `1` (byte-alignment), `2` (rows aligned to even-numbered bytes),
		 * `4` (word-alignment), and `8` (rows start on double-word boundaries).
		 *
		 * @type {number}
		 * @default 4
		 */
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		/**
		 * Textures containing color data should be annotated with `SRGBColorSpace` or `LinearSRGBColorSpace`.
		 *
		 * @type {string}
		 * @default NoColorSpace
		 */
		this.colorSpace = colorSpace;

		/**
		 * An object that can be used to store custom data about the texture. It
		 * should not hold references to functions as these will not be cloned.
		 *
		 * @type {Object}
		 */
		this.userData = {};

		/**
		 * This can be used to only update a subregion or specific rows of the texture (for example, just the
		 * first 3 rows). Use the `addUpdateRange()` function to add ranges to this array.
		 *
		 * @type {Array<Object>}
		 */
		this.updateRanges = [];

		/**
		 * This starts at `0` and counts how many times {@link Texture#needsUpdate} is set to `true`.
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.version = 0;

		/**
		 * A callback function, called when the texture is updated (e.g., when
		 * {@link Texture#needsUpdate} has been set to true and then the texture is used).
		 *
		 * @type {?Function}
		 * @default null
		 */
		this.onUpdate = null;

		/**
		 * An optional back reference to the textures render target.
		 *
		 * @type {?(RenderTarget|WebGLRenderTarget)}
		 * @default null
		 */
		this.renderTarget = null;

		/**
		 * Indicates whether a texture belongs to a render target or not.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default false
		 */
		this.isRenderTargetTexture = false;

		/**
		 * Indicates if a texture should be handled like a texture array.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default false
		 */
		this.isArrayTexture = image && image.depth && image.depth > 1 ? true : false;

		/**
		 * Indicates whether this texture should be processed by `PMREMGenerator` or not
		 * (only relevant for render target textures).
		 *
		 * @type {number}
		 * @readonly
		 * @default 0
		 */
		this.pmremVersion = 0;

	}

	/**
	 * The width of the texture in pixels.
	 */
	get width() {

		return this.source.getSize( _tempVec3 ).x;

	}

	/**
	 * The height of the texture in pixels.
	 */
	get height() {

		return this.source.getSize( _tempVec3 ).y;

	}

	/**
	 * The depth of the texture in pixels.
	 */
	get depth() {

		return this.source.getSize( _tempVec3 ).z;

	}

	/**
	 * The image object holding the texture data.
	 *
	 * @type {?Object}
	 */
	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	/**
	 * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
	 * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
	 */
	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	/**
	 * Adds a range of data in the data texture to be updated on the GPU.
	 *
	 * @param {number} start - Position at which to start update.
	 * @param {number} count - The number of components to update.
	 */
	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	/**
	 * Clears the update ranges.
	 */
	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	/**
	 * Returns a new texture with copied values from this instance.
	 *
	 * @return {Texture} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given texture to this instance.
	 *
	 * @param {Texture} source - The texture to copy.
	 * @return {Texture} A reference to this instance.
	 */
	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.renderTarget = source.renderTarget;
		this.isRenderTargetTexture = source.isRenderTargetTexture;
		this.isArrayTexture = source.isArrayTexture;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	/**
	 * Sets this texture's properties based on `values`.
	 * @param {Object} values - A container with texture parameters.
	 */
	setValues( values ) {

		for ( const key in values ) {

			const newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( `THREE.Texture.setValues(): parameter '${ key }' has value of undefined.` );
				continue;

			}

			const currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( `THREE.Texture.setValues(): property '${ key }' does not exist.` );
				continue;

			}

			if ( ( currentValue && newValue ) && ( currentValue.isVector2 && newValue.isVector2 ) ) {

				currentValue.copy( newValue );

			} else if ( ( currentValue && newValue ) && ( currentValue.isVector3 && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else if ( ( currentValue && newValue ) && ( currentValue.isMatrix3 && newValue.isMatrix3 ) ) {

				currentValue.copy( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	}

	/**
	 * Serializes the texture into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized texture.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.7,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 *
	 * @fires Texture#dispose
	 */
	dispose() {

		/**
		 * Fires when the texture has been disposed of.
		 *
		 * @event Texture#dispose
		 * @type {Object}
		 */
		this.dispatchEvent( { type: 'dispose' } );

	}

	/**
	 * Transforms the given uv vector with the textures uv transformation matrix.
	 *
	 * @param {Vector2} uv - The uv vector.
	 * @return {Vector2} The transformed uv vector.
	 */
	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	/**
	 * Setting this property to `true` indicates the engine the texture
	 * must be updated in the next render. This triggers a texture upload
	 * to the GPU and ensures correct texture parameter configuration.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	/**
	 * Setting this property to `true` indicates the engine the PMREM
	 * must be regenerated.
	 *
	 * @type {boolean}
	 * @default false
	 * @param {boolean} value
	 */
	set needsPMREMUpdate( value ) {

		if ( value === true ) {

			this.pmremVersion ++;

		}

	}

}

/**
 * The default image for all textures.
 *
 * @static
 * @type {?Image}
 * @default null
 */
Texture.DEFAULT_IMAGE = null;

/**
 * The default mapping for all textures.
 *
 * @static
 * @type {number}
 * @default UVMapping
 */
Texture.DEFAULT_MAPPING = UVMapping;

/**
 * The default anisotropy value for all textures.
 *
 * @static
 * @type {number}
 * @default 1
 */
Texture.DEFAULT_ANISOTROPY = 1;

/**
 * Class representing a 4D vector. A 4D vector is an ordered quadruplet of numbers
 * (labeled x, y, z and w), which can be used to represent a number of things, such as:
 *
 * - A point in 4D space.
 * - A direction and length in 4D space. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0, 0, 0)` to `(x, y, z, w)`
 * and the direction is also measured from `(0, 0, 0, 0)` towards `(x, y, z, w)`.
 * - Any arbitrary ordered quadruplet of numbers.
 *
 * There are other things a 4D vector can be used to represent, however these
 * are the most common uses in *three.js*.
 *
 * Iterating through a vector instance will yield its components `(x, y, z, w)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector4( 0, 1, 0, 0 );
 *
 * //no arguments; will be initialised to (0, 0, 0, 1)
 * const b = new THREE.Vector4( );
 *
 * const d = a.dot( b );
 * ```
 */
class Vector4 {

	/**
	 * Constructs a new 4D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 * @param {number} [z=0] - The z value of this vector.
	 * @param {number} [w=1] - The w value of this vector.
	 */
	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector4.prototype.isVector4 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

		/**
		 * The z value of this vector.
		 *
		 * @type {number}
		 */
		this.z = z;

		/**
		 * The w value of this vector.
		 *
		 * @type {number}
		 */
		this.w = w;

	}

	/**
	 * Alias for {@link Vector4#z}.
	 *
	 * @type {number}
	 */
	get width() {

		return this.z;

	}

	set width( value ) {

		this.z = value;

	}

	/**
	 * Alias for {@link Vector4#w}.
	 *
	 * @type {number}
	 */
	get height() {

		return this.w;

	}

	set height( value ) {

		this.w = value;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @param {number} z - The value of the z component.
	 * @param {number} w - The value of the w component.
	 * @return {Vector4} A reference to this vector.
	 */
	set( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector4} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Sets the vector's z component to the given value
	 *
	 * @param {number} z - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setZ( z ) {

		this.z = z;

		return this;

	}

	/**
	 * Sets the vector's w component to the given value
	 *
	 * @param {number} w - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setW( w ) {

		this.w = w;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y,
	 * `2` equals to z, `3` equals to w.
	 * @param {number} value - The value to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y,
	 * `2` equals to z, `3` equals to w.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector4} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y, this.z, this.w );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector3|Vector4} v - The vector to copy.
	 * @return {Vector4} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector4} v - The vector to add.
	 * @return {Vector4} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector4} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector4} a - The first vector.
	 * @param {Vector4} b - The second vector.
	 * @return {Vector4} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector4} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector4} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector4} v - The vector to subtract.
	 * @return {Vector4} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector4} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector4} a - The first vector.
	 * @param {Vector4} b - The second vector.
	 * @return {Vector4} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector4} v - The vector to multiply.
	 * @return {Vector4} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
		this.w *= v.w;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector4} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	}

	/**
	 * Multiplies this vector with the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z, w = this.w;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector4} v - The vector to divide.
	 * @return {Vector4} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;
		this.w /= v.w;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector4} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * Sets the x, y and z components of this
	 * vector to the quaternion's axis and w to the angle.
	 *
	 * @param {Quaternion} q - The Quaternion to set.
	 * @return {Vector4} A reference to this vector.
	 */
	setAxisAngleFromQuaternion( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		const s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			this.x = 1;
			this.y = 0;
			this.z = 0;

		} else {

			this.x = q.x / s;
			this.y = q.y / s;
			this.z = q.z / s;

		}

		return this;

	}

	/**
	 * Sets the x, y and z components of this
	 * vector to the axis of rotation and w to the angle.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	setAxisAngleFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		let angle, x, y, z; // variables for result
		const epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			const xx = ( m11 + 1 ) / 2;
			const yy = ( m22 + 1 ) / 2;
			const zz = ( m33 + 1 ) / 2;
			const xy = ( m12 + m21 ) / 4;
			const xz = ( m13 + m31 ) / 4;
			const yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		let s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
			( m13 - m31 ) * ( m13 - m31 ) +
			( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	}

	/**
	 * Sets the vector components to the position elements of the
	 * given transformation matrix.
	 *
	 * @param {Matrix4} m - The 4x4 matrix.
	 * @return {Vector4} A reference to this vector.
	 */
	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];
		this.w = e[ 15 ];

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector4} v - The vector.
	 * @return {Vector4} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector4} v - The vector.
	 * @return {Vector4} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
	 * value, it is replaced by the corresponding value.
	 * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector4} min - The minimum x, y and z values.
	 * @param {Vector4} max - The maximum x, y and z values in the desired range.
	 * @return {Vector4} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );
		this.z = clamp( this.z, min.z, max.z );
		this.w = clamp( this.w, min.w, max.w );

		return this;

	}

	/**
	 * If this vector's x, y, z or w values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x, y, z or w values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector4} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );
		this.z = clamp( this.z, minVal, maxVal );
		this.w = clamp( this.w, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector4} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );
		this.w = Math.trunc( this.w );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector4} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	}

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector4} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector4} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector4} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector4} v1 - The first vector.
	 * @param {Vector4} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector4} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;
		this.w = v1.w + ( v2.w - v1.w ) * alpha;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector4} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
	 * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector4} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector4} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector4} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();
		this.w = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;
		yield this.w;

	}

}

/**
 * A render target is a buffer where the video card draws pixels for a scene
 * that is being rendered in the background. It is used in different effects,
 * such as applying postprocessing to a rendered image before displaying it
 * on the screen.
 *
 * @augments EventDispatcher
 */
class RenderTarget extends EventDispatcher {

	/**
	 * Render target options.
	 *
	 * @typedef {Object} RenderTarget~Options
	 * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
	 * @property {number} [magFilter=LinearFilter] - The mag filter.
	 * @property {number} [minFilter=LinearFilter] - The min filter.
	 * @property {number} [format=RGBAFormat] - The texture format.
	 * @property {number} [type=UnsignedByteType] - The texture type.
	 * @property {?string} [internalFormat=null] - The texture's internal format.
	 * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
	 * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
	 * @property {number} [anisotropy=1] - The texture's anisotropy value.
	 * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
	 * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
	 * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
	 * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
	 * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
	 * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
	 * @property {number} [samples=0] - The MSAA samples count.
	 * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
	 * @property {number} [depth=1] - The texture depth.
	 * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
	 */

	/**
	 * Constructs a new render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, options = {} ) {

		super();

		options = Object.assign( {
			generateMipmaps: false,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: true,
			stencilBuffer: false,
			resolveDepthBuffer: true,
			resolveStencilBuffer: true,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: false
		}, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isRenderTarget = true;

		/**
		 * The width of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.width = width;

		/**
		 * The height of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.height = height;

		/**
		 * The depth of the render target.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.depth = options.depth;

		/**
		 * A rectangular area inside the render target's viewport. Fragments that are
		 * outside the area will be discarded.
		 *
		 * @type {Vector4}
		 * @default (0,0,width,height)
		 */
		this.scissor = new Vector4( 0, 0, width, height );

		/**
		 * Indicates whether the scissor test should be enabled when rendering into
		 * this render target or not.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.scissorTest = false;

		/**
		 * A rectangular area representing the render target's viewport.
		 *
		 * @type {Vector4}
		 * @default (0,0,width,height)
		 */
		this.viewport = new Vector4( 0, 0, width, height );

		const image = { width: width, height: height, depth: options.depth };

		const texture = new Texture( image );

		/**
		 * An array of textures. Each color attachment is represented as a separate texture.
		 * Has at least a single entry for the default color attachment.
		 *
		 * @type {Array<Texture>}
		 */
		this.textures = [];

		const count = options.count;
		for ( let i = 0; i < count; i ++ ) {

			this.textures[ i ] = texture.clone();
			this.textures[ i ].isRenderTargetTexture = true;
			this.textures[ i ].renderTarget = this;

		}

		this._setTextureOptions( options );

		/**
		 * Whether to allocate a depth buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthBuffer = options.depthBuffer;

		/**
		 * Whether to allocate a stencil buffer or not.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.stencilBuffer = options.stencilBuffer;

		/**
		 * Whether to resolve the depth buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.resolveDepthBuffer = options.resolveDepthBuffer;

		/**
		 * Whether to resolve the stencil buffer or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.resolveStencilBuffer = options.resolveStencilBuffer;

		this._depthTexture = null;
		this.depthTexture = options.depthTexture;

		/**
		 * The number of MSAA samples.
		 *
		 * A value of `0` disables MSAA.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.samples = options.samples;

		/**
		 * Whether to this target is used in multiview rendering.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.multiview = options.multiview;

	}

	_setTextureOptions( options = {} ) {

		const values = {
			minFilter: LinearFilter,
			generateMipmaps: false,
			flipY: false,
			internalFormat: null
		};

		if ( options.mapping !== undefined ) values.mapping = options.mapping;
		if ( options.wrapS !== undefined ) values.wrapS = options.wrapS;
		if ( options.wrapT !== undefined ) values.wrapT = options.wrapT;
		if ( options.wrapR !== undefined ) values.wrapR = options.wrapR;
		if ( options.magFilter !== undefined ) values.magFilter = options.magFilter;
		if ( options.minFilter !== undefined ) values.minFilter = options.minFilter;
		if ( options.format !== undefined ) values.format = options.format;
		if ( options.type !== undefined ) values.type = options.type;
		if ( options.anisotropy !== undefined ) values.anisotropy = options.anisotropy;
		if ( options.colorSpace !== undefined ) values.colorSpace = options.colorSpace;
		if ( options.flipY !== undefined ) values.flipY = options.flipY;
		if ( options.generateMipmaps !== undefined ) values.generateMipmaps = options.generateMipmaps;
		if ( options.internalFormat !== undefined ) values.internalFormat = options.internalFormat;

		for ( let i = 0; i < this.textures.length; i ++ ) {

			const texture = this.textures[ i ];
			texture.setValues( values );

		}

	}

	/**
	 * The texture representing the default color attachment.
	 *
	 * @type {Texture}
	 */
	get texture() {

		return this.textures[ 0 ];

	}

	set texture( value ) {

		this.textures[ 0 ] = value;

	}

	set depthTexture( current ) {

		if ( this._depthTexture !== null ) this._depthTexture.renderTarget = null;
		if ( current !== null ) current.renderTarget = this;

		this._depthTexture = current;

	}

	/**
	 * Instead of saving the depth in a renderbuffer, a texture
	 * can be used instead which is useful for further processing
	 * e.g. in context of post-processing.
	 *
	 * @type {?DepthTexture}
	 * @default null
	 */
	get depthTexture() {

		return this._depthTexture;

	}

	/**
	 * Sets the size of this render target.
	 *
	 * @param {number} width - The width.
	 * @param {number} height - The height.
	 * @param {number} [depth=1] - The depth.
	 */
	setSize( width, height, depth = 1 ) {

		if ( this.width !== width || this.height !== height || this.depth !== depth ) {

			this.width = width;
			this.height = height;
			this.depth = depth;

			for ( let i = 0, il = this.textures.length; i < il; i ++ ) {

				this.textures[ i ].image.width = width;
				this.textures[ i ].image.height = height;
				this.textures[ i ].image.depth = depth;
				this.textures[ i ].isArrayTexture = this.textures[ i ].image.depth > 1;

			}

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	}

	/**
	 * Returns a new render target with copied values from this instance.
	 *
	 * @return {RenderTarget} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the settings of the given render target. This is a structural copy so
	 * no resources are shared between render targets after the copy. That includes
	 * all MRT textures and the depth texture.
	 *
	 * @param {RenderTarget} source - The render target to copy.
	 * @return {RenderTarget} A reference to this instance.
	 */
	copy( source ) {

		this.width = source.width;
		this.height = source.height;
		this.depth = source.depth;

		this.scissor.copy( source.scissor );
		this.scissorTest = source.scissorTest;

		this.viewport.copy( source.viewport );

		this.textures.length = 0;

		for ( let i = 0, il = source.textures.length; i < il; i ++ ) {

			this.textures[ i ] = source.textures[ i ].clone();
			this.textures[ i ].isRenderTargetTexture = true;
			this.textures[ i ].renderTarget = this;

			// ensure image object is not shared, see #20328

			const image = Object.assign( {}, source.textures[ i ].image );
			this.textures[ i ].source = new Source( image );

		}

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;

		this.resolveDepthBuffer = source.resolveDepthBuffer;
		this.resolveStencilBuffer = source.resolveStencilBuffer;

		if ( source.depthTexture !== null ) this.depthTexture = source.depthTexture.clone();

		this.samples = source.samples;

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 *
	 * @fires RenderTarget#dispose
	 */
	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

/**
 * A render target used in context of {@link WebGLRenderer}.
 *
 * @augments RenderTarget
 */
class WebGLRenderTarget extends RenderTarget {

	/**
	 * Constructs a new 3D render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGLRenderTarget = true;

	}

}

/**
 * Creates an array of textures directly from raw buffer data.
 *
 * @augments Texture
 */
class DataArrayTexture extends Texture {

	/**
	 * Constructs a new data array texture.
	 *
	 * @param {?TypedArray} [data=null] - The buffer data.
	 * @param {number} [width=1] - The width of the texture.
	 * @param {number} [height=1] - The height of the texture.
	 * @param {number} [depth=1] - The depth of the texture.
	 */
	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		super( null );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isDataArrayTexture = true;

		/**
		 * The image definition of a data texture.
		 *
		 * @type {{data:TypedArray,width:number,height:number,depth:number}}
		 */
		this.image = { data, width, height, depth };

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.magFilter = NearestFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.minFilter = NearestFilter;

		/**
		 * This defines how the texture is wrapped in the depth and corresponds to
		 * *W* in UVW mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapR = ClampToEdgeWrapping;

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.generateMipmaps = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.flipY = false;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 *
		 * Overwritten and set to `1` by default.
		 *
		 * @type {boolean}
		 * @default 1
		 */
		this.unpackAlignment = 1;

		/**
		 * A set of all layers which need to be updated in the texture.
		 *
		 * @type {Set<number>}
		 */
		this.layerUpdates = new Set();

	}

	/**
	 * Describes that a specific layer of the texture needs to be updated.
	 * Normally when {@link Texture#needsUpdate} is set to `true`, the
	 * entire data texture array is sent to the GPU. Marking specific
	 * layers will only transmit subsets of all mipmaps associated with a
	 * specific depth in the array which is often much more performant.
	 *
	 * @param {number} layerIndex - The layer index that should be updated.
	 */
	addLayerUpdate( layerIndex ) {

		this.layerUpdates.add( layerIndex );

	}

	/**
	 * Resets the layer updates registry.
	 */
	clearLayerUpdates() {

		this.layerUpdates.clear();

	}

}

/**
 * An array render target used in context of {@link WebGLRenderer}.
 *
 * @augments WebGLRenderTarget
 */
class WebGLArrayRenderTarget extends WebGLRenderTarget {

	/**
	 * Constructs a new array render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {number} [depth=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGLArrayRenderTarget = true;

		this.depth = depth;

		/**
		 * Overwritten with a different texture type.
		 *
		 * @type {DataArrayTexture}
		 */
		this.texture = new DataArrayTexture( null, width, height, depth );
		this._setTextureOptions( options );

		this.texture.isRenderTargetTexture = true;

	}

}

/**
 * Creates a three-dimensional texture from raw data, with parameters to
 * divide it into width, height, and depth.
 *
 * @augments Texture
 */
class Data3DTexture extends Texture {

	/**
	 * Constructs a new data array texture.
	 *
	 * @param {?TypedArray} [data=null] - The buffer data.
	 * @param {number} [width=1] - The width of the texture.
	 * @param {number} [height=1] - The height of the texture.
	 * @param {number} [depth=1] - The depth of the texture.
	 */
	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in Data3DTexture directly.
		//
		//	const texture = new THREE.Data3DTexture( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isData3DTexture = true;

		/**
		 * The image definition of a data texture.
		 *
		 * @type {{data:TypedArray,width:number,height:number,depth:number}}
		 */
		this.image = { data, width, height, depth };

		/**
		 * How the texture is sampled when a texel covers more than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.magFilter = NearestFilter;

		/**
		 * How the texture is sampled when a texel covers less than one pixel.
		 *
		 * Overwritten and set to `NearestFilter` by default.
		 *
		 * @type {(NearestFilter|NearestMipmapNearestFilter|NearestMipmapLinearFilter|LinearFilter|LinearMipmapNearestFilter|LinearMipmapLinearFilter)}
		 * @default NearestFilter
		 */
		this.minFilter = NearestFilter;

		/**
		 * This defines how the texture is wrapped in the depth and corresponds to
		 * *W* in UVW mapping.
		 *
		 * @type {(RepeatWrapping|ClampToEdgeWrapping|MirroredRepeatWrapping)}
		 * @default ClampToEdgeWrapping
		 */
		this.wrapR = ClampToEdgeWrapping;

		/**
		 * Whether to generate mipmaps (if possible) for a texture.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.generateMipmaps = false;

		/**
		 * If set to `true`, the texture is flipped along the vertical axis when
		 * uploaded to the GPU.
		 *
		 * Overwritten and set to `false` by default.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.flipY = false;

		/**
		 * Specifies the alignment requirements for the start of each pixel row in memory.
		 *
		 * Overwritten and set to `1` by default.
		 *
		 * @type {boolean}
		 * @default 1
		 */
		this.unpackAlignment = 1;

	}

}

/**
 * A 3D render target used in context of {@link WebGLRenderer}.
 *
 * @augments WebGLRenderTarget
 */
class WebGL3DRenderTarget extends WebGLRenderTarget {

	/**
	 * Constructs a new 3D render target.
	 *
	 * @param {number} [width=1] - The width of the render target.
	 * @param {number} [height=1] - The height of the render target.
	 * @param {number} [depth=1] - The height of the render target.
	 * @param {RenderTarget~Options} [options] - The configuration object.
	 */
	constructor( width = 1, height = 1, depth = 1, options = {} ) {

		super( width, height, options );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWebGL3DRenderTarget = true;

		this.depth = depth;

		/**
		 * Overwritten with a different texture type.
		 *
		 * @type {Data3DTexture}
		 */
		this.texture = new Data3DTexture( null, width, height, depth );
		this._setTextureOptions( options );

		this.texture.isRenderTargetTexture = true;

	}

}

/**
 * Represents an axis-aligned bounding box (AABB) in 3D space.
 */
class Box3 {

	/**
	 * Constructs a new bounding box.
	 *
	 * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
	 * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
	 */
	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isBox3 = true;

		/**
		 * The lower boundary of the box.
		 *
		 * @type {Vector3}
		 */
		this.min = min;

		/**
		 * The upper boundary of the box.
		 *
		 * @type {Vector3}
		 */
		this.max = max;

	}

	/**
	 * Sets the lower and upper boundaries of this box.
	 * Please note that this method only copies the values from the given objects.
	 *
	 * @param {Vector3} min - The lower boundary of the box.
	 * @param {Vector3} max - The upper boundary of the box.
	 * @return {Box3} A reference to this bounding box.
	 */
	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given array.
	 *
	 * @param {Array<number>} array - An array holding 3D position data.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	/**
	 * Sets the upper and lower bounds of this box so it encloses the position data
	 * in the given array.
	 *
	 * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	/**
	 * Centers this box on the given center vector and sets this box's width, height and
	 * depth to the given size values.
	 *
	 * @param {Vector3} center - The center of the box.
	 * @param {Vector3} size - The x, y and z dimensions of the box.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	/**
	 * Computes the world-axis-aligned bounding box for the given 3D object
	 * (including its children), accounting for the object's, and children's,
	 * world transforms. The function may result in a larger box than strictly necessary.
	 *
	 * @param {Object3D} object - The 3D object to compute the bounding box for.
	 * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
	 * world-axis-aligned bounding box at the expense of more computation.
	 * @return {Box3} A reference to this bounding box.
	 */
	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	/**
	 * Returns a new box with copied values from this instance.
	 *
	 * @return {Box3} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given box to this instance.
	 *
	 * @param {Box3} box - The box to copy.
	 * @return {Box3} A reference to this bounding box.
	 */
	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	/**
	 * Makes this box empty which means in encloses a zero space in 3D.
	 *
	 * @return {Box3} A reference to this bounding box.
	 */
	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	/**
	 * Returns true if this box includes zero points within its bounds.
	 * Note that a box with equal lower and upper bounds still includes one
	 * point, the one both bounds share.
	 *
	 * @return {boolean} Whether this box is empty or not.
	 */
	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	/**
	 * Returns the center point of this box.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The center point.
	 */
	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	/**
	 * Returns the dimensions of this box.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The size.
	 */
	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	/**
	 * Expands the boundaries of this box to include the given point.
	 *
	 * @param {Vector3} point - The point that should be included by the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	/**
	 * Expands this box equilaterally by the given vector. The width of this
	 * box will be expanded by the x component of the vector in both
	 * directions. The height of this box will be expanded by the y component of
	 * the vector in both directions. The depth of this box will be
	 * expanded by the z component of the vector in both directions.
	 *
	 * @param {Vector3} vector - The vector that should expand the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	/**
	 * Expands each dimension of the box by the given scalar. If negative, the
	 * dimensions of the box will be contracted.
	 *
	 * @param {number} scalar - The scalar value that should expand the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	/**
	 * Expands the boundaries of this box to include the given 3D object and
	 * its children, accounting for the object's, and children's, world
	 * transforms. The function may result in a larger box than strictly
	 * necessary (unless the precise parameter is set to true).
	 *
	 * @param {Object3D} object - The 3D object that should expand the bounding box.
	 * @param {boolean} precise - If set to `true`, the method expands the bounding box
	 * as little as necessary at the expense of more computation.
	 * @return {Box3} A reference to this bounding box.
	 */
	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	/**
	 * Returns `true` if the given point lies within or on the boundaries of this box.
	 *
	 * @param {Vector3} point - The point to test.
	 * @return {boolean} Whether the bounding box contains the given point or not.
	 */
	containsPoint( point ) {

		return point.x >= this.min.x && point.x <= this.max.x &&
			point.y >= this.min.y && point.y <= this.max.y &&
			point.z >= this.min.z && point.z <= this.max.z;

	}

	/**
	 * Returns `true` if this bounding box includes the entirety of the given bounding box.
	 * If this box and the given one are identical, this function also returns `true`.
	 *
	 * @param {Box3} box - The bounding box to test.
	 * @return {boolean} Whether the bounding box contains the given bounding box or not.
	 */
	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	/**
	 * Returns a point as a proportion of this box's width, height and depth.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} A point as a proportion of this box's width, height and depth.
	 */
	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	/**
	 * Returns `true` if the given bounding box intersects with this bounding box.
	 *
	 * @param {Box3} box - The bounding box to test.
	 * @return {boolean} Whether the given bounding box intersects with this bounding box.
	 */
	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x >= this.min.x && box.min.x <= this.max.x &&
			box.max.y >= this.min.y && box.min.y <= this.max.y &&
			box.max.z >= this.min.z && box.min.z <= this.max.z;

	}

	/**
	 * Returns `true` if the given bounding sphere intersects with this bounding box.
	 *
	 * @param {Sphere} sphere - The bounding sphere to test.
	 * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
	 */
	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	/**
	 * Returns `true` if the given plane intersects with this bounding box.
	 *
	 * @param {Plane} plane - The plane to test.
	 * @return {boolean} Whether the given plane intersects with this bounding box.
	 */
	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	/**
	 * Returns `true` if the given triangle intersects with this bounding box.
	 *
	 * @param {Triangle} triangle - The triangle to test.
	 * @return {boolean} Whether the given triangle intersects with this bounding box.
	 */
	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	/**
	 * Clamps the given point within the bounds of this box.
	 *
	 * @param {Vector3} point - The point to clamp.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The clamped point.
	 */
	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	/**
	 * Returns the euclidean distance from any edge of this box to the specified point. If
	 * the given point lies inside of this box, the distance will be `0`.
	 *
	 * @param {Vector3} point - The point to compute the distance to.
	 * @return {number} The euclidean distance.
	 */
	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	/**
	 * Returns a bounding sphere that encloses this bounding box.
	 *
	 * @param {Sphere} target - The target sphere that is used to store the method's result.
	 * @return {Sphere} The bounding sphere that encloses this bounding box.
	 */
	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	/**
	 * Computes the intersection of this bounding box and the given one, setting the upper
	 * bound of this box to the lesser of the two boxes' upper bounds and the
	 * lower bound of this box to the greater of the two boxes' lower bounds. If
	 * there's no overlap, makes this box empty.
	 *
	 * @param {Box3} box - The bounding box to intersect with.
	 * @return {Box3} A reference to this bounding box.
	 */
	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	/**
	 * Computes the union of this box and another and the given one, setting the upper
	 * bound of this box to the greater of the two boxes' upper bounds and the
	 * lower bound of this box to the lesser of the two boxes' lower bounds.
	 *
	 * @param {Box3} box - The bounding box that will be unioned with this instance.
	 * @return {Box3} A reference to this bounding box.
	 */
	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	/**
	 * Transforms this bounding box by the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 * @return {Box3} A reference to this bounding box.
	 */
	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	/**
	 * Adds the given offset to both the upper and lower bounds of this bounding box,
	 * effectively moving it in 3D space.
	 *
	 * @param {Vector3} offset - The offset that should be used to translate the bounding box.
	 * @return {Box3} A reference to this bounding box.
	 */
	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	/**
	 * Returns `true` if this bounding box is equal with the given one.
	 *
	 * @param {Box3} box - The box to test for equality.
	 * @return {boolean} Whether this bounding box is equal with the given one.
	 */
	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

	/**
	 * Returns a serialized structure of the bounding box.
	 *
	 * @return {Object} Serialized structure with fields representing the object state.
	 */
	toJSON() {

		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};

	}

	/**
	 * Returns a serialized structure of the bounding box.
	 *
	 * @param {Object} json - The serialized json to set the box from.
	 * @return {Box3} A reference to this bounding box.
	 */
	fromJSON( json ) {

		this.min.fromArray( json.min );
		this.max.fromArray( json.max );
		return this;

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

/**
 * An analytical 3D sphere defined by a center and radius. This class is mainly
 * used as a Bounding Sphere for 3D objects.
 */
class Sphere {

	/**
	 * Constructs a new sphere.
	 *
	 * @param {Vector3} [center=(0,0,0)] - The center of the sphere
	 * @param {number} [radius=-1] - The radius of the sphere.
	 */
	constructor( center = new Vector3(), radius = -1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isSphere = true;

		/**
		 * The center of the sphere
		 *
		 * @type {Vector3}
		 */
		this.center = center;

		/**
		 * The radius of the sphere.
		 *
		 * @type {number}
		 */
		this.radius = radius;

	}

	/**
	 * Sets the sphere's components by copying the given values.
	 *
	 * @param {Vector3} center - The center.
	 * @param {number} radius - The radius.
	 * @return {Sphere} A reference to this sphere.
	 */
	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	/**
	 * Computes the minimum bounding sphere for list of points.
	 * If the optional center point is given, it is used as the sphere's
	 * center. Otherwise, the center of the axis-aligned bounding box
	 * encompassing the points is calculated.
	 *
	 * @param {Array<Vector3>} points - A list of points in 3D space.
	 * @param {Vector3} [optionalCenter] - The center of the sphere.
	 * @return {Sphere} A reference to this sphere.
	 */
	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	/**
	 * Copies the values of the given sphere to this instance.
	 *
	 * @param {Sphere} sphere - The sphere to copy.
	 * @return {Sphere} A reference to this sphere.
	 */
	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	/**
	 * Returns `true` if the sphere is empty (the radius set to a negative number).
	 *
	 * Spheres with a radius of `0` contain only their center point and are not
	 * considered to be empty.
	 *
	 * @return {boolean} Whether this sphere is empty or not.
	 */
	isEmpty() {

		return ( this.radius < 0 );

	}

	/**
	 * Makes this sphere empty which means in encloses a zero space in 3D.
	 *
	 * @return {Sphere} A reference to this sphere.
	 */
	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = -1;

		return this;

	}

	/**
	 * Returns `true` if this sphere contains the given point inclusive of
	 * the surface of the sphere.
	 *
	 * @param {Vector3} point - The point to check.
	 * @return {boolean} Whether this sphere contains the given point or not.
	 */
	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	/**
	 * Returns the closest distance from the boundary of the sphere to the
	 * given point. If the sphere contains the point, the distance will
	 * be negative.
	 *
	 * @param {Vector3} point - The point to compute the distance to.
	 * @return {number} The distance to the point.
	 */
	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	/**
	 * Returns `true` if this sphere intersects with the given one.
	 *
	 * @param {Sphere} sphere - The sphere to test.
	 * @return {boolean} Whether this sphere intersects with the given one or not.
	 */
	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	/**
	 * Returns `true` if this sphere intersects with the given box.
	 *
	 * @param {Box3} box - The box to test.
	 * @return {boolean} Whether this sphere intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	/**
	 * Returns `true` if this sphere intersects with the given plane.
	 *
	 * @param {Plane} plane - The plane to test.
	 * @return {boolean} Whether this sphere intersects with the given plane or not.
	 */
	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	/**
	 * Clamps a point within the sphere. If the point is outside the sphere, it
	 * will clamp it to the closest point on the edge of the sphere. Points
	 * already inside the sphere will not be affected.
	 *
	 * @param {Vector3} point - The plane to clamp.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The clamped point.
	 */
	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	/**
	 * Returns a bounding box that encloses this sphere.
	 *
	 * @param {Box3} target - The target box that is used to store the method's result.
	 * @return {Box3} The bounding box that encloses this sphere.
	 */
	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	/**
	 * Transforms this sphere with the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 * @return {Sphere} A reference to this sphere.
	 */
	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	/**
	 * Translates the sphere's center by the given offset.
	 *
	 * @param {Vector3} offset - The offset.
	 * @return {Sphere} A reference to this sphere.
	 */
	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	/**
	 * Expands the boundaries of this sphere to include the given point.
	 *
	 * @param {Vector3} point - The point to include.
	 * @return {Sphere} A reference to this sphere.
	 */
	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	/**
	 * Expands this sphere to enclose both the original sphere and the given sphere.
	 *
	 * @param {Sphere} sphere - The sphere to include.
	 * @return {Sphere} A reference to this sphere.
	 */
	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	/**
	 * Returns `true` if this sphere is equal with the given one.
	 *
	 * @param {Sphere} sphere - The sphere to test for equality.
	 * @return {boolean} Whether this bounding sphere is equal with the given one.
	 */
	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	/**
	 * Returns a new sphere with copied values from this instance.
	 *
	 * @return {Sphere} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Returns a serialized structure of the bounding sphere.
	 *
	 * @return {Object} Serialized structure with fields representing the object state.
	 */
	toJSON() {

		return {
			radius: this.radius,
			center: this.center.toArray()
		};

	}

	/**
	 * Returns a serialized structure of the bounding sphere.
	 *
	 * @param {Object} json - The serialized json to set the sphere from.
	 * @return {Box3} A reference to this bounding sphere.
	 */
	fromJSON( json ) {

		this.radius = json.radius;
		this.center.fromArray( json.center );
		return this;

	}

}

const _vector$a = /*@__PURE__*/ new Vector3();
const _segCenter = /*@__PURE__*/ new Vector3();
const _segDir = /*@__PURE__*/ new Vector3();
const _diff = /*@__PURE__*/ new Vector3();

const _edge1 = /*@__PURE__*/ new Vector3();
const _edge2 = /*@__PURE__*/ new Vector3();
const _normal$1 = /*@__PURE__*/ new Vector3();

/**
 * A ray that emits from an origin in a certain direction. The class is used by
 * {@link Raycaster} to assist with raycasting. Raycasting is used for
 * mouse picking (working out what objects in the 3D space the mouse is over)
 * amongst other things.
 */
class Ray {

	/**
	 * Constructs a new ray.
	 *
	 * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
	 * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
	 */
	constructor( origin = new Vector3(), direction = new Vector3( 0, 0, -1 ) ) {

		/**
		 * The origin of the ray.
		 *
		 * @type {Vector3}
		 */
		this.origin = origin;

		/**
		 * The (normalized) direction of the ray.
		 *
		 * @type {Vector3}
		 */
		this.direction = direction;

	}

	/**
	 * Sets the ray's components by copying the given values.
	 *
	 * @param {Vector3} origin - The origin.
	 * @param {Vector3} direction - The direction.
	 * @return {Ray} A reference to this ray.
	 */
	set( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	}

	/**
	 * Copies the values of the given ray to this instance.
	 *
	 * @param {Ray} ray - The ray to copy.
	 * @return {Ray} A reference to this ray.
	 */
	copy( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	}

	/**
	 * Returns a vector that is located at a given distance along this ray.
	 *
	 * @param {number} t - The distance along the ray to retrieve a position for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} A position on the ray.
	 */
	at( t, target ) {

		return target.copy( this.origin ).addScaledVector( this.direction, t );

	}

	/**
	 * Adjusts the direction of the ray to point at the given vector in world space.
	 *
	 * @param {Vector3} v - The target position.
	 * @return {Ray} A reference to this ray.
	 */
	lookAt( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	}

	/**
	 * Shift the origin of this ray along its direction by the given distance.
	 *
	 * @param {number} t - The distance along the ray to interpolate.
	 * @return {Ray} A reference to this ray.
	 */
	recast( t ) {

		this.origin.copy( this.at( t, _vector$a ) );

		return this;

	}

	/**
	 * Returns the point along this ray that is closest to the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The closest point on this ray.
	 */
	closestPointToPoint( point, target ) {

		target.subVectors( point, this.origin );

		const directionDistance = target.dot( this.direction );

		if ( directionDistance < 0 ) {

			return target.copy( this.origin );

		}

		return target.copy( this.origin ).addScaledVector( this.direction, directionDistance );

	}

	/**
	 * Returns the distance of the closest approach between this ray and the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceToPoint( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	}

	/**
	 * Returns the squared distance of the closest approach between this ray and the given point.
	 *
	 * @param {Vector3} point - A point in 3D space to compute the distance to.
	 * @return {number} The squared distance.
	 */
	distanceSqToPoint( point ) {

		const directionDistance = _vector$a.subVectors( point, this.origin ).dot( this.direction );

		// point behind the ray

		if ( directionDistance < 0 ) {

			return this.origin.distanceToSquared( point );

		}

		_vector$a.copy( this.origin ).addScaledVector( this.direction, directionDistance );

		return _vector$a.distanceToSquared( point );

	}

	/**
	 * Returns the squared distance between this ray and the given line segment.
	 *
	 * @param {Vector3} v0 - The start point of the line segment.
	 * @param {Vector3} v1 - The end point of the line segment.
	 * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
	 * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
	 * @return {number} The squared distance.
	 */
	distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteDistRaySegment.h
		// It returns the min distance between the ray and the segment
		// defined by v0 and v1
		// It can also set two optional targets :
		// - The closest point on the ray
		// - The closest point on the segment

		_segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
		_segDir.copy( v1 ).sub( v0 ).normalize();
		_diff.copy( this.origin ).sub( _segCenter );

		const segExtent = v0.distanceTo( v1 ) * 0.5;
		const a01 = - this.direction.dot( _segDir );
		const b0 = _diff.dot( this.direction );
		const b1 = - _diff.dot( _segDir );
		const c = _diff.lengthSq();
		const det = Math.abs( 1 - a01 * a01 );
		let s0, s1, sqrDist, extDet;

		if ( det > 0 ) {

			// The ray and segment are not parallel.

			s0 = a01 * b1 - b0;
			s1 = a01 * b0 - b1;
			extDet = segExtent * det;

			if ( s0 >= 0 ) {

				if ( s1 >= - extDet ) {

					if ( s1 <= extDet ) {

						// region 0
						// Minimum at interior points of ray and segment.

						const invDet = 1 / det;
						s0 *= invDet;
						s1 *= invDet;
						sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

					} else {

						// region 1

						s1 = segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					// region 5

					s1 = - segExtent;
					s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			} else {

				if ( s1 <= - extDet ) {

					// region 4

					s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				} else if ( s1 <= extDet ) {

					// region 3

					s0 = 0;
					s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = s1 * ( s1 + 2 * b1 ) + c;

				} else {

					// region 2

					s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
					s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
					sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

				}

			}

		} else {

			// Ray and segment are parallel.

			s1 = ( a01 > 0 ) ? - segExtent : segExtent;
			s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
			sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

		}

		if ( optionalPointOnRay ) {

			optionalPointOnRay.copy( this.origin ).addScaledVector( this.direction, s0 );

		}

		if ( optionalPointOnSegment ) {

			optionalPointOnSegment.copy( _segCenter ).addScaledVector( _segDir, s1 );

		}

		return sqrDist;

	}

	/**
	 * Intersects this ray with the given sphere, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Sphere} sphere - The sphere to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectSphere( sphere, target ) {

		_vector$a.subVectors( sphere.center, this.origin );
		const tca = _vector$a.dot( this.direction );
		const d2 = _vector$a.dot( _vector$a ) - tca * tca;
		const radius2 = sphere.radius * sphere.radius;

		if ( d2 > radius2 ) return null;

		const thc = Math.sqrt( radius2 - d2 );

		// t0 = first intersect point - entrance on front of sphere
		const t0 = tca - thc;

		// t1 = second intersect point - exit point on back of sphere
		const t1 = tca + thc;

		// test to see if t1 is behind the ray - if so, return null
		if ( t1 < 0 ) return null;

		// test to see if t0 is behind the ray:
		// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
		// in order to always return an intersect point that is in front of the ray.
		if ( t0 < 0 ) return this.at( t1, target );

		// else t0 is in front of the ray, so return the first collision point scaled by t0
		return this.at( t0, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given sphere.
	 *
	 * @param {Sphere} sphere - The sphere to intersect.
	 * @return {boolean} Whether this ray intersects with the given sphere or not.
	 */
	intersectsSphere( sphere ) {

		if ( sphere.radius < 0 ) return false; // handle empty spheres, see #31187

		return this.distanceSqToPoint( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	/**
	 * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
	 * does not intersect with the plane.
	 *
	 * @param {Plane} plane - The plane to compute the distance to.
	 * @return {?number} Whether this ray intersects with the given sphere or not.
	 */
	distanceToPlane( plane ) {

		const denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		const t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t : null;

	}

	/**
	 * Intersects this ray with the given plane, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Plane} plane - The plane to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectPlane( plane, target ) {

		const t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given plane.
	 *
	 * @param {Plane} plane - The plane to intersect.
	 * @return {boolean} Whether this ray intersects with the given plane or not.
	 */
	intersectsPlane( plane ) {

		// check if the ray lies on the plane first

		const distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		const denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	}

	/**
	 * Intersects this ray with the given bounding box, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectBox( box, target ) {

		let tmin, tmax, tymin, tymax, tzmin, tzmax;

		const invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		const origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		if ( tymin > tmin || isNaN( tmin ) ) tmin = tymin;

		if ( tymax < tmax || isNaN( tmax ) ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, target );

	}

	/**
	 * Returns `true` if this ray intersects with the given box.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @return {boolean} Whether this ray intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return this.intersectBox( box, _vector$a ) !== null;

	}

	/**
	 * Intersects this ray with the given triangle, returning the intersection
	 * point or `null` if there is no intersection.
	 *
	 * @param {Vector3} a - The first vertex of the triangle.
	 * @param {Vector3} b - The second vertex of the triangle.
	 * @param {Vector3} c - The third vertex of the triangle.
	 * @param {boolean} backfaceCulling - Whether to use backface culling or not.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The intersection point.
	 */
	intersectTriangle( a, b, c, backfaceCulling, target ) {

		// Compute the offset origin, edges, and normal.

		// from https://github.com/pmjoniak/GeometricTools/blob/master/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

		_edge1.subVectors( b, a );
		_edge2.subVectors( c, a );
		_normal$1.crossVectors( _edge1, _edge2 );

		// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
		// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
		//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
		//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
		//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
		let DdN = this.direction.dot( _normal$1 );
		let sign;

		if ( DdN > 0 ) {

			if ( backfaceCulling ) return null;
			sign = 1;

		} else if ( DdN < 0 ) {

			sign = -1;
			DdN = - DdN;

		} else {

			return null;

		}

		_diff.subVectors( this.origin, a );
		const DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

		// b1 < 0, no intersection
		if ( DdQxE2 < 0 ) {

			return null;

		}

		const DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

		// b2 < 0, no intersection
		if ( DdE1xQ < 0 ) {

			return null;

		}

		// b1+b2 > 1, no intersection
		if ( DdQxE2 + DdE1xQ > DdN ) {

			return null;

		}

		// Line intersects triangle, check if ray does.
		const QdN = - sign * _diff.dot( _normal$1 );

		// t < 0, no intersection
		if ( QdN < 0 ) {

			return null;

		}

		// Ray intersects triangle.
		return this.at( QdN / DdN, target );

	}

	/**
	 * Transforms this ray with the given 4x4 transformation matrix.
	 *
	 * @param {Matrix4} matrix4 - The transformation matrix.
	 * @return {Ray} A reference to this ray.
	 */
	applyMatrix4( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	}

	/**
	 * Returns `true` if this ray is equal with the given one.
	 *
	 * @param {Ray} ray - The ray to test for equality.
	 * @return {boolean} Whether this ray is equal with the given one.
	 */
	equals( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

	/**
	 * Returns a new ray with copied values from this instance.
	 *
	 * @return {Ray} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

}

/**
 * Represents a 4x4 matrix.
 *
 * The most common use of a 4x4 matrix in 3D computer graphics is as a transformation matrix.
 * For an introduction to transformation matrices as used in WebGL, check out [this tutorial]{@link https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices}
 *
 * This allows a 3D vector representing a point in 3D space to undergo
 * transformations such as translation, rotation, shear, scale, reflection,
 * orthogonal or perspective projection and so on, by being multiplied by the
 * matrix. This is known as `applying` the matrix to the vector.
 *
 * A Note on Row-Major and Column-Major Ordering:
 *
 * The constructor and {@link Matrix3#set} method take arguments in
 * [row-major]{@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order}
 * order, while internally they are stored in the {@link Matrix3#elements} array in column-major order.
 * This means that calling:
 * ```js
 * const m = new THREE.Matrix4();
 * m.set( 11, 12, 13, 14,
 *        21, 22, 23, 24,
 *        31, 32, 33, 34,
 *        41, 42, 43, 44 );
 * ```
 * will result in the elements array containing:
 * ```js
 * m.elements = [ 11, 21, 31, 41,
 *                12, 22, 32, 42,
 *                13, 23, 33, 43,
 *                14, 24, 34, 44 ];
 * ```
 * and internally all calculations are performed using column-major ordering.
 * However, as the actual ordering makes no difference mathematically and
 * most people are used to thinking about matrices in row-major order, the
 * three.js documentation shows matrices in row-major order. Just bear in
 * mind that if you are reading the source code, you'll have to take the
 * transpose of any matrices outlined here to make sense of the calculations.
 */
class Matrix4 {

	/**
	 * Constructs a new 4x4 matrix. The arguments are supposed to be
	 * in row-major order. If no arguments are provided, the constructor
	 * initializes the matrix as an identity matrix.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n14] - 1-4 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n24] - 2-4 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @param {number} [n34] - 3-4 matrix element.
	 * @param {number} [n41] - 4-1 matrix element.
	 * @param {number} [n42] - 4-2 matrix element.
	 * @param {number} [n43] - 4-3 matrix element.
	 * @param {number} [n44] - 4-4 matrix element.
	 */
	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Matrix4.prototype.isMatrix4 = true;

		/**
		 * A column-major list of matrix values.
		 *
		 * @type {Array<number>}
		 */
		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	/**
	 * Sets the elements of the matrix.The arguments are supposed to be
	 * in row-major order.
	 *
	 * @param {number} [n11] - 1-1 matrix element.
	 * @param {number} [n12] - 1-2 matrix element.
	 * @param {number} [n13] - 1-3 matrix element.
	 * @param {number} [n14] - 1-4 matrix element.
	 * @param {number} [n21] - 2-1 matrix element.
	 * @param {number} [n22] - 2-2 matrix element.
	 * @param {number} [n23] - 2-3 matrix element.
	 * @param {number} [n24] - 2-4 matrix element.
	 * @param {number} [n31] - 3-1 matrix element.
	 * @param {number} [n32] - 3-2 matrix element.
	 * @param {number} [n33] - 3-3 matrix element.
	 * @param {number} [n34] - 3-4 matrix element.
	 * @param {number} [n41] - 4-1 matrix element.
	 * @param {number} [n42] - 4-2 matrix element.
	 * @param {number} [n43] - 4-3 matrix element.
	 * @param {number} [n44] - 4-4 matrix element.
	 * @return {Matrix4} A reference to this matrix.
	 */
	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	/**
	 * Sets this matrix to the 4x4 identity matrix.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Returns a matrix with copied values from this instance.
	 *
	 * @return {Matrix4} A clone of this instance.
	 */
	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	/**
	 * Copies the values of the given matrix to this instance.
	 *
	 * @param {Matrix4} m - The matrix to copy.
	 * @return {Matrix4} A reference to this matrix.
	 */
	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	/**
	 * Copies the translation component of the given matrix
	 * into this matrix's translation component.
	 *
	 * @param {Matrix4} m - The matrix to copy the translation component.
	 * @return {Matrix4} A reference to this matrix.
	 */
	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	/**
	 * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The 3x3 matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Extracts the basis of this matrix into the three axis vectors provided.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	/**
	 * Sets the given basis vectors to this matrix.
	 *
	 * @param {Vector3} xAxis - The basis's x axis.
	 * @param {Vector3} yAxis - The basis's y axis.
	 * @param {Vector3} zAxis - The basis's z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	/**
	 * Extracts the rotation component of the given matrix
	 * into this matrix's rotation component.
	 *
	 * Note: This method does not support reflection matrices.
	 *
	 * @param {Matrix4} m - The matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	extractRotation( m ) {

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
	 * the rotation specified by the given Euler angles. The rest of
	 * the matrix is set to the identity. Depending on the {@link Euler#order},
	 * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
	 * for a complete list.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Sets the rotation component of this matrix to the rotation specified by
	 * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
	 * The rest of the matrix is set to the identity.
	 *
	 * @param {Quaternion} q - The Quaternion.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	/**
	 * Sets the rotation component of the transformation matrix, looking from `eye` towards
	 * `target`, and oriented by the up-direction.
	 *
	 * @param {Vector3} eye - The eye vector.
	 * @param {Vector3} target - The target vector.
	 * @param {Vector3} up - The up vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	/**
	 * Post-multiplies this matrix by the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The matrix to multiply with.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	/**
	 * Pre-multiplies this matrix by the given 4x4 matrix.
	 *
	 * @param {Matrix4} m - The matrix to multiply with.
	 * @return {Matrix4} A reference to this matrix.
	 */
	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	/**
	 * Multiples the given 4x4 matrices and stores the result
	 * in this matrix.
	 *
	 * @param {Matrix4} a - The first matrix.
	 * @param {Matrix4} b - The second matrix.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	/**
	 * Multiplies every component of the matrix by the given scalar.
	 *
	 * @param {number} s - The scalar.
	 * @return {Matrix4} A reference to this matrix.
	 */
	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	/**
	 * Computes and returns the determinant of this matrix.
	 *
	 * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
	 *
	 * @return {number} The determinant.
	 */
	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	/**
	 * Transposes this matrix in place.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	/**
	 * Sets the position component for this matrix from the given vector,
	 * without affecting the rest of the matrix.
	 *
	 * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
	 * @param {number} y - The y component of the vector.
	 * @param {number} z - The z component of the vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	/**
	 * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
	 * You can not invert with a determinant of zero. If you attempt this, the method produces
	 * a zero matrix instead.
	 *
	 * @return {Matrix4} A reference to this matrix.
	 */
	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	/**
	 * Multiplies the columns of this matrix by the given vector.
	 *
	 * @param {Vector3} v - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	/**
	 * Gets the maximum scale value of the three axes.
	 *
	 * @return {number} The maximum scale.
	 */
	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	/**
	 * Sets this matrix as a translation transform from the given vector.
	 *
	 * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
	 * @param {number} y - The amount to translate in the Y axis.
	 * @param {number} z - The amount to translate in the z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the X axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the Y axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the Z axis by
	 * the given angle.
	 *
	 * @param {number} theta - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a rotational transformation around the given axis by
	 * the given angle.
	 *
	 * This is a somewhat controversial but mathematically sound alternative to
	 * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
	 *
	 * @param {Vector3} axis - The normalized rotation axis.
	 * @param {number} angle - The rotation in radians.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a scale transformation.
	 *
	 * @param {number} x - The amount to scale in the X axis.
	 * @param {number} y - The amount to scale in the Y axis.
	 * @param {number} z - The amount to scale in the Z axis.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix as a shear transformation.
	 *
	 * @param {number} xy - The amount to shear X by Y.
	 * @param {number} xz - The amount to shear X by Z.
	 * @param {number} yx - The amount to shear Y by X.
	 * @param {number} yz - The amount to shear Y by Z.
	 * @param {number} zx - The amount to shear Z by X.
	 * @param {number} zy - The amount to shear Z by Y.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	/**
	 * Sets this matrix to the transformation composed of the given position,
	 * rotation (Quaternion) and scale.
	 *
	 * @param {Vector3} position - The position vector.
	 * @param {Quaternion} quaternion - The rotation as a Quaternion.
	 * @param {Vector3} scale - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Decomposes this matrix into its position, rotation and scale components
	 * and provides the result in the given objects.
	 *
	 * Note: Not all matrices are decomposable in this way. For example, if an
	 * object has a non-uniformly scaled parent, then the object's world matrix
	 * may not be decomposable, and this method may not be appropriate.
	 *
	 * @param {Vector3} position - The position vector.
	 * @param {Quaternion} quaternion - The rotation as a Quaternion.
	 * @param {Vector3} scale - The scale vector.
	 * @return {Matrix4} A reference to this matrix.
	 */
	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$2.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$2.elements[ 0 ] *= invSX;
		_m1$2.elements[ 1 ] *= invSX;
		_m1$2.elements[ 2 ] *= invSX;

		_m1$2.elements[ 4 ] *= invSY;
		_m1$2.elements[ 5 ] *= invSY;
		_m1$2.elements[ 6 ] *= invSY;

		_m1$2.elements[ 8 ] *= invSZ;
		_m1$2.elements[ 9 ] *= invSZ;
		_m1$2.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$2 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	/**
	 * Creates a perspective projection matrix. This is used internally by
	 * {@link PerspectiveCamera#updateProjectionMatrix}.

	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
	 * @param {number} near - The distance from the camera to the near plane.
	 * @param {number} far - The distance from the camera to the far plane.
	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false ) {

		const te = this.elements;

		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( reversedDepth ) {

			c = near / ( far - near );
			d = ( far * near ) / ( far - near );

		} else {

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				c = - ( far + near ) / ( far - near );
				d = ( -2 * far * near ) / ( far - near );

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				c = - far / ( far - near );
				d = ( - far * near ) / ( far - near );

			} else {

				throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

			}

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = -1;	te[ 15 ] = 0;

		return this;

	}

	/**
	 * Creates a orthographic projection matrix. This is used internally by
	 * {@link OrthographicCamera#updateProjectionMatrix}.

	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
	 * @param {number} near - The distance from the camera to the near plane.
	 * @param {number} far - The distance from the camera to the far plane.
	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
	 * @return {Matrix4} A reference to this matrix.
	 */
	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false ) {

		const te = this.elements;

		const x = 2 / ( right - left );
		const y = 2 / ( top - bottom );

		const a = - ( right + left ) / ( right - left );
		const b = - ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( reversedDepth ) {

			c = 1 / ( far - near );
			d = far / ( far - near );

		} else {

			if ( coordinateSystem === WebGLCoordinateSystem ) {

				c = -2 / ( far - near );
				d = - ( far + near ) / ( far - near );

			} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

				c = -1 / ( far - near );
				d = - near / ( far - near );

			} else {

				throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

			}

		}

		te[ 0 ] = x;		te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = a;
		te[ 1 ] = 0; 		te[ 5 ] = y;		te[ 9 ] = 0; 		te[ 13 ] = b;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = c;		te[ 14 ] = d;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	/**
	 * Returns `true` if this matrix is equal with the given one.
	 *
	 * @param {Matrix4} matrix - The matrix to test for equality.
	 * @return {boolean} Whether this matrix is equal with the given one.
	 */
	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	/**
	 * Sets the elements of the matrix from the given array.
	 *
	 * @param {Array<number>} array - The matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Matrix4} A reference to this matrix.
	 */
	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	/**
	 * Writes the elements of this matrix to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The matrix elements in column-major order.
	 */
	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$2 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$2 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

/**
 * A class representing Euler angles.
 *
 * Euler angles describe a rotational transformation by rotating an object on
 * its various axes in specified amounts per axis, and a specified axis
 * order.
 *
 * Iterating through an instance will yield its components (x, y, z,
 * order) in the corresponding order.
 *
 * ```js
 * const a = new THREE.Euler( 0, 1, 1.57, 'XYZ' );
 * const b = new THREE.Vector3( 1, 0, 1 );
 * b.applyEuler(a);
 * ```
 */
class Euler {

	/**
	 * Constructs a new euler instance.
	 *
	 * @param {number} [x=0] - The angle of the x axis in radians.
	 * @param {number} [y=0] - The angle of the y axis in radians.
	 * @param {number} [z=0] - The angle of the z axis in radians.
	 * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
	 */
	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	/**
	 * The angle of the x axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	/**
	 * The angle of the y axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	/**
	 * The angle of the z axis in radians.
	 *
	 * @type {number}
	 * @default 0
	 */
	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	/**
	 * A string representing the order that the rotations are applied.
	 *
	 * @type {string}
	 * @default 'XYZ'
	 */
	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	/**
	 * Sets the Euler components.
	 *
	 * @param {number} x - The angle of the x axis in radians.
	 * @param {number} y - The angle of the y axis in radians.
	 * @param {number} z - The angle of the z axis in radians.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Returns a new Euler instance with copied values from this instance.
	 *
	 * @return {Euler} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	/**
	 * Copies the values of the given Euler instance to this instance.
	 *
	 * @param {Euler} euler - The Euler instance to copy.
	 * @return {Euler} A reference to this Euler instance.
	 */
	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets the angles of this Euler instance from a pure rotation matrix.
	 *
	 * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromRotationMatrix( m, order = this._order, update = true ) {

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, -1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, -1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, -1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, -1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, -1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, -1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	/**
	 * Sets the angles of this Euler instance from a normalized quaternion.
	 *
	 * @param {Quaternion} q - A normalized Quaternion.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromQuaternion( q, order, update ) {

		_matrix$2.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$2, order, update );

	}

	/**
	 * Sets the angles of this Euler instance from the given vector.
	 *
	 * @param {Vector3} v - The vector.
	 * @param {string} [order] - A string representing the order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	/**
	 * Resets the euler angle with a new order by creating a quaternion from this
	 * euler angle and then setting this euler angle with the quaternion and the
	 * new order.
	 *
	 * Warning: This discards revolution information.
	 *
	 * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
	 * @return {Euler} A reference to this Euler instance.
	 */
	reorder( newOrder ) {

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	/**
	 * Returns `true` if this Euler instance is equal with the given one.
	 *
	 * @param {Euler} euler - The Euler instance to test for equality.
	 * @return {boolean} Whether this Euler instance is equal with the given one.
	 */
	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	/**
	 * Sets this Euler instance's components to values from the given array. The first three
	 * entries of the array are assign to the x,y and z components. An optional fourth entry
	 * defines the Euler order.
	 *
	 * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
	 * @return {Euler} A reference to this Euler instance.
	 */
	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	/**
	 * Writes the components of this Euler instance to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number,number,number,string>} The Euler components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

/**
 * The default Euler angle order.
 *
 * @static
 * @type {string}
 * @default 'XYZ'
 */
Euler.DEFAULT_ORDER = 'XYZ';

/**
 * A layers object assigns an 3D object to 1 or more of 32
 * layers numbered `0` to `31` - internally the layers are stored as a
 * bit mask], and by default all 3D objects are a member of layer `0`.
 *
 * This can be used to control visibility - an object must share a layer with
 * a camera to be visible when that camera's view is
 * rendered.
 *
 * All classes that inherit from {@link Object3D} have an `layers` property which
 * is an instance of this class.
 */
class Layers {

	/**
	 * Constructs a new layers instance, with membership
	 * initially set to layer `0`.
	 */
	constructor() {

		/**
		 * A bit mask storing which of the 32 layers this layers object is currently
		 * a member of.
		 *
		 * @type {number}
		 */
		this.mask = 1 | 0;

	}

	/**
	 * Sets membership to the given layer, and remove membership all other layers.
	 *
	 * @param {number} layer - The layer to set.
	 */
	set( layer ) {

		this.mask = ( 1 << layer | 0 ) >>> 0;

	}

	/**
	 * Adds membership of the given layer.
	 *
	 * @param {number} layer - The layer to enable.
	 */
	enable( layer ) {

		this.mask |= 1 << layer | 0;

	}

	/**
	 * Adds membership to all layers.
	 */
	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	/**
	 * Toggles the membership of the given layer.
	 *
	 * @param {number} layer - The layer to toggle.
	 */
	toggle( layer ) {

		this.mask ^= 1 << layer | 0;

	}

	/**
	 * Removes membership of the given layer.
	 *
	 * @param {number} layer - The layer to enable.
	 */
	disable( layer ) {

		this.mask &= ~ ( 1 << layer | 0 );

	}

	/**
	 * Removes the membership from all layers.
	 */
	disableAll() {

		this.mask = 0;

	}

	/**
	 * Returns `true` if this and the given layers object have at least one
	 * layer in common.
	 *
	 * @param {Layers} layers - The layers to test.
	 * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
	 */
	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	/**
	 * Returns `true` if the given layer is enabled.
	 *
	 * @param {number} layer - The layer to test.
	 * @return {boolean } Whether the given layer is enabled or not.
	 */
	isEnabled( layer ) {

		return ( this.mask & ( 1 << layer | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$1 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

/**
 * Fires when the object has been added to its parent object.
 *
 * @event Object3D#added
 * @type {Object}
 */
const _addedEvent = { type: 'added' };

/**
 * Fires when the object has been removed from its parent object.
 *
 * @event Object3D#removed
 * @type {Object}
 */
const _removedEvent = { type: 'removed' };

/**
 * Fires when a new child object has been added.
 *
 * @event Object3D#childadded
 * @type {Object}
 */
const _childaddedEvent = { type: 'childadded', child: null };

/**
 * Fires when a child object has been removed.
 *
 * @event Object3D#childremoved
 * @type {Object}
 */
const _childremovedEvent = { type: 'childremoved', child: null };

/**
 * This is the base class for most objects in three.js and provides a set of
 * properties and methods for manipulating objects in 3D space.
 *
 * @augments EventDispatcher
 */
class Object3D extends EventDispatcher {

	/**
	 * Constructs a new 3D object.
	 */
	constructor() {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isObject3D = true;

		/**
		 * The ID of the 3D object.
		 *
		 * @name Object3D#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		/**
		 * The UUID of the 3D object.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the 3D object.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The type property is used for detecting the object type
		 * in context of serialization/deserialization.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.type = 'Object3D';

		/**
		 * A reference to the parent object.
		 *
		 * @type {?Object3D}
		 * @default null
		 */
		this.parent = null;

		/**
		 * An array holding the child 3D objects of this instance.
		 *
		 * @type {Array<Object3D>}
		 */
		this.children = [];

		/**
		 * Defines the `up` direction of the 3D object which influences
		 * the orientation via methods like {@link Object3D#lookAt}.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.
		 *
		 * @type {Vector3}
		 */
		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			/**
			 * Represents the object's local position.
			 *
			 * @name Object3D#position
			 * @type {Vector3}
			 * @default (0,0,0)
			 */
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			/**
			 * Represents the object's local rotation as Euler angles, in radians.
			 *
			 * @name Object3D#rotation
			 * @type {Euler}
			 * @default (0,0,0)
			 */
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			/**
			 * Represents the object's local rotation as Quaternions.
			 *
			 * @name Object3D#quaternion
			 * @type {Quaternion}
			 */
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			/**
			 * Represents the object's local scale.
			 *
			 * @name Object3D#scale
			 * @type {Vector3}
			 * @default (1,1,1)
			 */
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			/**
			 * Represents the object's model-view matrix.
			 *
			 * @name Object3D#modelViewMatrix
			 * @type {Matrix4}
			 */
			modelViewMatrix: {
				value: new Matrix4()
			},
			/**
			 * Represents the object's normal matrix.
			 *
			 * @name Object3D#normalMatrix
			 * @type {Matrix3}
			 */
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		/**
		 * Represents the object's transformation matrix in local space.
		 *
		 * @type {Matrix4}
		 */
		this.matrix = new Matrix4();

		/**
		 * Represents the object's transformation matrix in world space.
		 * If the 3D object has no parent, then it's identical to the local transformation matrix
		 *
		 * @type {Matrix4}
		 */
		this.matrixWorld = new Matrix4();

		/**
		 * When set to `true`, the engine automatically computes the local matrix from position,
		 * rotation and scale every frame.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_AUTO_UPDATE`.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		/**
		 * When set to `true`, the engine automatically computes the world matrix from the current local
		 * matrix and the object's transformation hierarchy.
		 *
		 * The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer

		/**
		 * When set to `true`, it calculates the world matrix in that frame and resets this property
		 * to `false`.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.matrixWorldNeedsUpdate = false;

		/**
		 * The layer membership of the 3D object. The 3D object is only visible if it has
		 * at least one layer in common with the camera in use. This property can also be
		 * used to filter out unwanted objects in ray-intersection tests when using {@link Raycaster}.
		 *
		 * @type {Layers}
		 */
		this.layers = new Layers();

		/**
		 * When set to `true`, the 3D object gets rendered.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.visible = true;

		/**
		 * When set to `true`, the 3D object gets rendered into shadow maps.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.castShadow = false;

		/**
		 * When set to `true`, the 3D object is affected by shadows in the scene.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.receiveShadow = false;

		/**
		 * When set to `true`, the 3D object is honored by view frustum culling.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.frustumCulled = true;

		/**
		 * This value allows the default rendering order of scene graph objects to be
		 * overridden although opaque and transparent objects remain sorted independently.
		 * When this property is set for an instance of {@link Group},all descendants
		 * objects will be sorted and rendered together. Sorting is from lowest to highest
		 * render order.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.renderOrder = 0;

		/**
		 * An array holding the animation clips of the 3D object.
		 *
		 * @type {Array<AnimationClip>}
		 */
		this.animations = [];

		/**
		 * Custom depth material to be used when rendering to the depth map. Can only be used
		 * in context of meshes. When shadow-casting with a {@link DirectionalLight} or {@link SpotLight},
		 * if you are modifying vertex positions in the vertex shader you must specify a custom depth
		 * material for proper shadows.
		 *
		 * Only relevant in context of {@link WebGLRenderer}.
		 *
		 * @type {(Material|undefined)}
		 * @default undefined
		 */
		this.customDepthMaterial = undefined;

		/**
		 * Same as {@link Object3D#customDepthMaterial}, but used with {@link PointLight}.
		 *
		 * Only relevant in context of {@link WebGLRenderer}.
		 *
		 * @type {(Material|undefined)}
		 * @default undefined
		 */
		this.customDistanceMaterial = undefined;

		/**
		 * An object that can be used to store custom data about the 3D object. It
		 * should not hold references to functions as these will not be cloned.
		 *
		 * @type {Object}
		 */
		this.userData = {};

	}

	/**
	 * A callback that is executed immediately before a 3D object is rendered to a shadow map.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {Camera} shadowCamera - The shadow camera.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} depthMaterial - The depth material.
	 * @param {Object} group - The geometry group data.
	 */
	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	/**
	 * A callback that is executed immediately after a 3D object is rendered to a shadow map.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {Camera} shadowCamera - The shadow camera.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} depthMaterial - The depth material.
	 * @param {Object} group - The geometry group data.
	 */
	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	/**
	 * A callback that is executed immediately before a 3D object is rendered.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} material - The 3D object's material.
	 * @param {Object} group - The geometry group data.
	 */
	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	/**
	 * A callback that is executed immediately after a 3D object is rendered.
	 *
	 * @param {Renderer|WebGLRenderer} renderer - The renderer.
	 * @param {Object3D} object - The 3D object.
	 * @param {Camera} camera - The camera that is used to render the scene.
	 * @param {BufferGeometry} geometry - The 3D object's geometry.
	 * @param {Material} material - The 3D object's material.
	 * @param {Object} group - The geometry group data.
	 */
	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	/**
	 * Applies the given transformation matrix to the object and updates the object's position,
	 * rotation and scale.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 */
	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	/**
	 * Applies a rotation represented by given the quaternion to the 3D object.
	 *
	 * @param {Quaternion} q - The quaternion.
	 * @return {Object3D} A reference to this instance.
	 */
	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	/**
	 * Sets the given rotation represented as an axis/angle couple to the 3D object.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 */
	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	/**
	 * Sets the given rotation represented as Euler angles to the 3D object.
	 *
	 * @param {Euler} euler - The Euler angles.
	 */
	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	/**
	 * Sets the given rotation represented as rotation matrix to the 3D object.
	 *
	 * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
	 * a pure rotation matrix (i.e, unscaled).
	 */
	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	/**
	 * Sets the given rotation represented as a Quaternion to the 3D object.
	 *
	 * @param {Quaternion} q - The Quaternion
	 */
	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	/**
	 * Rotates the 3D object along an axis in local space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	/**
	 * Rotates the 3D object along an axis in world space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	/**
	 * Rotates the 3D object around its X axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	/**
	 * Rotates the 3D object around its Y axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	/**
	 * Rotates the 3D object around its Z axis in local space.
	 *
	 * @param {number} angle - The angle in radians.
	 * @return {Object3D} A reference to this instance.
	 */
	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	/**
	 * Translate the 3D object by a distance along the given axis in local space.
	 *
	 * @param {Vector3} axis - The (normalized) axis vector.
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	/**
	 * Translate the 3D object by a distance along its X-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	/**
	 * Translate the 3D object by a distance along its Y-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	/**
	 * Translate the 3D object by a distance along its Z-axis in local space.
	 *
	 * @param {number} distance - The distance in world units.
	 * @return {Object3D} A reference to this instance.
	 */
	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	/**
	 * Converts the given vector from this 3D object's local space to world space.
	 *
	 * @param {Vector3} vector - The vector to convert.
	 * @return {Vector3} The converted vector.
	 */
	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	/**
	 * Converts the given vector from this 3D object's word space to local space.
	 *
	 * @param {Vector3} vector - The vector to convert.
	 * @return {Vector3} The converted vector.
	 */
	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

	}

	/**
	 * Rotates the object to face a point in world space.
	 *
	 * This method does not support objects having non-uniformly-scaled parent(s).
	 *
	 * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
	 * @param {number} [y] - The y coordinate in world space.
	 * @param {number} [z] - The z coordinate in world space.
	 */
	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$1.lookAt( _position$3, _target, this.up );

		} else {

			_m1$1.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$1 );

		if ( parent ) {

			_m1$1.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$1 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	/**
	 * Adds the given 3D object as a child to this 3D object. An arbitrary number of
	 * objects may be added. Any current parent on an object passed in here will be
	 * removed, since an object can have at most one parent.
	 *
	 * @fires Object3D#added
	 * @fires Object3D#childadded
	 * @param {Object3D} object - The 3D object to add.
	 * @return {Object3D} A reference to this instance.
	 */
	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			object.removeFromParent();
			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

			_childaddedEvent.child = object;
			this.dispatchEvent( _childaddedEvent );
			_childaddedEvent.child = null;

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	/**
	 * Removes the given 3D object as child from this 3D object.
	 * An arbitrary number of objects may be removed.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @param {Object3D} object - The 3D object to remove.
	 * @return {Object3D} A reference to this instance.
	 */
	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== -1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

			_childremovedEvent.child = object;
			this.dispatchEvent( _childremovedEvent );
			_childremovedEvent.child = null;

		}

		return this;

	}

	/**
	 * Removes this 3D object from its current parent.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @return {Object3D} A reference to this instance.
	 */
	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	/**
	 * Removes all child objects.
	 *
	 * @fires Object3D#removed
	 * @fires Object3D#childremoved
	 * @return {Object3D} A reference to this instance.
	 */
	clear() {

		return this.remove( ... this.children );

	}

	/**
	 * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
	 * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
	 *
	 * @fires Object3D#added
	 * @fires Object3D#childadded
	 * @param {Object3D} object - The 3D object to attach.
	 * @return {Object3D} A reference to this instance.
	 */
	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$1.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$1.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$1 );

		object.removeFromParent();
		object.parent = this;
		this.children.push( object );

		object.updateWorldMatrix( false, true );

		object.dispatchEvent( _addedEvent );

		_childaddedEvent.child = object;
		this.dispatchEvent( _childaddedEvent );
		_childaddedEvent.child = null;

		return this;

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching ID.
	 *
	 * @param {number} id - The id.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching name.
	 *
	 * @param {string} name - The name.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns the first with a matching property value.
	 *
	 * @param {string} name - The name of the property.
	 * @param {any} value - The value.
	 * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
	 */
	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	/**
	 * Searches through the 3D object and its children, starting with the 3D object
	 * itself, and returns all 3D objects with a matching property value.
	 *
	 * @param {string} name - The name of the property.
	 * @param {any} value - The value.
	 * @param {Array<Object3D>} result - The method stores the result in this array.
	 * @return {Array<Object3D>} The found 3D objects.
	 */
	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	/**
	 * Returns a vector representing the position of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's position in world space.
	 */
	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	/**
	 * Returns a Quaternion representing the position of the 3D object in world space.
	 *
	 * @param {Quaternion} target - The target Quaternion the result is stored to.
	 * @return {Quaternion} The 3D object's rotation in world space.
	 */
	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	/**
	 * Returns a vector representing the scale of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's scale in world space.
	 */
	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	/**
	 * Returns a vector representing the ("look") direction of the 3D object in world space.
	 *
	 * @param {Vector3} target - The target vector the result is stored to.
	 * @return {Vector3} The 3D object's direction in world space.
	 */
	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	/**
	 * Abstract method to get intersections between a casted ray and this
	 * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
	 * implement this method in order to use raycasting.
	 *
	 * @abstract
	 * @param {Raycaster} raycaster - The raycaster.
	 * @param {Array<Object>} intersects - An array holding the result of the method.
	 */
	raycast( /* raycaster, intersects */ ) {}

	/**
	 * Executes the callback on this 3D object and all descendants.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	/**
	 * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
	 * Descendants of invisible 3D objects are not traversed.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	/**
	 * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
	 *
	 * Note: Modifying the scene graph inside the callback is discouraged.
	 *
	 * @param {Function} callback - A callback function that allows to process the current 3D object.
	 */
	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	/**
	 * Updates the transformation matrix in local space by computing it from the current
	 * position, rotation and scale values.
	 */
	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	/**
	 * Updates the transformation matrix in world space of this 3D objects and its descendants.
	 *
	 * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
	 * local space. The computation of the local and world matrix can be controlled with the
	 * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
	 * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
	 *
	 * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
	 * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
	 */
	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.matrixWorldAutoUpdate === true ) {

				if ( this.parent === null ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// make sure descendants are updated if required

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			child.updateMatrixWorld( force );

		}

	}

	/**
	 * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
	 * update of ancestor and descendant nodes.
	 *
	 * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
	 * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
	 */
	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldAutoUpdate === true ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

		}

		// make sure descendants are updated

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				child.updateWorldMatrix( false, true );

			}

		}

	}

	/**
	 * Serializes the 3D object into JSON.
	 *
	 * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
	 * @return {Object} A JSON object representing the serialized 3D object.
	 * @see {@link ObjectLoader#parse}
	 */
	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.7,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.geometryInfo = this._geometryInfo.map( info => ( {
				...info,
				boundingBox: info.boundingBox ? info.boundingBox.toJSON() : undefined,
				boundingSphere: info.boundingSphere ? info.boundingSphere.toJSON() : undefined
			} ) );
			object.instanceInfo = this._instanceInfo.map( info => ( { ...info } ) );

			object.availableInstanceIds = this._availableInstanceIds.slice();
			object.availableGeometryIds = this._availableGeometryIds.slice();

			object.nextIndexStart = this._nextIndexStart;
			object.nextVertexStart = this._nextVertexStart;
			object.geometryCount = this._geometryCount;

			object.maxInstanceCount = this._maxInstanceCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			object.indirectTexture = this._indirectTexture.toJSON( meta );

			if ( this._colorsTexture !== null ) {

				object.colorsTexture = this._colorsTexture.toJSON( meta );

			}

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = this.boundingSphere.toJSON();

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = this.boundingBox.toJSON();

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	/**
	 * Returns a new 3D object with copied values from this instance.
	 *
	 * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
	 * @return {Object3D} A clone of this instance.
	 */
	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	/**
	 * Copies the values of the given 3D object to this instance.
	 *
	 * @param {Object3D} source - The 3D object to copy.
	 * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
	 * @return {Object3D} A reference to this instance.
	 */
	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

/**
 * The default up direction for objects, also used as the default
 * position for {@link DirectionalLight} and {@link HemisphereLight}.
 *
 * @static
 * @type {Vector3}
 * @default (0,1,0)
 */
Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );

/**
 * The default setting for {@link Object3D#matrixAutoUpdate} for
 * newly created 3D objects.
 *
 * @static
 * @type {boolean}
 * @default true
 */
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;

/**
 * The default setting for {@link Object3D#matrixWorldAutoUpdate} for
 * newly created 3D objects.
 *
 * @static
 * @type {boolean}
 * @default true
 */
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _v0$1 = /*@__PURE__*/ new Vector3();
const _v1$3 = /*@__PURE__*/ new Vector3();
const _v2$2 = /*@__PURE__*/ new Vector3();
const _v3$2 = /*@__PURE__*/ new Vector3();

const _vab = /*@__PURE__*/ new Vector3();
const _vac = /*@__PURE__*/ new Vector3();
const _vbc = /*@__PURE__*/ new Vector3();
const _vap = /*@__PURE__*/ new Vector3();
const _vbp = /*@__PURE__*/ new Vector3();
const _vcp = /*@__PURE__*/ new Vector3();

const _v40 = /*@__PURE__*/ new Vector4();
const _v41 = /*@__PURE__*/ new Vector4();
const _v42 = /*@__PURE__*/ new Vector4();

/**
 * A geometric triangle as defined by three vectors representing its three corners.
 */
class Triangle {

	/**
	 * Constructs a new triangle.
	 *
	 * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
	 * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
	 * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
	 */
	constructor( a = new Vector3(), b = new Vector3(), c = new Vector3() ) {

		/**
		 * The first corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.a = a;

		/**
		 * The second corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.b = b;

		/**
		 * The third corner of the triangle.
		 *
		 * @type {Vector3}
		 */
		this.c = c;

	}

	/**
	 * Computes the normal vector of a triangle.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's normal.
	 */
	static getNormal( a, b, c, target ) {

		target.subVectors( c, b );
		_v0$1.subVectors( a, b );
		target.cross( _v0$1 );

		const targetLengthSq = target.lengthSq();
		if ( targetLengthSq > 0 ) {

			return target.multiplyScalar( 1 / Math.sqrt( targetLengthSq ) );

		}

		return target.set( 0, 0, 0 );

	}

	/**
	 * Computes a barycentric coordinates from the given vector.
	 * Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The barycentric coordinates for the given point
	 */
	static getBarycoord( point, a, b, c, target ) {

		// based on: http://www.blackpawn.com/texts/pointinpoly/default.html

		_v0$1.subVectors( c, a );
		_v1$3.subVectors( b, a );
		_v2$2.subVectors( point, a );

		const dot00 = _v0$1.dot( _v0$1 );
		const dot01 = _v0$1.dot( _v1$3 );
		const dot02 = _v0$1.dot( _v2$2 );
		const dot11 = _v1$3.dot( _v1$3 );
		const dot12 = _v1$3.dot( _v2$2 );

		const denom = ( dot00 * dot11 - dot01 * dot01 );

		// collinear or singular triangle
		if ( denom === 0 ) {

			target.set( 0, 0, 0 );
			return null;

		}

		const invDenom = 1 / denom;
		const u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
		const v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

		// barycentric coordinates must always sum to 1
		return target.set( 1 - u - v, v, u );

	}

	/**
	 * Returns `true` if the given point, when projected onto the plane of the
	 * triangle, lies within the triangle.
	 *
	 * @param {Vector3} point - The point in 3D space to test.
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @return {boolean} Whether the given point, when projected onto the plane of the
	 * triangle, lies within the triangle or not.
	 */
	static containsPoint( point, a, b, c ) {

		// if the triangle is degenerate then we can't contain a point
		if ( this.getBarycoord( point, a, b, c, _v3$2 ) === null ) {

			return false;

		}

		return ( _v3$2.x >= 0 ) && ( _v3$2.y >= 0 ) && ( ( _v3$2.x + _v3$2.y ) <= 1 );

	}

	/**
	 * Computes the value barycentrically interpolated for the given point on the
	 * triangle. Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - Position of interpolated point.
	 * @param {Vector3} p1 - The first corner of the triangle.
	 * @param {Vector3} p2 - The second corner of the triangle.
	 * @param {Vector3} p3 - The third corner of the triangle.
	 * @param {Vector3} v1 - Value to interpolate of first vertex.
	 * @param {Vector3} v2 - Value to interpolate of second vertex.
	 * @param {Vector3} v3 - Value to interpolate of third vertex.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The interpolated value.
	 */
	static getInterpolation( point, p1, p2, p3, v1, v2, v3, target ) {

		if ( this.getBarycoord( point, p1, p2, p3, _v3$2 ) === null ) {

			target.x = 0;
			target.y = 0;
			if ( 'z' in target ) target.z = 0;
			if ( 'w' in target ) target.w = 0;
			return null;

		}

		target.setScalar( 0 );
		target.addScaledVector( v1, _v3$2.x );
		target.addScaledVector( v2, _v3$2.y );
		target.addScaledVector( v3, _v3$2.z );

		return target;

	}

	/**
	 * Computes the value barycentrically interpolated for the given attribute and indices.
	 *
	 * @param {BufferAttribute} attr - The attribute to interpolate.
	 * @param {number} i1 - Index of first vertex.
	 * @param {number} i2 - Index of second vertex.
	 * @param {number} i3 - Index of third vertex.
	 * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The interpolated attribute value.
	 */
	static getInterpolatedAttribute( attr, i1, i2, i3, barycoord, target ) {

		_v40.setScalar( 0 );
		_v41.setScalar( 0 );
		_v42.setScalar( 0 );

		_v40.fromBufferAttribute( attr, i1 );
		_v41.fromBufferAttribute( attr, i2 );
		_v42.fromBufferAttribute( attr, i3 );

		target.setScalar( 0 );
		target.addScaledVector( _v40, barycoord.x );
		target.addScaledVector( _v41, barycoord.y );
		target.addScaledVector( _v42, barycoord.z );

		return target;

	}

	/**
	 * Returns `true` if the triangle is oriented towards the given direction.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @param {Vector3} direction - The (normalized) direction vector.
	 * @return {boolean} Whether the triangle is oriented towards the given direction or not.
	 */
	static isFrontFacing( a, b, c, direction ) {

		_v0$1.subVectors( c, b );
		_v1$3.subVectors( a, b );

		// strictly front facing
		return ( _v0$1.cross( _v1$3 ).dot( direction ) < 0 ) ? true : false;

	}

	/**
	 * Sets the triangle's vertices by copying the given values.
	 *
	 * @param {Vector3} a - The first corner of the triangle.
	 * @param {Vector3} b - The second corner of the triangle.
	 * @param {Vector3} c - The third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	set( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	}

	/**
	 * Sets the triangle's vertices by copying the given array values.
	 *
	 * @param {Array<Vector3>} points - An array with 3D points.
	 * @param {number} i0 - The array index representing the first corner of the triangle.
	 * @param {number} i1 - The array index representing the second corner of the triangle.
	 * @param {number} i2 - The array index representing the third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	setFromPointsAndIndices( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	}

	/**
	 * Sets the triangle's vertices by copying the given attribute values.
	 *
	 * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
	 * @param {number} i0 - The attribute index representing the first corner of the triangle.
	 * @param {number} i1 - The attribute index representing the second corner of the triangle.
	 * @param {number} i2 - The attribute index representing the third corner of the triangle.
	 * @return {Triangle} A reference to this triangle.
	 */
	setFromAttributeAndIndices( attribute, i0, i1, i2 ) {

		this.a.fromBufferAttribute( attribute, i0 );
		this.b.fromBufferAttribute( attribute, i1 );
		this.c.fromBufferAttribute( attribute, i2 );

		return this;

	}

	/**
	 * Returns a new triangle with copied values from this instance.
	 *
	 * @return {Triangle} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

	/**
	 * Copies the values of the given triangle to this instance.
	 *
	 * @param {Triangle} triangle - The triangle to copy.
	 * @return {Triangle} A reference to this triangle.
	 */
	copy( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	}

	/**
	 * Computes the area of the triangle.
	 *
	 * @return {number} The triangle's area.
	 */
	getArea() {

		_v0$1.subVectors( this.c, this.b );
		_v1$3.subVectors( this.a, this.b );

		return _v0$1.cross( _v1$3 ).length() * 0.5;

	}

	/**
	 * Computes the midpoint of the triangle.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's midpoint.
	 */
	getMidpoint( target ) {

		return target.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	}

	/**
	 * Computes the normal of the triangle.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The triangle's normal.
	 */
	getNormal( target ) {

		return Triangle.getNormal( this.a, this.b, this.c, target );

	}

	/**
	 * Computes a plane the triangle lies within.
	 *
	 * @param {Plane} target - The target vector that is used to store the method's result.
	 * @return {Plane} The plane the triangle lies within.
	 */
	getPlane( target ) {

		return target.setFromCoplanarPoints( this.a, this.b, this.c );

	}

	/**
	 * Computes a barycentric coordinates from the given vector.
	 * Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - A point in 3D space.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The barycentric coordinates for the given point
	 */
	getBarycoord( point, target ) {

		return Triangle.getBarycoord( point, this.a, this.b, this.c, target );

	}

	/**
	 * Computes the value barycentrically interpolated for the given point on the
	 * triangle. Returns `null` if the triangle is degenerate.
	 *
	 * @param {Vector3} point - Position of interpolated point.
	 * @param {Vector3} v1 - Value to interpolate of first vertex.
	 * @param {Vector3} v2 - Value to interpolate of second vertex.
	 * @param {Vector3} v3 - Value to interpolate of third vertex.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {?Vector3} The interpolated value.
	 */
	getInterpolation( point, v1, v2, v3, target ) {

		return Triangle.getInterpolation( point, this.a, this.b, this.c, v1, v2, v3, target );

	}

	/**
	 * Returns `true` if the given point, when projected onto the plane of the
	 * triangle, lies within the triangle.
	 *
	 * @param {Vector3} point - The point in 3D space to test.
	 * @return {boolean} Whether the given point, when projected onto the plane of the
	 * triangle, lies within the triangle or not.
	 */
	containsPoint( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	}

	/**
	 * Returns `true` if the triangle is oriented towards the given direction.
	 *
	 * @param {Vector3} direction - The (normalized) direction vector.
	 * @return {boolean} Whether the triangle is oriented towards the given direction or not.
	 */
	isFrontFacing( direction ) {

		return Triangle.isFrontFacing( this.a, this.b, this.c, direction );

	}

	/**
	 * Returns `true` if this triangle intersects with the given box.
	 *
	 * @param {Box3} box - The box to intersect.
	 * @return {boolean} Whether this triangle intersects with the given box or not.
	 */
	intersectsBox( box ) {

		return box.intersectsTriangle( this );

	}

	/**
	 * Returns the closest point on the triangle to the given point.
	 *
	 * @param {Vector3} p - The point to compute the closest point for.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The closest point on the triangle.
	 */
	closestPointToPoint( p, target ) {

		const a = this.a, b = this.b, c = this.c;
		let v, w;

		// algorithm thanks to Real-Time Collision Detection by Christer Ericson,
		// published by Morgan Kaufmann Publishers, (c) 2005 Elsevier Inc.,
		// under the accompanying license; see chapter 5.1.5 for detailed explanation.
		// basically, we're distinguishing which of the voronoi regions of the triangle
		// the point lies in with the minimum amount of redundant computation.

		_vab.subVectors( b, a );
		_vac.subVectors( c, a );
		_vap.subVectors( p, a );
		const d1 = _vab.dot( _vap );
		const d2 = _vac.dot( _vap );
		if ( d1 <= 0 && d2 <= 0 ) {

			// vertex region of A; barycentric coords (1, 0, 0)
			return target.copy( a );

		}

		_vbp.subVectors( p, b );
		const d3 = _vab.dot( _vbp );
		const d4 = _vac.dot( _vbp );
		if ( d3 >= 0 && d4 <= d3 ) {

			// vertex region of B; barycentric coords (0, 1, 0)
			return target.copy( b );

		}

		const vc = d1 * d4 - d3 * d2;
		if ( vc <= 0 && d1 >= 0 && d3 <= 0 ) {

			v = d1 / ( d1 - d3 );
			// edge region of AB; barycentric coords (1-v, v, 0)
			return target.copy( a ).addScaledVector( _vab, v );

		}

		_vcp.subVectors( p, c );
		const d5 = _vab.dot( _vcp );
		const d6 = _vac.dot( _vcp );
		if ( d6 >= 0 && d5 <= d6 ) {

			// vertex region of C; barycentric coords (0, 0, 1)
			return target.copy( c );

		}

		const vb = d5 * d2 - d1 * d6;
		if ( vb <= 0 && d2 >= 0 && d6 <= 0 ) {

			w = d2 / ( d2 - d6 );
			// edge region of AC; barycentric coords (1-w, 0, w)
			return target.copy( a ).addScaledVector( _vac, w );

		}

		const va = d3 * d6 - d5 * d4;
		if ( va <= 0 && ( d4 - d3 ) >= 0 && ( d5 - d6 ) >= 0 ) {

			_vbc.subVectors( c, b );
			w = ( d4 - d3 ) / ( ( d4 - d3 ) + ( d5 - d6 ) );
			// edge region of BC; barycentric coords (0, 1-w, w)
			return target.copy( b ).addScaledVector( _vbc, w ); // edge region of BC

		}

		// face region
		const denom = 1 / ( va + vb + vc );
		// u = va * denom
		v = vb * denom;
		w = vc * denom;

		return target.copy( a ).addScaledVector( _vab, v ).addScaledVector( _vac, w );

	}

	/**
	 * Returns `true` if this triangle is equal with the given one.
	 *
	 * @param {Triangle} triangle - The triangle to test for equality.
	 * @return {boolean} Whether this triangle is equal with the given one.
	 */
	equals( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

}

const _colorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

const _hslA = { h: 0, s: 0, l: 0 };
const _hslB = { h: 0, s: 0, l: 0 };

function hue2rgb( p, q, t ) {

	if ( t < 0 ) t += 1;
	if ( t > 1 ) t -= 1;
	if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
	if ( t < 1 / 2 ) return q;
	if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
	return p;

}

/**
 * A Color instance is represented by RGB components in the linear <i>working
 * color space</i>, which defaults to `LinearSRGBColorSpace`. Inputs
 * conventionally using `SRGBColorSpace` (such as hexadecimals and CSS
 * strings) are converted to the working color space automatically.
 *
 * ```js
 * // converted automatically from SRGBColorSpace to LinearSRGBColorSpace
 * const color = new THREE.Color().setHex( 0x112233 );
 * ```
 * Source color spaces may be specified explicitly, to ensure correct conversions.
 * ```js
 * // assumed already LinearSRGBColorSpace; no conversion
 * const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5 );
 *
 * // converted explicitly from SRGBColorSpace to LinearSRGBColorSpace
 * const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5, SRGBColorSpace );
 * ```
 * If THREE.ColorManagement is disabled, no conversions occur. For details,
 * see <i>Color management</i>. Iterating through a Color instance will yield
 * its components (r, g, b) in the corresponding order. A Color can be initialised
 * in any of the following ways:
 * ```js
 * //empty constructor - will default white
 * const color1 = new THREE.Color();
 *
 * //Hexadecimal color (recommended)
 * const color2 = new THREE.Color( 0xff0000 );
 *
 * //RGB string
 * const color3 = new THREE.Color("rgb(255, 0, 0)");
 * const color4 = new THREE.Color("rgb(100%, 0%, 0%)");
 *
 * //X11 color name - all 140 color names are supported.
 * //Note the lack of CamelCase in the name
 * const color5 = new THREE.Color( 'skyblue' );
 * //HSL string
 * const color6 = new THREE.Color("hsl(0, 100%, 50%)");
 *
 * //Separate RGB values between 0 and 1
 * const color7 = new THREE.Color( 1, 0, 0 );
 * ```
 */
class Color {

	/**
	 * Constructs a new color.
	 *
	 * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
	 * and that method is used throughout the rest of the documentation.
	 *
	 * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
	 * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
	 * @param {number} [g] - The green component.
	 * @param {number} [b] - The blue component.
	 */
	constructor( r, g, b ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isColor = true;

		/**
		 * The red component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.r = 1;

		/**
		 * The green component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.g = 1;

		/**
		 * The blue component.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.b = 1;

		return this.set( r, g, b );

	}

	/**
	 * Sets the colors's components from the given values.
	 *
	 * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
	 * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
	 * @param {number} [g] - The green component.
	 * @param {number} [b] - The blue component.
	 * @return {Color} A reference to this color.
	 */
	set( r, g, b ) {

		if ( g === undefined && b === undefined ) {

			// r is THREE.Color, hex or string

			const value = r;

			if ( value && value.isColor ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

		} else {

			this.setRGB( r, g, b );

		}

		return this;

	}

	/**
	 * Sets the colors's components to the given scalar value.
	 *
	 * @param {number} scalar - The scalar value.
	 * @return {Color} A reference to this color.
	 */
	setScalar( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	}

	/**
	 * Sets this color from a hexadecimal value.
	 *
	 * @param {number} hex - The hexadecimal value.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setHex( hex, colorSpace = SRGBColorSpace ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from RGB values.
	 *
	 * @param {number} r - Red channel value between `0.0` and `1.0`.
	 * @param {number} g - Green channel value between `0.0` and `1.0`.
	 * @param {number} b - Blue channel value between `0.0` and `1.0`.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setRGB( r, g, b, colorSpace = ColorManagement.workingColorSpace ) {

		this.r = r;
		this.g = g;
		this.b = b;

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from RGB values.
	 *
	 * @param {number} h - Hue value between `0.0` and `1.0`.
	 * @param {number} s - Saturation value between `0.0` and `1.0`.
	 * @param {number} l - Lightness value between `0.0` and `1.0`.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setHSL( h, s, l, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0
		h = euclideanModulo( h, 1 );
		s = clamp( s, 0, 1 );
		l = clamp( l, 0, 1 );

		if ( s === 0 ) {

			this.r = this.g = this.b = l;

		} else {

			const p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
			const q = ( 2 * l ) - p;

			this.r = hue2rgb( q, p, h + 1 / 3 );
			this.g = hue2rgb( q, p, h );
			this.b = hue2rgb( q, p, h - 1 / 3 );

		}

		ColorManagement.colorSpaceToWorking( this, colorSpace );

		return this;

	}

	/**
	 * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
	 * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
	 * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
	 * all 140 color names are supported).
	 *
	 * @param {string} style - Color as a CSS-style string.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setStyle( style, colorSpace = SRGBColorSpace ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		let m;

		if ( m = /^(\w+)\(([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			let color;
			const name = m[ 1 ];
			const components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255,
							Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255,
							colorSpace
						);

					}

					if ( color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setRGB(
							Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100,
							Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100,
							colorSpace
						);

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)

						handleAlpha( color[ 4 ] );

						return this.setHSL(
							parseFloat( color[ 1 ] ) / 360,
							parseFloat( color[ 2 ] ) / 100,
							parseFloat( color[ 3 ] ) / 100,
							colorSpace
						);

					}

					break;

				default:

					console.warn( 'THREE.Color: Unknown color model ' + style );

			}

		} else if ( m = /^\#([A-Fa-f\d]+)$/.exec( style ) ) {

			// hex color

			const hex = m[ 1 ];
			const size = hex.length;

			if ( size === 3 ) {

				// #ff0
				return this.setRGB(
					parseInt( hex.charAt( 0 ), 16 ) / 15,
					parseInt( hex.charAt( 1 ), 16 ) / 15,
					parseInt( hex.charAt( 2 ), 16 ) / 15,
					colorSpace
				);

			} else if ( size === 6 ) {

				// #ff0000
				return this.setHex( parseInt( hex, 16 ), colorSpace );

			} else {

				console.warn( 'THREE.Color: Invalid hex color ' + style );

			}

		} else if ( style && style.length > 0 ) {

			return this.setColorName( style, colorSpace );

		}

		return this;

	}

	/**
	 * Sets this color from a color name. Faster than {@link Color#setStyle} if
	 * you don't need the other CSS-style formats.
	 *
	 * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
	 * ```js
	 * Color.NAMES.aliceblue // returns 0xF0F8FF
	 * ```
	 *
	 * @param {string} style - The color name.
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {Color} A reference to this color.
	 */
	setColorName( style, colorSpace = SRGBColorSpace ) {

		// color keywords
		const hex = _colorKeywords[ style.toLowerCase() ];

		if ( hex !== undefined ) {

			// red
			this.setHex( hex, colorSpace );

		} else {

			// unknown color
			console.warn( 'THREE.Color: Unknown color ' + style );

		}

		return this;

	}

	/**
	 * Returns a new color with copied values from this instance.
	 *
	 * @return {Color} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.r, this.g, this.b );

	}

	/**
	 * Copies the values of the given color to this instance.
	 *
	 * @param {Color} color - The color to copy.
	 * @return {Color} A reference to this color.
	 */
	copy( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	}

	/**
	 * Copies the given color into this color, and then converts this color from
	 * `SRGBColorSpace` to `LinearSRGBColorSpace`.
	 *
	 * @param {Color} color - The color to copy/convert.
	 * @return {Color} A reference to this color.
	 */
	copySRGBToLinear( color ) {

		this.r = SRGBToLinear( color.r );
		this.g = SRGBToLinear( color.g );
		this.b = SRGBToLinear( color.b );

		return this;

	}

	/**
	 * Copies the given color into this color, and then converts this color from
	 * `LinearSRGBColorSpace` to `SRGBColorSpace`.
	 *
	 * @param {Color} color - The color to copy/convert.
	 * @return {Color} A reference to this color.
	 */
	copyLinearToSRGB( color ) {

		this.r = LinearToSRGB( color.r );
		this.g = LinearToSRGB( color.g );
		this.b = LinearToSRGB( color.b );

		return this;

	}

	/**
	 * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
	 *
	 * @return {Color} A reference to this color.
	 */
	convertSRGBToLinear() {

		this.copySRGBToLinear( this );

		return this;

	}

	/**
	 * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
	 *
	 * @return {Color} A reference to this color.
	 */
	convertLinearToSRGB() {

		this.copyLinearToSRGB( this );

		return this;

	}

	/**
	 * Returns the hexadecimal value of this color.
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {number} The hexadecimal value.
	 */
	getHex( colorSpace = SRGBColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		return Math.round( clamp( _color.r * 255, 0, 255 ) ) * 65536 + Math.round( clamp( _color.g * 255, 0, 255 ) ) * 256 + Math.round( clamp( _color.b * 255, 0, 255 ) );

	}

	/**
	 * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {string} The hexadecimal value as a string.
	 */
	getHexString( colorSpace = SRGBColorSpace ) {

		return ( '000000' + this.getHex( colorSpace ).toString( 16 ) ).slice( -6 );

	}

	/**
	 * Converts the colors RGB values into the HSL format and stores them into the
	 * given target object.
	 *
	 * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {{h:number,s:number,l:number}} The HSL representation of this color.
	 */
	getHSL( target, colorSpace = ColorManagement.workingColorSpace ) {

		// h,s,l ranges are in 0.0 - 1.0

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );

		let hue, saturation;
		const lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			const delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		target.h = hue;
		target.s = saturation;
		target.l = lightness;

		return target;

	}

	/**
	 * Returns the RGB values of this color and stores them into the given target object.
	 *
	 * @param {Color} target - The target color that is used to store the method's result.
	 * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
	 * @return {Color} The RGB representation of this color.
	 */
	getRGB( target, colorSpace = ColorManagement.workingColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		target.r = _color.r;
		target.g = _color.g;
		target.b = _color.b;

		return target;

	}

	/**
	 * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
	 *
	 * @param {string} [colorSpace=SRGBColorSpace] - The color space.
	 * @return {string} The CSS representation of this color.
	 */
	getStyle( colorSpace = SRGBColorSpace ) {

		ColorManagement.workingToColorSpace( _color.copy( this ), colorSpace );

		const r = _color.r, g = _color.g, b = _color.b;

		if ( colorSpace !== SRGBColorSpace ) {

			// Requires CSS Color Module Level 4 (https://www.w3.org/TR/css-color-4/).
			return `color(${ colorSpace } ${ r.toFixed( 3 ) } ${ g.toFixed( 3 ) } ${ b.toFixed( 3 ) })`;

		}

		return `rgb(${ Math.round( r * 255 ) },${ Math.round( g * 255 ) },${ Math.round( b * 255 ) })`;

	}

	/**
	 * Adds the given HSL values to this color's values.
	 * Internally, this converts the color's RGB values to HSL, adds HSL
	 * and then converts the color back to RGB.
	 *
	 * @param {number} h - Hue value between `0.0` and `1.0`.
	 * @param {number} s - Saturation value between `0.0` and `1.0`.
	 * @param {number} l - Lightness value between `0.0` and `1.0`.
	 * @return {Color} A reference to this color.
	 */
	offsetHSL( h, s, l ) {

		this.getHSL( _hslA );

		return this.setHSL( _hslA.h + h, _hslA.s + s, _hslA.l + l );

	}

	/**
	 * Adds the RGB values of the given color to the RGB values of this color.
	 *
	 * @param {Color} color - The color to add.
	 * @return {Color} A reference to this color.
	 */
	add( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	}

	/**
	 * Adds the RGB values of the given colors and stores the result in this instance.
	 *
	 * @param {Color} color1 - The first color.
	 * @param {Color} color2 - The second color.
	 * @return {Color} A reference to this color.
	 */
	addColors( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	}

	/**
	 * Adds the given scalar value to the RGB values of this color.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Color} A reference to this color.
	 */
	addScalar( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	}

	/**
	 * Subtracts the RGB values of the given color from the RGB values of this color.
	 *
	 * @param {Color} color - The color to subtract.
	 * @return {Color} A reference to this color.
	 */
	sub( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	}

	/**
	 * Multiplies the RGB values of the given color with the RGB values of this color.
	 *
	 * @param {Color} color - The color to multiply.
	 * @return {Color} A reference to this color.
	 */
	multiply( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	}

	/**
	 * Multiplies the given scalar value with the RGB values of this color.
	 *
	 * @param {number} s - The scalar to multiply.
	 * @return {Color} A reference to this color.
	 */
	multiplyScalar( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	}

	/**
	 * Linearly interpolates this color's RGB values toward the RGB values of the
	 * given color. The alpha argument can be thought of as the ratio between
	 * the two colors, where `0.0` is this color and `1.0` is the first argument.
	 *
	 * @param {Color} color - The color to converge on.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerp( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given colors and stores the result in this instance.
	 * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
	 * is the first and `1.0` is the second color.
	 *
	 * @param {Color} color1 - The first color.
	 * @param {Color} color2 - The second color.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerpColors( color1, color2, alpha ) {

		this.r = color1.r + ( color2.r - color1.r ) * alpha;
		this.g = color1.g + ( color2.g - color1.g ) * alpha;
		this.b = color1.b + ( color2.b - color1.b ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates this color's HSL values toward the HSL values of the
	 * given color. It differs from {@link Color#lerp} by not interpolating straight
	 * from one color to the other, but instead going through all the hues in between
	 * those two colors. The alpha argument can be thought of as the ratio between
	 * the two colors, where 0.0 is this color and 1.0 is the first argument.
	 *
	 * @param {Color} color - The color to converge on.
	 * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
	 * @return {Color} A reference to this color.
	 */
	lerpHSL( color, alpha ) {

		this.getHSL( _hslA );
		color.getHSL( _hslB );

		const h = lerp( _hslA.h, _hslB.h, alpha );
		const s = lerp( _hslA.s, _hslB.s, alpha );
		const l = lerp( _hslA.l, _hslB.l, alpha );

		this.setHSL( h, s, l );

		return this;

	}

	/**
	 * Sets the color's RGB components from the given 3D vector.
	 *
	 * @param {Vector3} v - The vector to set.
	 * @return {Color} A reference to this color.
	 */
	setFromVector3( v ) {

		this.r = v.x;
		this.g = v.y;
		this.b = v.z;

		return this;

	}

	/**
	 * Transforms this color with the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix.
	 * @return {Color} A reference to this color.
	 */
	applyMatrix3( m ) {

		const r = this.r, g = this.g, b = this.b;
		const e = m.elements;

		this.r = e[ 0 ] * r + e[ 3 ] * g + e[ 6 ] * b;
		this.g = e[ 1 ] * r + e[ 4 ] * g + e[ 7 ] * b;
		this.b = e[ 2 ] * r + e[ 5 ] * g + e[ 8 ] * b;

		return this;

	}

	/**
	 * Returns `true` if this color is equal with the given one.
	 *
	 * @param {Color} c - The color to test for equality.
	 * @return {boolean} Whether this bounding color is equal with the given one.
	 */
	equals( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	}

	/**
	 * Sets this color's RGB components from the given array.
	 *
	 * @param {Array<number>} array - An array holding the RGB values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Color} A reference to this color.
	 */
	fromArray( array, offset = 0 ) {

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	}

	/**
	 * Writes the RGB components of this color to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the color components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The color components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	}

	/**
	 * Sets the components of this color from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding color data.
	 * @param {number} index - The index into the attribute.
	 * @return {Color} A reference to this color.
	 */
	fromBufferAttribute( attribute, index ) {

		this.r = attribute.getX( index );
		this.g = attribute.getY( index );
		this.b = attribute.getZ( index );

		return this;

	}

	/**
	 * This methods defines the serialization result of this class. Returns the color
	 * as a hexadecimal value.
	 *
	 * @return {number} The hexadecimal value.
	 */
	toJSON() {

		return this.getHex();

	}

	*[ Symbol.iterator ]() {

		yield this.r;
		yield this.g;
		yield this.b;

	}

}

const _color = /*@__PURE__*/ new Color();

/**
 * A dictionary with X11 color names.
 *
 * Note that multiple words such as Dark Orange become the string 'darkorange'.
 *
 * @static
 * @type {Object}
 */
Color.NAMES = _colorKeywords;

let _materialId = 0;

/**
 * Abstract base class for materials.
 *
 * Materials define the appearance of renderable 3D objects.
 *
 * @abstract
 * @augments EventDispatcher
 */
class Material extends EventDispatcher {

	/**
	 * Constructs a new material.
	 */
	constructor() {

		super();

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isMaterial = true;

		/**
		 * The ID of the material.
		 *
		 * @name Material#id
		 * @type {number}
		 * @readonly
		 */
		Object.defineProperty( this, 'id', { value: _materialId ++ } );

		/**
		 * The UUID of the material.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.uuid = generateUUID();

		/**
		 * The name of the material.
		 *
		 * @type {string}
		 */
		this.name = '';

		/**
		 * The type property is used for detecting the object type
		 * in context of serialization/deserialization.
		 *
		 * @type {string}
		 * @readonly
		 */
		this.type = 'Material';

		/**
		 * Defines the blending type of the material.
		 *
		 * It must be set to `CustomBlending` if custom blending properties like
		 * {@link Material#blendSrc}, {@link Material#blendDst} or {@link Material#blendEquation}
		 * should have any effect.
		 *
		 * @type {(NoBlending|NormalBlending|AdditiveBlending|SubtractiveBlending|MultiplyBlending|CustomBlending)}
		 * @default NormalBlending
		 */
		this.blending = NormalBlending;

		/**
		 * Defines which side of faces will be rendered - front, back or both.
		 *
		 * @type {(FrontSide|BackSide|DoubleSide)}
		 * @default FrontSide
		 */
		this.side = FrontSide;

		/**
		 * If set to `true`, vertex colors should be used.
		 *
		 * The engine supports RGB and RGBA vertex colors depending on whether a three (RGB) or
		 * four (RGBA) component color buffer attribute is used.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.vertexColors = false;

		/**
		 * Defines how transparent the material is.
		 * A value of `0.0` indicates fully transparent, `1.0` is fully opaque.
		 *
		 * If the {@link Material#transparent} is not set to `true`,
		 * the material will remain fully opaque and this value will only affect its color.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.opacity = 1;

		/**
		 * Defines whether this material is transparent. This has an effect on
		 * rendering as transparent objects need special treatment and are rendered
		 * after non-transparent objects.
		 *
		 * When set to true, the extent to which the material is transparent is
		 * controlled by {@link Material#opacity}.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.transparent = false;

		/**
		 * Enables alpha hashed transparency, an alternative to {@link Material#transparent} or
		 * {@link Material#alphaTest}. The material will not be rendered if opacity is lower than
		 * a random threshold. Randomization introduces some grain or noise, but approximates alpha
		 * blending without the associated problems of sorting. Using TAA can reduce the resulting noise.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.alphaHash = false;

		/**
		 * Defines the blending source factor.
		 *
		 * @type {(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default SrcAlphaFactor
		 */
		this.blendSrc = SrcAlphaFactor;

		/**
		 * Defines the blending destination factor.
		 *
		 * @type {(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default OneMinusSrcAlphaFactor
		 */
		this.blendDst = OneMinusSrcAlphaFactor;

		/**
		 * Defines the blending equation.
		 *
		 * @type {(AddEquation|SubtractEquation|ReverseSubtractEquation|MinEquation|MaxEquation)}
		 * @default AddEquation
		 */
		this.blendEquation = AddEquation;

		/**
		 * Defines the blending source alpha factor.
		 *
		 * @type {?(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default null
		 */
		this.blendSrcAlpha = null;

		/**
		 * Defines the blending destination alpha factor.
		 *
		 * @type {?(ZeroFactor|OneFactor|SrcColorFactor|OneMinusSrcColorFactor|SrcAlphaFactor|OneMinusSrcAlphaFactor|DstAlphaFactor|OneMinusDstAlphaFactor|DstColorFactor|OneMinusDstColorFactor|SrcAlphaSaturateFactor|ConstantColorFactor|OneMinusConstantColorFactor|ConstantAlphaFactor|OneMinusConstantAlphaFactor)}
		 * @default null
		 */
		this.blendDstAlpha = null;

		/**
		 * Defines the blending equation of the alpha channel.
		 *
		 * @type {?(AddEquation|SubtractEquation|ReverseSubtractEquation|MinEquation|MaxEquation)}
		 * @default null
		 */
		this.blendEquationAlpha = null;

		/**
		 * Represents the RGB values of the constant blend color.
		 *
		 * This property has only an effect when using custom blending with `ConstantColor` or `OneMinusConstantColor`.
		 *
		 * @type {Color}
		 * @default (0,0,0)
		 */
		this.blendColor = new Color( 0, 0, 0 );

		/**
		 * Represents the alpha value of the constant blend color.
		 *
		 * This property has only an effect when using custom blending with `ConstantAlpha` or `OneMinusConstantAlpha`.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.blendAlpha = 0;

		/**
		 * Defines the depth function.
		 *
		 * @type {(NeverDepth|AlwaysDepth|LessDepth|LessEqualDepth|EqualDepth|GreaterEqualDepth|GreaterDepth|NotEqualDepth)}
		 * @default LessEqualDepth
		 */
		this.depthFunc = LessEqualDepth;

		/**
		 * Whether to have depth test enabled when rendering this material.
		 * When the depth test is disabled, the depth write will also be implicitly disabled.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthTest = true;

		/**
		 * Whether rendering this material has any effect on the depth buffer.
		 *
		 * When drawing 2D overlays it can be useful to disable the depth writing in
		 * order to layer several things together without creating z-index artifacts.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.depthWrite = true;

		/**
		 * The bit mask to use when writing to the stencil buffer.
		 *
		 * @type {number}
		 * @default 0xff
		 */
		this.stencilWriteMask = 0xff;

		/**
		 * The stencil comparison function to use.
		 *
		 * @type {NeverStencilFunc|LessStencilFunc|EqualStencilFunc|LessEqualStencilFunc|GreaterStencilFunc|NotEqualStencilFunc|GreaterEqualStencilFunc|AlwaysStencilFunc}
		 * @default AlwaysStencilFunc
		 */
		this.stencilFunc = AlwaysStencilFunc;

		/**
		 * The value to use when performing stencil comparisons or stencil operations.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.stencilRef = 0;

		/**
		 * The bit mask to use when comparing against the stencil buffer.
		 *
		 * @type {number}
		 * @default 0xff
		 */
		this.stencilFuncMask = 0xff;

		/**
		 * Which stencil operation to perform when the comparison function returns `false`.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilFail = KeepStencilOp;

		/**
		 * Which stencil operation to perform when the comparison function returns
		 * `true` but the depth test fails.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilZFail = KeepStencilOp;

		/**
		 * Which stencil operation to perform when the comparison function returns
		 * `true` and the depth test passes.
		 *
		 * @type {ZeroStencilOp|KeepStencilOp|ReplaceStencilOp|IncrementStencilOp|DecrementStencilOp|IncrementWrapStencilOp|DecrementWrapStencilOp|InvertStencilOp}
		 * @default KeepStencilOp
		 */
		this.stencilZPass = KeepStencilOp;

		/**
		 * Whether stencil operations are performed against the stencil buffer. In
		 * order to perform writes or comparisons against the stencil buffer this
		 * value must be `true`.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.stencilWrite = false;

		/**
		 * User-defined clipping planes specified as THREE.Plane objects in world
		 * space. These planes apply to the objects this material is attached to.
		 * Points in space whose signed distance to the plane is negative are clipped
		 * (not rendered). This requires {@link WebGLRenderer#localClippingEnabled} to
		 * be `true`.
		 *
		 * @type {?Array<Plane>}
		 * @default null
		 */
		this.clippingPlanes = null;

		/**
		 * Changes the behavior of clipping planes so that only their intersection is
		 * clipped, rather than their union.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.clipIntersection = false;

		/**
		 * Defines whether to clip shadows according to the clipping planes specified
		 * on this material.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.clipShadows = false;

		/**
		 * Defines which side of faces cast shadows. If `null`, the side casting shadows
		 * is determined as follows:
		 *
		 * - When {@link Material#side} is set to `FrontSide`, the back side cast shadows.
		 * - When {@link Material#side} is set to `BackSide`, the front side cast shadows.
		 * - When {@link Material#side} is set to `DoubleSide`, both sides cast shadows.
		 *
		 * @type {?(FrontSide|BackSide|DoubleSide)}
		 * @default null
		 */
		this.shadowSide = null;

		/**
		 * Whether to render the material's color.
		 *
		 * This can be used in conjunction with {@link Object3D#renderOder} to create invisible
		 * objects that occlude other objects.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.colorWrite = true;

		/**
		 * Override the renderer's default precision for this material.
		 *
		 * @type {?('highp'|'mediump'|'lowp')}
		 * @default null
		 */
		this.precision = null;

		/**
		 * Whether to use polygon offset or not. When enabled, each fragment's depth value will
		 * be offset after it is interpolated from the depth values of the appropriate vertices.
		 * The offset is added before the depth test is performed and before the value is written
		 * into the depth buffer.
		 *
		 * Can be useful for rendering hidden-line images, for applying decals to surfaces, and for
		 * rendering solids with highlighted edges.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.polygonOffset = false;

		/**
		 * Specifies a scale factor that is used to create a variable depth offset for each polygon.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.polygonOffsetFactor = 0;

		/**
		 * Is multiplied by an implementation-specific value to create a constant depth offset.
		 *
		 * @type {number}
		 * @default 0
		 */
		this.polygonOffsetUnits = 0;

		/**
		 * Whether to apply dithering to the color to remove the appearance of banding.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.dithering = false;

		/**
		 * Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
		 * (meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
		 * will smooth aliasing on clip plane edges and alphaTest-clipped edges.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.alphaToCoverage = false;

		/**
		 * Whether to premultiply the alpha (transparency) value.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.premultipliedAlpha = false;

		/**
		 * Whether double-sided, transparent objects should be rendered with a single pass or not.
		 *
		 * The engine renders double-sided, transparent objects with two draw calls (back faces first,
		 * then front faces) to mitigate transparency artifacts. There are scenarios however where this
		 * approach produces no quality gains but still doubles draw calls e.g. when rendering flat
		 * vegetation like grass sprites. In these cases, set the `forceSinglePass` flag to `true` to
		 * disable the two pass rendering to avoid performance issues.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.forceSinglePass = false;

		/**
		 * Whether it's possible to override the material with {@link Scene#overrideMaterial} or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.allowOverride = true;

		/**
		 * Defines whether 3D objects using this material are visible.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.visible = true;

		/**
		 * Defines whether this material is tone mapped according to the renderer's tone mapping setting.
		 *
		 * It is ignored when rendering to a render taróm»ÓFòµë(š+myÖ¢Ò’°  –¶VWÒG'VS° –'&V³°  —Ð  —Ð  —ÒVÇ6R°  –¶VWÒG'VS°  —Ð  —Ð  ’òò–â×Æ6R6ö×7F–öà  ––b‚¶VW’°  ––b‚’ÓÒw&—FT–æFW‚’°  —F–ÖW5²w&—FT–æFW‚ÒÒF–ÖW5²’Ó°  –6öç7B&VDöfg6WBÒ’¢7G&–FRÀ —w&—FTöfg6WBÒw&—FT–æFW‚¢7G&–FS°  –f÷"‚ÆWB¢Ò²¢ÓÒ7G&–FS²²²¢’°  —fÇVW5²w&—FTöfg6WB²¢ÒÒfÇVW5²&VDöfg6WB²¢Ó°  —Ð  —Ð  ’²²w&—FT–æFWƒ°  —Ð  —Ð  ’òòfÇW6‚Æ7B¶W–g&ÖR†6ö×7F–öâÆöö·2†VB  ––b‚Æ7D–æFW‚â’°  —F–ÖW5²w&—FT–æFW‚ÒÒF–ÖW5²Æ7D–æFW‚Ó°  –f÷"‚ÆWB&VDöfg6WBÒÆ7D–æFW‚¢7G&–FRÂw&—FTöfg6WBÒw&—FT–æFW‚¢7G&–FRÂ¢Ò²¢ÓÒ7G&–FS²²²¢’°  —fÇVW5²w&—FTöfg6WB²¢ÒÒfÇVW5²&VDöfg6WB²¢Ó°  —Ð  ’²²w&—FT–æFWƒ°  —Ð  ––b‚w&—FT–æFW‚ÓÒF–ÖW2æÆVæwF‚’°  —F†—2çF–ÖW2ÒF–ÖW2ç6Æ–6R‚Âw&—FT–æFW‚“° —F†—2çfÇVW2ÒfÇVW2ç6Æ–6R‚Âw&—FT–æFW‚¢7G&–FR“°  —ÒVÇ6R°  —F†—2çF–ÖW2ÒF–ÖW3° —F†—2çfÇVW2ÒfÇVW3°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWr¶W–g&ÖRG&6²v—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´¶W–g&ÖUG&6·Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  –6öç7BF–ÖW2ÒF†—2çF–ÖW2ç6Æ–6R‚“° –6öç7BfÇVW2ÒF†—2çfÇVW2ç6Æ–6R‚“°  –6öç7BG—VD¶W–g&ÖUG&6²ÒF†—2æ6öç7G'V7F÷#° –6öç7BG&6²ÒæWrG—VD¶W–g&ÖUG&6²‚F†—2ææÖRÂF–ÖW2ÂfÇVW2“°  ’òò–çFW'öÆçB&wVÖVçBFò6öç7G'V7F÷"—2æ÷B6fVBÂ6ò6÷’F†Rf7F÷'’ÖWF†öBF—&V7FÇ’à —G&6²æ7&VFT–çFW'öÆçBÒF†—2æ7&VFT–çFW'öÆçC°  —&WGW&âG&6³°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBrp¢¢ð¤¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒrs° ¢ò¢ ¢¢F†RF–ÖR'VffW"G—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—RµG—VD'&—Ä'&—Ð¢¢FVfVÇBfÆöC3$'&’æ6öç7G'V7F÷ ¢¢ð¤¶W–g&ÖUG&6²ç&÷F÷G—RåF–ÖT'VffW%G—RÒfÆöC3$'&“° ¢ò¢ ¢¢F†RfÇVR'VffW"G—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—RµG—VD'&—Ä'&—Ð¢¢FVfVÇBfÆöC3$'&’æ6öç7G'V7F÷ ¢¢ð¤¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒfÆöC3$'&“° ¢ò¢ ¢¢F†RFVfVÇB–çFW'öÆF–öâG—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—R²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ð¢¢FVfVÇB–çFW'öÆFTÆ–æV ¢¢ð¤¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTÆ–æV#° ¢ò¢ ¢¢G&6²f÷"&ööÆVâ¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ72&ööÆVä¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWr&ööÆVâ¶W–g&ÖRG&6²à ’  ’¢F†—2¶W–g&ÖRG&6²G—R†2æò–çFW'öÆF–öæ&ÖWFW"&V6W6RF†P ’¢–çFW'öÆF–öâ—2Çv—2F—67&WFRà ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“Æ&ööÆVãçÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBv&ööÂp¢¢ð¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒv&ööÂs° ¢ò¢ ¢¢F†RfÇVR'VffW"G—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—RµG—VD'&—Ä'&—Ð¢¢FVfVÇB'&’æ6öç7G'V7F÷ ¢¢ð¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒ'&“° ¢ò¢ ¢¢F†RFVfVÇB–çFW'öÆF–öâG—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—R²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ð¢¢FVfVÇB–çFW'öÆFTF—67&WFP¢¢ð¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTF—67&WFS°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"ÒVæFVf–æVC°¤&ööÆVä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²f÷"6öÆ÷"¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ726öÆ÷$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWr6öÆ÷"¶W–g&ÖRG&6²à ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“ÆçVÖ&W#çÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢&Ò²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ò¶–çFW'öÆF–öåÒÒF†R–çFW'öÆF–öâG—Rà ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBv6öÆ÷"p¢¢ð¤6öÆ÷$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒv6öÆ÷"s° ¢ò¢ ¢¢G&6²f÷"çVÖW&–2¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ72çVÖ&W$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWrçVÖ&W"¶W–g&ÖRG&6²à ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“ÆçVÖ&W#çÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢&Ò²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ò¶–çFW'öÆF–öåÒÒF†R–çFW'öÆF–öâG—Rà ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBvçVÖ&W"p¢¢ð¤çVÖ&W$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒvçVÖ&W"s° ¢ò¢ ¢¢7†W&–6ÂÆ–æV"Væ—BVFW&æ–öâ–çFW'öÆçBà¢ ¢¢VvÖVçG2–çFW'öÆç@¢¢ð¦6Æ72VFW&æ–öäÆ–æV$–çFW'öÆçBW‡FVæG2–çFW'öÆçB°  ’ò¢  ’¢6öç7G'V7G2æWr4ÄU%–çFW'öÆçBà ’  ’¢&ÒµG—VD'&—Ò&ÖWFW%÷6—F–öç2ÒF†R&ÖWFW"÷6—F–öç2†öÆBF†R–çFW'öÆF–öâf7F÷'2à ’¢&ÒµG—VD'&—Ò6×ÆUfÇVW2ÒF†R6×ÆRfÇVW2à ’¢&Ò¶çVÖ&W'Ò6×ÆU6—¦RÒF†R6×ÆR6—¦P ’¢&ÒµG—VD'&—Ò·&W7VÇD'VffW%ÒÒF†R&W7VÇB'VffW"à ’¢ð –6öç7G'V7F÷"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"’°  —7WW"‚&ÖWFW%÷6—F–öç2Â6×ÆUfÇVW2Â6×ÆU6—¦RÂ&W7VÇD'VffW"“°  —Ð  ––çFW'öÆFUò‚“ÂCÂBÂC’°  –6öç7B&W7VÇBÒF†—2ç&W7VÇD'VffW"À —fÇVW2ÒF†—2ç6×ÆUfÇVW2À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –Ç†Ò‚BÒC’ò‚CÒC“°  –ÆWBöfg6WBÒ“¢7G&–FS°  –f÷"‚ÆWBVæBÒöfg6WB²7G&–FS²öfg6WBÓÒVæC²öfg6WB³ÒB’°  •VFW&æ–öâç6ÆW'fÆB‚&W7VÇBÂÂfÇVW2Âöfg6WBÒ7G&–FRÂfÇVW2Âöfg6WBÂÇ†“°  —Ð  —&WGW&â&W7VÇC°  —Ð §Ð ¢ò¢ ¢¢G&6²f÷"VFW&æ–öâ¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ72VFW&æ–öä¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWrVFW&æ–öâ¶W–g&ÖRG&6²à ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“ÆçVÖ&W#çÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢&Ò²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ò¶–çFW'öÆF–öåÒÒF†R–çFW'öÆF–öâG—Rà ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ“°  —Ð  ’ò¢  ’¢÷fW'w&—GFVâ6òF†RÖWF†öB&WGW&ç2VFW&æ–öâ&6VB–çFW'öÆçBà ’  ’¢7FF–0 ’¢&ÒµG—VD'&—Ò·&W7VÇEÒÒF†R&W7VÇB'VffW"à ’¢&WGW&âµVFW&æ–öäÆ–æV$–çFW'öÆçGÒF†RæWr–çFW'öÆçBà ’¢ð ”–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"‚&W7VÇB’°  —&WGW&âæWrVFW&æ–öäÆ–æV$–çFW'öÆçB‚F†—2çF–ÖW2ÂF†—2çfÇVW2ÂF†—2ævWEfÇVU6—¦R‚’Â&W7VÇB“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBwVFW&æ–öâp¢¢ð¥VFW&æ–öä¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒwVFW&æ–öâs°¢òòfÇVT'VffW%G—R—2–æ†W&—FV@¢òòFVfVÇD–çFW'öÆF–öâ—2–æ†W&—FVC°¥VFW&æ–öä¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²f÷"7G&–ær¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ727G&–æt¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWr7G&–ær¶W–g&ÖRG&6²à ’  ’¢F†—2¶W–g&ÖRG&6²G—R†2æò–çFW'öÆF–öæ&ÖWFW"&V6W6RF†P ’¢–çFW'öÆF–öâ—2Çv—2F—67&WFRà ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“Ç7G&–æsçÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBw7G&–ærp¢¢ð¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒw7G&–ærs° ¢ò¢ ¢¢F†RfÇVR'VffW"G—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—RµG—VD'&—Ä'&—Ð¢¢FVfVÇB'&’æ6öç7G'V7F÷ ¢¢ð¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVT'VffW%G—RÒ'&“° ¢ò¢ ¢¢F†RFVfVÇB–çFW'öÆF–öâG—RöbF†—2¶W–g&ÖRG&6²à¢ ¢¢G—R²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ð¢¢FVfVÇB–çFW'öÆFTF—67&WFP¢¢ð¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—RäFVfVÇD–çFW'öÆF–öâÒ–çFW'öÆFTF—67&WFS°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öDÆ–æV"ÒVæFVf–æVC°¥7G&–æt¶W–g&ÖUG&6²ç&÷F÷G—Rä–çFW'öÆçDf7F÷'”ÖWF†öE6Öö÷F‚ÒVæFVf–æVC° ¢ò¢ ¢¢G&6²f÷"fV7F÷"¶W–g&ÖRfÇVW2à¢ ¢¢VvÖVçG2¶W–g&ÖUG&6°¢¢ð¦6Æ72fV7F÷$¶W–g&ÖUG&6²W‡FVæG2¶W–g&ÖUG&6²°  ’ò¢  ’¢6öç7G'V7G2æWrfV7F÷"¶W–g&ÖRG&6²à ’  ’¢&Ò·7G&–æwÒæÖRÒF†R¶W–g&ÖRG&6²w2æÖRà ’¢&Ò´'&“ÆçVÖ&W#çÒF–ÖW2ÒÆ—7Böb¶W–g&ÖRF–ÖW2à ’¢&Ò´'&“ÆçVÖ&W#çÒfÇVW2ÒÆ—7Böb¶W–g&ÖRfÇVW2à ’¢&Ò²„–çFW'öÆFTÆ–æV'Ä–çFW'öÆFTF—67&WFWÄ–çFW'öÆFU6Öö÷F‚—Ò¶–çFW'öÆF–öåÒÒF†R–çFW'öÆF–öâG—Rà ’¢ð –6öç7G'V7F÷"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ’°  —7WW"‚æÖRÂF–ÖW2ÂfÇVW2Â–çFW'öÆF–öâ“°  —Ð §Ð ¢ò¢ ¢¢F†RfÇVRG—RæÖRà¢ ¢¢G—Rµ7G&–æwÐ¢¢FVfVÇBwfV7F÷"p¢¢ð¥fV7F÷$¶W–g&ÖUG&6²ç&÷F÷G—RåfÇVUG—TæÖRÒwfV7F÷"s° ¢ò¢ ¢¢&WW6&ÆR6WBöb¶W–g&ÖRG&6·2v†–6‚&W&W6VçBâæ–ÖF–öâà¢¢ð¦6Æ72æ–ÖF–öä6Æ—°  ’ò¢  ’¢6öç7G'V7G2æWræ–ÖF–öâ6Æ—à ’  ’¢æ÷FS¢–ç7FVBöb–ç7FçF–F–ærâæ–ÖF–öä6Æ—F—&V7FÇ’v—F‚F†R6öç7G'V7F÷"Â–÷R6à ’¢W6RF†R7FF–2–çFW&f6RöbF†—26Æ72f÷"7&VF–ær6Æ—2â–âÖ÷7B66W2F†÷Vv‚Âæ–ÖF–öâ6Æ—0 ’¢v–ÆÂWFöÖF–6ÆÇ’&R7&VFVB'’ÆöFW'2v†Vâ–×÷'F–æræ–ÖFVB4B76WG2à ’  ’¢&Ò·7G&–æwÒ¶æÖSÒruÒÒF†R6Æ—w2æÖRà ’¢&Ò¶çVÖ&W'Ò¶GW&F–öãÒÓÒÒF†R6Æ—w2GW&F–öâ–â6V6öæG2â–bæVvF—fRfÇVR—276VBÀ ’¢F†RGW&F–öâv–ÆÂ&R6Æ7VÆFVBg&öÒF†R76VB¶W–g&ÖW2à ’¢&Ò´'&“Ä¶W–g&ÖUG&6³çÒG&6·2Òâ'&’öb¶W–g&ÖRG&6·2à ’¢&Ò²„æ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFWÄFF—F—fTæ–ÖF–öä&ÆVæDÖöFR—Ò¶&ÆVæDÖöFSÔæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFUÒÒFVf–æW2†÷rF†Ræ–ÖF–öà ’¢—2&ÆVæFVBö6öÖ&–æVBv†VâGvò÷"Ö÷&Ræ–ÖF–öç2&R6–×VÇFæV÷W6Ç’Æ–VBà ’¢ð –6öç7G'V7F÷"‚æÖRÒrrÂGW&F–öâÒÓÂG&6·2ÒµÒÂ&ÆVæDÖöFRÒæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFR’°  ’ò¢  ’¢F†R6Æ—w2æÖRà ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2ææÖRÒæÖS°  ’ò¢  ’¢â'&’öb¶W–g&ÖRG&6·2à ’  ’¢G—R´'&“Ä¶W–g&ÖUG&6³çÐ ’¢ð —F†—2çG&6·2ÒG&6·3°  ’ò¢  ’¢F†R6Æ—w2GW&F–öâ–â6V6öæG2à ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2æGW&F–öâÒGW&F–öã°  ’ò¢  ’¢FVf–æW2†÷rF†Ræ–ÖF–öâ—2&ÆVæFVBö6öÖ&–æVBv†VâGvò÷"Ö÷&Ræ–ÖF–öç0 ’¢&R6–×VÇFæV÷W6Ç’Æ–VBà ’  ’¢G—R²„æ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFWÄFF—F—fTæ–ÖF–öä&ÆVæDÖöFR—Ð ’¢ð —F†—2æ&ÆVæDÖöFRÒ&ÆVæDÖöFS°  ’ò¢  ’¢F†RUT”BöbF†Ræ–ÖF–öâ6Æ—à ’  ’¢G—R·7G&–æwÐ ’¢&VFöæÇ ’¢ð —F†—2çWV–BÒvVæW&FUUT”B‚“°  ’ò¢  ’¢âö&¦V7BF†B6â&RW6VBFò7F÷&R7W7FöÒFF&÷WBF†Ræ–ÖF–öâ6Æ—à ’¢—B6†÷VÆBæ÷B†öÆB&VfW&Væ6W2FògVæ7F–öç22F†W6Rv–ÆÂæ÷B&R6ÆöæVBà ’  ’¢G—R´ö&¦V7GÐ ’¢ð —F†—2çW6W$FFÒ·Ó°  ’òòF†—2ÖVç2—B6†÷VÆBf–wW&R÷WB—G2GW&F–öâ'’66ææ–ærF†RG&6·0 ––b‚F†—2æGW&F–öâÂ’°  —F†—2ç&W6WDGW&F–öâ‚“°  —Ð  —Ð  ’ò¢  ’¢f7F÷'’ÖWF†öBf÷"7&VF–ærâæ–ÖF–öâ6Æ—g&öÒF†Rv—fVâ¥4ôâà ’  ’¢7FF–0 ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VBæ–ÖF–öâ6Æ—à ’¢&WGW&â´æ–ÖF–öä6Æ—ÒF†RæWræ–ÖF–öâ6Æ—à ’¢ð —7FF–2'6R‚§6öâ’°  –6öç7BG&6·2ÒµÒÀ –§6öåG&6·2Ò§6öâçG&6·2À –g&ÖUF–ÖRÒãò‚§6öâæg2ÇÂã“°  –f÷"‚ÆWB’ÒÂâÒ§6öåG&6·2æÆVæwFƒ²’ÓÒã²²²’’°  —G&6·2çW6‚‚'6T¶W–g&ÖUG&6²‚§6öåG&6·5²’Ò’ç66ÆR‚g&ÖUF–ÖR’“°  —Ð  –6öç7B6Æ—ÒæWrF†—2‚§6öâææÖRÂ§6öâæGW&F–öâÂG&6·2Â§6öâæ&ÆVæDÖöFR“° –6Æ—çWV–BÒ§6öâçWV–C°  –6Æ—çW6W$FFÒ¥4ôâç'6R‚§6öâçW6W$FFÇÂw·Òr“°  —&WGW&â6Æ—°  —Ð  ’ò¢  ’¢6W&–Æ—¦W2F†Rv—fVâæ–ÖF–öâ6Æ—–çFò¥4ôâà ’  ’¢7FF–0 ’¢&Ò´æ–ÖF–öä6Æ—Ò6Æ—ÒF†Ræ–ÖF–öâ6Æ—Fò6W&–Æ—¦Rà ’¢&WGW&â´ö&¦V7GÒF†R¥4ôâö&¦V7Bà ’¢ð —7FF–2Fô¥4ôâ‚6Æ—’°  –6öç7BG&6·2ÒµÒÀ –6Æ—G&6·2Ò6Æ—çG&6·3°  –6öç7B§6öâÒ°  ’væÖRs¢6Æ—ææÖRÀ ’vGW&F–öâs¢6Æ—æGW&F–öâÀ ’wG&6·2s¢G&6·2À ’wWV–Bs¢6Æ—çWV–BÀ ’v&ÆVæDÖöFRs¢6Æ—æ&ÆVæDÖöFRÀ ’wW6W$FFs¢¥4ôâç7G&–æv–g’‚6Æ—çW6W$FF’À  —Ó°  –f÷"‚ÆWB’ÒÂâÒ6Æ—G&6·2æÆVæwFƒ²’ÓÒã²²²’’°  —G&6·2çW6‚‚¶W–g&ÖUG&6²çFô¥4ôâ‚6Æ—G&6·5²’Ò’“°  —Ð  —&WGW&â§6öã°  —Ð  ’ò¢  ’¢&WGW&ç2æWræ–ÖF–öâ6Æ—g&öÒF†R76VBÖ÷'‚F&vWG2'&’öb ’¢vVöÖWG'’ÂF¶–æræÖRæBF†RçVÖ&W"öbg&ÖW2W"6V6öæBà ’  ’¢æ÷FS¢F†Rg2&ÖWFW"—2&WV—&VBÂ'WBF†Ræ–ÖF–öâ7VVB6â&P ’¢÷fW'&–FFVâf–´Æ–æ²æ–ÖF–öä7F–öâ76WDGW&F–öçÒà ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒæÖRÒF†RæÖRöbF†Ræ–ÖF–öâ6Æ—à ’¢&Ò´'&“Äö&¦V7CçÒÖ÷'…F&vWE6WVVæ6RÒ6WVVæ6RöbÖ÷'‚F&vWG2à ’¢&Ò¶çVÖ&W'Òg2ÒF†Rg&ÖW2ÕW"Õ6V6öæBfÇVRà ’¢&Ò¶&ööÆVçÒæôÆö÷Òv†WF†W"F†R6Æ—6†÷VÆB&RæòÆö÷÷"æ÷Bà ’¢&WGW&â´æ–ÖF–öä6Æ—ÒF†RæWræ–ÖF–öâ6Æ—à ’¢ð —7FF–27&VFTg&öÔÖ÷'…F&vWE6WVVæ6R‚æÖRÂÖ÷'…F&vWE6WVVæ6RÂg2ÂæôÆö÷’°  –6öç7BçVÔÖ÷'…F&vWG2ÒÖ÷'…F&vWE6WVVæ6RæÆVæwFƒ° –6öç7BG&6·2ÒµÓ°  –f÷"‚ÆWB’Ò²’ÂçVÔÖ÷'…F&vWG3²’²²’°  –ÆWBF–ÖW2ÒµÓ° –ÆWBfÇVW2ÒµÓ°  —F–ÖW2çW6‚€ ’‚’²çVÔÖ÷'…F&vWG2Ò’RçVÔÖ÷'…F&vWG2À –’À ’‚’²’RçVÔÖ÷'…F&vWG2“°  —fÇVW2çW6‚‚ÂÂ“°  –6öç7B÷&FW"ÒvWD¶W–g&ÖT÷&FW"‚F–ÖW2“° —F–ÖW2Ò6÷'FVD'&’‚F–ÖW2ÂÂ÷&FW"“° —fÇVW2Ò6÷'FVD'&’‚fÇVW2ÂÂ÷&FW"“°  ’òò–bF†W&R—2¶W’BF†Rf—'7Bg&ÖRÂGWÆ–6FR—B2F†P ’òòÆ7Bg&ÖR2vVÆÂf÷"W&fV7BÆö÷à ––b‚æôÆö÷bbF–ÖW5²ÒÓÓÒ’°  —F–ÖW2çW6‚‚çVÔÖ÷'…F&vWG2“° —fÇVW2çW6‚‚fÇVW5²Ò“°  —Ð  —G&6·2çW6‚€ –æWrçVÖ&W$¶W–g&ÖUG&6²€ ’ræÖ÷'…F&vWD–æfÇVVæ6W5²r²Ö÷'…F&vWE6WVVæ6U²’ÒææÖR²uÒrÀ —F–ÖW2ÂfÇVW0 ’’ç66ÆR‚ãòg2’“°  —Ð  —&WGW&âæWrF†—2‚æÖRÂÓÂG&6·2“°  —Ð  ’ò¢  ’¢6V&6†W2f÷"âæ–ÖF–öâ6Æ—'’æÖRÂF¶–ær2—G2f—'7B&ÖWFW  ’¢V—F†W"â'&’öb6Æ—2Â÷"ÖW6‚÷"vVöÖWG'’F†B6öçF–ç2à ’¢'&’æÖVB&æ–ÖF–öç2"&÷W'G’à ’  ’¢7FF–0 ’¢&Ò²„'&“Äæ–ÖF–öä6Æ—çÄö&¦V7C4B—Òö&¦V7D÷$6Æ—'&’ÒF†R'&’÷"ö&¦V7BFò6V&6‚F‡&÷Vv‚à ’¢&Ò·7G&–æwÒæÖRÒF†RæÖRFò6V&6‚f÷"à ’¢&WGW&â³ôæ–ÖF–öä6Æ—ÒF†Rf÷VæBæ–ÖF–öâ6Æ—â&WGW&ç2çVÆÆ–bæò6Æ—†2&VVâf÷VæBà ’¢ð —7FF–2f–æD'”æÖR‚ö&¦V7D÷$6Æ—'&’ÂæÖR’°  –ÆWB6Æ—'&’Òö&¦V7D÷$6Æ—'&“°  ––b‚'&’æ—4'&’‚ö&¦V7D÷$6Æ—'&’’’°  –6öç7BòÒö&¦V7D÷$6Æ—'&“° –6Æ—'&’ÒòævVöÖWG'’bbòævVöÖWG'’ææ–ÖF–öç2ÇÂòææ–ÖF–öç3°  —Ð  –f÷"‚ÆWB’Ò²’Â6Æ—'&’æÆVæwFƒ²’²²’°  ––b‚6Æ—'&•²’ÒææÖRÓÓÒæÖR’°  —&WGW&â6Æ—'&•²’Ó°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ð  ’ò¢  ’¢&WGW&ç2â'&’öbæWræ–ÖF–öä6Æ—27&VFVBg&öÒF†RÖ÷'‚F&vW@ ’¢6WVVæ6W2öbvVöÖWG'’ÂG'––ærFò6÷'BÖ÷'‚F&vWBæÖW2–çFð ’¢æ–ÖF–öâÖw&÷WÖ&6VBGFW&ç2Æ–¶R%vÆµóÂvÆµó"Â'VåóÂ'Våó"âââ"à ’  ’¢6VR´Æ–æ²ÔC$ÆöFW"7'6WÒ2âW†×ÆRf÷"†÷rF†RÖWF†öB6†÷VÆB&RW6VBà ’  ’¢7FF–0 ’¢&Ò´'&“Äö&¦V7CçÒÖ÷'…F&vWG2Ò6WVVæ6RöbÖ÷'‚F&vWG2à ’¢&Ò¶çVÖ&W'Òg2ÒF†Rg&ÖW2ÕW"Õ6V6öæBfÇVRà ’¢&Ò¶&ööÆVçÒæôÆö÷Òv†WF†W"F†R6Æ—6†÷VÆB&RæòÆö÷÷"æ÷Bà ’¢&WGW&â´'&“Äæ–ÖF–öä6Æ—çÒâ'&’öbæWræ–ÖF–öâ6Æ—2à ’¢ð —7FF–27&VFT6Æ—4g&öÔÖ÷'…F&vWE6WVVæ6W2‚Ö÷'…F&vWG2Âg2ÂæôÆö÷’°  –6öç7Bæ–ÖF–öåFôÖ÷'…F&vWG2Ò·Ó°  ’òòFW7FVBv—F‚‡GG3¢ò÷&VvWƒæ6öÒòöâG&–6²6WVVæ6W0 ’òò7V6‚fÆÖ–ævõöfÇ”ó2ÂfÆÖ–ævõ÷'Vãó2Â7&FVFƒS –6öç7BGFW&âÒõâ…µÇrÕÒ£ò’…µÆEÒ²’Bó°  ’òò6÷'BÖ÷'‚F&vWBæÖW2–çFòæ–ÖF–öâw&÷W2&6V@ ’òòGFW&ç2Æ–¶RvÆµóÂvÆµó"Â'VåóÂ'Våó  –f÷"‚ÆWB’ÒÂ–ÂÒÖ÷'…F&vWG2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BÖ÷'…F&vWBÒÖ÷'…F&vWG5²’Ó° –6öç7B'G2ÒÖ÷'…F&vWBææÖRæÖF6‚‚GFW&â“°  ––b‚'G2bb'G2æÆVæwF‚â’°  –6öç7BæÖRÒ'G5²Ó°  –ÆWBæ–ÖF–öäÖ÷'…F&vWG2Òæ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÓ°  ––b‚æ–ÖF–öäÖ÷'…F&vWG2’°  –æ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÒÒæ–ÖF–öäÖ÷'…F&vWG2ÒµÓ°  —Ð  –æ–ÖF–öäÖ÷'…F&vWG2çW6‚‚Ö÷'…F&vWB“°  —Ð  —Ð  –6öç7B6Æ—2ÒµÓ°  –f÷"‚6öç7BæÖR–âæ–ÖF–öåFôÖ÷'…F&vWG2’°  –6Æ—2çW6‚‚F†—2ä7&VFTg&öÔÖ÷'…F&vWE6WVVæ6R‚æÖRÂæ–ÖF–öåFôÖ÷'…F&vWG5²æÖRÒÂg2ÂæôÆö÷’“°  —Ð  —&WGW&â6Æ—3°  —Ð  ’ò¢  ’¢'6W2F†Ræ–ÖF–öâæ†–W&&6‡–f÷&ÖBæB&WGW&ç2æWræ–ÖF–öâ6Æ—à ’  ’¢7FF–0 ’¢FW&V6FVB6–æ6R#sRà ’¢&Ò´ö&¦V7GÒæ–ÖF–öâÒ6W&–Æ—¦VBæ–ÖF–öâ6Æ—2¥4ôâà ’¢&Ò´'&“Ä&öæW3çÒ&öæW2Òâ'&’öb&öæW2à ’¢&WGW&â³ôæ–ÖF–öä6Æ—ÒF†RæWræ–ÖF–öâ6Æ—à ’¢ð —7FF–2'6Tæ–ÖF–öâ‚æ–ÖF–öâÂ&öæW2’°  –6öç6öÆRçv&â‚uD…$TRäæ–ÖF–öä6Æ—¢'6Tæ–ÖF–öâ‚’—2FW&V6FVBæBv–ÆÂ&R&VÖ÷fVBv—F‚#ƒRr“°  ––b‚æ–ÖF–öâ’°  –6öç6öÆRæW'&÷"‚uD…$TRäæ–ÖF–öä6Æ—¢æòæ–ÖF–öâ–â¥4ôäÆöFW"FFâr“° —&WGW&âçVÆÃ°  —Ð  –6öç7BFDæöæV×G•G&6²ÒgVæ7F–öâ‚G&6µG—RÂG&6´æÖRÂæ–ÖF–öä¶W—2Â&÷W'G”æÖRÂFW7EG&6·2’°  ’òòöæÇ’&WGW&âG&6²–bF†W&R&R7GVÆÇ’¶W—2à ––b‚æ–ÖF–öä¶W—2æÆVæwF‚ÓÒ’°  –6öç7BF–ÖW2ÒµÓ° –6öç7BfÇVW2ÒµÓ°  –fÆGFVä¥4ôâ‚æ–ÖF–öä¶W—2ÂF–ÖW2ÂfÇVW2Â&÷W'G”æÖR“°  ’òòV×G’¶W—2&Rf–ÇFW&VB÷WBÂ6ò6†V6²v–à ––b‚F–ÖW2æÆVæwF‚ÓÒ’°  –FW7EG&6·2çW6‚‚æWrG&6µG—R‚G&6´æÖRÂF–ÖW2ÂfÇVW2’“°  —Ð  —Ð  —Ó°  –6öç7BG&6·2ÒµÓ°  –6öç7B6Æ—æÖRÒæ–ÖF–öâææÖRÇÂvFVfVÇBs° –6öç7Bg2Òæ–ÖF–öâæg2ÇÂ3° –6öç7B&ÆVæDÖöFRÒæ–ÖF–öâæ&ÆVæDÖöFS°  ’òòWFöÖF–2ÆVæwF‚FWFW&Ö–æF–öâ–âæ–ÖF–öä6Æ—à –ÆWBGW&F–öâÒæ–ÖF–öâæÆVæwF‚ÇÂÓ°  –6öç7B†–W&&6‡•G&6·2Òæ–ÖF–öâæ†–W&&6‡’ÇÂµÓ°  –f÷"‚ÆWB‚Ò²‚Â†–W&&6‡•G&6·2æÆVæwFƒ²‚²²’°  –6öç7Bæ–ÖF–öä¶W—2Ò†–W&&6‡•G&6·5²‚Òæ¶W—3°  ’òò6¶—V×G’G&6·0 ––b‚æ–ÖF–öä¶W—2ÇÂæ–ÖF–öä¶W—2æÆVæwF‚ÓÓÒ’6öçF–çVS°  ’òò&ö6W72Ö÷'‚F&vWG0 ––b‚æ–ÖF–öä¶W—5²ÒæÖ÷'…F&vWG2’°  ’òòf–wW&R÷WBÆÂÖ÷'‚F&vWG2W6VB–âF†—2G&6° –6öç7BÖ÷'…F&vWDæÖW2Ò·Ó°  –ÆWB³°  –f÷"‚²Ò²²Âæ–ÖF–öä¶W—2æÆVæwFƒ²²²²’°  ––b‚æ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2’°  –f÷"‚ÆWBÒÒ²ÒÂæ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2æÆVæwFƒ²Ò²²’°  –Ö÷'…F&vWDæÖW5²æ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG5²ÒÒÒÒÓ°  —Ð  —Ð  —Ð  ’òò7&VFRG&6²f÷"V6‚Ö÷'‚F&vWBv—F‚ÆÂ¦W&ð ’òòÖ÷'…F&vWD–æfÇVVæ6W2W†6WBf÷"F†R¶W—2–âv†–6€ ’òòF†RÖ÷'…F&vWB—2æÖVBà –f÷"‚6öç7BÖ÷'…F&vWDæÖR–âÖ÷'…F&vWDæÖW2’°  –6öç7BF–ÖW2ÒµÓ° –6öç7BfÇVW2ÒµÓ°  –f÷"‚ÆWBÒÒ²ÒÓÒæ–ÖF–öä¶W—5²²ÒæÖ÷'…F&vWG2æÆVæwFƒ²²²Ò’°  –6öç7Bæ–ÖF–öä¶W’Òæ–ÖF–öä¶W—5²²Ó°  —F–ÖW2çW6‚‚æ–ÖF–öä¶W’çF–ÖR“° —fÇVW2çW6‚‚‚æ–ÖF–öä¶W’æÖ÷'…F&vWBÓÓÒÖ÷'…F&vWDæÖR’ò¢“°  —Ð  —G&6·2çW6‚‚æWrçVÖ&W$¶W–g&ÖUG&6²‚ræÖ÷'…F&vWD–æfÇVVæ6U²r²Ö÷'…F&vWDæÖR²uÒrÂF–ÖW2ÂfÇVW2’“°  —Ð  –GW&F–öâÒÖ÷'…F&vWDæÖW2æÆVæwF‚¢g3°  —ÒVÇ6R°  ’òòââæ77VÖR6¶VÆWFÂæ–ÖF–öà  –6öç7B&öæTæÖRÒræ&öæW5²r²&öæW5²‚ÒææÖR²uÒs°  –FDæöæV×G•G&6²€ •fV7F÷$¶W–g&ÖUG&6²Â&öæTæÖR²rç÷6—F–öârÀ –æ–ÖF–öä¶W—2Âw÷2rÂG&6·2“°  –FDæöæV×G•G&6²€ •VFW&æ–öä¶W–g&ÖUG&6²Â&öæTæÖR²rçVFW&æ–öârÀ –æ–ÖF–öä¶W—2Âw&÷BrÂG&6·2“°  –FDæöæV×G•G&6²€ •fV7F÷$¶W–g&ÖUG&6²Â&öæTæÖR²rç66ÆRrÀ –æ–ÖF–öä¶W—2Âw66ÂrÂG&6·2“°  —Ð  —Ð  ––b‚G&6·2æÆVæwF‚ÓÓÒ’°  —&WGW&âçVÆÃ°  —Ð  –6öç7B6Æ—ÒæWrF†—2‚6Æ—æÖRÂGW&F–öâÂG&6·2Â&ÆVæDÖöFR“°  —&WGW&â6Æ—°  —Ð  ’ò¢  ’¢6WG2F†RGW&F–öâöbF†—26Æ—FòF†RGW&F–öâöb—G2ÆöævW7B¶W–g&ÖRG&6²à ’  ’¢&WGW&â´æ–ÖF–öä6Æ—Ò&VfW&Væ6RFòF†—2æ–ÖF–öâ6Æ—à ’¢ð —&W6WDGW&F–öâ‚’°  –6öç7BG&6·2ÒF†—2çG&6·3° –ÆWBGW&F–öâÒ°  –f÷"‚ÆWB’ÒÂâÒG&6·2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7BG&6²ÒF†—2çG&6·5²’Ó°  –GW&F–öâÒÖF‚æÖ‚‚GW&F–öâÂG&6²çF–ÖW5²G&6²çF–ÖW2æÆVæwF‚ÒÒ“°  —Ð  —F†—2æGW&F–öâÒGW&F–öã°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢G&–×2ÆÂG&6·2FòF†R6Æ—w2GW&F–öâà ’  ’¢&WGW&â´æ–ÖF–öä6Æ—Ò&VfW&Væ6RFòF†—2æ–ÖF–öâ6Æ—à ’¢ð —G&–Ò‚’°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —F†—2çG&6·5²’ÒçG&–Ò‚ÂF†—2æGW&F–öâ“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢W&f÷&×2Ö–æ–ÖÂfÆ–FF–öâöâV6‚G&6²–âF†R6Æ—â&WGW&ç2G'VV–bÆÀ ’¢G&6·2&RfÆ–Bà ’  ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†R6Æ—w2¶W–g&ÖW2&RfÆ–B÷"æ÷Bà ’¢ð —fÆ–FFR‚’°  –ÆWBfÆ–BÒG'VS°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —fÆ–BÒfÆ–BbbF†—2çG&6·5²’ÒçfÆ–FFR‚“°  —Ð  —&WGW&âfÆ–C°  —Ð  ’ò¢  ’¢÷F–Ö—¦W2V6‚G&6²'’&VÖ÷f–ærWV—fÆVçB6WVVçF–Â¶W—2‡v†–6‚&P ’¢6öÖÖöâ–âÖ÷'‚F&vWB6WVVæ6W2’à ’  ’¢&WGW&â´æ–ÖF–öä6Æ—Ò&VfW&Væ6RFòF†—2æ–ÖF–öâ6Æ—à ’¢ð –÷F–Ö—¦R‚’°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —F†—2çG&6·5²’Òæ÷F–Ö—¦R‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWræ–ÖF–öâ6Æ—v—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´æ–ÖF–öä6Æ—Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  –6öç7BG&6·2ÒµÓ°  –f÷"‚ÆWB’Ò²’ÂF†—2çG&6·2æÆVæwFƒ²’²²’°  —G&6·2çW6‚‚F†—2çG&6·5²’Òæ6ÆöæR‚’“°  —Ð  –6öç7B6Æ—ÒæWrF†—2æ6öç7G'V7F÷"‚F†—2ææÖRÂF†—2æGW&F–öâÂG&6·2ÂF†—2æ&ÆVæDÖöFR“°  –6Æ—çW6W$FFÒ¥4ôâç'6R‚¥4ôâç7G&–æv–g’‚F†—2çW6W$FF’“°  —&WGW&â6Æ—°  —Ð  ’ò¢  ’¢6W&–Æ—¦W2F†—2æ–ÖF–öâ6Æ—–çFò¥4ôâà ’  ’¢&WGW&â´ö&¦V7GÒF†R¥4ôâö&¦V7Bà ’¢ð —Fô¥4ôâ‚’°  —&WGW&âF†—2æ6öç7G'V7F÷"çFô¥4ôâ‚F†—2“°  —Ð §Ð ¦gVæ7F–öâvWEG&6µG—Tf÷%fÇVUG—TæÖR‚G—TæÖR’°  —7v—F6‚‚G—TæÖRçFôÆ÷vW$66R‚’’°  –66Rw66Æ"s  –66RvF÷V&ÆRs  –66RvfÆöBs  –66RvçVÖ&W"s  –66Rv–çFVvW"s   —&WGW&âçVÖ&W$¶W–g&ÖUG&6³°  –66RwfV7F÷"s  –66RwfV7F÷#"s  –66RwfV7F÷#2s  –66RwfV7F÷#Bs   —&WGW&âfV7F÷$¶W–g&ÖUG&6³°  –66Rv6öÆ÷"s   —&WGW&â6öÆ÷$¶W–g&ÖUG&6³°  –66RwVFW&æ–öâs   —&WGW&âVFW&æ–öä¶W–g&ÖUG&6³°  –66Rv&ööÂs  –66Rv&ööÆVâs   —&WGW&â&ööÆVä¶W–g&ÖUG&6³°  –66Rw7G&–ærs   —&WGW&â7G&–æt¶W–g&ÖUG&6³°  —Ð  —F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢Vç7W÷'FVBG—TæÖS¢r²G—TæÖR“° §Ð ¦gVæ7F–öâ'6T¶W–g&ÖUG&6²‚§6öâ’°  ––b‚§6öâçG—RÓÓÒVæFVf–æVB’°  —F‡&÷ræWrW'&÷"‚uD…$TRä¶W–g&ÖUG&6³¢G&6²G—RVæFVf–æVBÂ6âæ÷B'6Rr“°  —Ð  –6öç7BG&6µG—RÒvWEG&6µG—Tf÷%fÇVUG—TæÖR‚§6öâçG—R“°  ––b‚§6öâçF–ÖW2ÓÓÒVæFVf–æVB’°  –6öç7BF–ÖW2ÒµÒÂfÇVW2ÒµÓ°  –fÆGFVä¥4ôâ‚§6öâæ¶W—2ÂF–ÖW2ÂfÇVW2ÂwfÇVRr“°  –§6öâçF–ÖW2ÒF–ÖW3° –§6öâçfÇVW2ÒfÇVW3°  —Ð  ’òòFW&—fVB6Æ76W26âFVf–æR7FF–2'6RÖWF†ö@ ––b‚G&6µG—Rç'6RÓÒVæFVf–æVB’°  —&WGW&âG&6µG—Rç'6R‚§6öâ“°  —ÒVÇ6R°  ’òò'’FVfVÇBÂvR77VÖR6öç7G'V7F÷"6ö×F–&ÆRv—F‚F†R&6P —&WGW&âæWrG&6µG—R‚§6öâææÖRÂ§6öâçF–ÖW2Â§6öâçfÇVW2Â§6öâæ–çFW'öÆF–öâ“°  —Ð §Ð ¢ò¢ ¢¢6Æ70¢¢6Æ76FW626–×ÆR66†–ær7—7FVÒÂW6VB–çFW&æÆÇ’'’´Æ–æ²f–ÆTÆöFW'Òà¢¢FòVæ&ÆR66†–ær7&÷72ÆÂÆöFW'2F†BW6R´Æ–æ²f–ÆTÆöFW'ÒÂFBD…$TRä66†RæVæ&ÆVBÒG'VRæöæ6R–â–÷W"à¢¢†–FV6öç7G'V7F÷ ¢¢ð¦6öç7B66†RÒ°  ’ò¢  ’¢v†WF†W"66†–ær—2Væ&ÆVB÷"æ÷Bà ’  ’¢7FF–0 ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð –Væ&ÆVC¢fÇ6RÀ  ’ò¢  ’¢F–7F–öæ'’F†B†öÆG266†VBf–ÆW2à ’  ’¢7FF–0 ’¢G—R´ö&¦V7CÇ7G&–ærÄö&¦V7CçÐ ’¢ð –f–ÆW3¢·ÒÀ  ’ò¢  ’¢FG266†RVçG'’v—F‚¶W’Fò&VfW&Væ6RF†Rf–ÆRâ–bF†—2¶W’Ç&VG ’¢†öÆG2f–ÆRÂ—B—2÷fW'w&—GFVâà ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒ¶W’ÒF†R¶W’Fò&VfW&Væ6RF†R66†VBf–ÆRà ’¢&Ò´ö&¦V7GÒf–ÆRÒF†Rf–ÆRFò&R66†VBà ’¢ð –FC¢gVæ7F–öâ‚¶W’Âf–ÆR’°  ––b‚F†—2æVæ&ÆVBÓÓÒfÇ6R’&WGW&ã°  ’òò6öç6öÆRæÆör‚uD…$TRä66†RrÂtFF–ær¶W“¢rÂ¶W’“°  —F†—2æf–ÆW5²¶W’ÒÒf–ÆS°  —ÒÀ  ’ò¢  ’¢vWG2F†R66†VBfÇVRf÷"F†Rv—fVâ¶W’à ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒ¶W’ÒF†R¶W’Fò&VfW&Væ6RF†R66†VBf–ÆRà ’¢&WGW&â´ö&¦V7GÇVæFVf–æVGÒF†R66†VBf–ÆRâ–bF†R¶W’FöW2æ÷BW†—7BVæFVf–æVF—2&WGW&æVBà ’¢ð –vWC¢gVæ7F–öâ‚¶W’’°  ––b‚F†—2æVæ&ÆVBÓÓÒfÇ6R’&WGW&ã°  ’òò6öç6öÆRæÆör‚uD…$TRä66†RrÂt6†V6¶–ær¶W“¢rÂ¶W’“°  —&WGW&âF†—2æf–ÆW5²¶W’Ó°  —ÒÀ  ’ò¢  ’¢&VÖ÷fW2F†R66†VBf–ÆR76ö6–FVBv—F‚F†Rv—fVâ¶W’à ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒ¶W’ÒF†R¶W’Fò&VfW&Væ6RF†R66†VBf–ÆRà ’¢ð —&VÖ÷fS¢gVæ7F–öâ‚¶W’’°  –FVÆWFRF†—2æf–ÆW5²¶W’Ó°  —ÒÀ  ’ò¢  ’¢&VÖ÷fRÆÂfÇVW2g&öÒF†R66†Rà ’  ’¢7FF–0 ’¢ð –6ÆV#¢gVæ7F–öâ‚’°  —F†—2æf–ÆW2Ò·Ó°  —Ð §Ó° ¢ò¢ ¢¢†æFÆW2æB¶VW2G&6²öbÆöFVBæBVæF–ærFFâFVfVÇBvÆö&À¢¢–ç7Fæ6RöbF†—26Æ72—27&VFVBæBW6VB'’ÆöFW'2–bæ÷B7WÆ–V@¢¢ÖçVÆÇ’à¢ ¢¢–âvVæW&ÂF†B6†÷VÆB&R7Vff–6–VçBÂ†÷vWfW"F†W&R&RF–ÖW2v†Vâ—B6à¢¢&RW6VgVÂFò†fR6W&FRÆöFW'2Òf÷"W†×ÆR–b–÷RvçBFò6†÷p¢¢6W&FRÆöF–ær&'2f÷"ö&¦V7G2æBFW‡GW&W2à¢ ¢¢§0¢¢6öç7BÖævW"ÒæWrD…$TRäÆöF–ætÖævW"‚“°¢¢ÖævW"æöäÆöBÒ‚’Óâ6öç6öÆRæÆör‚tÆöF–ær6ö×ÆWFRr“°¢ ¢¢6öç7BÆöFW#ÒæWrô$¤ÆöFW"‚ÖævW"“°¢¢6öç7BÆöFW#"ÒæWr6öÆÆFÆöFW"‚ÖævW"“°¢¢ ¢¢ð¦6Æ72ÆöF–ætÖævW"°  ’ò¢  ’¢6öç7G'V7G2æWrÆöF–ærÖævW"à ’  ’¢&Ò´gVæ7F–öçÒ¶öäÆöEÒÒW†V7WFW2v†VâÆÂ—FV×2†fR&VVâÆöFVBà ’¢&Ò´gVæ7F–öçÒ¶öå&öw&W75ÒÒW†V7WFW2v†Vâ6–ævÆR—FV×2†fR&VVâÆöFVBà ’¢&Ò´gVæ7F–öçÒ¶öäW'&÷%ÒÒW†V7WFW2v†VââW'&÷"ö67W'2à ’¢ð –6öç7G'V7F÷"‚öäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –ÆWB—4ÆöF–ærÒfÇ6S° –ÆWB—FV×4ÆöFVBÒ° –ÆWB—FV×5F÷FÂÒ° –ÆWBW&ÄÖöF–f–W"ÒVæFVf–æVC° –6öç7B†æFÆW'2ÒµÓ°  ’òò&VfW"Fò3Scƒ’f÷"F†R&V6öâv‡’vRFöâwB6WBæöå7F'@ ’òò–âF†R6öç7G'V7F÷   ’ò¢  ’¢W†V7WFW2v†Vââ—FVÒ7F'G2ÆöF–ærà ’  ’¢G—R´gVæ7F–öçÇVæFVf–æVGÐ ’¢FVfVÇBVæFVf–æV@ ’¢ð —F†—2æöå7F'BÒVæFVf–æVC°  ’ò¢  ’¢W†V7WFW2v†VâÆÂ—FV×2†fR&VVâÆöFVBà ’  ’¢G—R´gVæ7F–öçÇVæFVf–æVGÐ ’¢FVfVÇBVæFVf–æV@ ’¢ð —F†—2æöäÆöBÒöäÆöC°  ’ò¢  ’¢W†V7WFW2v†Vâ6–ævÆR—FV×2†fR&VVâÆöFVBà ’  ’¢G—R´gVæ7F–öçÇVæFVf–æVGÐ ’¢FVfVÇBVæFVf–æV@ ’¢ð —F†—2æöå&öw&W72Òöå&öw&W73°  ’ò¢  ’¢W†V7WFW2v†VââW'&÷"ö67W'2à ’  ’¢G—R´gVæ7F–öçÇVæFVf–æVGÐ ’¢FVfVÇBVæFVf–æV@ ’¢ð —F†—2æöäW'&÷"ÒöäW'&÷#°  ’ò¢  ’¢W6VBf÷"&÷'F–æröævö–ær&WVW7G2–âÆöFW'2W6–ærF†—2ÖævW"à ’  ’¢G—R´&÷'D6öçG&öÆÆW'Ð ’¢ð —F†—2æ&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  ’ò¢  ’¢F†—26†÷VÆB&R6ÆÆVB'’ç’ÆöFW"W6–ærF†RÖævW"v†VâF†RÆöFW  ’¢7F'G2ÆöF–ærâ—FVÒà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RU$ÂFòÆöBà ’¢ð —F†—2æ—FVÕ7F'BÒgVæ7F–öâ‚W&Â’°  –—FV×5F÷FÂ²³°  ––b‚—4ÆöF–ærÓÓÒfÇ6R’°  ––b‚66÷Ræöå7F'BÓÒVæFVf–æVB’°  —66÷Ræöå7F'B‚W&ÂÂ—FV×4ÆöFVBÂ—FV×5F÷FÂ“°  —Ð  —Ð  –—4ÆöF–ærÒG'VS°  —Ó°  ’ò¢  ’¢F†—26†÷VÆB&R6ÆÆVB'’ç’ÆöFW"W6–ærF†RÖævW"v†VâF†RÆöFW  ’¢VæFVBÆöF–ærâ—FVÒà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RU$ÂöbF†RÆöFVB—FVÒà ’¢ð —F†—2æ—FVÔVæBÒgVæ7F–öâ‚W&Â’°  –—FV×4ÆöFVB²³°  ––b‚66÷Ræöå&öw&W72ÓÒVæFVf–æVB’°  —66÷Ræöå&öw&W72‚W&ÂÂ—FV×4ÆöFVBÂ—FV×5F÷FÂ“°  —Ð  ––b‚—FV×4ÆöFVBÓÓÒ—FV×5F÷FÂ’°  –—4ÆöF–ærÒfÇ6S°  ––b‚66÷RæöäÆöBÓÒVæFVf–æVB’°  —66÷RæöäÆöB‚“°  —Ð  —Ð  —Ó°  ’ò¢  ’¢F†—26†÷VÆB&R6ÆÆVB'’ç’ÆöFW"W6–ærF†RÖævW"v†VâF†RÆöFW  ’¢Væ6÷VçFW'2âW'&÷"v†VâÆöF–ærâ—FVÒà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RU$ÂöbF†R—FVÒF†B&öGV6W2âW'&÷"à ’¢ð —F†—2æ—FVÔW'&÷"ÒgVæ7F–öâ‚W&Â’°  ––b‚66÷RæöäW'&÷"ÓÒVæFVf–æVB’°  —66÷RæöäW'&÷"‚W&Â“°  —Ð  —Ó°  ’ò¢  ’¢v—fVâU$ÂÂW6W2F†RU$ÂÖöF–f–W"6ÆÆ&6²†–bç’’æB&WGW&ç2 ’¢&W6öÇfVBU$Ââ–bæòU$ÂÖöF–f–W"—26WBÂ&WGW&ç2F†R÷&–v–æÂU$Âà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RU$ÂFòÆöBà ’¢&WGW&â·7G&–æwÒF†R&W6öÇfVBU$Âà ’¢ð —F†—2ç&W6öÇfUU$ÂÒgVæ7F–öâ‚W&Â’°  ––b‚W&ÄÖöF–f–W"’°  —&WGW&âW&ÄÖöF–f–W"‚W&Â“°  —Ð  —&WGW&âW&Ã°  —Ó°  ’ò¢  ’¢–b&÷f–FVBÂF†R6ÆÆ&6²v–ÆÂ&R76VBV6‚&W6÷W&6RU$Â&Vf÷&R ’¢&WVW7B—26VçBâF†R6ÆÆ&6²Ö’&WGW&âF†R÷&–v–æÂU$ÂÂ÷"æWrU$ÂFð ’¢÷fW'&–FRÆöF–ær&V†f–÷"âF†—2&V†f–÷"6â&RW6VBFòÆöB76WG2g&öÐ ’¢å¤•f–ÆW2ÂG&rÖæBÖG&÷—2ÂæBFFU$—2à ’  ’¢§0 ’¢6öç7B&Æö'2Ò²vf—6‚ævÇFbs¢&Æö#ÂvF–fgW6Rçærs¢&Æö#"Âvæ÷&ÖÂçærs¢&Æö#7Ó° ’  ’¢6öç7BÖævW"ÒæWrD…$TRäÆöF–ætÖævW"‚“° ’  ’¢òò–æ—F–Æ—¦RÆöF–ærÖævW"v—F‚U$Â6ÆÆ&6²à ’¢6öç7Bö&¦V7EU$Ç2ÒµÓ° ’¢ÖævW"ç6WEU$ÄÖöF–f–W"‚‚W&Â’Óâ° ’  ’¢ —W&ÂÒU$Âæ7&VFTö&¦V7EU$Â‚&Æö'5²W&ÂÒ“° ’¢ –ö&¦V7EU$Ç2çW6‚‚W&Â“° ’¢ —&WGW&âW&Ã° ’  ’¢Ò“° ’  ’¢òòÆöB2W7VÂÂF†Vâ&Wfö¶RF†R&Æö"U$Ç2à ’¢6öç7BÆöFW"ÒæWrtÅDdÆöFW"‚ÖævW"“° ’¢ÆöFW"æÆöB‚vf—6‚ævÇFbrÂ†vÇFb’Óâ° ’  ’¢ —66VæRæFB‚vÇFbç66VæR“° ’¢ –ö&¦V7EU$Ç2æf÷$V6‚‚‚W&Â’ÓâU$Âç&Wfö¶Tö&¦V7EU$Â‚W&Â’“° ’  ’¢Ò“° ’¢  ’  ’¢&Ò¶gVæ7F–öâ‡7G&–ær“§7G&–æwÒG&ç6f÷&ÒÒU$ÂÖöF–f–W"6ÆÆ&6²â6ÆÆVBv—F‚âU$ÂæB×W7B&WGW&â&W6öÇfVBU$Âà ’¢&WGW&â´ÆöF–ætÖævW'Ò&VfW&Væ6RFòF†—2ÆöF–ærÖævW"à ’¢ð —F†—2ç6WEU$ÄÖöF–f–W"ÒgVæ7F–öâ‚G&ç6f÷&Ò’°  —W&ÄÖöF–f–W"ÒG&ç6f÷&Ó°  —&WGW&âF†—3°  —Ó°  ’ò¢  ’¢&Vv—7FW'2ÆöFW"v—F‚F†Rv—fVâ&VwVÆ"W‡&W76–öââ6â&RW6VBFð ’¢FVf–æRv†BÆöFW"6†÷VÆB&RW6VB–â÷&FW"FòÆöB7V6–f–2f–ÆW2â ’¢G—–6ÂW6R66R—2Fò÷fW'w&—FRF†RFVfVÇBÆöFW"f÷"FW‡GW&W2à ’  ’¢§0 ’¢òòFB†æFÆW"f÷"DtFW‡GW&W0 ’¢ÖævW"æFD†æFÆW"‚õÂçFvBö’ÂæWrDtÆöFW"‚’“° ’¢  ’  ’¢&Ò·7G&–æwÒ&VvW‚Ò&VwVÆ"W‡&W76–öâà ’¢&Ò´ÆöFW'ÒÆöFW"ÒÆöFW"F†B6†÷VÆB†æFÆRÖF6†VB66W2à ’¢&WGW&â´ÆöF–ætÖævW'Ò&VfW&Væ6RFòF†—2ÆöF–ærÖævW"à ’¢ð —F†—2æFD†æFÆW"ÒgVæ7F–öâ‚&VvW‚ÂÆöFW"’°  –†æFÆW'2çW6‚‚&VvW‚ÂÆöFW"“°  —&WGW&âF†—3°  —Ó°  ’ò¢  ’¢&VÖ÷fW2F†RÆöFW"f÷"F†Rv—fVâ&VwVÆ"W‡&W76–öâà ’  ’¢&Ò·7G&–æwÒ&VvW‚Ò&VwVÆ"W‡&W76–öâà ’¢&WGW&â´ÆöF–ætÖævW'Ò&VfW&Væ6RFòF†—2ÆöF–ærÖævW"à ’¢ð —F†—2ç&VÖ÷fT†æFÆW"ÒgVæ7F–öâ‚&VvW‚’°  –6öç7B–æFW‚Ò†æFÆW'2æ–æFW„öb‚&VvW‚“°  ––b‚–æFW‚ÓÒÓ’°  –†æFÆW'2ç7Æ–6R‚–æFW‚Â"“°  —Ð  —&WGW&âF†—3°  —Ó°  ’ò¢  ’¢6â&RW6VBFò&WG&–WfRF†R&Vv—7FW&VBÆöFW"f÷"F†Rv—fVâf–ÆRF‚à ’  ’¢&Ò·7G&–æwÒf–ÆRÒF†Rf–ÆRF‚à ’¢&WGW&â³ôÆöFW'ÒF†R&Vv—7FW&VBÆöFW"â&WGW&ç2çVÆÆ–bæòÆöFW"v2f÷VæBà ’¢ð —F†—2ævWD†æFÆW"ÒgVæ7F–öâ‚f–ÆR’°  –f÷"‚ÆWB’ÒÂÂÒ†æFÆW'2æÆVæwFƒ²’ÂÃ²’³Ò"’°  –6öç7B&VvW‚Ò†æFÆW'5²’Ó° –6öç7BÆöFW"Ò†æFÆW'5²’²Ó°  ––b‚&VvW‚ævÆö&Â’&VvW‚æÆ7D–æFW‚Ò²òò6VR3s“#   ––b‚&VvW‚çFW7B‚f–ÆR’’°  —&WGW&âÆöFW#°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ó°  ’ò¢  ’¢6â&RW6VBFò&÷'Böævö–ærÆöF–ær&WVW7G2–âÆöFW'2W6–ærF†—2ÖævW"à ’¢F†R&÷'BöæÇ’v÷&·2–bF†RÆöFW'2–×ÆVÖVçB´Æ–æ²ÆöFW"6&÷'GÒæB&÷'E6–væÂæç’‚–  ’¢—27W÷'FVB–âF†R'&÷w6W"à ’  ’¢&WGW&â´ÆöF–ætÖævW'Ò&VfW&Væ6RFòF†—2ÆöF–ærÖævW"à ’¢ð —F†—2æ&÷'BÒgVæ7F–öâ‚’°  —F†—2æ&÷'D6öçG&öÆÆW"æ&÷'B‚“° —F†—2æ&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  —&WGW&âF†—3°  —Ó°  —Ð §Ð ¢ò¢ ¢¢F†RvÆö&ÂFVfVÇBÆöF–ærÖævW"à¢ ¢¢6öç7Fç@¢¢G—R´ÆöF–ætÖævW'Ð¢¢ð¦6öç7BFVfVÇDÆöF–ætÖævW"Òò¤õõU$Uõò¢òæWrÆöF–ætÖævW"‚“° ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"ÆöFW'2à¢ ¢¢'7G&7@¢¢ð¦6Æ72ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  ’ò¢  ’¢F†RÆöF–ærÖævW"à ’  ’¢G—R´ÆöF–ætÖævW'Ð ’¢FVfVÇBFVfVÇDÆöF–ætÖævW  ’¢ð —F†—2æÖævW"Ò‚ÖævW"ÓÒVæFVf–æVB’òÖævW"¢FVfVÇDÆöF–ætÖævW#°  ’ò¢  ’¢F†R7&÷74÷&–v–â7G&–ærFò–×ÆVÖVçB4õ%2f÷"ÆöF–ærF†RW&Âg&öÒ ’¢F–ffW&VçBFöÖ–âF†BÆÆ÷w24õ%2à ’  ’¢G—R·7G&–æwÐ ’¢FVfVÇBvæöç–Ö÷W2p ’¢ð —F†—2æ7&÷74÷&–v–âÒvæöç–Ö÷W2s°  ’ò¢  ’¢v†WF†W"F†R„ÔÄ‡GG&WVW7BW6W27&VFVçF–Ç2à ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð —F†—2çv—F„7&VFVçF–Ç2ÒfÇ6S°  ’ò¢  ’¢F†R&6RF‚g&öÒv†–6‚F†R76WBv–ÆÂ&RÆöFVBà ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2çF‚Òrs°  ’ò¢  ’¢F†R&6RF‚g&öÒv†–6‚FF—F–öæÂ&W6÷W&6W2Æ–¶RFW‡GW&W2v–ÆÂ&RÆöFVBà ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2ç&W6÷W&6UF‚Òrs°  ’ò¢  ’¢F†R·&WVW7B†VFW%×´Æ–æ²‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72ôvÆ÷76'’õ&WVW7Eö†VFW'Ð ’¢W6VB–â…EE&WVW7Bà ’  ’¢G—R´ö&¦V7CÇ7G&–ærÂç“çÐ ’¢ð —F†—2ç&WVW7D†VFW"Ò·Ó°  —Ð  ’ò¢  ’¢F†—2ÖWF†öBæVVG2Fò&R–×ÆVÖVçFVB'’ÆÂ6öæ7&WFRÆöFW'2â—B†öÆG2F†P ’¢Æöv–2f÷"ÆöF–ær76WG2g&öÒF†R&6¶VæBà ’  ’¢'7G&7@ ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBà ’¢&Ò´gVæ7F–öçÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Ò¶öå&öw&W75ÒÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·Ò¶öäW'&÷%ÒÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚ò¢W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"¢ò’·Ð  ’ò¢  ’¢7–æ2fW'6–öâöb´Æ–æ²ÆöFW"6ÆöGÒà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Ò¶öå&öw&W75ÒÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&WGW&âµ&öÖ—6WÒ&öÖ—6RF†B&W6öÇfW2v†VâF†R76WB†2&VVâÆöFVBà ’¢ð –ÆöD7–æ2‚W&ÂÂöå&öw&W72’°  –6öç7B66÷RÒF†—3°  —&WGW&âæWr&öÖ—6R‚gVæ7F–öâ‚&W6öÇfRÂ&V¦V7B’°  —66÷RæÆöB‚W&ÂÂ&W6öÇfRÂöå&öw&W72Â&V¦V7B“°  —Ò“°  —Ð  ’ò¢  ’¢F†—2ÖWF†öBæVVG2Fò&R–×ÆVÖVçFVB'’ÆÂ6öæ7&WFRÆöFW'2â—B†öÆG2F†P ’¢Æöv–2f÷"'6–ærF†R76WB–çFòF‡&VRæ§2VçF—F–W2à ’  ’¢'7G&7@ ’¢&Ò¶ç—ÒFFÒF†RFFFò'6Rà ’¢ð —'6R‚ò¢FF¢ò’·Ð  ’ò¢  ’¢6WG2F†R7&÷74÷&–v–æ7G&–ærFò–×ÆVÖVçB4õ%2f÷"ÆöF–ærF†RU$À ’¢g&öÒF–ffW&VçBFöÖ–âF†BÆÆ÷w24õ%2à ’  ’¢&Ò·7G&–æwÒ7&÷74÷&–v–âÒF†R7&÷74÷&–v–æfÇVRà ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WD7&÷74÷&–v–â‚7&÷74÷&–v–â’°  —F†—2æ7&÷74÷&–v–âÒ7&÷74÷&–v–ã° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢v†WF†W"F†R„ÔÄ‡GG&WVW7BW6W27&VFVçF–Ç27V6‚26öö¶–W2ÂWF†÷&—¦F–öà ’¢†VFW'2÷"DÅ26Æ–VçB6W'F–f–6FW2Â6VRµ„ÔÄ‡GG&WVW7Bçv—F„7&VFVçF–Ç5×´Æ–æ²‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72õvV"ô’õ„ÔÄ‡GG&WVW7B÷v—F„7&VFVçF–Ç7Òà ’  ’¢æ÷FS¢F†—26WGF–ær†2æòVffV7B–b–÷R&RÆöF–ærf–ÆW2Æö6ÆÇ’÷"g&öÒF†R6ÖRFöÖ–âà ’  ’¢&Ò¶&ööÆVçÒfÇVRÒF†Rv—F„7&VFVçF–Ç6fÇVRà ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WEv—F„7&VFVçF–Ç2‚fÇVR’°  —F†—2çv—F„7&VFVçF–Ç2ÒfÇVS° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R&6RF‚f÷"F†R76WBà ’  ’¢&Ò·7G&–æwÒF‚ÒF†R&6RF‚à ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WEF‚‚F‚’°  —F†—2çF‚ÒFƒ° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R&6RF‚f÷"FWVæFVçB&W6÷W&6W2Æ–¶RFW‡GW&W2à ’  ’¢&Ò·7G&–æwÒ&W6÷W&6UF‚ÒF†R&W6÷W&6RF‚à ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WE&W6÷W&6UF‚‚&W6÷W&6UF‚’°  —F†—2ç&W6÷W&6UF‚Ò&W6÷W&6UFƒ° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâ&WVW7B†VFW"à ’  ’¢&Ò´ö&¦V7GÒ&WVW7D†VFW"Ò·&WVW7B†VFW%×´Æ–æ²‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72ôvÆ÷76'’õ&WVW7Eö†VFW'Ð ’¢f÷"6öæf–wW&–ærF†R…EE&WVW7Bà ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WE&WVW7D†VFW"‚&WVW7D†VFW"’°  —F†—2ç&WVW7D†VFW"Ò&WVW7D†VFW#° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢F†—2ÖWF†öB6â&R–×ÆVÖVçFVB–âÆöFW'2f÷"&÷'F–æröævö–ær&WVW7G2à ’  ’¢'7G&7@ ’¢&WGW&â´ÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð –&÷'B‚’°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢6ÆÆ&6²f÷"öå&öw&W72–âÆöFW'2à¢ ¢¢6ÆÆ&6²öå&öw&W746ÆÆ&6°¢¢&Òµ&öw&W74WfVçGÒWfVçBÒâ–ç7Fæ6Röb&öw&W74WfVçFF†B&W&W6VçG2F†R7W'&VçBÆöF–ær7FGW2à¢¢ð ¢ò¢ ¢¢6ÆÆ&6²f÷"öäW'&÷"–âÆöFW'2à¢ ¢¢6ÆÆ&6²öäW'&÷$6ÆÆ&6°¢¢&Ò´W'&÷'ÒW'&÷"ÒF†RW'&÷"v†–6‚ö67W'&VBGW&–ærF†RÆöF–ær&ö6W72à¢¢ð ¢ò¢ ¢¢F†RFVfVÇBÖFW&–ÂæÖRF†B—2W6VB'’ÆöFW'0¢¢v†Vâ7&VF–ærÖFW&–Ç2f÷"ÆöFVB4Bö&¦V7G2à¢ ¢¢æ÷FS¢æ÷BÆÂÆöFW'2Ö–v‡B†öæ÷"F†—26WGF–ærà¢ ¢¢7FF–0¢¢G—R·7G&–æwÐ¢¢FVfVÇBuõôDTdTÅBp¢¢ð¤ÆöFW"äDTdTÅEôÔDU$”ÅôäÔRÒuõôDTdTÅBs° ¦6öç7BÆöF–ærÒ·Ó° ¦6Æ72‡GGW'&÷"W‡FVæG2W'&÷"°  –6öç7G'V7F÷"‚ÖW76vRÂ&W7öç6R’°  —7WW"‚ÖW76vR“° —F†—2ç&W7öç6RÒ&W7öç6S°  —Ð §Ð ¢ò¢ ¢¢Æ÷rÆWfVÂ6Æ72f÷"ÆöF–ær&W6÷W&6W2v—F‚F†RfWF6‚’ÂW6VB–çFW&æÆÇ’'¢¢Ö÷7BÆöFW'2â—B6âÇ6ò&RW6VBF—&V7FÇ’FòÆöBç’f–ÆRG—RF†BFöW0¢¢æ÷B†fRÆöFW"à¢ ¢¢F†—2ÆöFW"7W÷'G266†–ærâ–b–÷RvçBFòW6R—BÂFBD…$TRä66†RæVæ&ÆVBÒG'VS¶ ¢¢öæ6RFò–÷W"Æ–6F–öâà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRäf–ÆTÆöFW"‚“°¢¢6öç7BFFÒv—BÆöFW"æÆöD7–æ2‚vW†×ÆRçG‡Br“°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72f–ÆTÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrf–ÆRÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  ’ò¢  ’¢F†RW‡V7FVBÖ–ÖRG—RâfÆ–BfÇVW26â&Rf÷Væ@ ’¢¶†W&U×´Æ–æ²†‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72õvV"ô’ôDôÕ'6W"÷'6Tg&öÕ7G&–ær6Ö–ÖWG—WÐ ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2æÖ–ÖUG—RÒrs°  ’ò¢  ’¢F†RW‡V7FVB&W7öç6RG—Rà ’  ’¢G—R²‚v'&–'VffW"wÂv&Æö"wÂvFö7VÖVçBwÂv§6öâwÂrr—Ð ’¢FVfVÇBrp ’¢ð —F†—2ç&W7öç6UG—RÒrs°  ’ò¢  ’¢W6VBf÷"&÷'F–ær&WVW7G2à ’  ’¢&—fFP ’¢G—R´&÷'D6öçG&öÆÆW'Ð ’¢ð —F†—2åö&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVB&W7öç6RFòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ†ç’—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Ò¶öå&öw&W75ÒÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·Ò¶öäW'&÷%ÒÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â¶ç—ÇVæFVf–æVGÒF†R66†VB&W6÷W&6R–bf–Æ&ÆRà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚W&ÂÓÓÒVæFVf–æVB’W&ÂÒrs°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66†VBÒ66†RævWB‚f–ÆS¢G·W&ÇÖ“°  ––b‚66†VBÓÒVæFVf–æVB’°  —F†—2æÖævW"æ—FVÕ7F'B‚W&Â“°  —6WEF–ÖV÷WB‚‚’Óâ°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —F†—2æÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —&WGW&â66†VC°  —Ð  ’òò6†V6²–b&WVW7B—2GWÆ–6FP  ––b‚ÆöF–æu²W&ÂÒÓÒVæFVf–æVB’°  –ÆöF–æu²W&ÂÒçW6‚‚°  –öäÆöC¢öäÆöBÀ –öå&öw&W73¢öå&öw&W72À –öäW'&÷#¢öäW'&÷   —Ò“°  —&WGW&ã°  —Ð  ’òò–æ—F–Æ—6R'&’f÷"GWÆ–6FR&WVW7G0 –ÆöF–æu²W&ÂÒÒµÓ°  –ÆöF–æu²W&ÂÒçW6‚‚° –öäÆöC¢öäÆöBÀ –öå&öw&W73¢öå&öw&W72À –öäW'&÷#¢öäW'&÷"À —Ò“°  ’òò7&VFR&WVW7@ –6öç7B&WÒæWr&WVW7B‚W&ÂÂ° –†VFW'3¢æWr†VFW'2‚F†—2ç&WVW7D†VFW"’À –7&VFVçF–Ç3¢F†—2çv—F„7&VFVçF–Ç2òv–æ6ÇVFRr¢w6ÖRÖ÷&–v–ârÀ —6–væÃ¢‚G—Vöb&÷'E6–væÂæç’ÓÓÒvgVæ7F–öâr’ò&÷'E6–væÂæç’‚²F†—2åö&÷'D6öçG&öÆÆW"ç6–væÂÂF†—2æÖævW"æ&÷'D6öçG&öÆÆW"ç6–væÂÒ’¢F†—2åö&÷'D6öçG&öÆÆW"ç6–væÀ —Ò“°  ’òò&V6÷&B7FFW2‚fö–BFF&6R –6öç7BÖ–ÖUG—RÒF†—2æÖ–ÖUG—S° –6öç7B&W7öç6UG—RÒF†—2ç&W7öç6UG—S°  ’òò7F'BF†RfWF6€ –fWF6‚‚&W ’çF†Vâ‚&W7öç6RÓâ°  ––b‚&W7öç6Rç7FGW2ÓÓÒ#ÇÂ&W7öç6Rç7FGW2ÓÓÒ’°  ’òò6öÖR'&÷w6W'2&WGW&â…EE7FGW2v†VâW6–æræöâÖ‡GG&÷Fö6öÀ ’òòRærâvf–ÆS¢òòr÷"vFF¢òòrâ†æFÆR27V66W72à  ––b‚&W7öç6Rç7FGW2ÓÓÒ’°  –6öç6öÆRçv&â‚uD…$TRäf–ÆTÆöFW#¢…EE7FGW2&V6V—fVBâr“°  —Ð  ’òòv÷&¶&÷VæC¢6†V6¶–ær–b&W7öç6Ræ&öG’ÓÓÒVæFVf–æVBf÷"Æ—’'&÷w6W"3#3SC€  ––b‚G—Vöb&VF&ÆU7G&VÒÓÓÒwVæFVf–æVBrÇÂ&W7öç6Ræ&öG’ÓÓÒVæFVf–æVBÇÂ&W7öç6Ræ&öG’ævWE&VFW"ÓÓÒVæFVf–æVB’°  —&WGW&â&W7öç6S°  —Ð  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ° –6öç7B&VFW"Ò&W7öç6Ræ&öG’ævWE&VFW"‚“°  ’òòæv–ç‚æVVG2‚Ôf–ÆRÕ6—¦R6†V6° ’òò‡GG3¢ò÷6W'fW&fVÇBæ6öÒ÷VW7F–öç2óCƒ#ƒsR÷v‡’ÖFöW2Öæv–ç‚×&VÖ÷fRÖ6öçFVçBÖÆVæwF‚Ö†VFW"Öf÷"Ö6‡Væ¶VBÖ6öçFVç@ –6öç7B6öçFVçDÆVæwF‚Ò&W7öç6Ræ†VFW'2ævWB‚u‚Ôf–ÆRÕ6—¦Rr’ÇÂ&W7öç6Ræ†VFW'2ævWB‚t6öçFVçBÔÆVæwF‚r“° –6öç7BF÷FÂÒ6öçFVçDÆVæwF‚ò'6T–çB‚6öçFVçDÆVæwF‚’¢° –6öç7BÆVæwF„6ö×WF&ÆRÒF÷FÂÓÒ° –ÆWBÆöFVBÒ°  ’òòW&–öF–6ÆÇ’&VBFF–çFòF†RæWr7G&VÒG&6¶–ærv†–ÆRF÷væÆöB&öw&W70 –6öç7B7G&VÒÒæWr&VF&ÆU7G&VÒ‚° —7F'B‚6öçG&öÆÆW"’°  —&VDFF‚“°  –gVæ7F–öâ&VDFF‚’°  —&VFW"ç&VB‚’çF†Vâ‚‚²FöæRÂfÇVRÒ’Óâ°  ––b‚FöæR’°  –6öçG&öÆÆW"æ6Æ÷6R‚“°  —ÒVÇ6R°  –ÆöFVB³ÒfÇVRæ'—FTÆVæwFƒ°  –6öç7BWfVçBÒæWr&öw&W74WfVçB‚w&öw&W72rÂ²ÆVæwF„6ö×WF&ÆRÂÆöFVBÂF÷FÂÒ“° –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöå&öw&W72’6ÆÆ&6²æöå&öw&W72‚WfVçB“°  —Ð  –6öçG&öÆÆW"æVçVWVR‚fÇVR“° —&VDFF‚“°  —Ð  —ÒÂ‚R’Óâ°  –6öçG&öÆÆW"æW'&÷"‚R“°  —Ò“°  —Ð  —Ð  —Ò“°  —&WGW&âæWr&W7öç6R‚7G&VÒ“°  —ÒVÇ6R°  —F‡&÷ræWr‡GGW'&÷"‚fWF6‚f÷""G·&W7öç6RçW&ÇÒ"&W7öæFVBv—F‚G·&W7öç6Rç7FGW7Ó¢G·&W7öç6Rç7FGW5FW‡GÖÂ&W7öç6R“°  —Ð  —Ò ’çF†Vâ‚&W7öç6RÓâ°  —7v—F6‚‚&W7öç6UG—R’°  –66Rv'&–'VffW"s   —&WGW&â&W7öç6Ræ'&”'VffW"‚“°  –66Rv&Æö"s   —&WGW&â&W7öç6Ræ&Æö"‚“°  –66RvFö7VÖVçBs   —&WGW&â&W7öç6RçFW‡B‚ ’çF†Vâ‚FW‡BÓâ°  –6öç7B'6W"ÒæWrDôÕ'6W"‚“° —&WGW&â'6W"ç'6Tg&öÕ7G&–ær‚FW‡BÂÖ–ÖUG—R“°  —Ò“°  –66Rv§6öâs   —&WGW&â&W7öç6Ræ§6öâ‚“°  –FVfVÇC   ––b‚Ö–ÖUG—RÓÓÒrr’°  —&WGW&â&W7öç6RçFW‡B‚“°  —ÒVÇ6R°  ’òò6æ–fbVæ6öF–æp –6öç7B&RÒö6†'6WCÒ#ò…µã²%Ç5Ò¢’#òö“° –6öç7BW†V2Ò&RæW†V2‚Ö–ÖUG—R“° –6öç7BÆ&VÂÒW†V2bbW†V5²ÒòW†V5²ÒçFôÆ÷vW$66R‚’¢VæFVf–æVC° –6öç7BFV6öFW"ÒæWrFW‡DFV6öFW"‚Æ&VÂ“° —&WGW&â&W7öç6Ræ'&”'VffW"‚’çF†Vâ‚"ÓâFV6öFW"æFV6öFR‚"’“°  —Ð  —Ð  —Ò ’çF†Vâ‚FFÓâ°  ’òòFBFò66†RöæÇ’öâ…EE7V66W72Â6òF†BvRFòæ÷B66†P ’òòW'&÷"&W7öç6R&öF–W22&÷W"&W7öç6W2Fò&WVW7G2à ”66†RæFB‚f–ÆS¢G·W&ÇÖÂFF“°  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ° –FVÆWFRÆöF–æu²W&ÂÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäÆöB’6ÆÆ&6²æöäÆöB‚FF“°  —Ð  —Ò ’æ6F6‚‚W'"Óâ°  ’òò&÷'BW'&÷'2æB÷F†W"W'&÷'2&R†æFÆVBF†R6ÖP  –6öç7B6ÆÆ&6·2ÒÆöF–æu²W&ÂÓ°  ––b‚6ÆÆ&6·2ÓÓÒVæFVf–æVB’°  ’òòv†VâöäÆöBv26ÆÆVBæBW&Âv2FVÆWFVB–âÆöF–æv  —F†—2æÖævW"æ—FVÔW'&÷"‚W&Â“° —F‡&÷rW'#°  —Ð  –FVÆWFRÆöF–æu²W&ÂÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒ6ÆÆ&6·2æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäW'&÷"’6ÆÆ&6²æöäW'&÷"‚W'"“°  —Ð  —F†—2æÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ò ’æf–æÆÇ’‚‚’Óâ°  —F†—2æÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  —F†—2æÖævW"æ—FVÕ7F'B‚W&Â“°  —Ð  ’ò¢  ’¢6WG2F†RW‡V7FVB&W7öç6RG—Rà ’  ’¢&Ò²‚v'&–'VffW"wÂv&Æö"wÂvFö7VÖVçBwÂv§6öâwÂrr—ÒfÇVRÒF†R&W7öç6RG—Rà ’¢&WGW&â´f–ÆTÆöFW'Ò&VfW&Væ6RFòF†—2f–ÆRÆöFW"à ’¢ð —6WE&W7öç6UG—R‚fÇVR’°  —F†—2ç&W7öç6UG—RÒfÇVS° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RW‡V7FVBÖ–ÖRG—RöbF†RÆöFVBf–ÆRà ’  ’¢&Ò·7G&–æwÒfÇVRÒF†RÖ–ÖRG—Rà ’¢&WGW&â´f–ÆTÆöFW'Ò&VfW&Væ6RFòF†—2f–ÆRÆöFW"à ’¢ð —6WDÖ–ÖUG—R‚fÇVR’°  —F†—2æÖ–ÖUG—RÒfÇVS° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&÷'G2öævö–ærfWF6‚&WVW7G2à ’  ’¢&WGW&â´f–ÆTÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð –&÷'B‚’°  —F†—2åö&÷'D6öçG&öÆÆW"æ&÷'B‚“° —F†—2åö&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–æræ–ÖF–öâ6Æ—2–âF†R¥4ôâf÷&ÖBâF†Rf–ÆW2&R–çFW&æÆÇ¢¢ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRäæ–ÖF–öäÆöFW"‚“°¢¢6öç7Bæ–ÖF–öç2Òv—BÆöFW"æÆöD7–æ2‚væ–ÖF–öç2öæ–ÖF–öâæ§2r“°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72æ–ÖF–öäÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWræ–ÖF–öâÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVBæ–ÖF–öç22â'& ’¢†öÆF–ær–ç7Fæ6W2öb´Æ–æ²æ–ÖF–öä6Æ—ÒFòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„'&“Äæ–ÖF–öä6Æ—â—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ’ò¢  ’¢'6W2F†Rv—fVâ¥4ôâö&¦V7BæB&WGW&ç2â'&’öbæ–ÖF–öâ6Æ—2à ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VBæ–ÖF–öâ6Æ—2à ’¢&WGW&â´'&“Äæ–ÖF–öä6Æ—çÒF†R'6VBæ–ÖF–öâ6Æ—2à ’¢ð —'6R‚§6öâ’°  –6öç7Bæ–ÖF–öç2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â§6öâæÆVæwFƒ²’²²’°  –6öç7B6Æ—Òæ–ÖF–öä6Æ—ç'6R‚§6öå²’Ò“°  –æ–ÖF–öç2çW6‚‚6Æ—“°  —Ð  —&WGW&âæ–ÖF–öç3°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"ÆöF–ær6ö×&W76VBFW‡GW&Rf÷&ÖG235D2Â5D2÷"UD2à¢¢FW‡GW&W2&R–çFW&æÆÇ’ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢FW&—fVB6Æ76W2†fRFò–×ÆVÖVçBF†R'6R‚–ÖWF†öBv†–6‚†öÆG2F†R'6–æp¢¢f÷"F†R&W7V7F—fRf÷&ÖBà¢ ¢¢'7G&7@¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ726ö×&W76VEFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWr6ö×&W76VBFW‡GW&RÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB76W2F†RÆöFVB6ö×&W76VBFW‡GW&P ’¢FòF†RöäÆöB‚–6ÆÆ&6²âF†RÖWF†öBÇ6ò&WGW&ç2æWrFW‡GW&Rö&¦V7Bv†–6‚6à ’¢F—&V7FÇ’&RW6VBf÷"ÖFW&–Â7&VF–öââ–b–÷RFò—BF†—2v’ÂF†RFW‡GW&P ’¢Ö’÷W–â–÷W"66VæRöæ6RF†R&W7V7F—fRÆöF–ær&ö6W72—2f–æ—6†VBà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„6ö×&W76VEFW‡GW&R—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â´6ö×&W76VEFW‡GW&WÒF†R6ö×&W76VBFW‡GW&Rà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7B–ÖvW2ÒµÓ°  –6öç7BFW‡GW&RÒæWr6ö×&W76VEFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“°  –ÆWBÆöFVBÒ°  –gVæ7F–öâÆöEFW‡GW&R‚’’°  –ÆöFW"æÆöB‚W&Å²’ÒÂgVæ7F–öâ‚'VffW"’°  –6öç7BFW„FF2Ò66÷Rç'6R‚'VffW"ÂG'VR“°  ––ÖvW5²’ÒÒ° —v–GFƒ¢FW„FF2çv–GF‚À –†V–v‡C¢FW„FF2æ†V–v‡BÀ –f÷&ÖC¢FW„FF2æf÷&ÖBÀ –Ö—Ö3¢FW„FF2æÖ—Ö0 —Ó°  –ÆöFVB³Ò°  ––b‚ÆöFVBÓÓÒb’°  ––b‚FW„FF2æÖ—Ö6÷VçBÓÓÒ’FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —FW‡GW&Ræ–ÖvRÒ–ÖvW3° —FW‡GW&Ræf÷&ÖBÒFW„FF2æf÷&ÖC° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ––b‚'&’æ—4'&’‚W&Â’’°  –f÷"‚ÆWB’ÒÂ–ÂÒW&ÂæÆVæwFƒ²’Â–Ã²²²’’°  –ÆöEFW‡GW&R‚’“°  —Ð  —ÒVÇ6R°  ’òò6ö×&W76VB7V&VÖFW‡GW&R7F÷&VB–â6–ævÆRDE2f–ÆP  –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  –6öç7BFW„FF2Ò66÷Rç'6R‚'VffW"ÂG'VR“°  ––b‚FW„FF2æ—47V&VÖ’°  –6öç7Bf6W2ÒFW„FF2æÖ—Ö2æÆVæwF‚òFW„FF2æÖ—Ö6÷VçC°  –f÷"‚ÆWBbÒ²bÂf6W3²b²²’°  ––ÖvW5²bÒÒ²Ö—Ö3¢µÒÓ°  –f÷"‚ÆWB’Ò²’ÂFW„FF2æÖ—Ö6÷VçC²’²²’°  ––ÖvW5²bÒæÖ—Ö2çW6‚‚FW„FF2æÖ—Ö5²b¢FW„FF2æÖ—Ö6÷VçB²’Ò“° ––ÖvW5²bÒæf÷&ÖBÒFW„FF2æf÷&ÖC° ––ÖvW5²bÒçv–GF‚ÒFW„FF2çv–GFƒ° ––ÖvW5²bÒæ†V–v‡BÒFW„FF2æ†V–v‡C°  —Ð  —Ð  —FW‡GW&Ræ–ÖvRÒ–ÖvW3°  —ÒVÇ6R°  —FW‡GW&Ræ–ÖvRçv–GF‚ÒFW„FF2çv–GFƒ° —FW‡GW&Ræ–ÖvRæ†V–v‡BÒFW„FF2æ†V–v‡C° —FW‡GW&RæÖ—Ö2ÒFW„FF2æÖ—Ö3°  —Ð  ––b‚FW„FF2æÖ—Ö6÷VçBÓÓÒ’°  —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —Ð  —FW‡GW&Ræf÷&ÖBÒFW„FF2æf÷&ÖC° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  —&WGW&âFW‡GW&S°  —Ð §Ð ¦6öç7BöÆöF–ærÒæWrvV´Ö‚“° ¢ò¢ ¢¢ÆöFW"f÷"ÆöF–ær–ÖvW2âF†R6Æ72ÆöG2–ÖvW2v—F‚F†R…DÔÂ–ÖvV’à¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRä–ÖvTÆöFW"‚“°¢¢6öç7B–ÖvRÒv—BÆöFW"æÆöD7–æ2‚v–ÖvRçærr“°¢¢ ¢¢ÆV6Ræ÷FRF†B–ÖvTÆöFW&†2G&÷VB7W÷'Bf÷"&öw&W70¢¢WfVçG2–â#ƒFâf÷"â–ÖvTÆöFW&F†B7W÷'G2&öw&W72WfVçG2Â6VP¢¢·F†—2F‡&VE×´Æ–æ²‡GG3¢òöv—F‡V"æ6öÒö×&Föö"÷F‡&VRæ§2ö—77VW2óC3’6—77VV6öÖÖVçBÓ#sSsƒSc3—Òà¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72–ÖvTÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWr–ÖvRÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB76W2F†RÆöFVB–ÖvP ’¢FòF†RöäÆöB‚–6ÆÆ&6²âF†RÖWF†öBÇ6ò&WGW&ç2æWr–ÖvVö&¦V7Bv†–6‚6à ’¢F—&V7FÇ’&RW6VBf÷"FW‡GW&R7&VF–öââ–b–÷RFò—BF†—2v’ÂF†RFW‡GW&P ’¢Ö’÷W–â–÷W"66VæRöæ6RF†R&W7V7F—fRÆöF–ær&ö6W72—2f–æ—6†VBà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„–ÖvR—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒVç7W÷'FVB–âF†—2ÆöFW"à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â´–ÖvWÒF†R–ÖvRà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66÷RÒF†—3°  –6öç7B66†VBÒ66†RævWB‚–ÖvS¢G·W&ÇÖ“°  ––b‚66†VBÓÒVæFVf–æVB’°  ––b‚66†VBæ6ö×ÆWFRÓÓÒG'VR’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —6WEF–ÖV÷WB‚gVæ7F–öâ‚’°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —ÒVÇ6R°  –ÆWB'"ÒöÆöF–ærævWB‚66†VB“°  ––b‚'"ÓÓÒVæFVf–æVB’°  –'"ÒµÓ° •öÆöF–ærç6WB‚66†VBÂ'"“°  —Ð  –'"çW6‚‚²öäÆöBÂöäW'&÷"Ò“°  —Ð  —&WGW&â66†VC°  —Ð  –6öç7B–ÖvRÒ7&VFTVÆVÖVçDå2‚v–Örr“°  –gVæ7F–öâöä–ÖvTÆöB‚’°  —&VÖ÷fTWfVçDÆ—7FVæW'2‚“°  ––b‚öäÆöB’öäÆöB‚F†—2“°  ’òð  –6öç7B6ÆÆ&6·2ÒöÆöF–ærævWB‚F†—2’ÇÂµÓ°  –f÷"‚ÆWB’Ò²’Â6ÆÆ&6·2æÆVæwFƒ²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäÆöB’6ÆÆ&6²æöäÆöB‚F†—2“°  —Ð  •öÆöF–æræFVÆWFR‚F†—2“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ð  –gVæ7F–öâöä–ÖvTW'&÷"‚WfVçB’°  —&VÖ÷fTWfVçDÆ—7FVæW'2‚“°  ––b‚öäW'&÷"’öäW'&÷"‚WfVçB“°  ”66†Rç&VÖ÷fR‚–ÖvS¢G·W&ÇÖ“°  ’òð  –6öç7B6ÆÆ&6·2ÒöÆöF–ærævWB‚F†—2’ÇÂµÓ°  –f÷"‚ÆWB’Ò²’Â6ÆÆ&6·2æÆVæwFƒ²’²²’°  –6öç7B6ÆÆ&6²Ò6ÆÆ&6·5²’Ó° ––b‚6ÆÆ&6²æöäW'&÷"’6ÆÆ&6²æöäW'&÷"‚WfVçB“°  —Ð  •öÆöF–æræFVÆWFR‚F†—2“°   —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ð  –gVæ7F–öâ&VÖ÷fTWfVçDÆ—7FVæW'2‚’°  ––ÖvRç&VÖ÷fTWfVçDÆ—7FVæW"‚vÆöBrÂöä–ÖvTÆöBÂfÇ6R“° ––ÖvRç&VÖ÷fTWfVçDÆ—7FVæW"‚vW'&÷"rÂöä–ÖvTW'&÷"ÂfÇ6R“°  —Ð  ––ÖvRæFDWfVçDÆ—7FVæW"‚vÆöBrÂöä–ÖvTÆöBÂfÇ6R“° ––ÖvRæFDWfVçDÆ—7FVæW"‚vW'&÷"rÂöä–ÖvTW'&÷"ÂfÇ6R“°  ––b‚W&Âç6Æ–6R‚ÂR’ÓÒvFF¢r’°  ––b‚F†—2æ7&÷74÷&–v–âÓÒVæFVf–æVB’–ÖvRæ7&÷74÷&–v–âÒF†—2æ7&÷74÷&–v–ã°  —Ð  ”66†RæFB‚–ÖvS¢G·W&ÇÖÂ–ÖvR“° —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  ––ÖvRç7&2ÒW&Ã°  —&WGW&â–ÖvS°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–ær7V&RFW‡GW&W2â–ÖvW2&R–çFW&æÆÇ’ÆöFVBf–´Æ–æ²–ÖvTÆöFW'Òà¢ ¢¢F†RÆöFW"&WGW&ç2â–ç7Fæ6Röb´Æ–æ²7V&UFW‡GW&WÒæBW‡V7G2F†R7V&RÖFð¢¢&RFVf–æVB26—‚6W&FR–ÖvW2&W&W6VçF–ærF†R6–FW2öb7V&Râ÷F†W"7V&RÖFVf–æ—F–öç0¢¢Æ–¶RfW'F–6ÂæB†÷&—¦öçFÂ7&÷72Â6öÇVÖâæB&÷rÆ–÷WG2&Ræ÷B7W÷'FVBà¢ ¢¢æ÷FRF†BÂ'’6öçfVçF–öâÂ7V&RÖ2&R7V6–f–VB–â6ö÷&F–æFR7—7FVÐ¢¢–âv†–6‚÷6—F—fR×‚—2FòF†R&–v‡Bv†VâÆöö¶–ærWF†R÷6—F—fR×¢†—2ÒÐ¢¢–â÷F†W"v÷&G2ÂW6–ærÆVgBÖ†æFVB6ö÷&F–æFR7—7FVÒâ6–æ6RF‡&VRæ§2W6W0¢¢&–v‡BÖ†æFVB6ö÷&F–æFR7—7FVÒÂVçf—&öæÖVçBÖ2W6VB–âF‡&VRæ§2v–ÆÀ¢¢†fR÷2×‚æBæVr×‚7vVBà¢ ¢¢F†RÆöFVB7V&RFW‡GW&R—2–â5$t"6öÆ÷"76RâÖVæ–ær´Æ–æ²FW‡GW&R66öÆ÷%76WÐ¢¢—26WBFò5$t$6öÆ÷%76V'’FVfVÇBà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRä7V&UFW‡GW&TÆöFW"‚’ç6WEF‚‚wFW‡GW&W2ö7V&TÖ2òr“°¢¢6öç7B7V&UFW‡GW&RÒv—BÆöFW"æÆöD7–æ2‚°¢¢ ’w‚çærrÂvç‚çærrÂw’çærrÂvç’çærrÂw¢çærrÂvç¢çærp¢¢Ò“°¢¢66VæRæ&6¶w&÷VæBÒ7V&UFW‡GW&S°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ727V&UFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWr7V&RFW‡GW&RÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RgVÆÇ’ÆöFVB7V&RFW‡GW&P ’¢FòF†RöäÆöB‚–6ÆÆ&6²âF†RÖWF†öBÇ6ò&WGW&ç2æWr7V&RFW‡GW&Rö&¦V7Bv†–6‚6à ’¢F—&V7FÇ’&RW6VBf÷"ÖFW&–Â7&VF–öââ–b–÷RFò—BF†—2v’ÂF†R7V&RFW‡GW&P ’¢Ö’÷W–â–÷W"66VæRöæ6RF†R&W7V7F—fRÆöF–ær&ö6W72—2f–æ—6†VBà ’  ’¢&Ò´'&“Ç7G&–æsçÒW&Ç2Ò'&’öbbU$Ç2Fò–ÖvW2ÂöæRf÷"V6‚6–FRöbF†P ’¢7V&RFW‡GW&RâF†RW&Ç26†÷VÆB&R7V6–f–VB–âF†RföÆÆ÷v–ær÷&FW#¢÷2×‚À ’¢æVr×‚Â÷2×’ÂæVr×’Â÷2×¢ÂæVr×¢ââ'&’öbFFU$—2&RÆÆ÷vVB2vVÆÂà ’¢&Ò¶gVæ7F–öâ„7V&UFW‡GW&R—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒVç7W÷'FVB–âF†—2ÆöFW"à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â´7V&UFW‡GW&WÒF†R7V&RFW‡GW&Rà ’¢ð –ÆöB‚W&Ç2ÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7BFW‡GW&RÒæWr7V&UFW‡GW&R‚“° —FW‡GW&Ræ6öÆ÷%76RÒ5$t$6öÆ÷%76S°  –6öç7BÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“° –ÆöFW"ç6WEF‚‚F†—2çF‚“°  –ÆWBÆöFVBÒ°  –gVæ7F–öâÆöEFW‡GW&R‚’’°  –ÆöFW"æÆöB‚W&Ç5²’ÒÂgVæ7F–öâ‚–ÖvR’°  —FW‡GW&Ræ–ÖvW5²’ÒÒ–ÖvS°  –ÆöFVB²³°  ––b‚ÆöFVBÓÓÒb’°  —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂVæFVf–æVBÂöäW'&÷"“°  —Ð  –f÷"‚ÆWB’Ò²’ÂW&Ç2æÆVæwFƒ²²²’’°  –ÆöEFW‡GW&R‚’“°  —Ð  —&WGW&âFW‡GW&S°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"ÆöF–ær&–æ'’FW‡GW&Rf÷&ÖG2$t$RÂU…"÷"Dtà¢¢FW‡GW&W2&R–çFW&æÆÇ’ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢FW&—fVB6Æ76W2†fRFò–×ÆVÖVçBF†R'6R‚–ÖWF†öBv†–6‚†öÆG2F†R'6–æp¢¢f÷"F†R&W7V7F—fRf÷&ÖBà¢ ¢¢'7G&7@¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72FFFW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrFFFW‡GW&RÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB76W2F†RÆöFVBFFFW‡GW&P ’¢FòF†RöäÆöB‚–6ÆÆ&6²âF†RÖWF†öBÇ6ò&WGW&ç2æWrFW‡GW&Rö&¦V7Bv†–6‚6à ’¢F—&V7FÇ’&RW6VBf÷"ÖFW&–Â7&VF–öââ–b–÷RFò—BF†—2v’ÂF†RFW‡GW&P ’¢Ö’÷W–â–÷W"66VæRöæ6RF†R&W7V7F—fRÆöF–ær&ö6W72—2f–æ—6†VBà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„FFFW‡GW&R—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â´FFFW‡GW&WÒF†RFFFW‡GW&Rà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BFW‡GW&RÒæWrFFFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  –ÆWBFW„FF°  —G'’°  —FW„FFÒ66÷Rç'6R‚'VffW"“°  —Ò6F6‚‚W'&÷"’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’°  –öäW'&÷"‚W'&÷"“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚W'&÷"“° —&WGW&ã°  —Ð  —Ð  ––b‚FW„FFæ–ÖvRÓÒVæFVf–æVB’°  —FW‡GW&Ræ–ÖvRÒFW„FFæ–ÖvS°  —ÒVÇ6R–b‚FW„FFæFFÓÒVæFVf–æVB’°  —FW‡GW&Ræ–ÖvRçv–GF‚ÒFW„FFçv–GFƒ° —FW‡GW&Ræ–ÖvRæ†V–v‡BÒFW„FFæ†V–v‡C° —FW‡GW&Ræ–ÖvRæFFÒFW„FFæFF°  —Ð  —FW‡GW&Rçw&2ÒFW„FFçw&2ÓÒVæFVf–æVBòFW„FFçw&2¢6Æ×FôVFvUw&–æs° —FW‡GW&Rçw&BÒFW„FFçw&BÓÒVæFVf–æVBòFW„FFçw&B¢6Æ×FôVFvUw&–æs°  —FW‡GW&RæÖtf–ÇFW"ÒFW„FFæÖtf–ÇFW"ÓÒVæFVf–æVBòFW„FFæÖtf–ÇFW"¢Æ–æV$f–ÇFW#° —FW‡GW&RæÖ–äf–ÇFW"ÒFW„FFæÖ–äf–ÇFW"ÓÒVæFVf–æVBòFW„FFæÖ–äf–ÇFW"¢Æ–æV$f–ÇFW#°  —FW‡GW&Rææ—6÷G&÷’ÒFW„FFææ—6÷G&÷’ÓÒVæFVf–æVBòFW„FFææ—6÷G&÷’¢°  ––b‚FW„FFæ6öÆ÷%76RÓÒVæFVf–æVB’°  —FW‡GW&Ræ6öÆ÷%76RÒFW„FFæ6öÆ÷%76S°  —Ð  ––b‚FW„FFæfÆ—’ÓÒVæFVf–æVB’°  —FW‡GW&RæfÆ—’ÒFW„FFæfÆ—“°  —Ð  ––b‚FW„FFæf÷&ÖBÓÒVæFVf–æVB’°  —FW‡GW&Ræf÷&ÖBÒFW„FFæf÷&ÖC°  —Ð  ––b‚FW„FFçG—RÓÒVæFVf–æVB’°  —FW‡GW&RçG—RÒFW„FFçG—S°  —Ð  ––b‚FW„FFæÖ—Ö2ÓÒVæFVf–æVB’°  —FW‡GW&RæÖ—Ö2ÒFW„FFæÖ—Ö3° —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$Ö—ÖÆ–æV$f–ÇFW#²òò&W7VÖ&Ç’ââà  —Ð  ––b‚FW„FFæÖ—Ö6÷VçBÓÓÒ’°  —FW‡GW&RæÖ–äf–ÇFW"ÒÆ–æV$f–ÇFW#°  —Ð  ––b‚FW„FFævVæW&FTÖ—Ö2ÓÒVæFVf–æVB’°  —FW‡GW&RævVæW&FTÖ—Ö2ÒFW„FFævVæW&FTÖ—Ö3°  —Ð  —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöB’öäÆöB‚FW‡GW&RÂFW„FF“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°   —&WGW&âFW‡GW&S°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–ærFW‡GW&W2â–ÖvW2&R–çFW&æÆÇ¢¢ÆöFVBf–´Æ–æ²–ÖvTÆöFW'Òà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRåFW‡GW&TÆöFW"‚“°¢¢6öç7BFW‡GW&RÒv—BÆöFW"æÆöD7–æ2‚wFW‡GW&W2öÆæEöö6Våö–6Uö6Æ÷VEó#C‚æ§rr“°¢ ¢¢6öç7BÖFW&–ÂÒæWrD…$TRäÖW6„&6–4ÖFW&–Â‚²Ö§FW‡GW&RÒ“°¢¢ ¢¢ÆV6Ræ÷FRF†BFW‡GW&TÆöFW&†2G&÷VB7W÷'Bf÷"&öw&W70¢¢WfVçG2–â#ƒFâf÷"FW‡GW&TÆöFW&F†B7W÷'G2&öw&W72WfVçG2Â6VP¢¢·F†—2F‡&VE×´Æ–æ²‡GG3¢òöv—F‡V"æ6öÒö×&Föö"÷F‡&VRæ§2ö—77VW2óC3’6—77VV6öÖÖVçBÓ#“3#cCWÒà¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72FW‡GW&TÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrFW‡GW&RÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RgVÆÇ’ÆöFVBFW‡GW&P ’¢FòF†RöäÆöB‚–6ÆÆ&6²âF†RÖWF†öBÇ6ò&WGW&ç2æWrFW‡GW&Rö&¦V7Bv†–6‚6à ’¢F—&V7FÇ’&RW6VBf÷"ÖFW&–Â7&VF–öââ–b–÷RFò—BF†—2v’ÂF†RFW‡GW&P ’¢Ö’÷W–â–÷W"66VæRöæ6RF†R&W7V7F—fRÆöF–ær&ö6W72—2f–æ—6†VBà ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ…FW‡GW&R—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒVç7W÷'FVB–âF†—2ÆöFW"à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&âµFW‡GW&WÒF†RFW‡GW&Rà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7BFW‡GW&RÒæWrFW‡GW&R‚“°  –6öç7BÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“° –ÆöFW"ç6WEF‚‚F†—2çF‚“°  –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚–ÖvR’°  —FW‡GW&Ræ–ÖvRÒ–ÖvS° —FW‡GW&RææVVG5WFFRÒG'VS°  ––b‚öäÆöBÓÒVæFVf–æVB’°  –öäÆöB‚FW‡GW&R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —&WGW&âFW‡GW&S°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"Æ–v‡G2ÒÆÂ÷F†W"Æ–v‡BG—W2–æ†W&—BF†P¢¢&÷W'F–W2æBÖWF†öG2FW67&–&VB†W&Rà¢ ¢¢'7G&7@¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72Æ–v‡BW‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWrÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’Ò’°  —7WW"‚“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4Æ–v‡BÒG'VS°  —F†—2çG—RÒtÆ–v‡Bs°  ’ò¢  ’¢F†RÆ–v‡Bw26öÆ÷"à ’  ’¢G—R´6öÆ÷'Ð ’¢ð —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚6öÆ÷"“°  ’ò¢  ’¢F†RÆ–v‡Bw2–çFVç6—G’à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æ–çFVç6—G’Ò–çFVç6—G“°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  ’òòV×G’†W&R–â&6R6Æ73²6öÖR7V&6Æ76W2÷fW'&–FRà  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æ6öÆ÷"æ6÷’‚6÷W&6Ræ6öÆ÷"“° —F†—2æ–çFVç6—G’Ò6÷W&6Ræ–çFVç6—G“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bæ6öÆ÷"ÒF†—2æ6öÆ÷"ævWD†W‚‚“° –FFæö&¦V7Bæ–çFVç6—G’ÒF†—2æ–çFVç6—G“°  ––b‚F†—2æw&÷VæD6öÆ÷"ÓÒVæFVf–æVB’FFæö&¦V7Bæw&÷VæD6öÆ÷"ÒF†—2æw&÷VæD6öÆ÷"ævWD†W‚‚“°  ––b‚F†—2æF—7Fæ6RÓÒVæFVf–æVB’FFæö&¦V7BæF—7Fæ6RÒF†—2æF—7Fæ6S° ––b‚F†—2æævÆRÓÒVæFVf–æVB’FFæö&¦V7BæævÆRÒF†—2æævÆS° ––b‚F†—2æFV6’ÓÒVæFVf–æVB’FFæö&¦V7BæFV6’ÒF†—2æFV6“° ––b‚F†—2çVçVÖ'&ÓÒVæFVf–æVB’FFæö&¦V7BçVçVÖ'&ÒF†—2çVçVÖ'&°  ––b‚F†—2ç6†F÷rÓÒVæFVf–æVB’FFæö&¦V7Bç6†F÷rÒF†—2ç6†F÷rçFô¥4ôâ‚“° ––b‚F†—2çF&vWBÓÒVæFVf–æVB’FFæö&¦V7BçF&vWBÒF†—2çF&vWBçWV–C°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢Æ–v‡B6÷W&6R÷6—F–öæVBF—&V7FÇ’&÷fRF†R66VæRÂv—F‚6öÆ÷"fF–ærg&öÐ¢¢F†R6·’6öÆ÷"FòF†Rw&÷VæB6öÆ÷"à¢ ¢¢F†—2Æ–v‡B6ææ÷B&RW6VBFò67B6†F÷w2à¢ ¢¢§0¢¢6öç7BÆ–v‡BÒæWrD…$TRä†VÖ—7†W&TÆ–v‡B‚†ffff&"Âƒƒƒ#Â“°¢¢66VæRæFB‚Æ–v‡B“°¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72†VÖ—7†W&TÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWr†VÖ—7†W&RÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò·6·”6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26·’6öÆ÷"à ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶w&÷VæD6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw2w&÷VæB6öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢ð –6öç7G'V7F÷"‚6·”6öÆ÷"Âw&÷VæD6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6·”6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4†VÖ—7†W&TÆ–v‡BÒG'VS°  —F†—2çG—RÒt†VÖ—7†W&TÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  ’ò¢  ’¢F†RÆ–v‡Bw2w&÷VæB6öÆ÷"à ’  ’¢G—R´6öÆ÷'Ð ’¢ð —F†—2æw&÷VæD6öÆ÷"ÒæWr6öÆ÷"‚w&÷VæD6öÆ÷"“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æw&÷VæD6öÆ÷"æ6÷’‚6÷W&6Ræw&÷VæD6öÆ÷"“°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷&ö¥67&VVäÖG&—‚CÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÆ–v‡E÷6—F–öåv÷&ÆBCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöÆööµF&vWBCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"Æ–v‡B6†F÷r6Æ76W2âF†W6R6Æ76W0¢¢&W&W6VçBF†R6†F÷r6öæf–wW&F–öâf÷"F–ffW&VçBÆ–v‡BG—W2à¢ ¢¢'7G&7@¢¢ð¦6Æ72Æ–v‡E6†F÷r°  ’ò¢  ’¢6öç7G'V7G2æWrÆ–v‡B6†F÷rà ’  ’¢&Ò´6ÖW&Ò6ÖW&ÒF†RÆ–v‡Bw2f–WröbF†Rv÷&ÆBà ’¢ð –6öç7G'V7F÷"‚6ÖW&’°  ’ò¢  ’¢F†RÆ–v‡Bw2f–WröbF†Rv÷&ÆBà ’  ’¢G—R´6ÖW&Ð ’¢ð —F†—2æ6ÖW&Ò6ÖW&°  ’ò¢  ’¢F†R–çFVç6—G’öbF†R6†F÷râF†RFVfVÇB—2à ’¢fÆ–BfÇVW2&R–âF†R&ævR³ÂÖà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æ–çFVç6—G’Ò°  ’ò¢  ’¢6†F÷rÖ&–2Â†÷r×V6‚FòFB÷"7V'G&7Bg&öÒF†Ræ÷&ÖÆ—¦VBFWF€ ’¢v†VâFV6–F–ærv†WF†W"7W&f6R—2–â6†F÷rà ’  ’¢F†RFVfVÇB—2âfW'’F–ç’F§W7FÖVçG2†W&R†–âF†R÷&FW"öbã ’¢Ö’†VÇ&VGV6R'F–f7G2–â6†F÷w2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æ&–2Ò°  ’ò¢  ’¢FVf–æW2†÷r×V6‚F†R÷6—F–öâW6VBFòVW'’F†R6†F÷rÖ—2öfg6WBÆöæp ’¢F†Rö&¦V7Bæ÷&ÖÂâF†RFVfVÇB—2â–æ7&V6–ærF†—2fÇVR6â&RW6VBFð ’¢&VGV6R6†F÷r6æRW7V6–ÆÇ’–âÆ&vR66VæW2v†W&RÆ–v‡B6†–æW2öçFð ’¢vVöÖWG'’B6†ÆÆ÷rævÆRâF†R6÷7B—2F†B6†F÷w2Ö’V"F—7F÷'FVBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ææ÷&ÖÄ&–2Ò°  ’ò¢  ’¢6WGF–ærF†—2FòfÇVW2w&VFW"F†âv–ÆÂ&ÇW"F†RVFvW2öbF†R6†F÷rà ’¢†–v‚fÇVW2v–ÆÂ6W6RVçvçFVB&æF–ærVffV7G2–âF†R6†F÷w2Òw&VFW  ’¢Ö6—¦Rv–ÆÂÆÆ÷rf÷"†–v†W"fÇVRFò&RW6VB†W&R&Vf÷&RF†W6RVffV7G0 ’¢&V6öÖRf—6–&ÆRà ’  ’¢F†R&÷W'G’†2æòVffV7Bv†VâF†R6†F÷rÖG—R—24e6ögE6†F÷tÖæ@ ’¢æB—B—2&V6öÖÖVæFVBFò–æ7&V6R6ögFæW72'’FV7&V6–ærF†R6†F÷rÖ6—¦R–ç7FVBà ’  ’¢F†R&÷W'G’†2æòVffV7Bv†VâF†R6†F÷rÖG—R—2&6–56†F÷tÖà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç&F—W2Ò°  ’ò¢  ’¢F†RÖ÷VçBöb6×ÆW2FòW6Rv†Vâ&ÇW'&–ære4Ò6†F÷rÖà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB€ ’¢ð —F†—2æ&ÇW%6×ÆW2Òƒ°  ’ò¢  ’¢FVf–æW2F†Rv–GF‚æB†V–v‡BöbF†R6†F÷rÖâ†–v†W"fÇVW2v—fR&WGFW"VÆ—G ’¢6†F÷w2BF†R6÷7Böb6ö×WFF–öâF–ÖRâfÇVW2×W7B&R÷vW'2öbGvòà ’  ’¢G—RµfV7F÷#'Ð ’¢FVfVÇBƒS"ÃS" ’¢ð —F†—2æÖ6—¦RÒæWrfV7F÷#"‚S"ÂS"“°  ’ò¢  ’¢F†RG—Röb6†F÷rFW‡GW&RâF†RFVfVÇB—2Vç6–væVD'—FUG—Và ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBVç6–væVD'—FUG—P ’¢ð —F†—2æÖG—RÒVç6–væVD'—FUG—S°  ’ò¢  ’¢F†RFWF‚ÖvVæW&FVBW6–ærF†R–çFW&æÂ6ÖW&²Æö6F–öâ&W–öæB ’¢—†VÂw2FWF‚—2–â6†F÷râ6ö×WFVB–çFW&æÆÇ’GW&–ær&VæFW&–ærà ’  ’¢G—R³õ&VæFW%F&vWGÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æÖÒçVÆÃ°  ’ò¢  ’¢F†RF—7G&–'WF–öâÖvVæW&FVBW6–ærF†R–çFW&æÂ6ÖW&²âö66ÇW6–öâ—0 ’¢6Æ7VÆFVB&6VBöâF†RF—7G&–'WF–öâöbFWF‡2â6ö×WFVB–çFW&æÆÇ’GW&–æp ’¢&VæFW&–ærà ’  ’¢G—R³õ&VæFW%F&vWGÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æÖ72ÒçVÆÃ°  ’ò¢  ’¢ÖöFVÂFò6†F÷r6ÖW&76RÂFò6ö×WFRÆö6F–öâæBFWF‚–â6†F÷rÖà ’¢F†—2—26ö×WFVB–çFW&æÆÇ’GW&–ær&VæFW&–ærà ’  ’¢G—R´ÖG&—ƒGÐ ’¢ð —F†—2æÖG&—‚ÒæWrÖG&—ƒB‚“°  ’ò¢  ’¢Væ&ÆW2WFöÖF–2WFFW2öbF†RÆ–v‡Bw26†F÷râ–b–÷RFòæ÷B&WV—&RG–æÖ–0 ’¢Æ–v‡F–ærò6†F÷w2Â–÷RÖ’6WBF†—2FòfÇ6Và ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2æWFõWFFRÒG'VS°  ’ò¢  ’¢v†Vâ6WBFòG'VVÂ6†F÷rÖ2v–ÆÂ&RWFFVB–âF†RæW‡B&VæFW&6ÆÂà ’¢–b–÷R†fR6WB´Æ–æ²Æ–v‡E6†F÷r6WFõWFFWÒFòfÇ6VÂ–÷Rv–ÆÂæVVBFð ’¢6WBF†—2&÷W'G’FòG'VVæBF†VâÖ¶R&VæFW"6ÆÂFòWFFRF†RÆ–v‡Bw26†F÷rà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð —F†—2ææVVG5WFFRÒfÇ6S°  —F†—2åög'W7GVÒÒæWrg'W7GVÒ‚“° —F†—2åög&ÖTW‡FVçG2ÒæWrfV7F÷#"‚Â“°  —F†—2å÷f–Ww÷'D6÷VçBÒ°  —F†—2å÷f–Ww÷'G2Ò°  –æWrfV7F÷#B‚ÂÂÂ  •Ó°  —Ð  ’ò¢  ’¢W6VB–çFW&æÆÇ’'’F†R&VæFW&W"FòvWBF†RçVÖ&W"öbf–Ww÷'G2F†BæVV@ ’¢Fò&R&VæFW&VBf÷"F†—26†F÷rà ’  ’¢&WGW&â¶çVÖ&W'ÒF†Rf–Ww÷'B6÷VçBà ’¢ð –vWEf–Ww÷'D6÷VçB‚’°  —&WGW&âF†—2å÷f–Ww÷'D6÷VçC°  —Ð  ’ò¢  ’¢vWG2F†R6†F÷r6ÖW&2g'W7GVÒâW6VB–çFW&æÆÇ’'’F†R&VæFW&W"Fò7VÆÂö&¦V7G2à ’  ’¢&WGW&â´g'W7GV×ÒF†R6†F÷r6ÖW&g'W7GVÒà ’¢ð –vWDg'W7GVÒ‚’°  —&WGW&âF†—2åög'W7GVÓ°  —Ð  ’ò¢  ’¢WFFRF†RÖG&–6W2f÷"F†R6ÖW&æB6†F÷rÂW6VB–çFW&æÆÇ’'’F†R&VæFW&W"à ’  ’¢&Ò´Æ–v‡GÒÆ–v‡BÒF†RÆ–v‡Bf÷"v†–6‚F†R6†F÷r—2&V–ær&VæFW&VBà ’¢ð —WFFTÖG&–6W2‚Æ–v‡B’°  –6öç7B6†F÷t6ÖW&ÒF†—2æ6ÖW&° –6öç7B6†F÷tÖG&—‚ÒF†—2æÖG&—ƒ°  •öÆ–v‡E÷6—F–öåv÷&ÆBCç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BæÖG&—…v÷&ÆB“° —6†F÷t6ÖW&ç÷6—F–öâæ6÷’‚öÆ–v‡E÷6—F–öåv÷&ÆBC“°  •öÆööµF&vWBCç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BçF&vWBæÖG&—…v÷&ÆB“° —6†F÷t6ÖW&æÆöö´B‚öÆööµF&vWBC“° —6†F÷t6ÖW&çWFFTÖG&—…v÷&ÆB‚“°  •÷&ö¥67&VVäÖG&—‚Cæ×VÇF—Ç”ÖG&–6W2‚6†F÷t6ÖW&ç&ö¦V7F–öäÖG&—‚Â6†F÷t6ÖW&æÖG&—…v÷&ÆD–çfW'6R“° —F†—2åög'W7GVÒç6WDg&öÕ&ö¦V7F–öäÖG&—‚‚÷&ö¥67&VVäÖG&—‚CÂ6†F÷t6ÖW&æ6ö÷&F–æFU7—7FVÒÂ6†F÷t6ÖW&ç&WfW'6VDFWF‚“°  ––b‚6†F÷t6ÖW&ç&WfW'6VDFWF‚’°  —6†F÷tÖG&—‚ç6WB€ “ãRÂãÂãÂãRÀ “ãÂãRÂãÂãRÀ “ãÂãÂãÂãÀ “ãÂãÂãÂã  ’“°  —ÒVÇ6R°  —6†F÷tÖG&—‚ç6WB€ “ãRÂãÂãÂãRÀ “ãÂãRÂãÂãRÀ “ãÂãÂãRÂãRÀ “ãÂãÂãÂã  ’“°  —Ð  —6†F÷tÖG&—‚æ×VÇF—Ç’‚÷&ö¥67&VVäÖG&—‚C“°  —Ð  ’ò¢  ’¢&WGW&ç2f–Ww÷'BFVf–æ—F–öâf÷"F†Rv—fVâf–Ww÷'B–æFW‚à ’  ’¢&Ò¶çVÖ&W'Òf–Ww÷'D–æFW‚ÒF†Rf–Ww÷'B–æFW‚à ’¢&WGW&âµfV7F÷#GÒF†Rf–Ww÷'Bà ’¢ð –vWEf–Ww÷'B‚f–Ww÷'D–æFW‚’°  —&WGW&âF†—2å÷f–Ww÷'G5²f–Ww÷'D–æFW‚Ó°  —Ð  ’ò¢  ’¢&WGW&ç2F†Rg&ÖRW‡FVæG2à ’  ’¢&WGW&âµfV7F÷#'ÒF†Rg&ÖRW‡FVæG2à ’¢ð –vWDg&ÖTW‡FVçG2‚’°  —&WGW&âF†—2åög&ÖTW‡FVçG3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  ––b‚F†—2æÖ’°  —F†—2æÖæF—7÷6R‚“°  —Ð  ––b‚F†—2æÖ72’°  —F†—2æÖ72æF—7÷6R‚“°  —Ð  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâÆ–v‡B6†F÷r–ç7Fæ6RFòF†—2–ç7Fæ6Rà ’  ’¢&Ò´Æ–v‡E6†F÷wÒ6÷W&6RÒF†RÆ–v‡B6†F÷rFò6÷’à ’¢&WGW&â´Æ–v‡E6†F÷wÒ&VfW&Væ6RFòF†—2Æ–v‡B6†F÷r–ç7Fæ6Rà ’¢ð –6÷’‚6÷W&6R’°  —F†—2æ6ÖW&Ò6÷W&6Ræ6ÖW&æ6ÆöæR‚“°  —F†—2æ–çFVç6—G’Ò6÷W&6Ræ–çFVç6—G“°  —F†—2æ&–2Ò6÷W&6Ræ&–3° —F†—2ç&F—W2Ò6÷W&6Rç&F—W3°  —F†—2æWFõWFFRÒ6÷W&6RæWFõWFFS° —F†—2ææVVG5WFFRÒ6÷W&6RææVVG5WFFS° —F†—2ææ÷&ÖÄ&–2Ò6÷W&6Rææ÷&ÖÄ&–3° —F†—2æ&ÇW%6×ÆW2Ò6÷W&6Ræ&ÇW%6×ÆW3°  —F†—2æÖ6—¦Ræ6÷’‚6÷W&6RæÖ6—¦R“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWrÆ–v‡B6†F÷r–ç7Fæ6Rv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´Æ–v‡E6†F÷wÒ6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  ’ò¢  ’¢6W&–Æ—¦W2F†RÆ–v‡B6†F÷r–çFò¥4ôâà ’  ’¢&WGW&â´ö&¦V7GÒ¥4ôâö&¦V7B&W&W6VçF–ærF†R6W&–Æ—¦VBÆ–v‡B6†F÷rà ’¢6VR´Æ–æ²ö&¦V7DÆöFW"7'6WÐ ’¢ð —Fô¥4ôâ‚’°  –6öç7Bö&¦V7BÒ·Ó°  ––b‚F†—2æ–çFVç6—G’ÓÒ’ö&¦V7Bæ–çFVç6—G’ÒF†—2æ–çFVç6—G“° ––b‚F†—2æ&–2ÓÒ’ö&¦V7Bæ&–2ÒF†—2æ&–3° ––b‚F†—2ææ÷&ÖÄ&–2ÓÒ’ö&¦V7Bææ÷&ÖÄ&–2ÒF†—2ææ÷&ÖÄ&–3° ––b‚F†—2ç&F—W2ÓÒ’ö&¦V7Bç&F—W2ÒF†—2ç&F—W3° ––b‚F†—2æÖ6—¦Rç‚ÓÒS"ÇÂF†—2æÖ6—¦Rç’ÓÒS"’ö&¦V7BæÖ6—¦RÒF†—2æÖ6—¦RçFô'&’‚“°  –ö&¦V7Bæ6ÖW&ÒF†—2æ6ÖW&çFô¥4ôâ‚fÇ6R’æö&¦V7C° –FVÆWFRö&¦V7Bæ6ÖW&æÖG&—ƒ°  —&WGW&âö&¦V7C°  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2F†R6†F÷r6öæf–wW&F–öâöbF—&V7F–öæÂÆ–v‡G2à¢ ¢¢VvÖVçG2Æ–v‡E6†F÷p¢¢ð¦6Æ727÷DÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  ’ò¢  ’¢6öç7G'V7G2æWr7÷BÆ–v‡B6†F÷rà ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚æWrW'7V7F—fT6ÖW&‚SÂÂãRÂS’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—57÷DÆ–v‡E6†F÷rÒG'VS°  ’ò¢  ’¢W6VBFòfö7W2F†R6†F÷r6ÖW&âF†R6ÖW&w2f–VÆBöbf–Wr—26WB2 ’¢W&6VçFvRöbF†R7÷FÆ–v‡Bw2f–VÆBÖöb×f–Wrâ&ævR—2³ÂÖà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æfö7W2Ò°  ’ò¢  ’¢FW‡GW&R7V7B&F–òà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æ7V7BÒ°  —Ð  —WFFTÖG&–6W2‚Æ–v‡B’°  –6öç7B6ÖW&ÒF†—2æ6ÖW&°  –6öç7Bf÷bÒ$C$DTr¢"¢Æ–v‡BæævÆR¢F†—2æfö7W3° –6öç7B7V7BÒ‚F†—2æÖ6—¦Rçv–GF‚òF†—2æÖ6—¦Ræ†V–v‡B’¢F†—2æ7V7C° –6öç7Bf"ÒÆ–v‡BæF—7Fæ6RÇÂ6ÖW&æf#°  ––b‚f÷bÓÒ6ÖW&æf÷bÇÂ7V7BÓÒ6ÖW&æ7V7BÇÂf"ÓÒ6ÖW&æf"’°  –6ÖW&æf÷bÒf÷c° –6ÖW&æ7V7BÒ7V7C° –6ÖW&æf"Òf#° –6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  —7WW"çWFFTÖG&–6W2‚Æ–v‡B“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æfö7W2Ò6÷W&6Ræfö7W3°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢F†—2Æ–v‡BvWG2VÖ—GFVBg&öÒ6–ævÆRö–çB–âöæRF—&V7F–öâÂÆöær6öæP¢¢F†B–æ7&V6W2–â6—¦RF†RgW'F†W"g&öÒF†RÆ–v‡B—BvWG2à¢ ¢¢F†—2Æ–v‡B6â67B6†F÷w2Ò6VRF†R´Æ–æ²7÷DÆ–v‡E6†F÷wÒf÷"FWF–Ç2à¢ ¢¢§0¢¢òòv†—FR7÷FÆ–v‡B6†–æ–ærg&öÒF†R6–FRÂÖöGVÆFVB'’FW‡GW&P¢¢6öç7B7÷DÆ–v‡BÒæWrD…$TRå7÷DÆ–v‡B‚†fffffb“°¢¢7÷DÆ–v‡Bç÷6—F–öâç6WB‚ÂÂ“°¢¢7÷DÆ–v‡BæÖÒæWrD…$TRåFW‡GW&TÆöFW"‚’æÆöB‚W&Â“°¢ ¢¢7÷DÆ–v‡Bæ67E6†F÷rÒG'VS°¢¢7÷DÆ–v‡Bç6†F÷ræÖ6—¦Rçv–GF‚Ò#C°¢¢7÷DÆ–v‡Bç6†F÷ræÖ6—¦Ræ†V–v‡BÒ#C°¢¢7÷DÆ–v‡Bç6†F÷ræ6ÖW&ææV"ÒS°¢¢7÷DÆ–v‡Bç6†F÷ræ6ÖW&æf"ÒC°¢¢7÷DÆ–v‡Bç6†F÷ræ6ÖW&æf÷bÒ3·0¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ727÷DÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWr7÷BÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’ÖV7W&VB–â6æFVÆ†6B’à ’¢&Ò¶çVÖ&W'Ò¶F—7Fæ6SÓÒÒÖ†–×VÒ&ævRöbF†RÆ–v‡BâÖVç2æòÆ–Ö—Bà ’¢&Ò¶çVÖ&W'Ò¶ævÆSÔÖF‚å’ó5ÒÒÖ†–×VÒævÆRöbÆ–v‡BF—7W'6–öâg&öÒ—G2F—&V7F–öâv†÷6RWW"&÷VæB—2ÖF‚å’ó&à ’¢&Ò¶çVÖ&W'Ò·VçVÖ'&ÓÒÒW&6VçBöbF†R7÷FÆ–v‡B6öæRF†B—2GFVçVFVBGVRFòVçVÖ'&âfÇVR&ævR—2³ÃÖà ’¢&Ò¶çVÖ&W'Ò¶FV6“Ó%ÒÒF†RÖ÷VçBF†RÆ–v‡BF–×2ÆöærF†RF—7Fæ6RöbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’ÂF—7Fæ6RÒÂævÆRÒÖF‚å’ò2ÂVçVÖ'&ÒÂFV6’Ò"’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—57÷DÆ–v‡BÒG'VS°  —F†—2çG—RÒu7÷DÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  ’ò¢  ’¢F†R7÷BÆ–v‡Bö–çG2g&öÒ—G2÷6—F–öâFòF†P ’¢F&vWBw2÷6—F–öâà ’  ’¢f÷"F†RF&vWBw2÷6—F–öâFò&R6†ævVBFòç—F†–ær÷F†W  ’¢F†âF†RFVfVÇBÂ—B×W7B&RFFVBFòF†R66VæRà ’  ’¢—B—2Ç6ò÷76–&ÆRFò6WBF†RF&vWBFò&Ræ÷F†W"4Bö&¦V7@ ’¢–âF†R66VæRâF†RÆ–v‡Bv–ÆÂæ÷rG&6²F†RF&vWBö&¦V7Bà ’  ’¢G—R´ö&¦V7C4GÐ ’¢ð —F†—2çF&vWBÒæWrö&¦V7C4B‚“°  ’ò¢  ’¢Ö†–×VÒ&ævRöbF†RÆ–v‡BâÖVç2æòÆ–Ö—Bà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æF—7Fæ6RÒF—7Fæ6S°  ’ò¢  ’¢Ö†–×VÒævÆRöbÆ–v‡BF—7W'6–öâg&öÒ—G2F—&V7F–öâv†÷6RWW"&÷VæB—2ÖF‚å’ó&à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBÖF‚å’ó0 ’¢ð —F†—2æævÆRÒævÆS°  ’ò¢  ’¢W&6VçBöbF†R7÷FÆ–v‡B6öæRF†B—2GFVçVFVBGVRFòVçVÖ'&à ’¢fÇVR&ævR—2³ÃÖà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çVçVÖ'&ÒVçVÖ'&°  ’ò¢  ’¢F†RÖ÷VçBF†RÆ–v‡BF–×2ÆöærF†RF—7Fæ6RöbF†RÆ–v‡Bâ–â6öçFW‡Bö` ’¢‡—6–6ÆÇ’Ö6÷'&V7B&VæFW&–ærF†RFVfVÇBfÇVR6†÷VÆBæ÷B&R6†ævVBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æFV6’ÒFV6“°  ’ò¢  ’¢FW‡GW&RW6VBFòÖöGVÆFRF†R6öÆ÷"öbF†RÆ–v‡BâF†R7÷BÆ–v‡@ ’¢6öÆ÷"—2Ö—†VBv—F‚F†R$t"fÇVRöbF†—2FW‡GW&RÂv—F‚&F–ð ’¢6÷'&W7öæF–ærFò—G2Ç†fÇVRâF†R6öö¶–RÖÆ–¶RÖ6¶–ærVffV7B—0 ’¢&W&öGV6VBW6–ær—†VÂfÇVW2ƒÂÂÂÖ6öö¶–U÷fÇVR’à ’  ’¢¥v&æ–ær£¢F†—2&÷W'G’—2F—6&ÆVB–b´Æ–æ²ö&¦V7C4B667E6†F÷wÒ—26WBFòfÇ6Và ’  ’¢G—R³õFW‡GW&WÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æÖÒçVÆÃ°  ’ò¢  ’¢F†—2&÷W'G’†öÆG2F†RÆ–v‡Bw26†F÷r6öæf–wW&F–öâà ’  ’¢G—Rµ7÷DÆ–v‡E6†F÷wÐ ’¢ð —F†—2ç6†F÷rÒæWr7÷DÆ–v‡E6†F÷r‚“°  —Ð  ’ò¢  ’¢F†RÆ–v‡Bw2÷vW"â÷vW"—2F†RÇVÖ–æ÷W2÷vW"öbF†RÆ–v‡BÖV7W&VB–âÇVÖVç2†ÆÒ’à ’¢6†æv–ærF†R÷vW"v–ÆÂÇ6ò6†ævRF†RÆ–v‡Bw2–çFVç6—G’à ’  ’¢G—R¶çVÖ&W'Ð ’¢ð –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–â6æFVÆ ’òò'’6öçfVçF–öâf÷"7÷FÆ–v‡BÂÇVÖ–æ÷W2÷vW"†ÆÒ’Òø¢ÇVÖ–æ÷W2–çFVç6—G’†6B —&WGW&âF†—2æ–çFVç6—G’¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–â6æFVÆ’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"òÖF‚å“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æF—7Fæ6RÒ6÷W&6RæF—7Fæ6S° —F†—2æævÆRÒ6÷W&6RæævÆS° —F†—2çVçVÖ'&Ò6÷W&6RçVçVÖ'&° —F†—2æFV6’Ò6÷W&6RæFV6“°  —F†—2çF&vWBÒ6÷W&6RçF&vWBæ6ÆöæR‚“°  —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷&ö¥67&VVäÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÆ–v‡E÷6—F–öåv÷&ÆBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöÆööµF&vWBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢&W&W6VçG2F†R6†F÷r6öæf–wW&F–öâöbö–çBÆ–v‡G2à¢ ¢¢VvÖVçG2Æ–v‡E6†F÷p¢¢ð¦6Æ72ö–çDÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  ’ò¢  ’¢6öç7G'V7G2æWrö–çBÆ–v‡B6†F÷rà ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚æWrW'7V7F—fT6ÖW&‚“ÂÂãRÂS’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—5ö–çDÆ–v‡E6†F÷rÒG'VS°  —F†—2åög&ÖTW‡FVçG2ÒæWrfV7F÷#"‚BÂ"“°  —F†—2å÷f–Ww÷'D6÷VçBÒc°  —F†—2å÷f–Ww÷'G2Ò° ’òòF†W6Rf–Ww÷'G2Ö7V&RÖÖöçFò$BFW‡GW&Rv—F‚F†P ’òòföÆÆ÷v–ær÷&–VçFF–öã  ’òð ’òò‡¥…  ’òò’ ’òð ’òò‚Ò÷6—F—fR‚F—&V7F–öà ’òò‚ÒæVvF—fR‚F—&V7F–öà ’òò’Ò÷6—F—fR’F—&V7F–öà ’òò’ÒæVvF—fR’F—&V7F–öà ’òò¢Ò÷6—F—fR¢F—&V7F–öà ’òò¢ÒæVvF—fR¢F—&V7F–öà  ’òò÷6—F—fR€ –æWrfV7F÷#B‚"ÂÂÂ’À ’òòæVvF—fR€ –æWrfV7F÷#B‚ÂÂÂ’À ’òò÷6—F—fR  –æWrfV7F÷#B‚2ÂÂÂ’À ’òòæVvF—fR  –æWrfV7F÷#B‚ÂÂÂ’À ’òò÷6—F—fR –æWrfV7F÷#B‚2ÂÂÂ’À ’òòæVvF—fR –æWrfV7F÷#B‚ÂÂÂ •Ó°  —F†—2åö7V&TF—&V7F–öç2Ò° –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÓÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À –æWrfV7F÷#2‚ÂÂÓ’ÂæWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÓÂ •Ó°  —F†—2åö7V&UW2Ò° –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À –æWrfV7F÷#2‚ÂÂ’ÂæWrfV7F÷#2‚ÂÂ’À–æWrfV7F÷#2‚ÂÂÓ •Ó°  —Ð  ’ò¢  ’¢WFFRF†RÖG&–6W2f÷"F†R6ÖW&æB6†F÷rÂW6VB–çFW&æÆÇ’'’F†R&VæFW&W"à ’  ’¢&Ò´Æ–v‡GÒÆ–v‡BÒF†RÆ–v‡Bf÷"v†–6‚F†R6†F÷r—2&V–ær&VæFW&VBà ’¢&Ò¶çVÖ&W'Ò·f–Ww÷'D–æFWƒÓÒÒF†Rf–Ww÷'B–æFW‚à ’¢ð —WFFTÖG&–6W2‚Æ–v‡BÂf–Ww÷'D–æFW‚Ò’°  –6öç7B6ÖW&ÒF†—2æ6ÖW&° –6öç7B6†F÷tÖG&—‚ÒF†—2æÖG&—ƒ°  –6öç7Bf"ÒÆ–v‡BæF—7Fæ6RÇÂ6ÖW&æf#°  ––b‚f"ÓÒ6ÖW&æf"’°  –6ÖW&æf"Òf#° –6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  •öÆ–v‡E÷6—F–öåv÷&ÆBç6WDg&öÔÖG&—…÷6—F–öâ‚Æ–v‡BæÖG&—…v÷&ÆB“° –6ÖW&ç÷6—F–öâæ6÷’‚öÆ–v‡E÷6—F–öåv÷&ÆB“°  •öÆööµF&vWBæ6÷’‚6ÖW&ç÷6—F–öâ“° •öÆööµF&vWBæFB‚F†—2åö7V&TF—&V7F–öç5²f–Ww÷'D–æFW‚Ò“° –6ÖW&çWæ6÷’‚F†—2åö7V&UW5²f–Ww÷'D–æFW‚Ò“° –6ÖW&æÆöö´B‚öÆööµF&vWB“° –6ÖW&çWFFTÖG&—…v÷&ÆB‚“°  —6†F÷tÖG&—‚æÖ¶UG&ç6ÆF–öâ‚ÒöÆ–v‡E÷6—F–öåv÷&ÆBç‚ÂÒöÆ–v‡E÷6—F–öåv÷&ÆBç’ÂÒöÆ–v‡E÷6—F–öåv÷&ÆBç¢“°  •÷&ö¥67&VVäÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚6ÖW&ç&ö¦V7F–öäÖG&—‚Â6ÖW&æÖG&—…v÷&ÆD–çfW'6R“° —F†—2åög'W7GVÒç6WDg&öÕ&ö¦V7F–öäÖG&—‚‚÷&ö¥67&VVäÖG&—‚Â6ÖW&æ6ö÷&F–æFU7—7FVÒÂ6ÖW&ç&WfW'6VDFWF‚“°  —Ð §Ð ¢ò¢ ¢¢Æ–v‡BF†BvWG2VÖ—GFVBg&öÒ6–ævÆRö–çB–âÆÂF—&V7F–öç2â6öÖÖöà¢¢W6R66Rf÷"F†—2—2Fò&WÆ–6FRF†RÆ–v‡BVÖ—GFVBg&öÒ&&P¢¢Æ–v‡F'VÆ"à¢ ¢¢F†—2Æ–v‡B6â67B6†F÷w2Ò6VRF†R´Æ–æ²ö–çDÆ–v‡E6†F÷wÒf÷"FWF–Ç2à¢ ¢¢§0¢¢6öç7BÆ–v‡BÒæWrD…$TRåö–çDÆ–v‡B‚†fcÂÂ“°¢¢Æ–v‡Bç÷6—F–öâç6WB‚SÂSÂS“°¢¢66VæRæFB‚Æ–v‡B“°¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72ö–çDÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWrö–çBÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’ÖV7W&VB–â6æFVÆ†6B’à ’¢&Ò¶çVÖ&W'Ò¶F—7Fæ6SÓÒÒÖ†–×VÒ&ævRöbF†RÆ–v‡BâÖVç2æòÆ–Ö—Bà ’¢&Ò¶çVÖ&W'Ò¶FV6“Ó%ÒÒF†RÖ÷VçBF†RÆ–v‡BF–×2ÆöærF†RF—7Fæ6RöbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’ÂF—7Fæ6RÒÂFV6’Ò"’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—5ö–çDÆ–v‡BÒG'VS°  —F†—2çG—RÒuö–çDÆ–v‡Bs°  ’ò¢  ’¢v†VâF—7Fæ6R—2¦W&òÂÆ–v‡Bv–ÆÂGFVçVFR66÷&F–ærFò–çfW'6R×7V&P ’¢ÆrFò–æf–æ—FRF—7Fæ6Râv†VâF—7Fæ6R—2æöâ×¦W&òÂÆ–v‡Bv–ÆÂGFVçVFP ’¢66÷&F–ærFò–çfW'6R×7V&RÆrVçF–ÂæV"F†RF—7Fæ6R7WFöfbÂv†W&R—@ ’¢v–ÆÂF†VâGFVçVFRV–6¶Ç’æB6Öö÷F†Ç’Fòâ–æ†W&VçFÇ’Â7WFöfg2&Ræ÷@ ’¢‡—6–6ÆÇ’6÷'&V7Bà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æF—7Fæ6RÒF—7Fæ6S°  ’ò¢  ’¢F†RÖ÷VçBF†RÆ–v‡BF–×2ÆöærF†RF—7Fæ6RöbF†RÆ–v‡Bâ–â6öçFW‡Bö` ’¢‡—6–6ÆÇ’Ö6÷'&V7B&VæFW&–ærF†RFVfVÇBfÇVR6†÷VÆBæ÷B&R6†ævVBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æFV6’ÒFV6“°  ’ò¢  ’¢F†—2&÷W'G’†öÆG2F†RÆ–v‡Bw26†F÷r6öæf–wW&F–öâà ’  ’¢G—Rµö–çDÆ–v‡E6†F÷wÐ ’¢ð —F†—2ç6†F÷rÒæWrö–çDÆ–v‡E6†F÷r‚“°  —Ð  ’ò¢  ’¢F†RÆ–v‡Bw2÷vW"â÷vW"—2F†RÇVÖ–æ÷W2÷vW"öbF†RÆ–v‡BÖV7W&VB–âÇVÖVç2†ÆÒ’à ’¢6†æv–ærF†R÷vW"v–ÆÂÇ6ò6†ævRF†RÆ–v‡Bw2–çFVç6—G’à ’  ’¢G—R¶çVÖ&W'Ð ’¢ð –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–â6æFVÆ ’òòf÷"â—6÷G&÷–2Æ–v‡B6÷W&6RÂÇVÖ–æ÷W2÷vW"†ÆÒ’ÒBøÇVÖ–æ÷W2–çFVç6—G’†6B —&WGW&âF†—2æ–çFVç6—G’¢B¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–â6æFVÆ’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"ò‚B¢ÖF‚å’“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æF—7Fæ6RÒ6÷W&6RæF—7Fæ6S° —F†—2æFV6’Ò6÷W&6RæFV6“°  —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢6ÖW&F†BW6W2¶÷'F†öw&†–2&ö¦V7F–öå×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’ô÷'F†öw&†–5÷&ö¦V7F–öçÒà¢ ¢¢–âF†—2&ö¦V7F–öâÖöFRÂâö&¦V7Bw26—¦R–âF†R&VæFW&VB–ÖvR7F—0¢¢6öç7FçB&Vv&FÆW72öb—G2F—7Fæ6Rg&öÒF†R6ÖW&âF†—26â&RW6VgVÀ¢¢f÷"&VæFW&–ær$B66VæW2æBT’VÆVÖVçG2ÂÖöæw7B÷F†W"F†–æw2à¢ ¢¢§0¢¢6öç7B6ÖW&ÒæWrD…$TRä÷'F†öw&†–46ÖW&‚v–GF‚òÒ"Âv–GF‚ò"Â†V–v‡Bò"Â†V–v‡BòÒ"ÂÂ“°¢¢66VæRæFB‚6ÖW&“°¢¢ ¢ ¢¢VvÖVçG26ÖW&¢¢ð¦6Æ72÷'F†öw&†–46ÖW&W‡FVæG26ÖW&°  ’ò¢  ’¢6öç7G'V7G2æWr÷'F†öw&†–26ÖW&à ’  ’¢&Ò¶çVÖ&W'Ò¶ÆVgCÒÓÒÒF†RÆVgBÆæRöbF†R6ÖW&w2g'W7GVÒà ’¢&Ò¶çVÖ&W'Ò·&–v‡CÓÒÒF†R&–v‡BÆæRöbF†R6ÖW&w2g'W7GVÒà ’¢&Ò¶çVÖ&W'Ò·F÷ÓÒÒF†RF÷ÆæRöbF†R6ÖW&w2g'W7GVÒà ’¢&Ò¶çVÖ&W'Ò¶&÷GFöÓÒÓÒÒF†R&÷GFöÒÆæRöbF†R6ÖW&w2g'W7GVÒà ’¢&Ò¶çVÖ&W'Ò¶æV#ÓãÒÒF†R6ÖW&w2æV"ÆæRà ’¢&Ò¶çVÖ&W'Ò¶f#Ó#ÒÒF†R6ÖW&w2f"ÆæRà ’¢ð –6öç7G'V7F÷"‚ÆVgBÒÓÂ&–v‡BÒÂF÷ÒÂ&÷GFöÒÒÓÂæV"ÒãÂf"Ò#’°  —7WW"‚“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4÷'F†öw&†–46ÖW&ÒG'VS°  —F†—2çG—RÒt÷'F†öw&†–46ÖW&s°  ’ò¢  ’¢F†R¦ööÒf7F÷"öbF†R6ÖW&à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç¦ööÒÒ°  ’ò¢  ’¢&W&W6VçG2F†Rg'W7GVÒv–æF÷r7V6–f–6F–öââF†—2&÷W'G’6†÷VÆBæ÷B&RVF—FV@ ’¢F—&V7FÇ’'WBf–´Æ–æ²W'7V7F—fT6ÖW&76WEf–Wtöfg6WGÒæB´Æ–æ²W'7V7F—fT6ÖW&66ÆV%f–Wtöfg6WGÒà ’  ’¢G—R³ôö&¦V7GÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2çf–WrÒçVÆÃ°  ’ò¢  ’¢F†RÆVgBÆæRöbF†R6ÖW&w2g'W7GVÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBÓ ’¢ð —F†—2æÆVgBÒÆVgC°  ’ò¢  ’¢F†R&–v‡BÆæRöbF†R6ÖW&w2g'W7GVÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç&–v‡BÒ&–v‡C°  ’ò¢  ’¢F†RF÷ÆæRöbF†R6ÖW&w2g'W7GVÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2çF÷ÒF÷°  ’ò¢  ’¢F†R&÷GFöÒÆæRöbF†R6ÖW&w2g'W7GVÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBÓ ’¢ð —F†—2æ&÷GFöÒÒ&÷GFöÓ°  ’ò¢  ’¢F†R6ÖW&w2æV"ÆæRâF†RfÆ–B&ævR—2w&VFW"F†â  ’¢æBÆW72F†âF†R7W'&VçBfÇVRöb´Æ–æ²÷'F†öw&†–46ÖW&6f'Òà ’  ’¢æ÷FRF†BÂVæÆ–¶Rf÷"F†R´Æ–æ²W'7V7F—fT6ÖW&ÒÂ—2 ’¢fÆ–BfÇVRf÷"â÷'F†öw&†–26ÖW&w2æV"ÆæRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBã ’¢ð —F†—2ææV"ÒæV#°  ’ò¢  ’¢F†R6ÖW&w2f"ÆæRâ×W7B&Rw&VFW"F†âF†P ’¢7W'&VçBfÇVRöb´Æ–æ²÷'F†öw&†–46ÖW&6æV'Òà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB#  ’¢ð —F†—2æf"Òf#°  —F†—2çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æÆVgBÒ6÷W&6RæÆVgC° —F†—2ç&–v‡BÒ6÷W&6Rç&–v‡C° —F†—2çF÷Ò6÷W&6RçF÷° —F†—2æ&÷GFöÒÒ6÷W&6Ræ&÷GFöÓ° —F†—2ææV"Ò6÷W&6RææV#° —F†—2æf"Ò6÷W&6Ræf#°  —F†—2ç¦ööÒÒ6÷W&6Rç¦ööÓ° —F†—2çf–WrÒ6÷W&6Rçf–WrÓÓÒçVÆÂòçVÆÂ¢ö&¦V7Bæ76–vâ‚·ÒÂ6÷W&6Rçf–Wr“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2âöfg6WB–âÆ&vW"g'W7GVÒâF†—2—2W6VgVÂf÷"×VÇF’×v–æF÷r÷  ’¢×VÇF’ÖÖöæ—F÷"ö×VÇF’ÖÖ6†–æR6WGW2à ’  ’¢&Ò¶çVÖ&W'ÒgVÆÅv–GF‚ÒF†RgVÆÂv–GF‚öb×VÇF—f–Wr6WGWà ’¢&Ò¶çVÖ&W'ÒgVÆÄ†V–v‡BÒF†RgVÆÂ†V–v‡Böb×VÇF—f–Wr6WGWà ’¢&Ò¶çVÖ&W'Ò‚ÒF†R†÷&—¦öçFÂöfg6WBöbF†R7V&6ÖW&à ’¢&Ò¶çVÖ&W'Ò’ÒF†RfW'F–6Âöfg6WBöbF†R7V&6ÖW&à ’¢&Ò¶çVÖ&W'Òv–GF‚ÒF†Rv–GF‚öb7V&6ÖW&à ’¢&Ò¶çVÖ&W'Ò†V–v‡BÒF†R†V–v‡Böb7V&6ÖW&à ’¢6VR´Æ–æ²W'7V7F—fT6ÖW&76WEf–Wtöfg6WGÐ ’¢ð —6WEf–Wtöfg6WB‚gVÆÅv–GF‚ÂgVÆÄ†V–v‡BÂ‚Â’Âv–GF‚Â†V–v‡B’°  ––b‚F†—2çf–WrÓÓÒçVÆÂ’°  —F†—2çf–WrÒ° –Væ&ÆVC¢G'VRÀ –gVÆÅv–GFƒ¢À –gVÆÄ†V–v‡C¢À –öfg6WEƒ¢À –öfg6WE“¢À —v–GFƒ¢À –†V–v‡C¢ —Ó°  —Ð  —F†—2çf–WræVæ&ÆVBÒG'VS° —F†—2çf–WrægVÆÅv–GF‚ÒgVÆÅv–GFƒ° —F†—2çf–WrægVÆÄ†V–v‡BÒgVÆÄ†V–v‡C° —F†—2çf–Wræöfg6WE‚Òƒ° —F†—2çf–Wræöfg6WE’Ò“° —F†—2çf–Wrçv–GF‚Òv–GFƒ° —F†—2çf–Wræ†V–v‡BÒ†V–v‡C°  —F†—2çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  ’ò¢  ’¢&VÖ÷fW2F†Rf–Wröfg6WBg&öÒF†R&ö¦V7F–öâÖG&—‚à ’¢ð –6ÆV%f–Wtöfg6WB‚’°  ––b‚F†—2çf–WrÓÒçVÆÂ’°  —F†—2çf–WræVæ&ÆVBÒfÇ6S°  —Ð  —F†—2çWFFU&ö¦V7F–öäÖG&—‚‚“°  —Ð  ’ò¢  ’¢WFFW2F†R6ÖW&w2&ö¦V7F–öâÖG&—‚â×W7B&R6ÆÆVBgFW"ç’6†ævRö` ’¢6ÖW&&÷W'F–W2à ’¢ð —WFFU&ö¦V7F–öäÖG&—‚‚’°  –6öç7BG‚Ò‚F†—2ç&–v‡BÒF†—2æÆVgB’ò‚"¢F†—2ç¦ööÒ“° –6öç7BG’Ò‚F†—2çF÷ÒF†—2æ&÷GFöÒ’ò‚"¢F†—2ç¦ööÒ“° –6öç7B7‚Ò‚F†—2ç&–v‡B²F†—2æÆVgB’ò#° –6öç7B7’Ò‚F†—2çF÷²F†—2æ&÷GFöÒ’ò#°  –ÆWBÆVgBÒ7‚ÒGƒ° –ÆWB&–v‡BÒ7‚²Gƒ° –ÆWBF÷Ò7’²G“° –ÆWB&÷GFöÒÒ7’ÒG“°  ––b‚F†—2çf–WrÓÒçVÆÂbbF†—2çf–WræVæ&ÆVB’°  –6öç7B66ÆUrÒ‚F†—2ç&–v‡BÒF†—2æÆVgB’òF†—2çf–WrægVÆÅv–GF‚òF†—2ç¦ööÓ° –6öç7B66ÆT‚Ò‚F†—2çF÷ÒF†—2æ&÷GFöÒ’òF†—2çf–WrægVÆÄ†V–v‡BòF†—2ç¦ööÓ°  –ÆVgB³Ò66ÆUr¢F†—2çf–Wræöfg6WEƒ° —&–v‡BÒÆVgB²66ÆUr¢F†—2çf–Wrçv–GFƒ° —F÷ÓÒ66ÆT‚¢F†—2çf–Wræöfg6WE“° –&÷GFöÒÒF÷Ò66ÆT‚¢F†—2çf–Wræ†V–v‡C°  —Ð  —F†—2ç&ö¦V7F–öäÖG&—‚æÖ¶T÷'F†öw&†–2‚ÆVgBÂ&–v‡BÂF÷Â&÷GFöÒÂF†—2ææV"ÂF†—2æf"ÂF†—2æ6ö÷&F–æFU7—7FVÒÂF†—2ç&WfW'6VDFWF‚“°  —F†—2ç&ö¦V7F–öäÖG&—„–çfW'6Ræ6÷’‚F†—2ç&ö¦V7F–öäÖG&—‚’æ–çfW'B‚“°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bç¦ööÒÒF†—2ç¦ööÓ° –FFæö&¦V7BæÆVgBÒF†—2æÆVgC° –FFæö&¦V7Bç&–v‡BÒF†—2ç&–v‡C° –FFæö&¦V7BçF÷ÒF†—2çF÷° –FFæö&¦V7Bæ&÷GFöÒÒF†—2æ&÷GFöÓ° –FFæö&¦V7BææV"ÒF†—2ææV#° –FFæö&¦V7Bæf"ÒF†—2æf#°  ––b‚F†—2çf–WrÓÒçVÆÂ’FFæö&¦V7Bçf–WrÒö&¦V7Bæ76–vâ‚·ÒÂF†—2çf–Wr“°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2F†R6†F÷r6öæf–wW&F–öâöbF—&V7F–öæÂÆ–v‡G2à¢ ¢¢VvÖVçG2Æ–v‡E6†F÷p¢¢ð¦6Æ72F—&V7F–öæÄÆ–v‡E6†F÷rW‡FVæG2Æ–v‡E6†F÷r°  ’ò¢  ’¢6öç7G'V7G2æWrF—&V7F–öæÂÆ–v‡B6†F÷rà ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚æWr÷'F†öw&†–46ÖW&‚ÓRÂRÂRÂÓRÂãRÂS’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4F—&V7F–öæÄÆ–v‡E6†F÷rÒG'VS°  —Ð §Ð ¢ò¢ ¢¢Æ–v‡BF†BvWG2VÖ—GFVB–â7V6–f–2F—&V7F–öââF†—2Æ–v‡Bv–ÆÂ&V†fP¢¢2F†÷Vv‚—B—2–æf–æ—FVÇ’f"v’æBF†R&—2&öGV6VBg&öÒ—B&RÆÀ¢¢&ÆÆVÂâF†R6öÖÖöâW6R66Rf÷"F†—2—2Fò6–×VÆFRF–Æ–v‡C²F†R7Vâ—0¢¢f"Væ÷Vv‚v’F†B—G2÷6—F–öâ6â&R6öç6–FW&VBFò&R–æf–æ—FRÂæ@¢¢ÆÂÆ–v‡B&—26öÖ–ærg&öÒ—B&R&ÆÆVÂà¢ ¢¢6öÖÖöâö–çBöb6öægW6–öâf÷"F—&V7F–öæÂÆ–v‡G2—2F†B6WGF–ærF†P¢¢&÷FF–öâ†2æòVffV7BâF†—2—2&V6W6RF‡&VRæ§2w2F—&V7F–öæÄÆ–v‡B—2F†P¢¢WV—fÆVçBFòv†B—2ögFVâ6ÆÆVBuF&vWBF—&V7BÆ–v‡Br–â÷F†W ¢¢Æ–6F–öç2à¢ ¢¢F†—2ÖVç2F†B—G2F—&V7F–öâ—26Æ7VÆFVB2ö–çF–ærg&öÒF†RÆ–v‡Bw0¢¢´Æ–æ²ö&¦V7C4B7÷6—F–öçÒFòF†R´Æ–æ²F—&V7F–öæÄÆ–v‡B7F&vWGÒ÷6—F–öà¢¢†2÷÷6VBFòtg&VRF—&V7BÆ–v‡BrF†B§W7B†2&÷FF–öà¢¢6ö×öæVçB’à¢ ¢¢F†—2Æ–v‡B6â67B6†F÷w2Ò6VRF†R´Æ–æ²F—&V7F–öæÄÆ–v‡E6†F÷wÒf÷"FWF–Ç2à¢ ¢¢§0¢¢òòv†—FRF—&V7F–öæÂÆ–v‡BB†Æb–çFVç6—G’6†–æ–ærg&öÒF†RF÷à¢¢6öç7BF—&V7F–öæÄÆ–v‡BÒæWrD…$TRäF—&V7F–öæÄÆ–v‡B‚†fffffbÂãR“°¢¢66VæRæFB‚F—&V7F–öæÄÆ–v‡B“°¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72F—&V7F–öæÄÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWrF—&V7F–öæÂÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4F—&V7F–öæÄÆ–v‡BÒG'VS°  —F†—2çG—RÒtF—&V7F–öæÄÆ–v‡Bs°  —F†—2ç÷6—F–öâæ6÷’‚ö&¦V7C4BäDTdTÅEõU“° —F†—2çWFFTÖG&—‚‚“°  ’ò¢  ’¢F†RF—&V7F–öæÂÆ–v‡Bö–çG2g&öÒ—G2÷6—F–öâFòF†P ’¢F&vWBw2÷6—F–öâà ’  ’¢f÷"F†RF&vWBw2÷6—F–öâFò&R6†ævVBFòç—F†–ær÷F†W  ’¢F†âF†RFVfVÇBÂ—B×W7B&RFFVBFòF†R66VæRà ’  ’¢—B—2Ç6ò÷76–&ÆRFò6WBF†RF&vWBFò&Ræ÷F†W"4Bö&¦V7@ ’¢–âF†R66VæRâF†RÆ–v‡Bv–ÆÂæ÷rG&6²F†RF&vWBö&¦V7Bà ’  ’¢G—R´ö&¦V7C4GÐ ’¢ð —F†—2çF&vWBÒæWrö&¦V7C4B‚“°  ’ò¢  ’¢F†—2&÷W'G’†öÆG2F†RÆ–v‡Bw26†F÷r6öæf–wW&F–öâà ’  ’¢G—R´F—&V7F–öæÄÆ–v‡E6†F÷wÐ ’¢ð —F†—2ç6†F÷rÒæWrF—&V7F–öæÄÆ–v‡E6†F÷r‚“°  —Ð  –F—7÷6R‚’°  —F†—2ç6†F÷ræF—7÷6R‚“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çF&vWBÒ6÷W&6RçF&vWBæ6ÆöæR‚“° —F†—2ç6†F÷rÒ6÷W&6Rç6†F÷ræ6ÆöæR‚“°  —&WGW&âF†—3°  —Ð §Ð ¢ò¢ ¢¢F†—2Æ–v‡BvÆö&ÆÇ’–ÆÇVÖ–æFW2ÆÂö&¦V7G2–âF†R66VæRWVÆÇ’à¢ ¢¢—B6ææ÷B&RW6VBFò67B6†F÷w22—BFöW2æ÷B†fRF—&V7F–öâà¢ ¢¢§0¢¢6öç7BÆ–v‡BÒæWrD…$TRäÖ&–VçDÆ–v‡B‚ƒCCC“²òò6ögBv†—FRÆ–v‡@¢¢66VæRæFB‚Æ–v‡B“°¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72Ö&–VçDÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWrÖ&–VçBÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4Ö&–VçDÆ–v‡BÒG'VS°  —F†—2çG—RÒtÖ&–VçDÆ–v‡Bs°  —Ð §Ð ¢ò¢ ¢¢F†—26Æ72VÖ—G2Æ–v‡BVæ–f÷&ÖÇ’7&÷72F†Rf6R&V7FæwVÆ"ÆæRà¢¢F†—2Æ–v‡BG—R6â&RW6VBFò6–×VÆFRÆ–v‡B6÷W&6W27V6‚2'&–v‡@¢¢v–æF÷w2÷"7G&—Æ–v‡F–ærà¢ ¢¢–×÷'FçBæ÷FW3 ¢ ¢¢ÒF†W&R—2æò6†F÷r7W÷'Bà¢¢ÒöæÇ’%"ÖFW&–Ç2&R7W÷'FVBà¢¢Ò–÷R†fRFò–æ6ÇVFR&V7D&VÆ–v‡EVæ–f÷&×4Æ–&†vV$tÅ&VæFW&W&’÷"&V7D&VÆ–v‡EFW‡GW&W4Æ–&†vV$uU&VæFW&W&¢¢–çFò–÷W"æB–æ—BF†RVæ–f÷&×2÷FW‡GW&W2à¢ ¢¢§0¢¢&V7D&VÆ–v‡EVæ–f÷&×4Æ–"æ–æ—B‚“²òòöæÇ’&VÆWfçBf÷"vV$tÅ&VæFW&W ¢¢D…$TRå&V7D&VÆ–v‡DæöFRç6WDÅD2‚&V7D&VÆ–v‡EFW‡GW&W4Æ–"æ–æ—B‚’“²òòöæÇ’&VÆWfçBf÷"vV$uU&VæFW&W ¢ ¢¢6öç7B–çFVç6—G’Ò²6öç7Bv–GF‚Ò²6öç7B†V–v‡BÒ°¢¢6öç7B&V7DÆ–v‡BÒæWrD…$TRå&V7D&VÆ–v‡B‚†fffffbÂ–çFVç6—G’Âv–GF‚Â†V–v‡B“°¢¢&V7DÆ–v‡Bç÷6—F–öâç6WB‚RÂRÂ“°¢¢&V7DÆ–v‡BæÆöö´B‚ÂÂ“°¢¢66VæRæFB‚&V7DÆ–v‡B¢¢ ¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72&V7D&VÆ–v‡BW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWr&VÆ–v‡Bà ’  ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffffeÒÒF†RÆ–v‡Bw26öÆ÷"à ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢&Ò¶çVÖ&W'Ò·v–GFƒÓÒÒF†Rv–GF‚öbF†RÆ–v‡Bà ’¢&Ò¶çVÖ&W'Ò¶†V–v‡CÓÒÒF†R†V–v‡BöbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚6öÆ÷"Â–çFVç6—G’Âv–GF‚ÒÂ†V–v‡BÒ’°  —7WW"‚6öÆ÷"Â–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—5&V7D&VÆ–v‡BÒG'VS°  —F†—2çG—RÒu&V7D&VÆ–v‡Bs°  ’ò¢  ’¢F†Rv–GF‚öbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çv–GF‚Òv–GFƒ°  ’ò¢  ’¢F†R†V–v‡BöbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æ†V–v‡BÒ†V–v‡C°  —Ð  ’ò¢  ’¢F†RÆ–v‡Bw2÷vW"â÷vW"—2F†RÇVÖ–æ÷W2÷vW"öbF†RÆ–v‡BÖV7W&VB–âÇVÖVç2†ÆÒ’à ’¢6†æv–ærF†R÷vW"v–ÆÂÇ6ò6†ævRF†RÆ–v‡Bw2–çFVç6—G’à ’  ’¢G—R¶çVÖ&W'Ð ’¢ð –vWB÷vW"‚’°  ’òò6ö×WFRF†RÆ–v‡Bw2ÇVÖ–æ÷W2÷vW"†–âÇVÖVç2’g&öÒ—G2–çFVç6—G’†–âæ—G2 —&WGW&âF†—2æ–çFVç6—G’¢F†—2çv–GF‚¢F†—2æ†V–v‡B¢ÖF‚å“°  —Ð  —6WB÷vW"‚÷vW"’°  ’òò6WBF†RÆ–v‡Bw2–çFVç6—G’†–âæ—G2’g&öÒF†RFW6—&VBÇVÖ–æ÷W2÷vW"†–âÇVÖVç2 —F†—2æ–çFVç6—G’Ò÷vW"ò‚F†—2çv–GF‚¢F†—2æ†V–v‡B¢ÖF‚å’“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2çv–GF‚Ò6÷W&6Rçv–GFƒ° —F†—2æ†V–v‡BÒ6÷W&6Ræ†V–v‡C°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bçv–GF‚ÒF†—2çv–GFƒ° –FFæö&¦V7Bæ†V–v‡BÒF†—2æ†V–v‡C°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2F†—&BÖ÷&FW"7†W&–6Â†&Ööæ–72…4‚’âÆ–v‡B&ö&W2W6RF†—26Æ70¢¢FòVæ6öFRÆ–v‡F–ær–æf÷&ÖF–öâà¢ ¢¢Ò&–Ö'’&VfW&Væ6S¢´Æ–æ²‡GG3¢òöw&†–72ç7Fæf÷&BæVGR÷W'2öVçfÖöVçfÖçFgÐ¢¢Ò6V6öæF'’&VfW&Væ6S¢´Æ–æ²‡GG3¢ò÷wwrç6Æöâæ÷&r÷V&Æ–6F–öç2õ7GW–E4ƒ3bçFgÐ¢¢ð¦6Æ727†W&–6Ä†&Ööæ–732°  ’ò¢  ’¢6öç7G'V7G2æWr7†W&–6Â†&Ööæ–72à ’¢ð –6öç7G'V7F÷"‚’°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—57†W&–6Ä†&Ööæ–732ÒG'VS°  ’ò¢  ’¢â'&’†öÆF–ærF†Rƒ’’4‚6öVff–6–VçG2à ’  ’¢G—R´'&“ÅfV7F÷#3çÐ ’¢ð —F†—2æ6öVff–6–VçG2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG2çW6‚‚æWrfV7F÷#2‚’“°  —Ð  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâ4‚6öVff–6–VçG2FòF†—2–ç7Fæ6R'’6÷––æp ’¢F†RfÇVW2à ’  ’¢&Ò´'&“ÅfV7F÷#3çÒ6öVff–6–VçG2ÒF†R4‚6öVff–6–VçG2à ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð —6WB‚6öVff–6–VçG2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òæ6÷’‚6öVff–6–VçG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2ÆÂ4‚6öVff–6–VçG2Fòà ’  ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð —¦W&ò‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òç6WB‚ÂÂ“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R&F–æ6R–âF†RF—&V7F–öâöbF†Rv—fVâæ÷&ÖÂà ’  ’¢&ÒµfV7F÷#7Òæ÷&ÖÂÒF†Ræ÷&ÖÂfV7F÷"†77VÖVBFò&RVæ—BÆVæwF‚ ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†R&F–æ6Rà ’¢ð –vWDB‚æ÷&ÖÂÂF&vWB’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  –6öç7B6öVfbÒF†—2æ6öVff–6–VçG3°  ’òò&æB  —F&vWBæ6÷’‚6öVfe²Ò’æ×VÇF—Ç•66Æ"‚ã#ƒ#“R“°  ’òò&æB —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²ÒÂãCƒƒc2¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²"ÒÂãCƒƒc2¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²2ÒÂãCƒƒc2¢‚“°  ’òò&æB  —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²BÒÂã“#SC‚¢‚‚¢’’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²RÒÂã“#SC‚¢‚’¢¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²bÒÂã3S3“"¢‚2ã¢¢¢¢Òã’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²rÒÂã“#SC‚¢‚‚¢¢’“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²‚ÒÂãSCc#sB¢‚‚¢‚Ò’¢’’“°  —&WGW&âF&vWC°  —Ð  ’ò¢  ’¢&WGW&ç2F†R—'&F–æ6R‡&F–æ6R6öçföÇfVBv—F‚6÷6–æRÆö&R’–âF†P ’¢F—&V7F–öâöbF†Rv—fVâæ÷&ÖÂà ’  ’¢&ÒµfV7F÷#7Òæ÷&ÖÂÒF†Ræ÷&ÖÂfV7F÷"†77VÖVBFò&RVæ—BÆVæwF‚ ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†R—'&F–æ6Rà ’¢ð –vWD—'&F–æ6TB‚æ÷&ÖÂÂF&vWB’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  –6öç7B6öVfbÒF†—2æ6öVff–6–VçG3°  ’òò&æB  —F&vWBæ6÷’‚6öVfe²Ò’æ×VÇF—Ç•66Æ"‚ãƒƒc##r“²òòø¢ã#ƒ#“P  ’òò&æB —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²ÒÂ"ã¢ãSccB¢’“²òò‚"¢øò2’¢ãCƒƒc0 —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²"ÒÂ"ã¢ãSccB¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²2ÒÂ"ã¢ãSccB¢‚“°  ’òò&æB  —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²BÒÂ"ã¢ãC#“C2¢‚¢’“²òò‚øòB’¢ã“#SC€ —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²RÒÂ"ã¢ãC#“C2¢’¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²bÒÂãsC3#R¢¢¢¢Òã#Css‚“²òò‚øòB’¢ã3S3“"¢0 —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²rÒÂ"ã¢ãC#“C2¢‚¢¢“° —F&vWBæFE66ÆVEfV7F÷"‚6öVfe²‚ÒÂãC#“C2¢‚‚¢‚Ò’¢’’“²òò‚øòB’¢ãSCc#s@  —&WGW&âF&vWC°  —Ð  ’ò¢  ’¢FG2F†Rv—fVâ4‚FòF†—2–ç7Fæ6Rà ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R4‚FòFBà ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð –FB‚6‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæFB‚6‚æ6öVff–6–VçG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6öçfVæ–Væ6RÖWF†öBf÷"W&f÷&Ö–ær´Æ–æ²7†W&–6Ä†&Ööæ–7326FGÒæ@ ’¢´Æ–æ²7†W&–6Ä†&Ööæ–732766ÆWÒBöæ6Rà ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R4‚FòFBà ’¢&Ò¶çVÖ&W'Ò2ÒF†R66ÆRf7F÷"à ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð –FE66ÆVE4‚‚6‚Â2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæFE66ÆVEfV7F÷"‚6‚æ6öVff–6–VçG5²’ÒÂ2“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢66ÆW2F†—24‚'’F†Rv—fVâ66ÆRf7F÷"à ’  ’¢&Ò¶çVÖ&W'Ò2ÒF†R66ÆRf7F÷"à ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð —66ÆR‚2’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’Òæ×VÇF—Ç•66Æ"‚2“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢Æ–æV"–çFW'öÆFW2&WGvVVâF†Rv—fVâ4‚æBF†—2–ç7Fæ6R'’F†Rv—fVà ’¢Ç†f7F÷"à ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R4‚Fò–çFW'öÆFRv—F‚à ’¢&Ò¶çVÖ&W'ÒÇ†ÒF†RÇ†f7F÷"à ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð –ÆW'‚6‚ÂÇ†’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  —F†—2æ6öVff–6–VçG5²’ÒæÆW'‚6‚æ6öVff–6–VçG5²’ÒÂÇ†“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†—27†W&–6Â†&Ööæ–72—2WVÂv—F‚F†Rv—fVâöæRà ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R7†W&–6Â†&Ööæ–72FòFW7Bf÷"WVÆ—G’à ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†—27†W&–6Â†&Ööæ–72—2WVÂv—F‚F†Rv—fVâöæRà ’¢ð –WVÇ2‚6‚’°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  ––b‚F†—2æ6öVff–6–VçG5²’ÒæWVÇ2‚6‚æ6öVff–6–VçG5²’Ò’’°  —&WGW&âfÇ6S°  —Ð  —Ð  —&WGW&âG'VS°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâ7†W&–6Â†&Ööæ–72FòF†—2–ç7Fæ6Rà ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R7†W&–6Â†&Ööæ–72Fò6÷’à ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò&VfW&Væ6RFòF†—27†W&–6Â†&Ööæ–72à ’¢ð –6÷’‚6‚’°  —&WGW&âF†—2ç6WB‚6‚æ6öVff–6–VçG2“°  —Ð  ’ò¢  ’¢&WGW&ç2æWr7†W&–6Â†&Ööæ–72v—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  ’ò¢  ’¢6WG2F†R4‚6öVff–6–VçG2öbF†—2–ç7Fæ6Rg&öÒF†Rv—fVâ'&’à ’  ’¢&Ò´'&“ÆçVÖ&W#çÒ'&’Òâ'&’†öÆF–ærF†R4‚6öVff–6–VçG2à ’¢&Ò¶çVÖ&W'Ò¶öfg6WCÓÒÒF†R'&’öfg6WBv†W&RFò7F'B6÷––ærà ’¢&WGW&âµ7†W&–6Ä†&Ööæ–737Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –g&öÔ'&’‚'&’Âöfg6WBÒ’°  –6öç7B6öVff–6–VçG2ÒF†—2æ6öVff–6–VçG3°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  –6öVff–6–VçG5²’Òæg&öÔ'&’‚'&’Âöfg6WB²‚’¢2’“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2â'&’v—F‚F†R4‚6öVff–6–VçG2Â÷"6÷–W2F†VÒ–çFòF†R&÷f–FV@ ’¢'&’âF†R6öVff–6–VçG2&R&W&W6VçFVB2çVÖ&W'2à ’  ’¢&Ò´'&“ÆçVÖ&W#çÒ¶'&“ÕµÕÒÒF†RF&vWB'&’à ’¢&Ò¶çVÖ&W'Ò¶öfg6WCÓÒÒF†R'&’öfg6WBv†W&RFò7F'B6÷––ærà ’¢&WGW&â´'&“ÆçVÖ&W#çÒâ'&’v—F‚fÆB4‚6öVff–6–VçG2à ’¢ð —Fô'&’‚'&’ÒµÒÂöfg6WBÒ’°  –6öç7B6öVff–6–VçG2ÒF†—2æ6öVff–6–VçG3°  –f÷"‚ÆWB’Ò²’Â“²’²²’°  –6öVff–6–VçG5²’ÒçFô'&’‚'&’Âöfg6WB²‚’¢2’“°  —Ð  —&WGW&â'&“°  —Ð  ’ò¢  ’¢6ö×WFW2F†R4‚&6—2f÷"F†Rv—fVâæ÷&ÖÂfV7F÷"à ’  ’¢&ÒµfV7F÷#7Òæ÷&ÖÂÒF†Ræ÷&ÖÂà ’¢&Ò´'&“ÆçVÖ&W#çÒ6„&6—2ÒF†RF&vWB'&’†öÆF–ærF†R4‚&6—2à ’¢ð —7FF–2vWD&6—4B‚æ÷&ÖÂÂ6„&6—2’°  ’òòæ÷&ÖÂ—277VÖVBFò&RVæ—BÆVæwF€  –6öç7B‚Òæ÷&ÖÂç‚Â’Òæ÷&ÖÂç’Â¢Òæ÷&ÖÂç£°  ’òò&æB  —6„&6—5²ÒÒã#ƒ#“S°  ’òò&æB —6„&6—5²ÒÒãCƒƒc2¢“° —6„&6—5²"ÒÒãCƒƒc2¢£° —6„&6—5²2ÒÒãCƒƒc2¢ƒ°  ’òò&æB  —6„&6—5²BÒÒã“#SC‚¢‚¢“° —6„&6—5²RÒÒã“#SC‚¢’¢£° —6„&6—5²bÒÒã3S3“"¢‚2¢¢¢¢Ò“° —6„&6—5²rÒÒã“#SC‚¢‚¢£° —6„&6—5²‚ÒÒãSCc#sB¢‚‚¢‚Ò’¢’“°  —Ð §Ð ¢ò¢ ¢¢Æ–v‡B&ö&W2&RâÇFW&æF—fRv’öbFF–ærÆ–v‡BFò4B66VæRâVæÆ–¶P¢¢6Æ76–6ÂÆ–v‡B6÷W&6W2†RærâF—&V7F–öæÂÂö–çB÷"7÷BÆ–v‡G2’ÂÆ–v‡@¢¢&ö&W2Fòæ÷BVÖ—BÆ–v‡Bâ–ç7FVBF†W’7F÷&R–æf÷&ÖF–öâ&÷WBÆ–v‡@¢¢76–ærF‡&÷Vv‚4B76RâGW&–ær&VæFW&–ærÂF†RÆ–v‡BF†B†—G24@¢¢ö&¦V7B—2&÷†–ÖFVB'’W6–ærF†RFFg&öÒF†RÆ–v‡B&ö&Rà¢ ¢¢Æ–v‡B&ö&W2&RW7VÆÇ’7&VFVBg&öÒ‡&F–æ6R’Vçf—&öæÖVçBÖ2âF†P¢¢6Æ72´Æ–æ²Æ–v‡E&ö&TvVæW&F÷'Ò6â&RW6VBFò7&VFRÆ–v‡B&ö&W2g&öÐ¢¢7V&RFW‡GW&W2÷"&VæFW"F&vWG2â†÷vWfW"ÂÆ–v‡BW7F–ÖF–öâFF6÷VÆBÇ6ð¢¢&R&÷f–FVB–â÷F†W"f÷&×2Rærâ'’vV%…"âF†—2Væ&ÆW2F†R&VæFW&–ærö`¢¢VvÖVçFVB&VÆ—G’6öçFVçBF†B&V7G2Fò&VÂv÷&ÆBÆ–v‡F–ærà¢ ¢¢F†R7W'&VçB&ö&R–×ÆVÖVçFF–öâ–âF‡&VRæ§27W÷'G26òÖ6ÆÆVBF–fgW6P¢¢Æ–v‡B&ö&W2âF†—2G—RöbÆ–v‡B&ö&R—2gVæ7F–öæÆÇ’WV—fÆVçBFòà¢¢—'&F–æ6RVçf—&öæÖVçBÖà¢ ¢¢VvÖVçG2Æ–v‡@¢¢ð¦6Æ72Æ–v‡E&ö&RW‡FVæG2Æ–v‡B°  ’ò¢  ’¢6öç7G'V7G2æWrÆ–v‡B&ö&Rà ’  ’¢&Òµ7†W&–6Ä†&Ööæ–737Ò6‚ÒF†R7†W&–6Â†&Ööæ–72v†–6‚&W&W6VçG2Væ6öFVBÆ–v‡F–ær–æf÷&ÖF–öâà ’¢&Ò¶çVÖ&W'Ò¶–çFVç6—G“ÓÒÒF†RÆ–v‡Bw27G&VæwF‚ö–çFVç6—G’à ’¢ð –6öç7G'V7F÷"‚6‚ÒæWr7†W&–6Ä†&Ööæ–732‚’Â–çFVç6—G’Ò’°  —7WW"‚VæFVf–æVBÂ–çFVç6—G’“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4Æ–v‡E&ö&RÒG'VS°  ’ò¢  ’¢Æ–v‡B&ö&RW6W27†W&–6Â†&Ööæ–72FòVæ6öFRÆ–v‡F–ær–æf÷&ÖF–öâà ’  ’¢G—Rµ7†W&–6Ä†&Ööæ–737Ð ’¢ð —F†—2ç6‚Ò6ƒ°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2ç6‚æ6÷’‚6÷W&6Rç6‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FW6W&–Æ—¦W2F†RÆ–v‡B&÷fRg&öÒF†Rv—fVâ¥4ôâà ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R¥4ôâ†öÆF–ærF†R6W&–Æ—¦VBÆ–v‡B&ö&Rà ’¢&WGW&â´Æ–v‡E&ö&WÒ&VfW&Væ6RFòF†—2Æ–v‡B&ö&Rà ’¢ð –g&öÔ¥4ôâ‚§6öâ’°  —F†—2æ–çFVç6—G’Ò§6öâæ–çFVç6—G“²òòDôDó¢Ö÷fRF†—2&—BFòÆ–v‡Bæg&öÔ¥4ôâ‚“° —F†—2ç6‚æg&öÔ'&’‚§6öâç6‚“°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚ÖWF’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚ÖWF“°  –FFæö&¦V7Bç6‚ÒF†—2ç6‚çFô'&’‚“°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–ærvVöÖWG&–W2âF†Rf–ÆW2&R–çFW&æÆÇ¢¢ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRäÖFW&–ÄÆöFW"‚“°¢¢6öç7BÖFW&–ÂÒv—BÆöFW"æÆöD7–æ2‚vÖFW&–Âæ§6öâr“°¢¢ ¢¢F†—2ÆöFW"FöW2æ÷B7W÷'BæöFRÖFW&–Ç2âW6R´Æ–æ²æöFTÖFW&–ÄÆöFW'Ò–ç7FVBà¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72ÖFW&–ÄÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrÖFW&–ÂÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  ’ò¢  ’¢F–7F–öæ'’†öÆF–ærFW‡GW&W2W6VB'’F†RÖFW&–Âà ’  ’¢G—R´ö&¦V7CÇ7G&–ærÅFW‡GW&SçÐ ’¢ð —F†—2çFW‡GW&W2Ò·Ó°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVBÖFW&–ÂFòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„ÖFW&–Â—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚66÷RæÖævW"“° –ÆöFW"ç6WEF‚‚66÷RçF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚66÷Rç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ’ò¢  ’¢'6W2F†Rv—fVâ¥4ôâö&¦V7BæB&WGW&ç2ÖFW&–Âà ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VBÖFW&–Âà ’¢&WGW&â´ÖFW&–ÇÒF†R'6VBÖFW&–Âà ’¢ð —'6R‚§6öâ’°  –6öç7BFW‡GW&W2ÒF†—2çFW‡GW&W3°  –gVæ7F–öâvWEFW‡GW&R‚æÖR’°  ––b‚FW‡GW&W5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäÖFW&–ÄÆöFW#¢VæFVf–æVBFW‡GW&RrÂæÖR“°  —Ð  —&WGW&âFW‡GW&W5²æÖRÓ°  —Ð  –6öç7BÖFW&–ÂÒF†—2æ7&VFTÖFW&–Äg&öÕG—R‚§6öâçG—R“°  ––b‚§6öâçWV–BÓÒVæFVf–æVB’ÖFW&–ÂçWV–BÒ§6öâçWV–C° ––b‚§6öâææÖRÓÒVæFVf–æVB’ÖFW&–ÂææÖRÒ§6öâææÖS° ––b‚§6öâæ6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âæ6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âæ6öÆ÷"ç6WD†W‚‚§6öâæ6öÆ÷"“° ––b‚§6öâç&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âç&÷Vv†æW72Ò§6öâç&÷Vv†æW73° ––b‚§6öâæÖWFÆæW72ÓÒVæFVf–æVB’ÖFW&–ÂæÖWFÆæW72Ò§6öâæÖWFÆæW73° ––b‚§6öâç6†VVâÓÒVæFVf–æVB’ÖFW&–Âç6†VVâÒ§6öâç6†VVã° ––b‚§6öâç6†VVä6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âç6†VVä6öÆ÷"ÒæWr6öÆ÷"‚’ç6WD†W‚‚§6öâç6†VVä6öÆ÷"“° ––b‚§6öâç6†VVå&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âç6†VVå&÷Vv†æW72Ò§6öâç6†VVå&÷Vv†æW73° ––b‚§6öâæVÖ—76—fRÓÒVæFVf–æVBbbÖFW&–ÂæVÖ—76—fRÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fRç6WD†W‚‚§6öâæVÖ—76—fR“° ––b‚§6öâç7V7VÆ"ÓÒVæFVf–æVBbbÖFW&–Âç7V7VÆ"ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ"ç6WD†W‚‚§6öâç7V7VÆ"“° ––b‚§6öâç7V7VÆ$–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$–çFVç6—G’Ò§6öâç7V7VÆ$–çFVç6—G“° ––b‚§6öâç7V7VÆ$6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âç7V7VÆ$6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$6öÆ÷"ç6WD†W‚‚§6öâç7V7VÆ$6öÆ÷"“° ––b‚§6öâç6†–æ–æW72ÓÒVæFVf–æVB’ÖFW&–Âç6†–æ–æW72Ò§6öâç6†–æ–æW73° ––b‚§6öâæ6ÆV&6öBÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öBÒ§6öâæ6ÆV&6öC° ––b‚§6öâæ6ÆV&6öE&÷Vv†æW72ÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öE&÷Vv†æW72Ò§6öâæ6ÆV&6öE&÷Vv†æW73° ––b‚§6öâæF—7W'6–öâÓÒVæFVf–æVB’ÖFW&–ÂæF—7W'6–öâÒ§6öâæF—7W'6–öã° ––b‚§6öâæ—&–FW66Væ6RÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6RÒ§6öâæ—&–FW66Væ6S° ––b‚§6öâæ—&–FW66Væ6T”õ"ÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6T”õ"Ò§6öâæ—&–FW66Væ6T”õ#° ––b‚§6öâæ—&–FW66Væ6UF†–6¶æW75&ævRÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6UF†–6¶æW75&ævRÒ§6öâæ—&–FW66Væ6UF†–6¶æW75&ævS° ––b‚§6öâçG&ç6Ö—76–öâÓÒVæFVf–æVB’ÖFW&–ÂçG&ç6Ö—76–öâÒ§6öâçG&ç6Ö—76–öã° ––b‚§6öâçF†–6¶æW72ÓÒVæFVf–æVB’ÖFW&–ÂçF†–6¶æW72Ò§6öâçF†–6¶æW73° ––b‚§6öâæGFVçVF–öäF—7Fæ6RÓÒVæFVf–æVB’ÖFW&–ÂæGFVçVF–öäF—7Fæ6RÒ§6öâæGFVçVF–öäF—7Fæ6S° ––b‚§6öâæGFVçVF–öä6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–ÂæGFVçVF–öä6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–ÂæGFVçVF–öä6öÆ÷"ç6WD†W‚‚§6öâæGFVçVF–öä6öÆ÷"“° ––b‚§6öâææ—6÷G&÷’ÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷’Ò§6öâææ—6÷G&÷“° ––b‚§6öâææ—6÷G&÷•&÷FF–öâÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷•&÷FF–öâÒ§6öâææ—6÷G&÷•&÷FF–öã° ––b‚§6öâæförÓÒVæFVf–æVB’ÖFW&–ÂæförÒ§6öâæfös° ––b‚§6öâæfÆE6†F–ærÓÒVæFVf–æVB’ÖFW&–ÂæfÆE6†F–ærÒ§6öâæfÆE6†F–æs° ––b‚§6öâæ&ÆVæF–ærÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæF–ærÒ§6öâæ&ÆVæF–æs° ––b‚§6öâæ6öÖ&–æRÓÒVæFVf–æVB’ÖFW&–Âæ6öÖ&–æRÒ§6öâæ6öÖ&–æS° ––b‚§6öâç6–FRÓÒVæFVf–æVB’ÖFW&–Âç6–FRÒ§6öâç6–FS° ––b‚§6öâç6†F÷u6–FRÓÒVæFVf–æVB’ÖFW&–Âç6†F÷u6–FRÒ§6öâç6†F÷u6–FS° ––b‚§6öâæ÷6—G’ÓÒVæFVf–æVB’ÖFW&–Âæ÷6—G’Ò§6öâæ÷6—G“° ––b‚§6öâçG&ç7&VçBÓÒVæFVf–æVB’ÖFW&–ÂçG&ç7&VçBÒ§6öâçG&ç7&VçC° ––b‚§6öâæÇ†FW7BÓÒVæFVf–æVB’ÖFW&–ÂæÇ†FW7BÒ§6öâæÇ†FW7C° ––b‚§6öâæÇ††6‚ÓÒVæFVf–æVB’ÖFW&–ÂæÇ††6‚Ò§6öâæÇ††6ƒ° ––b‚§6öâæFWF„gVæ2ÓÒVæFVf–æVB’ÖFW&–ÂæFWF„gVæ2Ò§6öâæFWF„gVæ3° ––b‚§6öâæFWF…FW7BÓÒVæFVf–æVB’ÖFW&–ÂæFWF…FW7BÒ§6öâæFWF…FW7C° ––b‚§6öâæFWF…w&—FRÓÒVæFVf–æVB’ÖFW&–ÂæFWF…w&—FRÒ§6öâæFWF…w&—FS° ––b‚§6öâæ6öÆ÷%w&—FRÓÒVæFVf–æVB’ÖFW&–Âæ6öÆ÷%w&—FRÒ§6öâæ6öÆ÷%w&—FS° ––b‚§6öâæ&ÆVæE7&2ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæE7&2Ò§6öâæ&ÆVæE7&3° ––b‚§6öâæ&ÆVæDG7BÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDG7BÒ§6öâæ&ÆVæDG7C° ––b‚§6öâæ&ÆVæDWVF–öâÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDWVF–öâÒ§6öâæ&ÆVæDWVF–öã° ––b‚§6öâæ&ÆVæE7&4Ç†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæE7&4Ç†Ò§6öâæ&ÆVæE7&4Ç†° ––b‚§6öâæ&ÆVæDG7DÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDG7DÇ†Ò§6öâæ&ÆVæDG7DÇ†° ––b‚§6öâæ&ÆVæDWVF–öäÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDWVF–öäÇ†Ò§6öâæ&ÆVæDWVF–öäÇ†° ––b‚§6öâæ&ÆVæD6öÆ÷"ÓÒVæFVf–æVBbbÖFW&–Âæ&ÆVæD6öÆ÷"ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæD6öÆ÷"ç6WD†W‚‚§6öâæ&ÆVæD6öÆ÷"“° ––b‚§6öâæ&ÆVæDÇ†ÓÒVæFVf–æVB’ÖFW&–Âæ&ÆVæDÇ†Ò§6öâæ&ÆVæDÇ†° ––b‚§6öâç7FVæ6–Åw&—FTÖ6²ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Åw&—FTÖ6²Ò§6öâç7FVæ6–Åw&—FTÖ6³° ––b‚§6öâç7FVæ6–ÄgVæ2ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–ÄgVæ2Ò§6öâç7FVæ6–ÄgVæ3° ––b‚§6öâç7FVæ6–Å&VbÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å&VbÒ§6öâç7FVæ6–Å&Vc° ––b‚§6öâç7FVæ6–ÄgVæ4Ö6²ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–ÄgVæ4Ö6²Ò§6öâç7FVæ6–ÄgVæ4Ö6³° ––b‚§6öâç7FVæ6–Äf–ÂÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Äf–ÂÒ§6öâç7FVæ6–Äf–Ã° ––b‚§6öâç7FVæ6–Å¤f–ÂÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å¤f–ÂÒ§6öâç7FVæ6–Å¤f–Ã° ––b‚§6öâç7FVæ6–Å¥72ÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Å¥72Ò§6öâç7FVæ6–Å¥73° ––b‚§6öâç7FVæ6–Åw&—FRÓÒVæFVf–æVB’ÖFW&–Âç7FVæ6–Åw&—FRÒ§6öâç7FVæ6–Åw&—FS°  ––b‚§6öâçv—&Vg&ÖRÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖRÒ§6öâçv—&Vg&ÖS° ––b‚§6öâçv—&Vg&ÖTÆ–æWv–GF‚ÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æWv–GF‚Ò§6öâçv—&Vg&ÖTÆ–æWv–GFƒ° ––b‚§6öâçv—&Vg&ÖTÆ–æV6ÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æV6Ò§6öâçv—&Vg&ÖTÆ–æV6° ––b‚§6öâçv—&Vg&ÖTÆ–æV¦ö–âÓÒVæFVf–æVB’ÖFW&–Âçv—&Vg&ÖTÆ–æV¦ö–âÒ§6öâçv—&Vg&ÖTÆ–æV¦ö–ã°  ––b‚§6öâç&÷FF–öâÓÒVæFVf–æVB’ÖFW&–Âç&÷FF–öâÒ§6öâç&÷FF–öã°  ––b‚§6öâæÆ–æWv–GF‚ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–æWv–GF‚Ò§6öâæÆ–æWv–GFƒ° ––b‚§6öâæF6…6—¦RÓÒVæFVf–æVB’ÖFW&–ÂæF6…6—¦RÒ§6öâæF6…6—¦S° ––b‚§6öâæv6—¦RÓÒVæFVf–æVB’ÖFW&–Âæv6—¦RÒ§6öâæv6—¦S° ––b‚§6öâç66ÆRÓÒVæFVf–æVB’ÖFW&–Âç66ÆRÒ§6öâç66ÆS°  ––b‚§6öâçöÇ–vöäöfg6WBÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WBÒ§6öâçöÇ–vöäöfg6WC° ––b‚§6öâçöÇ–vöäöfg6WDf7F÷"ÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WDf7F÷"Ò§6öâçöÇ–vöäöfg6WDf7F÷#° ––b‚§6öâçöÇ–vöäöfg6WEVæ—G2ÓÒVæFVf–æVB’ÖFW&–ÂçöÇ–vöäöfg6WEVæ—G2Ò§6öâçöÇ–vöäöfg6WEVæ—G3°  ––b‚§6öâæF—F†W&–ærÓÒVæFVf–æVB’ÖFW&–ÂæF—F†W&–ærÒ§6öâæF—F†W&–æs°  ––b‚§6öâæÇ†Fô6÷fW&vRÓÒVæFVf–æVB’ÖFW&–ÂæÇ†Fô6÷fW&vRÒ§6öâæÇ†Fô6÷fW&vS° ––b‚§6öâç&V×VÇF—Æ–VDÇ†ÓÒVæFVf–æVB’ÖFW&–Âç&V×VÇF—Æ–VDÇ†Ò§6öâç&V×VÇF—Æ–VDÇ†° ––b‚§6öâæf÷&6U6–ævÆU72ÓÒVæFVf–æVB’ÖFW&–Âæf÷&6U6–ævÆU72Ò§6öâæf÷&6U6–ævÆU73°  ––b‚§6öâçf—6–&ÆRÓÒVæFVf–æVB’ÖFW&–Âçf—6–&ÆRÒ§6öâçf—6–&ÆS°  ––b‚§6öâçFöæTÖVBÓÒVæFVf–æVB’ÖFW&–ÂçFöæTÖVBÒ§6öâçFöæTÖVC°  ––b‚§6öâçW6W$FFÓÒVæFVf–æVB’ÖFW&–ÂçW6W$FFÒ§6öâçW6W$FF°  ––b‚§6öâçfW'FW„6öÆ÷'2ÓÒVæFVf–æVB’°  ––b‚G—Vöb§6öâçfW'FW„6öÆ÷'2ÓÓÒvçVÖ&W"r’°  –ÖFW&–ÂçfW'FW„6öÆ÷'2Ò‚§6öâçfW'FW„6öÆ÷'2â’òG'VR¢fÇ6S°  —ÒVÇ6R°  –ÖFW&–ÂçfW'FW„6öÆ÷'2Ò§6öâçfW'FW„6öÆ÷'3°  —Ð  —Ð  ’òò6†FW"ÖFW&–À  ––b‚§6öâçVæ–f÷&×2ÓÒVæFVf–æVB’°  –f÷"‚6öç7BæÖR–â§6öâçVæ–f÷&×2’°  –6öç7BVæ–f÷&ÒÒ§6öâçVæ–f÷&×5²æÖRÓ°  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒÒ·Ó°  —7v—F6‚‚Væ–f÷&ÒçG—R’°  –66RwBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒvWEFW‡GW&R‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rv2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWr6öÆ÷"‚’ç6WD†W‚‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rwc"s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#"‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66Rwc2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#2‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RwcBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrfV7F÷#B‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RvÓ2s  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrÖG&—ƒ2‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –66RvÓBs  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒæWrÖG&—ƒB‚’æg&öÔ'&’‚Væ–f÷&ÒçfÇVR“° –'&V³°  –FVfVÇC  –ÖFW&–ÂçVæ–f÷&×5²æÖRÒçfÇVRÒVæ–f÷&ÒçfÇVS°  —Ð  —Ð  —Ð  ––b‚§6öâæFVf–æW2ÓÒVæFVf–æVB’ÖFW&–ÂæFVf–æW2Ò§6öâæFVf–æW3° ––b‚§6öâçfW'FW…6†FW"ÓÒVæFVf–æVB’ÖFW&–ÂçfW'FW…6†FW"Ò§6öâçfW'FW…6†FW#° ––b‚§6öâæg&vÖVçE6†FW"ÓÒVæFVf–æVB’ÖFW&–Âæg&vÖVçE6†FW"Ò§6öâæg&vÖVçE6†FW#° ––b‚§6öâævÇ6ÅfW'6–öâÓÒVæFVf–æVB’ÖFW&–ÂævÇ6ÅfW'6–öâÒ§6öâævÇ6ÅfW'6–öã°  ––b‚§6öâæW‡FVç6–öç2ÓÒVæFVf–æVB’°  –f÷"‚6öç7B¶W’–â§6öâæW‡FVç6–öç2’°  –ÖFW&–ÂæW‡FVç6–öç5²¶W’ÒÒ§6öâæW‡FVç6–öç5²¶W’Ó°  —Ð  —Ð  ––b‚§6öâæÆ–v‡G2ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡G2Ò§6öâæÆ–v‡G3° ––b‚§6öâæ6Æ—–ærÓÒVæFVf–æVB’ÖFW&–Âæ6Æ—–ærÒ§6öâæ6Æ—–æs°  ’òòf÷"ö–çG4ÖFW&–À  ––b‚§6öâç6—¦RÓÒVæFVf–æVB’ÖFW&–Âç6—¦RÒ§6öâç6—¦S° ––b‚§6öâç6—¦TGFVçVF–öâÓÒVæFVf–æVB’ÖFW&–Âç6—¦TGFVçVF–öâÒ§6öâç6—¦TGFVçVF–öã°  ’òòÖ0  ––b‚§6öâæÖÓÒVæFVf–æVB’ÖFW&–ÂæÖÒvWEFW‡GW&R‚§6öâæÖ“° ––b‚§6öâæÖF6ÓÒVæFVf–æVB’ÖFW&–ÂæÖF6ÒvWEFW‡GW&R‚§6öâæÖF6“°  ––b‚§6öâæÇ†ÖÓÒVæFVf–æVB’ÖFW&–ÂæÇ†ÖÒvWEFW‡GW&R‚§6öâæÇ†Ö“°  ––b‚§6öâæ'V×ÖÓÒVæFVf–æVB’ÖFW&–Âæ'V×ÖÒvWEFW‡GW&R‚§6öâæ'V×Ö“° ––b‚§6öâæ'V×66ÆRÓÒVæFVf–æVB’ÖFW&–Âæ'V×66ÆRÒ§6öâæ'V×66ÆS°  ––b‚§6öâææ÷&ÖÄÖÓÒVæFVf–æVB’ÖFW&–Âææ÷&ÖÄÖÒvWEFW‡GW&R‚§6öâææ÷&ÖÄÖ“° ––b‚§6öâææ÷&ÖÄÖG—RÓÒVæFVf–æVB’ÖFW&–Âææ÷&ÖÄÖG—RÒ§6öâææ÷&ÖÄÖG—S° ––b‚§6öâææ÷&ÖÅ66ÆRÓÒVæFVf–æVB’°  –ÆWBæ÷&ÖÅ66ÆRÒ§6öâææ÷&ÖÅ66ÆS°  ––b‚'&’æ—4'&’‚æ÷&ÖÅ66ÆR’ÓÓÒfÇ6R’°  ’òò&ÆVæFW"W‡÷'FW"W6VBFòW‡÷'B66Æ"â6VR3sCS  –æ÷&ÖÅ66ÆRÒ²æ÷&ÖÅ66ÆRÂæ÷&ÖÅ66ÆRÓ°  —Ð  –ÖFW&–Âææ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚’æg&öÔ'&’‚æ÷&ÖÅ66ÆR“°  —Ð  ––b‚§6öâæF—7Æ6VÖVçDÖÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçDÖÒvWEFW‡GW&R‚§6öâæF—7Æ6VÖVçDÖ“° ––b‚§6öâæF—7Æ6VÖVçE66ÆRÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçE66ÆRÒ§6öâæF—7Æ6VÖVçE66ÆS° ––b‚§6öâæF—7Æ6VÖVçD&–2ÓÒVæFVf–æVB’ÖFW&–ÂæF—7Æ6VÖVçD&–2Ò§6öâæF—7Æ6VÖVçD&–3°  ––b‚§6öâç&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âç&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâç&÷Vv†æW74Ö“° ––b‚§6öâæÖWFÆæW74ÖÓÒVæFVf–æVB’ÖFW&–ÂæÖWFÆæW74ÖÒvWEFW‡GW&R‚§6öâæÖWFÆæW74Ö“°  ––b‚§6öâæVÖ—76—fTÖÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fTÖÒvWEFW‡GW&R‚§6öâæVÖ—76—fTÖ“° ––b‚§6öâæVÖ—76—fT–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæVÖ—76—fT–çFVç6—G’Ò§6öâæVÖ—76—fT–çFVç6—G“°  ––b‚§6öâç7V7VÆ$ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$Ö“° ––b‚§6öâç7V7VÆ$–çFVç6—G”ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$–çFVç6—G”ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$–çFVç6—G”Ö“° ––b‚§6öâç7V7VÆ$6öÆ÷$ÖÓÒVæFVf–æVB’ÖFW&–Âç7V7VÆ$6öÆ÷$ÖÒvWEFW‡GW&R‚§6öâç7V7VÆ$6öÆ÷$Ö“°  ––b‚§6öâæVçdÖÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖÒvWEFW‡GW&R‚§6öâæVçdÖ“° ––b‚§6öâæVçdÖ&÷FF–öâÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖ&÷FF–öâæg&öÔ'&’‚§6öâæVçdÖ&÷FF–öâ“° ––b‚§6öâæVçdÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæVçdÖ–çFVç6—G’Ò§6öâæVçdÖ–çFVç6—G“°  ––b‚§6öâç&VfÆV7F—f—G’ÓÒVæFVf–æVB’ÖFW&–Âç&VfÆV7F—f—G’Ò§6öâç&VfÆV7F—f—G“° ––b‚§6öâç&Vg&7F–öå&F–òÓÒVæFVf–æVB’ÖFW&–Âç&Vg&7F–öå&F–òÒ§6öâç&Vg&7F–öå&F–ó°  ––b‚§6öâæÆ–v‡DÖÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡DÖÒvWEFW‡GW&R‚§6öâæÆ–v‡DÖ“° ––b‚§6öâæÆ–v‡DÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæÆ–v‡DÖ–çFVç6—G’Ò§6öâæÆ–v‡DÖ–çFVç6—G“°  ––b‚§6öâæôÖÓÒVæFVf–æVB’ÖFW&–ÂæôÖÒvWEFW‡GW&R‚§6öâæôÖ“° ––b‚§6öâæôÖ–çFVç6—G’ÓÒVæFVf–æVB’ÖFW&–ÂæôÖ–çFVç6—G’Ò§6öâæôÖ–çFVç6—G“°  ––b‚§6öâæw&F–VçDÖÓÒVæFVf–æVB’ÖFW&–Âæw&F–VçDÖÒvWEFW‡GW&R‚§6öâæw&F–VçDÖ“°  ––b‚§6öâæ6ÆV&6öDÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öDÖ“° ––b‚§6öâæ6ÆV&6öE&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öE&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öE&÷Vv†æW74Ö“° ––b‚§6öâæ6ÆV&6öDæ÷&ÖÄÖÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDæ÷&ÖÄÖÒvWEFW‡GW&R‚§6öâæ6ÆV&6öDæ÷&ÖÄÖ“° ––b‚§6öâæ6ÆV&6öDæ÷&ÖÅ66ÆRÓÒVæFVf–æVB’ÖFW&–Âæ6ÆV&6öDæ÷&ÖÅ66ÆRÒæWrfV7F÷#"‚’æg&öÔ'&’‚§6öâæ6ÆV&6öDæ÷&ÖÅ66ÆR“°  ––b‚§6öâæ—&–FW66Væ6TÖÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6TÖÒvWEFW‡GW&R‚§6öâæ—&–FW66Væ6TÖ“° ––b‚§6öâæ—&–FW66Væ6UF†–6¶æW74ÖÓÒVæFVf–æVB’ÖFW&–Âæ—&–FW66Væ6UF†–6¶æW74ÖÒvWEFW‡GW&R‚§6öâæ—&–FW66Væ6UF†–6¶æW74Ö“°  ––b‚§6öâçG&ç6Ö—76–öäÖÓÒVæFVf–æVB’ÖFW&–ÂçG&ç6Ö—76–öäÖÒvWEFW‡GW&R‚§6öâçG&ç6Ö—76–öäÖ“° ––b‚§6öâçF†–6¶æW74ÖÓÒVæFVf–æVB’ÖFW&–ÂçF†–6¶æW74ÖÒvWEFW‡GW&R‚§6öâçF†–6¶æW74Ö“°  ––b‚§6öâææ—6÷G&÷”ÖÓÒVæFVf–æVB’ÖFW&–Âææ—6÷G&÷”ÖÒvWEFW‡GW&R‚§6öâææ—6÷G&÷”Ö“°  ––b‚§6öâç6†VVä6öÆ÷$ÖÓÒVæFVf–æVB’ÖFW&–Âç6†VVä6öÆ÷$ÖÒvWEFW‡GW&R‚§6öâç6†VVä6öÆ÷$Ö“° ––b‚§6öâç6†VVå&÷Vv†æW74ÖÓÒVæFVf–æVB’ÖFW&–Âç6†VVå&÷Vv†æW74ÖÒvWEFW‡GW&R‚§6öâç6†VVå&÷Vv†æW74Ö“°  —&WGW&âÖFW&–Ã°  —Ð  ’ò¢  ’¢FW‡GW&W2&Ræ÷BVÖ&VFFVB–âF†RÖFW&–Â¥4ôâ6òF†W’†fP ’¢Fò&R–æ¦V7FVB&Vf÷&RF†RÆöF–ær&ö6W727F'G2à ’  ’¢&Ò´ö&¦V7GÒfÇVRÒF–7F–öæ'’†öÆF–ærFW‡GW&W2f÷"ÖFW&–Â&÷W'F–W2à ’¢&WGW&â´ÖFW&–ÄÆöFW'Ò&VfW&Væ6RFòF†—2ÖFW&–ÂÆöFW"à ’¢ð —6WEFW‡GW&W2‚fÇVR’°  —F†—2çFW‡GW&W2ÒfÇVS° —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7&VFW2ÖFW&–Âf÷"F†Rv—fVâG—Rà ’  ’¢&Ò·7G&–æwÒG—RÒF†RÖFW&–ÂG—Rà ’¢&WGW&â´ÖFW&–ÇÒF†RæWrÖFW&–Âà ’¢ð –7&VFTÖFW&–Äg&öÕG—R‚G—R’°  —&WGW&âÖFW&–ÄÆöFW"æ7&VFTÖFW&–Äg&öÕG—R‚G—R“°  —Ð  ’ò¢  ’¢7&VFW2ÖFW&–Âf÷"F†Rv—fVâG—Rà ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒG—RÒF†RÖFW&–ÂG—Rà ’¢&WGW&â´ÖFW&–ÇÒF†RæWrÖFW&–Âà ’¢ð —7FF–27&VFTÖFW&–Äg&öÕG—R‚G—R’°  –6öç7BÖFW&–ÄÆ–"Ò° •6†F÷tÖFW&–ÂÀ •7&—FTÖFW&–ÂÀ •&u6†FW$ÖFW&–ÂÀ •6†FW$ÖFW&–ÂÀ •ö–çG4ÖFW&–ÂÀ ”ÖW6…‡—6–6ÄÖFW&–ÂÀ ”ÖW6…7FæF&DÖFW&–ÂÀ ”ÖW6…†öætÖFW&–ÂÀ ”ÖW6…FööäÖFW&–ÂÀ ”ÖW6„æ÷&ÖÄÖFW&–ÂÀ ”ÖW6„ÆÖ&W'DÖFW&–ÂÀ ”ÖW6„FWF„ÖFW&–ÂÀ ”ÖW6„F—7Fæ6TÖFW&–ÂÀ ”ÖW6„&6–4ÖFW&–ÂÀ ”ÖW6„ÖF6ÖFW&–ÂÀ ”Æ–æTF6†VDÖFW&–ÂÀ ”Æ–æT&6–4ÖFW&–ÂÀ ”ÖFW&–À —Ó°  —&WGW&âæWrÖFW&–ÄÆ–%²G—RÒ‚“°  —Ð §Ð ¢ò¢ ¢¢6Æ72v—F‚ÆöFW"WF–Æ—G’gVæ7F–öç2à¢¢ð¦6Æ72ÆöFW%WF–Ç2°  ’ò¢  ’¢W‡G&7G2F†R&6RU$Âg&öÒF†Rv—fVâU$Âà ’  ’¢&Ò·7G&–æwÒW&ÂÕF†RU$ÂFòW‡G&7BF†R&6RU$Âg&öÒà ’¢&WGW&â·7G&–æwÒF†RW‡G&7FVB&6RU$Âà ’¢ð —7FF–2W‡G&7EW&Ä&6R‚W&Â’°  –6öç7B–æFW‚ÒW&ÂæÆ7D–æFW„öb‚ròr“°  ––b‚–æFW‚ÓÓÒÓ’&WGW&ârâòs°  —&WGW&âW&Âç6Æ–6R‚Â–æFW‚²“°  —Ð  ’ò¢  ’¢&W6öÇfW2&VÆF—fRU$Ç2v–ç7BF†Rv—fVâF‚â'6öÇWFRF‡2ÂFFW&Ç2À ’¢æB&Æö"U$Ç2v–ÆÂ&R&WGW&æVB2—2â–çfÆ–BU$Ç2v–ÆÂ&WGW&ââV×G ’¢7G&–ærà ’  ’¢&Ò·7G&–æwÒW&ÂÕF†RU$ÂFò&W6öÇfRà ’¢&Ò·7G&–æwÒF‚ÒF†R&6RF‚f÷"&VÆF—fRU$Ç2Fò&R&W6öÇfVBv–ç7Bà ’¢&WGW&â·7G&–æwÒF†R&W6öÇfVBU$Âà ’¢ð —7FF–2&W6öÇfUU$Â‚W&ÂÂF‚’°  ’òò–çfÆ–BU$À ––b‚G—VöbW&ÂÓÒw7G&–ærrÇÂW&ÂÓÓÒrr’&WGW&ârs°  ’òò†÷7B&VÆF—fRU$À ––b‚õæ‡GG3ó¥ÂõÂòö’çFW7B‚F‚’bbõåÂòòçFW7B‚W&Â’’°  —F‚ÒF‚ç&WÆ6R‚ò…æ‡GG3ó¥ÂõÂõµåÂõÒ²’â¢ö’ÂrCr“°  —Ð  ’òò'6öÇWFRU$Â‡GG¢òòÆ‡GG3¢òòÂòð ––b‚õâ†‡GG3ó¢“õÂõÂòö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òòFFU$ ––b‚õæFF¢â¢Ââ¢Bö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òò&Æö"U$À ––b‚õæ&Æö#¢â¢Bö’çFW7B‚W&Â’’&WGW&âW&Ã°  ’òò&VÆF—fRU$À —&WGW&âF‚²W&Ã°  —Ð §Ð ¢ò¢ ¢¢â–ç7Fæ6VBfW'6–öâöbvVöÖWG'’à¢¢ð¦6Æ72–ç7Fæ6VD'VffW$vVöÖWG'’W‡FVæG2'VffW$vVöÖWG'’°  ’ò¢  ’¢6öç7G'V7G2æWr–ç7Fæ6VB'VffW"vVöÖWG'’à ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4–ç7Fæ6VD'VffW$vVöÖWG'’ÒG'VS°  —F†—2çG—RÒt–ç7Fæ6VD'VffW$vVöÖWG'’s°  ’ò¢  ’¢F†R–ç7Fæ6R6÷VçBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB–æf–æ—G ’¢ð —F†—2æ–ç7Fæ6T6÷VçBÒ–æf–æ—G“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æ–ç7Fæ6T6÷VçBÒ6÷W&6Ræ–ç7Fæ6T6÷VçC°  —&WGW&âF†—3°  —Ð  —Fô¥4ôâ‚’°  –6öç7BFFÒ7WW"çFô¥4ôâ‚“°  –FFæ–ç7Fæ6T6÷VçBÒF†—2æ–ç7Fæ6T6÷VçC°  –FFæ—4–ç7Fæ6VD'VffW$vVöÖWG'’ÒG'VS°  —&WGW&âFF°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–ærvVöÖWG&–W2âF†Rf–ÆW2&R–çFW&æÆÇ¢¢ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRä'VffW$vVöÖWG'”ÆöFW"‚“°¢¢6öç7BvVöÖWG'’Òv—BÆöFW"æÆöD7–æ2‚vÖöFVÇ2ö§6öâ÷&W77W&Ræ§6öâr“°¢ ¢¢6öç7BÖFW&–ÂÒæWrD…$TRäÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢„cTcTcRÒ“°¢¢6öç7Bö&¦V7BÒæWrD…$TRäÖW6‚‚vVöÖWG'’ÂÖFW&–Â“°¢¢66VæRæFB‚ö&¦V7B“°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72'VffW$vVöÖWG'”ÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrvVöÖWG'’ÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVBvVöÖWG'’FòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„'VffW$vVöÖWG'’—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚66÷RæÖævW"“° –ÆöFW"ç6WEF‚‚66÷RçF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚66÷Rç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚66÷Rçv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  —G'’°  –öäÆöB‚66÷Rç'6R‚¥4ôâç'6R‚FW‡B’’“°  —Ò6F6‚‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ’ò¢  ’¢'6W2F†Rv—fVâ¥4ôâö&¦V7BæB&WGW&ç2vVöÖWG'’à ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VBvVöÖWG'’à ’¢&WGW&â´'VffW$vVöÖWG'—ÒF†R'6VBvVöÖWG'’à ’¢ð —'6R‚§6öâ’°  –6öç7B–çFW&ÆVfVD'VffW$ÖÒ·Ó° –6öç7B'&”'VffW$ÖÒ·Ó°  –gVæ7F–öâvWD–çFW&ÆVfVD'VffW"‚§6öâÂWV–B’°  ––b‚–çFW&ÆVfVD'VffW$Ö²WV–BÒÓÒVæFVf–æVB’&WGW&â–çFW&ÆVfVD'VffW$Ö²WV–BÓ°  –6öç7B–çFW&ÆVfVD'VffW'2Ò§6öâæ–çFW&ÆVfVD'VffW'3° –6öç7B–çFW&ÆVfVD'VffW"Ò–çFW&ÆVfVD'VffW'5²WV–BÓ°  –6öç7B'VffW"ÒvWD'&”'VffW"‚§6öâÂ–çFW&ÆVfVD'VffW"æ'VffW"“°  –6öç7B'&’ÒvWEG—VD'&’‚–çFW&ÆVfVD'VffW"çG—RÂ'VffW"“° –6öç7B–"ÒæWr–çFW&ÆVfVD'VffW"‚'&’Â–çFW&ÆVfVD'VffW"ç7G&–FR“° ––"çWV–BÒ–çFW&ÆVfVD'VffW"çWV–C°  ––çFW&ÆVfVD'VffW$Ö²WV–BÒÒ–#°  —&WGW&â–#°  —Ð  –gVæ7F–öâvWD'&”'VffW"‚§6öâÂWV–B’°  ––b‚'&”'VffW$Ö²WV–BÒÓÒVæFVf–æVB’&WGW&â'&”'VffW$Ö²WV–BÓ°  –6öç7B'&”'VffW'2Ò§6öâæ'&”'VffW'3° –6öç7B'&”'VffW"Ò'&”'VffW'5²WV–BÓ°  –6öç7B"ÒæWrV–çC3$'&’‚'&”'VffW"’æ'VffW#°  –'&”'VffW$Ö²WV–BÒÒ#°  —&WGW&â#°  —Ð  –6öç7BvVöÖWG'’Ò§6öâæ—4–ç7Fæ6VD'VffW$vVöÖWG'’òæWr–ç7Fæ6VD'VffW$vVöÖWG'’‚’¢æWr'VffW$vVöÖWG'’‚“°  –6öç7B–æFW‚Ò§6öâæFFæ–æFWƒ°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚–æFW‚çG—RÂ–æFW‚æ'&’“° –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚G—VD'&’Â’“°  —Ð  –6öç7BGG&–'WFW2Ò§6öâæFFæGG&–'WFW3°  –f÷"‚6öç7B¶W’–âGG&–'WFW2’°  –6öç7BGG&–'WFRÒGG&–'WFW5²¶W’Ó° –ÆWB'VffW$GG&–'WFS°  ––b‚GG&–'WFRæ—4–çFW&ÆVfVD'VffW$GG&–'WFR’°  –6öç7B–çFW&ÆVfVD'VffW"ÒvWD–çFW&ÆVfVD'VffW"‚§6öâæFFÂGG&–'WFRæFF“° –'VffW$GG&–'WFRÒæWr–çFW&ÆVfVD'VffW$GG&–'WFR‚–çFW&ÆVfVD'VffW"ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRæöfg6WBÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —ÒVÇ6R°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚GG&–'WFRçG—RÂGG&–'WFRæ'&’“° –6öç7B'VffW$GG&–'WFT6öç7G"ÒGG&–'WFRæ—4–ç7Fæ6VD'VffW$GG&–'WFRò–ç7Fæ6VD'VffW$GG&–'WFR¢'VffW$GG&–'WFS° –'VffW$GG&–'WFRÒæWr'VffW$GG&–'WFT6öç7G"‚G—VD'&’ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —Ð  ––b‚GG&–'WFRææÖRÓÒVæFVf–æVB’'VffW$GG&–'WFRææÖRÒGG&–'WFRææÖS° ––b‚GG&–'WFRçW6vRÓÒVæFVf–æVB’'VffW$GG&–'WFRç6WEW6vR‚GG&–'WFRçW6vR“°  –vVöÖWG'’ç6WDGG&–'WFR‚¶W’Â'VffW$GG&–'WFR“°  —Ð  –6öç7BÖ÷'„GG&–'WFW2Ò§6öâæFFæÖ÷'„GG&–'WFW3°  ––b‚Ö÷'„GG&–'WFW2’°  –f÷"‚6öç7B¶W’–âÖ÷'„GG&–'WFW2’°  –6öç7BGG&–'WFT'&’ÒÖ÷'„GG&–'WFW5²¶W’Ó°  –6öç7B'&’ÒµÓ°  –f÷"‚ÆWB’ÒÂ–ÂÒGG&–'WFT'&’æÆVæwFƒ²’Â–Ã²’²²’°  –6öç7BGG&–'WFRÒGG&–'WFT'&•²’Ó° –ÆWB'VffW$GG&–'WFS°  ––b‚GG&–'WFRæ—4–çFW&ÆVfVD'VffW$GG&–'WFR’°  –6öç7B–çFW&ÆVfVD'VffW"ÒvWD–çFW&ÆVfVD'VffW"‚§6öâæFFÂGG&–'WFRæFF“° –'VffW$GG&–'WFRÒæWr–çFW&ÆVfVD'VffW$GG&–'WFR‚–çFW&ÆVfVD'VffW"ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRæöfg6WBÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —ÒVÇ6R°  –6öç7BG—VD'&’ÒvWEG—VD'&’‚GG&–'WFRçG—RÂGG&–'WFRæ'&’“° –'VffW$GG&–'WFRÒæWr'VffW$GG&–'WFR‚G—VD'&’ÂGG&–'WFRæ—FVÕ6—¦RÂGG&–'WFRææ÷&ÖÆ—¦VB“°  —Ð  ––b‚GG&–'WFRææÖRÓÒVæFVf–æVB’'VffW$GG&–'WFRææÖRÒGG&–'WFRææÖS° –'&’çW6‚‚'VffW$GG&–'WFR“°  —Ð  –vVöÖWG'’æÖ÷'„GG&–'WFW5²¶W’ÒÒ'&“°  —Ð  —Ð  –6öç7BÖ÷'…F&vWG5&VÆF—fRÒ§6öâæFFæÖ÷'…F&vWG5&VÆF—fS°  ––b‚Ö÷'…F&vWG5&VÆF—fR’°  –vVöÖWG'’æÖ÷'…F&vWG5&VÆF—fRÒG'VS°  —Ð  –6öç7Bw&÷W2Ò§6öâæFFæw&÷W2ÇÂ§6öâæFFæG&v6ÆÇ2ÇÂ§6öâæFFæöfg6WG3°  ––b‚w&÷W2ÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂâÒw&÷W2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bw&÷WÒw&÷W5²’Ó°  –vVöÖWG'’æFDw&÷W‚w&÷Wç7F'BÂw&÷Wæ6÷VçBÂw&÷WæÖFW&–Ä–æFW‚“°  —Ð  —Ð  –6öç7B&÷VæF–æu7†W&RÒ§6öâæFFæ&÷VæF–æu7†W&S°  ––b‚&÷VæF–æu7†W&RÓÒVæFVf–æVB’°  –vVöÖWG'’æ&÷VæF–æu7†W&RÒæWr7†W&R‚’æg&öÔ¥4ôâ‚&÷VæF–æu7†W&R“°  —Ð  ––b‚§6öâææÖR’vVöÖWG'’ææÖRÒ§6öâææÖS° ––b‚§6öâçW6W$FF’vVöÖWG'’çW6W$FFÒ§6öâçW6W$FF°  —&WGW&âvVöÖWG'“°  —Ð §Ð ¢ò¢ ¢¢ÆöFW"f÷"ÆöF–ær¥4ôâ&W6÷W&6R–âF†R´¥4ôâö&¦V7Bõ66VæRf÷&ÖE×´Æ–æ²‡GG3¢òöv—F‡V"æ6öÒö×&Föö"÷F‡&VRæ§2÷v–¶’ô¥4ôâÔö&¦V7BÕ66VæRÖf÷&ÖBÓGÒà¢¢F†Rf–ÆW2&R–çFW&æÆÇ’ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRäö&¦V7DÆöFW"‚“°¢¢6öç7Bö&¢Òv—BÆöFW"æÆöD7–æ2‚vÖöFVÇ2ö§6öâöW†×ÆRæ§6öâr“°¢¢66VæRæFB‚ö&¢“°¢ ¢¢òòÇFW&æF—fVÇ’ÂFò'6R&Wf–÷W6Ç’ÆöFVB¥4ôâ7G'V7GW&P¢¢6öç7Bö&¦V7BÒv—BÆöFW"ç'6T7–æ2‚ö§6öåöö&¦V7B“°¢¢66VæRæFB‚ö&¦V7B“°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72ö&¦V7DÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrö&¦V7BÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVB4Bö&¦V7BFòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„ö&¦V7C4B—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BF‚Ò‚F†—2çF‚ÓÓÒrr’òÆöFW%WF–Ç2æW‡G&7EW&Ä&6R‚W&Â’¢F†—2çFƒ° —F†—2ç&W6÷W&6UF‚ÒF†—2ç&W6÷W&6UF‚ÇÂFƒ°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚FW‡B’°  –ÆWB§6öâÒçVÆÃ°  —G'’°  –§6öâÒ¥4ôâç'6R‚FW‡B“°  —Ò6F6‚‚W'&÷"’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’öäW'&÷"‚W'&÷"“°  –6öç6öÆRæW'&÷"‚uD…$TS¤ö&¦V7DÆöFW#¢6åÂwB'6Rr²W&Â²rârÂW'&÷"æÖW76vR“°  —&WGW&ã°  —Ð  –6öç7BÖWFFFÒ§6öâæÖWFFF°  ––b‚ÖWFFFÓÓÒVæFVf–æVBÇÂÖWFFFçG—RÓÓÒVæFVf–æVBÇÂÖWFFFçG—RçFôÆ÷vW$66R‚’ÓÓÒvvVöÖWG'’r’°  ––b‚öäW'&÷"ÓÒVæFVf–æVB’öäW'&÷"‚æWrW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â’“°  –6öç6öÆRæW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â“° —&WGW&ã°  —Ð  —66÷Rç'6R‚§6öâÂöäÆöB“°  —ÒÂöå&öw&W72ÂöäW'&÷"“°  —Ð  ’ò¢  ’¢7–æ2fW'6–öâöb´Æ–æ²ö&¦V7DÆöFW"6ÆöGÒà ’  ’¢7–æ0 ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&WGW&âµ&öÖ—6SÄö&¦V7C4CçÒ&öÖ—6RF†B&W6öÇfW2v—F‚F†RÆöFVB4Bö&¦V7Bà ’¢ð –7–æ2ÆöD7–æ2‚W&ÂÂöå&öw&W72’°  –6öç7B66÷RÒF†—3°  –6öç7BF‚Ò‚F†—2çF‚ÓÓÒrr’òÆöFW%WF–Ç2æW‡G&7EW&Ä&6R‚W&Â’¢F†—2çFƒ° —F†—2ç&W6÷W&6UF‚ÒF†—2ç&W6÷W&6UF‚ÇÂFƒ°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“°  –6öç7BFW‡BÒv—BÆöFW"æÆöD7–æ2‚W&ÂÂöå&öw&W72“°  –6öç7B§6öâÒ¥4ôâç'6R‚FW‡B“°  –6öç7BÖWFFFÒ§6öâæÖWFFF°  ––b‚ÖWFFFÓÓÒVæFVf–æVBÇÂÖWFFFçG—RÓÓÒVæFVf–æVBÇÂÖWFFFçG—RçFôÆ÷vW$66R‚’ÓÓÒvvVöÖWG'’r’°  —F‡&÷ræWrW'&÷"‚uD…$TRäö&¦V7DÆöFW#¢6åÂwBÆöBr²W&Â“°  —Ð  —&WGW&âv—B66÷Rç'6T7–æ2‚§6öâ“°  —Ð  ’ò¢  ’¢'6W2F†Rv—fVâ¥4ôââF†—2—2W6VB–çFW&æÆÇ’'’´Æ–æ²ö&¦V7DÆöFW"6ÆöGÐ ’¢'WB6âÇ6ò&RW6VBF—&V7FÇ’Fò'6R&Wf–÷W6Ç’ÆöFVB¥4ôâ7G'V7GW&Rà ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VB4Bö&¦V7Bà ’¢&Ò¶öäÆöGÒöäÆöBÒW†V7WFVBv†VâÆÂ&W6÷W&6W2†RærâFW‡GW&W2’†fR&VVâgVÆÇ’ÆöFVBà ’¢&WGW&â´ö&¦V7C4GÒF†R'6VB4Bö&¦V7Bà ’¢ð —'6R‚§6öâÂöäÆöB’°  –6öç7Bæ–ÖF–öç2ÒF†—2ç'6Tæ–ÖF–öç2‚§6öâææ–ÖF–öç2“° –6öç7B6†W2ÒF†—2ç'6U6†W2‚§6öâç6†W2“° –6öç7BvVöÖWG&–W2ÒF†—2ç'6TvVöÖWG&–W2‚§6öâævVöÖWG&–W2Â6†W2“°  –6öç7B–ÖvW2ÒF†—2ç'6T–ÖvW2‚§6öâæ–ÖvW2ÂgVæ7F–öâ‚’°  ––b‚öäÆöBÓÒVæFVf–æVB’öäÆöB‚ö&¦V7B“°  —Ò“°  –6öç7BFW‡GW&W2ÒF†—2ç'6UFW‡GW&W2‚§6öâçFW‡GW&W2Â–ÖvW2“° –6öç7BÖFW&–Ç2ÒF†—2ç'6TÖFW&–Ç2‚§6öâæÖFW&–Ç2ÂFW‡GW&W2“°  –6öç7Bö&¦V7BÒF†—2ç'6Tö&¦V7B‚§6öâæö&¦V7BÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2“° –6öç7B6¶VÆWFöç2ÒF†—2ç'6U6¶VÆWFöç2‚§6öâç6¶VÆWFöç2Âö&¦V7B“°  —F†—2æ&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2“° —F†—2æ&–æDÆ–v‡EF&vWG2‚ö&¦V7B“°  ’òð  ––b‚öäÆöBÓÒVæFVf–æVB’°  –ÆWB†4–ÖvW2ÒfÇ6S°  –f÷"‚6öç7BWV–B–â–ÖvW2’°  ––b‚–ÖvW5²WV–BÒæFF–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  –†4–ÖvW2ÒG'VS° –'&V³°  —Ð  —Ð  ––b‚†4–ÖvW2ÓÓÒfÇ6R’öäÆöB‚ö&¦V7B“°  —Ð  —&WGW&âö&¦V7C°  —Ð  ’ò¢  ’¢7–æ2fW'6–öâöb´Æ–æ²ö&¦V7DÆöFW"7'6WÒà ’  ’¢&Ò´ö&¦V7GÒ§6öâÒF†R6W&–Æ—¦VB4Bö&¦V7Bà ’¢&WGW&âµ&öÖ—6SÄö&¦V7C4CçÒ&öÖ—6RF†B&W6öÇfW2v—F‚F†R'6VB4Bö&¦V7Bà ’¢ð –7–æ2'6T7–æ2‚§6öâ’°  –6öç7Bæ–ÖF–öç2ÒF†—2ç'6Tæ–ÖF–öç2‚§6öâææ–ÖF–öç2“° –6öç7B6†W2ÒF†—2ç'6U6†W2‚§6öâç6†W2“° –6öç7BvVöÖWG&–W2ÒF†—2ç'6TvVöÖWG&–W2‚§6öâævVöÖWG&–W2Â6†W2“°  –6öç7B–ÖvW2Òv—BF†—2ç'6T–ÖvW47–æ2‚§6öâæ–ÖvW2“°  –6öç7BFW‡GW&W2ÒF†—2ç'6UFW‡GW&W2‚§6öâçFW‡GW&W2Â–ÖvW2“° –6öç7BÖFW&–Ç2ÒF†—2ç'6TÖFW&–Ç2‚§6öâæÖFW&–Ç2ÂFW‡GW&W2“°  –6öç7Bö&¦V7BÒF†—2ç'6Tö&¦V7B‚§6öâæö&¦V7BÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2“° –6öç7B6¶VÆWFöç2ÒF†—2ç'6U6¶VÆWFöç2‚§6öâç6¶VÆWFöç2Âö&¦V7B“°  —F†—2æ&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2“° —F†—2æ&–æDÆ–v‡EF&vWG2‚ö&¦V7B“°  —&WGW&âö&¦V7C°  —Ð  ’òò–çFW&æÇ0  —'6U6†W2‚§6öâ’°  –6öç7B6†W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6†RÒæWr6†R‚’æg&öÔ¥4ôâ‚§6öå²’Ò“°  —6†W5²6†RçWV–BÒÒ6†S°  —Ð  —Ð  —&WGW&â6†W3°  —Ð  —'6U6¶VÆWFöç2‚§6öâÂö&¦V7B’°  –6öç7B6¶VÆWFöç2Ò·Ó° –6öç7B&öæW2Ò·Ó°  ’òòvVæW&FR&öæRÆöö·WF&ÆP  –ö&¦V7BçG&fW'6R‚gVæ7F–öâ‚6†–ÆB’°  ––b‚6†–ÆBæ—4&öæR’&öæW5²6†–ÆBçWV–BÒÒ6†–ÆC°  —Ò“°  ’òò7&VFR6¶VÆWFöç0  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7B6¶VÆWFöâÒæWr6¶VÆWFöâ‚’æg&öÔ¥4ôâ‚§6öå²’ÒÂ&öæW2“°  —6¶VÆWFöç5²6¶VÆWFöâçWV–BÒÒ6¶VÆWFöã°  —Ð  —Ð  —&WGW&â6¶VÆWFöç3°  —Ð  —'6TvVöÖWG&–W2‚§6öâÂ6†W2’°  –6öç7BvVöÖWG&–W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –6öç7B'VffW$vVöÖWG'”ÆöFW"ÒæWr'VffW$vVöÖWG'”ÆöFW"‚“°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –ÆWBvVöÖWG'“° –6öç7BFFÒ§6öå²’Ó°  —7v—F6‚‚FFçG—R’°  –66Rt'VffW$vVöÖWG'’s  –66Rt–ç7Fæ6VD'VffW$vVöÖWG'’s   –vVöÖWG'’Ò'VffW$vVöÖWG'”ÆöFW"ç'6R‚FF“° –'&V³°  –FVfVÇC   ––b‚FFçG—R–âvVöÖWG&–W2’°  –vVöÖWG'’ÒvVöÖWG&–W5²FFçG—RÒæg&öÔ¥4ôâ‚FFÂ6†W2“°  —ÒVÇ6R°  –6öç6öÆRçv&â‚D…$TRäö&¦V7DÆöFW#¢Vç7W÷'FVBvVöÖWG'’G—R"G²FFçG—RÒ&“°  —Ð  —Ð  –vVöÖWG'’çWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’vVöÖWG'’ææÖRÒFFææÖS° ––b‚FFçW6W$FFÓÒVæFVf–æVB’vVöÖWG'’çW6W$FFÒFFçW6W$FF°  –vVöÖWG&–W5²FFçWV–BÒÒvVöÖWG'“°  —Ð  —Ð  —&WGW&âvVöÖWG&–W3°  —Ð  —'6TÖFW&–Ç2‚§6öâÂFW‡GW&W2’°  –6öç7B66†RÒ·Ó²òò×VÇF”ÖFW&–À –6öç7BÖFW&–Ç2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –6öç7BÆöFW"ÒæWrÖFW&–ÄÆöFW"‚“° –ÆöFW"ç6WEFW‡GW&W2‚FW‡GW&W2“°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  ––b‚66†U²FFçWV–BÒÓÓÒVæFVf–æVB’°  –66†U²FFçWV–BÒÒÆöFW"ç'6R‚FF“°  —Ð  –ÖFW&–Ç5²FFçWV–BÒÒ66†U²FFçWV–BÓ°  —Ð  —Ð  —&WGW&âÖFW&–Ç3°  —Ð  —'6Tæ–ÖF–öç2‚§6öâ’°  –6öç7Bæ–ÖF–öç2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’Ò²’Â§6öâæÆVæwFƒ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  –6öç7B6Æ—Òæ–ÖF–öä6Æ—ç'6R‚FF“°  –æ–ÖF–öç5²6Æ—çWV–BÒÒ6Æ—°  —Ð  —Ð  —&WGW&âæ–ÖF–öç3°  —Ð  —'6T–ÖvW2‚§6öâÂöäÆöB’°  –6öç7B66÷RÒF†—3° –6öç7B–ÖvW2Ò·Ó°  –ÆWBÆöFW#°  –gVæ7F–öâÆöD–ÖvR‚W&Â’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —&WGW&âÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚’°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂVæFVf–æVBÂgVæ7F–öâ‚’°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  —Ð  –gVæ7F–öâFW6W&–Æ—¦T–ÖvR‚–ÖvR’°  ––b‚G—Vöb–ÖvRÓÓÒw7G&–ærr’°  –6öç7BW&ÂÒ–ÖvS°  –6öç7BF‚Òõâ…ÂõÂò—Â…¶×¥Ò³¢…ÂõÂò“ò’ö’çFW7B‚W&Â’òW&Â¢66÷Rç&W6÷W&6UF‚²W&Ã°  —&WGW&âÆöD–ÖvR‚F‚“°  —ÒVÇ6R°  ––b‚–ÖvRæFF’°  —&WGW&â° –FF¢vWEG—VD'&’‚–ÖvRçG—RÂ–ÖvRæFF’À —v–GFƒ¢–ÖvRçv–GF‚À –†V–v‡C¢–ÖvRæ†V–v‡@ —Ó°  —ÒVÇ6R°  —&WGW&âçVÆÃ°  —Ð  —Ð  —Ð  ––b‚§6öâÓÒVæFVf–æVBbb§6öâæÆVæwF‚â’°  –6öç7BÖævW"ÒæWrÆöF–ætÖævW"‚öäÆöB“°  –ÆöFW"ÒæWr–ÖvTÆöFW"‚ÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“°  –f÷"‚ÆWB’ÒÂ–ÂÒ§6öâæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B–ÖvRÒ§6öå²’Ó° –6öç7BW&ÂÒ–ÖvRçW&Ã°  ––b‚'&’æ—4'&’‚W&Â’’°  ’òòÆöB'&’öb–ÖvW2Rær7V&UFW‡GW&P  –6öç7B–ÖvT'&’ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒW&ÂæÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B7W'&VçEW&ÂÒW&Å²¢Ó°  –6öç7BFW6W&–Æ—¦VD–ÖvRÒFW6W&–Æ—¦T–ÖvR‚7W'&VçEW&Â“°  ––b‚FW6W&–Æ—¦VD–ÖvRÓÒçVÆÂ’°  ––b‚FW6W&–Æ—¦VD–ÖvR–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  ––ÖvT'&’çW6‚‚FW6W&–Æ—¦VD–ÖvR“°  —ÒVÇ6R°  ’òò7V6–Â66S¢†æFÆR'&’öbFFFW‡GW&W2f÷"7V&RFW‡GW&W0  ––ÖvT'&’çW6‚‚æWrFFFW‡GW&R‚FW6W&–Æ—¦VD–ÖvRæFFÂFW6W&–Æ—¦VD–ÖvRçv–GF‚ÂFW6W&–Æ—¦VD–ÖvRæ†V–v‡B’“°  —Ð  —Ð  —Ð  ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚–ÖvT'&’“°  —ÒVÇ6R°  ’òòÆöB6–ævÆR–ÖvP  –6öç7BFW6W&–Æ—¦VD–ÖvRÒFW6W&–Æ—¦T–ÖvR‚–ÖvRçW&Â“° ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚FW6W&–Æ—¦VD–ÖvR“°   —Ð  —Ð  —Ð  —&WGW&â–ÖvW3°  —Ð  –7–æ2'6T–ÖvW47–æ2‚§6öâ’°  –6öç7B66÷RÒF†—3° –6öç7B–ÖvW2Ò·Ó°  –ÆWBÆöFW#°  –7–æ2gVæ7F–öâFW6W&–Æ—¦T–ÖvR‚–ÖvR’°  ––b‚G—Vöb–ÖvRÓÓÒw7G&–ærr’°  –6öç7BW&ÂÒ–ÖvS°  –6öç7BF‚Òõâ…ÂõÂò—Â…¶×¥Ò³¢…ÂõÂò“ò’ö’çFW7B‚W&Â’òW&Â¢66÷Rç&W6÷W&6UF‚²W&Ã°  —&WGW&âv—BÆöFW"æÆöD7–æ2‚F‚“°  —ÒVÇ6R°  ––b‚–ÖvRæFF’°  —&WGW&â° –FF¢vWEG—VD'&’‚–ÖvRçG—RÂ–ÖvRæFF’À —v–GFƒ¢–ÖvRçv–GF‚À –†V–v‡C¢–ÖvRæ†V–v‡@ —Ó°  —ÒVÇ6R°  —&WGW&âçVÆÃ°  —Ð  —Ð  —Ð  ––b‚§6öâÓÒVæFVf–æVBbb§6öâæÆVæwF‚â’°  –ÆöFW"ÒæWr–ÖvTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WD7&÷74÷&–v–â‚F†—2æ7&÷74÷&–v–â“°  –f÷"‚ÆWB’ÒÂ–ÂÒ§6öâæÆVæwFƒ²’Â–Ã²’²²’°  –6öç7B–ÖvRÒ§6öå²’Ó° –6öç7BW&ÂÒ–ÖvRçW&Ã°  ––b‚'&’æ—4'&’‚W&Â’’°  ’òòÆöB'&’öb–ÖvW2Rær7V&UFW‡GW&P  –6öç7B–ÖvT'&’ÒµÓ°  –f÷"‚ÆWB¢ÒÂ¦ÂÒW&ÂæÆVæwFƒ²¢Â¦Ã²¢²²’°  –6öç7B7W'&VçEW&ÂÒW&Å²¢Ó°  –6öç7BFW6W&–Æ—¦VD–ÖvRÒv—BFW6W&–Æ—¦T–ÖvR‚7W'&VçEW&Â“°  ––b‚FW6W&–Æ—¦VD–ÖvRÓÒçVÆÂ’°  ––b‚FW6W&–Æ—¦VD–ÖvR–ç7Fæ6Vöb…DÔÄ–ÖvTVÆVÖVçB’°  ––ÖvT'&’çW6‚‚FW6W&–Æ—¦VD–ÖvR“°  —ÒVÇ6R°  ’òò7V6–Â66S¢†æFÆR'&’öbFFFW‡GW&W2f÷"7V&RFW‡GW&W0  ––ÖvT'&’çW6‚‚æWrFFFW‡GW&R‚FW6W&–Æ—¦VD–ÖvRæFFÂFW6W&–Æ—¦VD–ÖvRçv–GF‚ÂFW6W&–Æ—¦VD–ÖvRæ†V–v‡B’“°  —Ð  —Ð  —Ð  ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚–ÖvT'&’“°  —ÒVÇ6R°  ’òòÆöB6–ævÆR–ÖvP  –6öç7BFW6W&–Æ—¦VD–ÖvRÒv—BFW6W&–Æ—¦T–ÖvR‚–ÖvRçW&Â“° ––ÖvW5²–ÖvRçWV–BÒÒæWr6÷W&6R‚FW6W&–Æ—¦VD–ÖvR“°  —Ð  —Ð  —Ð  —&WGW&â–ÖvW3°  —Ð  —'6UFW‡GW&W2‚§6öâÂ–ÖvW2’°  –gVæ7F–öâ'6T6öç7FçB‚fÇVRÂG—R’°  ––b‚G—VöbfÇVRÓÓÒvçVÖ&W"r’&WGW&âfÇVS°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW"ç'6UFW‡GW&S¢6öç7FçB6†÷VÆB&R–âçVÖW&–2f÷&ÒârÂfÇVR“°  —&WGW&âG—U²fÇVRÓ°  —Ð  –6öç7BFW‡GW&W2Ò·Ó°  ––b‚§6öâÓÒVæFVf–æVB’°  –f÷"‚ÆWB’ÒÂÂÒ§6öâæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BFFÒ§6öå²’Ó°  ––b‚FFæ–ÖvRÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢æò&–ÖvR"7V6–f–VBf÷"rÂFFçWV–B“°  —Ð  ––b‚–ÖvW5²FFæ–ÖvRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVB–ÖvRrÂFFæ–ÖvR“°  —Ð  –6öç7B6÷W&6RÒ–ÖvW5²FFæ–ÖvRÓ° –6öç7B–ÖvRÒ6÷W&6RæFF°  –ÆWBFW‡GW&S°  ––b‚'&’æ—4'&’‚–ÖvR’’°  —FW‡GW&RÒæWr7V&UFW‡GW&R‚“°  ––b‚–ÖvRæÆVæwF‚ÓÓÒb’FW‡GW&RææVVG5WFFRÒG'VS°  —ÒVÇ6R°  ––b‚–ÖvRbb–ÖvRæFF’°  —FW‡GW&RÒæWrFFFW‡GW&R‚“°  —ÒVÇ6R°  —FW‡GW&RÒæWrFW‡GW&R‚“°  —Ð  ––b‚–ÖvR’FW‡GW&RææVVG5WFFRÒG'VS²òòFW‡GW&W26â†fRVæFVf–æVB–ÖvRFF  —Ð  —FW‡GW&Rç6÷W&6RÒ6÷W&6S°  —FW‡GW&RçWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’FW‡GW&RææÖRÒFFææÖS°  ––b‚FFæÖ–ærÓÒVæFVf–æVB’FW‡GW&RæÖ–ærÒ'6T6öç7FçB‚FFæÖ–ærÂDU…EU$UôÔ”är“° ––b‚FFæ6†ææVÂÓÒVæFVf–æVB’FW‡GW&Ræ6†ææVÂÒFFæ6†ææVÃ°  ––b‚FFæöfg6WBÓÒVæFVf–æVB’FW‡GW&Ræöfg6WBæg&öÔ'&’‚FFæöfg6WB“° ––b‚FFç&WVBÓÒVæFVf–æVB’FW‡GW&Rç&WVBæg&öÔ'&’‚FFç&WVB“° ––b‚FFæ6VçFW"ÓÒVæFVf–æVB’FW‡GW&Ræ6VçFW"æg&öÔ'&’‚FFæ6VçFW"“° ––b‚FFç&÷FF–öâÓÒVæFVf–æVB’FW‡GW&Rç&÷FF–öâÒFFç&÷FF–öã°  ––b‚FFçw&ÓÒVæFVf–æVB’°  —FW‡GW&Rçw&2Ò'6T6öç7FçB‚FFçw&²ÒÂDU…EU$Uõu$”är“° —FW‡GW&Rçw&BÒ'6T6öç7FçB‚FFçw&²ÒÂDU…EU$Uõu$”är“°  —Ð  ––b‚FFæf÷&ÖBÓÒVæFVf–æVB’FW‡GW&Ræf÷&ÖBÒFFæf÷&ÖC° ––b‚FFæ–çFW&æÄf÷&ÖBÓÒVæFVf–æVB’FW‡GW&Ræ–çFW&æÄf÷&ÖBÒFFæ–çFW&æÄf÷&ÖC° ––b‚FFçG—RÓÒVæFVf–æVB’FW‡GW&RçG—RÒFFçG—S° ––b‚FFæ6öÆ÷%76RÓÒVæFVf–æVB’FW‡GW&Ræ6öÆ÷%76RÒFFæ6öÆ÷%76S°  ––b‚FFæÖ–äf–ÇFW"ÓÒVæFVf–æVB’FW‡GW&RæÖ–äf–ÇFW"Ò'6T6öç7FçB‚FFæÖ–äf–ÇFW"ÂDU…EU$Uôd”ÅDU"“° ––b‚FFæÖtf–ÇFW"ÓÒVæFVf–æVB’FW‡GW&RæÖtf–ÇFW"Ò'6T6öç7FçB‚FFæÖtf–ÇFW"ÂDU…EU$Uôd”ÅDU"“° ––b‚FFææ—6÷G&÷’ÓÒVæFVf–æVB’FW‡GW&Rææ—6÷G&÷’ÒFFææ—6÷G&÷“°  ––b‚FFæfÆ—’ÓÒVæFVf–æVB’FW‡GW&RæfÆ—’ÒFFæfÆ—“°  ––b‚FFævVæW&FTÖ—Ö2ÓÒVæFVf–æVB’FW‡GW&RævVæW&FTÖ—Ö2ÒFFævVæW&FTÖ—Ö3° ––b‚FFç&V×VÇF—Ç”Ç†ÓÒVæFVf–æVB’FW‡GW&Rç&V×VÇF—Ç”Ç†ÒFFç&V×VÇF—Ç”Ç†° ––b‚FFçVç6´Æ–væÖVçBÓÒVæFVf–æVB’FW‡GW&RçVç6´Æ–væÖVçBÒFFçVç6´Æ–væÖVçC° ––b‚FFæ6ö×&TgVæ7F–öâÓÒVæFVf–æVB’FW‡GW&Ræ6ö×&TgVæ7F–öâÒFFæ6ö×&TgVæ7F–öã°  ––b‚FFçW6W$FFÓÒVæFVf–æVB’FW‡GW&RçW6W$FFÒFFçW6W$FF°  —FW‡GW&W5²FFçWV–BÒÒFW‡GW&S°  —Ð  —Ð  —&WGW&âFW‡GW&W3°  —Ð  —'6Tö&¦V7B‚FFÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2’°  –ÆWBö&¦V7C°  –gVæ7F–öâvWDvVöÖWG'’‚æÖR’°  ––b‚vVöÖWG&–W5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBvVöÖWG'’rÂæÖR“°  —Ð  —&WGW&âvVöÖWG&–W5²æÖRÓ°  —Ð  –gVæ7F–öâvWDÖFW&–Â‚æÖR’°  ––b‚æÖRÓÓÒVæFVf–æVB’&WGW&âVæFVf–æVC°  ––b‚'&’æ—4'&’‚æÖR’’°  –6öç7B'&’ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒæÖRæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BWV–BÒæÖU²’Ó°  ––b‚ÖFW&–Ç5²WV–BÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBÖFW&–ÂrÂWV–B“°  —Ð  –'&’çW6‚‚ÖFW&–Ç5²WV–BÒ“°  —Ð  —&WGW&â'&“°  —Ð  ––b‚ÖFW&–Ç5²æÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBÖFW&–ÂrÂæÖR“°  —Ð  —&WGW&âÖFW&–Ç5²æÖRÓ°  —Ð  –gVæ7F–öâvWEFW‡GW&R‚WV–B’°  ––b‚FW‡GW&W5²WV–BÒÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢VæFVf–æVBFW‡GW&RrÂWV–B“°  —Ð  —&WGW&âFW‡GW&W5²WV–BÓ°  —Ð  –ÆWBvVöÖWG'’ÂÖFW&–Ã°  —7v—F6‚‚FFçG—R’°  –66Ru66VæRs   –ö&¦V7BÒæWr66VæR‚“°  ––b‚FFæ&6¶w&÷VæBÓÒVæFVf–æVB’°  ––b‚çVÖ&W"æ—4–çFVvW"‚FFæ&6¶w&÷VæB’’°  –ö&¦V7Bæ&6¶w&÷VæBÒæWr6öÆ÷"‚FFæ&6¶w&÷VæB“°  —ÒVÇ6R°  –ö&¦V7Bæ&6¶w&÷VæBÒvWEFW‡GW&R‚FFæ&6¶w&÷VæB“°  —Ð  —Ð  ––b‚FFæVçf—&öæÖVçBÓÒVæFVf–æVB’°  –ö&¦V7BæVçf—&öæÖVçBÒvWEFW‡GW&R‚FFæVçf—&öæÖVçB“°  —Ð  ––b‚FFæförÓÒVæFVf–æVB’°  ––b‚FFæförçG—RÓÓÒtförr’°  –ö&¦V7BæförÒæWrför‚FFæföræ6öÆ÷"ÂFFæförææV"ÂFFæföræf"“°  —ÒVÇ6R–b‚FFæförçG—RÓÓÒtfötW‡"r’°  –ö&¦V7BæförÒæWrfötW‡"‚FFæföræ6öÆ÷"ÂFFæföræFVç6—G’“°  —Ð  ––b‚FFæförææÖRÓÒrr’°  –ö&¦V7BæförææÖRÒFFæförææÖS°  —Ð  —Ð  ––b‚FFæ&6¶w&÷VæD&ÇW'&–æW72ÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæD&ÇW'&–æW72ÒFFæ&6¶w&÷VæD&ÇW'&–æW73° ––b‚FFæ&6¶w&÷VæD–çFVç6—G’ÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæD–çFVç6—G’ÒFFæ&6¶w&÷VæD–çFVç6—G“° ––b‚FFæ&6¶w&÷VæE&÷FF–öâÓÒVæFVf–æVB’ö&¦V7Bæ&6¶w&÷VæE&÷FF–öâæg&öÔ'&’‚FFæ&6¶w&÷VæE&÷FF–öâ“°  ––b‚FFæVçf—&öæÖVçD–çFVç6—G’ÓÒVæFVf–æVB’ö&¦V7BæVçf—&öæÖVçD–çFVç6—G’ÒFFæVçf—&öæÖVçD–çFVç6—G“° ––b‚FFæVçf—&öæÖVçE&÷FF–öâÓÒVæFVf–æVB’ö&¦V7BæVçf—&öæÖVçE&÷FF–öâæg&öÔ'&’‚FFæVçf—&öæÖVçE&÷FF–öâ“°  –'&V³°  –66RuW'7V7F—fT6ÖW&s   –ö&¦V7BÒæWrW'7V7F—fT6ÖW&‚FFæf÷bÂFFæ7V7BÂFFææV"ÂFFæf"“°  ––b‚FFæfö7W2ÓÒVæFVf–æVB’ö&¦V7Bæfö7W2ÒFFæfö7W3° ––b‚FFç¦ööÒÓÒVæFVf–æVB’ö&¦V7Bç¦ööÒÒFFç¦ööÓ° ––b‚FFæf–ÆÔvVvRÓÒVæFVf–æVB’ö&¦V7Bæf–ÆÔvVvRÒFFæf–ÆÔvVvS° ––b‚FFæf–ÆÔöfg6WBÓÒVæFVf–æVB’ö&¦V7Bæf–ÆÔöfg6WBÒFFæf–ÆÔöfg6WC° ––b‚FFçf–WrÓÒVæFVf–æVB’ö&¦V7Bçf–WrÒö&¦V7Bæ76–vâ‚·ÒÂFFçf–Wr“°  –'&V³°  –66Rt÷'F†öw&†–46ÖW&s   –ö&¦V7BÒæWr÷'F†öw&†–46ÖW&‚FFæÆVgBÂFFç&–v‡BÂFFçF÷ÂFFæ&÷GFöÒÂFFææV"ÂFFæf"“°  ––b‚FFç¦ööÒÓÒVæFVf–æVB’ö&¦V7Bç¦ööÒÒFFç¦ööÓ° ––b‚FFçf–WrÓÒVæFVf–æVB’ö&¦V7Bçf–WrÒö&¦V7Bæ76–vâ‚·ÒÂFFçf–Wr“°  –'&V³°  –66RtÖ&–VçDÆ–v‡Bs   –ö&¦V7BÒæWrÖ&–VçDÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’“°  –'&V³°  –66RtF—&V7F–öæÄÆ–v‡Bs   –ö&¦V7BÒæWrF—&V7F–öæÄÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’“° –ö&¦V7BçF&vWBÒFFçF&vWBÇÂrs°  –'&V³°  –66Ruö–çDÆ–v‡Bs   –ö&¦V7BÒæWrö–çDÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFæF—7Fæ6RÂFFæFV6’“°  –'&V³°  –66Ru&V7D&VÆ–v‡Bs   –ö&¦V7BÒæWr&V7D&VÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFçv–GF‚ÂFFæ†V–v‡B“°  –'&V³°  –66Ru7÷DÆ–v‡Bs   –ö&¦V7BÒæWr7÷DÆ–v‡B‚FFæ6öÆ÷"ÂFFæ–çFVç6—G’ÂFFæF—7Fæ6RÂFFæævÆRÂFFçVçVÖ'&ÂFFæFV6’“° –ö&¦V7BçF&vWBÒFFçF&vWBÇÂrs°  –'&V³°  –66Rt†VÖ—7†W&TÆ–v‡Bs   –ö&¦V7BÒæWr†VÖ—7†W&TÆ–v‡B‚FFæ6öÆ÷"ÂFFæw&÷VæD6öÆ÷"ÂFFæ–çFVç6—G’“°  –'&V³°  –66RtÆ–v‡E&ö&Rs   –ö&¦V7BÒæWrÆ–v‡E&ö&R‚’æg&öÔ¥4ôâ‚FF“°  –'&V³°  –66Ru6¶–ææVDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° ’ –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWr6¶–ææVDÖW6‚‚vVöÖWG'’ÂÖFW&–Â“°  ––b‚FFæ&–æDÖöFRÓÒVæFVf–æVB’ö&¦V7Bæ&–æDÖöFRÒFFæ&–æDÖöFS° ––b‚FFæ&–æDÖG&—‚ÓÒVæFVf–æVB’ö&¦V7Bæ&–æDÖG&—‚æg&öÔ'&’‚FFæ&–æDÖG&—‚“° ––b‚FFç6¶VÆWFöâÓÒVæFVf–æVB’ö&¦V7Bç6¶VÆWFöâÒFFç6¶VÆWFöã°  –'&V³°  –66RtÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWrÖW6‚‚vVöÖWG'’ÂÖFW&–Â“°  –'&V³°  –66Rt–ç7Fæ6VDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“° –6öç7B6÷VçBÒFFæ6÷VçC° –6öç7B–ç7Fæ6TÖG&—‚ÒFFæ–ç7Fæ6TÖG&—ƒ° –6öç7B–ç7Fæ6T6öÆ÷"ÒFFæ–ç7Fæ6T6öÆ÷#°  –ö&¦V7BÒæWr–ç7Fæ6VDÖW6‚‚vVöÖWG'’ÂÖFW&–ÂÂ6÷VçB“° –ö&¦V7Bæ–ç7Fæ6TÖG&—‚ÒæWr–ç7Fæ6VD'VffW$GG&–'WFR‚æWrfÆöC3$'&’‚–ç7Fæ6TÖG&—‚æ'&’’Âb“° ––b‚–ç7Fæ6T6öÆ÷"ÓÒVæFVf–æVB’ö&¦V7Bæ–ç7Fæ6T6öÆ÷"ÒæWr–ç7Fæ6VD'VffW$GG&–'WFR‚æWrfÆöC3$'&’‚–ç7Fæ6T6öÆ÷"æ'&’’Â–ç7Fæ6T6öÆ÷"æ—FVÕ6—¦R“°  –'&V³°  –66Rt&F6†VDÖW6‚s   –vVöÖWG'’ÒvWDvVöÖWG'’‚FFævVöÖWG'’“° –ÖFW&–ÂÒvWDÖFW&–Â‚FFæÖFW&–Â“°  –ö&¦V7BÒæWr&F6†VDÖW6‚‚FFæÖ„–ç7Fæ6T6÷VçBÂFFæÖ…fW'FW„6÷VçBÂFFæÖ„–æFW„6÷VçBÂÖFW&–Â“° –ö&¦V7BævVöÖWG'’ÒvVöÖWG'“° –ö&¦V7BçW$ö&¦V7Dg'W7GVÔ7VÆÆVBÒFFçW$ö&¦V7Dg'W7GVÔ7VÆÆVC° –ö&¦V7Bç6÷'Dö&¦V7G2ÒFFç6÷'Dö&¦V7G3°  –ö&¦V7BåöG&u&ævW2ÒFFæG&u&ævW3° –ö&¦V7Bå÷&W6W'fVE&ævW2ÒFFç&W6W'fVE&ævW3°  –ö&¦V7BåövVöÖWG'”–æfòÒFFævVöÖWG'”–æfòæÖ‚–æfòÓâ°  –ÆWB&÷‚ÒçVÆÃ° –ÆWB7†W&RÒçVÆÃ° ––b‚–æfòæ&÷VæF–æt&÷‚ÓÒVæFVf–æVB’°  –&÷‚ÒæWr&÷ƒ2‚’æg&öÔ¥4ôâ‚–æfòæ&÷VæF–æt&÷‚“°  —Ð  ––b‚–æfòæ&÷VæF–æu7†W&RÓÒVæFVf–æVB’°  —7†W&RÒæWr7†W&R‚’æg&öÔ¥4ôâ‚–æfòæ&÷VæF–æu7†W&R“°  —Ð  —&WGW&â° ’ââæ–æfòÀ –&÷VæF–æt&÷ƒ¢&÷‚À –&÷VæF–æu7†W&S¢7†W&P —Ó°  —Ò“° –ö&¦V7Båö–ç7Fæ6T–æfòÒFFæ–ç7Fæ6T–æfó°  –ö&¦V7Båöf–Æ&ÆT–ç7Fæ6T–G2ÒFFåöf–Æ&ÆT–ç7Fæ6T–G3° –ö&¦V7Båöf–Æ&ÆTvVöÖWG'”–G2ÒFFåöf–Æ&ÆTvVöÖWG'”–G3°  –ö&¦V7BåöæW‡D–æFW…7F'BÒFFææW‡D–æFW…7F'C° –ö&¦V7BåöæW‡EfW'FW…7F'BÒFFææW‡EfW'FW…7F'C° –ö&¦V7BåövVöÖWG'”6÷VçBÒFFævVöÖWG'”6÷VçC°  –ö&¦V7BåöÖ„–ç7Fæ6T6÷VçBÒFFæÖ„–ç7Fæ6T6÷VçC° –ö&¦V7BåöÖ…fW'FW„6÷VçBÒFFæÖ…fW'FW„6÷VçC° –ö&¦V7BåöÖ„–æFW„6÷VçBÒFFæÖ„–æFW„6÷VçC°  –ö&¦V7BåövVöÖWG'”–æ—F–Æ—¦VBÒFFævVöÖWG'”–æ—F–Æ—¦VC°  –ö&¦V7BåöÖG&–6W5FW‡GW&RÒvWEFW‡GW&R‚FFæÖG&–6W5FW‡GW&RçWV–B“°  –ö&¦V7Båö–æF—&V7EFW‡GW&RÒvWEFW‡GW&R‚FFæ–æF—&V7EFW‡GW&RçWV–B“°  ––b‚FFæ6öÆ÷'5FW‡GW&RÓÒVæFVf–æVB’°  –ö&¦V7Båö6öÆ÷'5FW‡GW&RÒvWEFW‡GW&R‚FFæ6öÆ÷'5FW‡GW&RçWV–B“°  —Ð  ––b‚FFæ&÷VæF–æu7†W&RÓÒVæFVf–æVB’°  –ö&¦V7Bæ&÷VæF–æu7†W&RÒæWr7†W&R‚’æg&öÔ¥4ôâ‚FFæ&÷VæF–æu7†W&R“°  —Ð  ––b‚FFæ&÷VæF–æt&÷‚ÓÒVæFVf–æVB’°  –ö&¦V7Bæ&÷VæF–æt&÷‚ÒæWr&÷ƒ2‚’æg&öÔ¥4ôâ‚FFæ&÷VæF–æt&÷‚“°  —Ð  –'&V³°  –66RtÄôBs   –ö&¦V7BÒæWrÄôB‚“°  –'&V³°  –66RtÆ–æRs   –ö&¦V7BÒæWrÆ–æR‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66RtÆ–æTÆö÷s   –ö&¦V7BÒæWrÆ–æTÆö÷‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66RtÆ–æU6VvÖVçG2s   –ö&¦V7BÒæWrÆ–æU6VvÖVçG2‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Ruö–çD6Æ÷VBs  –66Ruö–çG2s   –ö&¦V7BÒæWrö–çG2‚vWDvVöÖWG'’‚FFævVöÖWG'’’ÂvWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Ru7&—FRs   –ö&¦V7BÒæWr7&—FR‚vWDÖFW&–Â‚FFæÖFW&–Â’“°  –'&V³°  –66Rtw&÷Ws   –ö&¦V7BÒæWrw&÷W‚“°  –'&V³°  –66Rt&öæRs   –ö&¦V7BÒæWr&öæR‚“°  –'&V³°  –FVfVÇC   –ö&¦V7BÒæWrö&¦V7C4B‚“°  —Ð  –ö&¦V7BçWV–BÒFFçWV–C°  ––b‚FFææÖRÓÒVæFVf–æVB’ö&¦V7BææÖRÒFFææÖS°  ––b‚FFæÖG&—‚ÓÒVæFVf–æVB’°  –ö&¦V7BæÖG&—‚æg&öÔ'&’‚FFæÖG&—‚“°  ––b‚FFæÖG&—„WFõWFFRÓÒVæFVf–æVB’ö&¦V7BæÖG&—„WFõWFFRÒFFæÖG&—„WFõWFFS° ––b‚ö&¦V7BæÖG&—„WFõWFFR’ö&¦V7BæÖG&—‚æFV6ö×÷6R‚ö&¦V7Bç÷6—F–öâÂö&¦V7BçVFW&æ–öâÂö&¦V7Bç66ÆR“°  —ÒVÇ6R°  ––b‚FFç÷6—F–öâÓÒVæFVf–æVB’ö&¦V7Bç÷6—F–öâæg&öÔ'&’‚FFç÷6—F–öâ“° ––b‚FFç&÷FF–öâÓÒVæFVf–æVB’ö&¦V7Bç&÷FF–öâæg&öÔ'&’‚FFç&÷FF–öâ“° ––b‚FFçVFW&æ–öâÓÒVæFVf–æVB’ö&¦V7BçVFW&æ–öâæg&öÔ'&’‚FFçVFW&æ–öâ“° ––b‚FFç66ÆRÓÒVæFVf–æVB’ö&¦V7Bç66ÆRæg&öÔ'&’‚FFç66ÆR“°  —Ð  ––b‚FFçWÓÒVæFVf–æVB’ö&¦V7BçWæg&öÔ'&’‚FFçW“°  ––b‚FFæ67E6†F÷rÓÒVæFVf–æVB’ö&¦V7Bæ67E6†F÷rÒFFæ67E6†F÷s° ––b‚FFç&V6V—fU6†F÷rÓÒVæFVf–æVB’ö&¦V7Bç&V6V—fU6†F÷rÒFFç&V6V—fU6†F÷s°  ––b‚FFç6†F÷r’°  ––b‚FFç6†F÷ræ–çFVç6—G’ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræ–çFVç6—G’ÒFFç6†F÷ræ–çFVç6—G“° ––b‚FFç6†F÷ræ&–2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræ&–2ÒFFç6†F÷ræ&–3° ––b‚FFç6†F÷rææ÷&ÖÄ&–2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷rææ÷&ÖÄ&–2ÒFFç6†F÷rææ÷&ÖÄ&–3° ––b‚FFç6†F÷rç&F—W2ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷rç&F—W2ÒFFç6†F÷rç&F—W3° ––b‚FFç6†F÷ræÖ6—¦RÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræÖ6—¦Ræg&öÔ'&’‚FFç6†F÷ræÖ6—¦R“° ––b‚FFç6†F÷ræ6ÖW&ÓÒVæFVf–æVB’ö&¦V7Bç6†F÷ræ6ÖW&ÒF†—2ç'6Tö&¦V7B‚FFç6†F÷ræ6ÖW&“°  —Ð  ––b‚FFçf—6–&ÆRÓÒVæFVf–æVB’ö&¦V7Bçf—6–&ÆRÒFFçf—6–&ÆS° ––b‚FFæg'W7GVÔ7VÆÆVBÓÒVæFVf–æVB’ö&¦V7Bæg'W7GVÔ7VÆÆVBÒFFæg'W7GVÔ7VÆÆVC° ––b‚FFç&VæFW$÷&FW"ÓÒVæFVf–æVB’ö&¦V7Bç&VæFW$÷&FW"ÒFFç&VæFW$÷&FW#° ––b‚FFçW6W$FFÓÒVæFVf–æVB’ö&¦V7BçW6W$FFÒFFçW6W$FF° ––b‚FFæÆ–W'2ÓÒVæFVf–æVB’ö&¦V7BæÆ–W'2æÖ6²ÒFFæÆ–W'3°  ––b‚FFæ6†–ÆG&VâÓÒVæFVf–æVB’°  –6öç7B6†–ÆG&VâÒFFæ6†–ÆG&Vã°  –f÷"‚ÆWB’Ò²’Â6†–ÆG&VâæÆVæwFƒ²’²²’°  –ö&¦V7BæFB‚F†—2ç'6Tö&¦V7B‚6†–ÆG&Vå²’ÒÂvVöÖWG&–W2ÂÖFW&–Ç2ÂFW‡GW&W2Âæ–ÖF–öç2’“°  —Ð  —Ð  ––b‚FFææ–ÖF–öç2ÓÒVæFVf–æVB’°  –6öç7Bö&¦V7Dæ–ÖF–öç2ÒFFææ–ÖF–öç3°  –f÷"‚ÆWB’Ò²’Âö&¦V7Dæ–ÖF–öç2æÆVæwFƒ²’²²’°  –6öç7BWV–BÒö&¦V7Dæ–ÖF–öç5²’Ó°  –ö&¦V7Bææ–ÖF–öç2çW6‚‚æ–ÖF–öç5²WV–BÒ“°  —Ð  —Ð  ––b‚FFçG—RÓÓÒtÄôBr’°  ––b‚FFæWFõWFFRÓÒVæFVf–æVB’ö&¦V7BæWFõWFFRÒFFæWFõWFFS°  –6öç7BÆWfVÇ2ÒFFæÆWfVÇ3°  –f÷"‚ÆWBÂÒ²ÂÂÆWfVÇ2æÆVæwFƒ²Â²²’°  –6öç7BÆWfVÂÒÆWfVÇ5²ÂÓ° –6öç7B6†–ÆBÒö&¦V7BævWDö&¦V7D'•&÷W'G’‚wWV–BrÂÆWfVÂæö&¦V7B“°  ––b‚6†–ÆBÓÒVæFVf–æVB’°  –ö&¦V7BæFDÆWfVÂ‚6†–ÆBÂÆWfVÂæF—7Fæ6RÂÆWfVÂæ‡—7FW&W6—2“°  —Ð  —Ð  —Ð  —&WGW&âö&¦V7C°  —Ð  –&–æE6¶VÆWFöç2‚ö&¦V7BÂ6¶VÆWFöç2’°  ––b‚ö&¦V7Bæ¶W—2‚6¶VÆWFöç2’æÆVæwF‚ÓÓÒ’&WGW&ã°  –ö&¦V7BçG&fW'6R‚gVæ7F–öâ‚6†–ÆB’°  ––b‚6†–ÆBæ—56¶–ææVDÖW6‚ÓÓÒG'VRbb6†–ÆBç6¶VÆWFöâÓÒVæFVf–æVB’°  –6öç7B6¶VÆWFöâÒ6¶VÆWFöç5²6†–ÆBç6¶VÆWFöâÓ°  ––b‚6¶VÆWFöâÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRäö&¦V7DÆöFW#¢æò6¶VÆWFöâf÷VæBv—F‚UT”C¢rÂ6†–ÆBç6¶VÆWFöâ“°  —ÒVÇ6R°  –6†–ÆBæ&–æB‚6¶VÆWFöâÂ6†–ÆBæ&–æDÖG&—‚“°  —Ð  —Ð  —Ò“°  —Ð  –&–æDÆ–v‡EF&vWG2‚ö&¦V7B’°  –ö&¦V7BçG&fW'6R‚gVæ7F–öâ‚6†–ÆB’°  ––b‚6†–ÆBæ—4F—&V7F–öæÄÆ–v‡BÇÂ6†–ÆBæ—57÷DÆ–v‡B’°  –6öç7BWV–BÒ6†–ÆBçF&vWC°  –6öç7BF&vWBÒö&¦V7BævWDö&¦V7D'•&÷W'G’‚wWV–BrÂWV–B“°  ––b‚F&vWBÓÒVæFVf–æVB’°  –6†–ÆBçF&vWBÒF&vWC°  —ÒVÇ6R°  –6†–ÆBçF&vWBÒæWrö&¦V7C4B‚“°  —Ð  —Ð  —Ò“°  —Ð §Ð ¦6öç7BDU…EU$UôÔ”ärÒ° •UdÖ–æs¢UdÖ–ærÀ ”7V&U&VfÆV7F–öäÖ–æs¢7V&U&VfÆV7F–öäÖ–ærÀ ”7V&U&Vg&7F–öäÖ–æs¢7V&U&Vg&7F–öäÖ–ærÀ ”WV—&V7FæwVÆ%&VfÆV7F–öäÖ–æs¢WV—&V7FæwVÆ%&VfÆV7F–öäÖ–ærÀ ”WV—&V7FæwVÆ%&Vg&7F–öäÖ–æs¢WV—&V7FæwVÆ%&Vg&7F–öäÖ–ærÀ ”7V&UUe&VfÆV7F–öäÖ–æs¢7V&UUe&VfÆV7F–öäÖ–æp§Ó° ¦6öç7BDU…EU$Uõu$”ärÒ° •&WVEw&–æs¢&WVEw&–ærÀ ”6Æ×FôVFvUw&–æs¢6Æ×FôVFvUw&–ærÀ ”Ö—'&÷&VE&WVEw&–æs¢Ö—'&÷&VE&WVEw&–æp§Ó° ¦6öç7BDU…EU$Uôd”ÅDU"Ò° ”æV&W7Df–ÇFW#¢æV&W7Df–ÇFW"À ”æV&W7DÖ—ÖæV&W7Df–ÇFW#¢æV&W7DÖ—ÖæV&W7Df–ÇFW"À ”æV&W7DÖ—ÖÆ–æV$f–ÇFW#¢æV&W7DÖ—ÖÆ–æV$f–ÇFW"À ”Æ–æV$f–ÇFW#¢Æ–æV$f–ÇFW"À ”Æ–æV$Ö—ÖæV&W7Df–ÇFW#¢Æ–æV$Ö—ÖæV&W7Df–ÇFW"À ”Æ–æV$Ö—ÖÆ–æV$f–ÇFW#¢Æ–æV$Ö—ÖÆ–æV$f–ÇFW §Ó° ¦6öç7BöW'&÷$ÖÒæWrvV´Ö‚“° ¢ò¢ ¢¢ÆöFW"f÷"ÆöF–ær–ÖvW22â´–ÖvT&—FÖ×´Æ–æ²‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72õvV"ô’ô–ÖvT&—FÖÒà¢¢â–ÖvT&—FÖ&÷f–FW2â7–æ6‡&öæ÷W2æB&W6÷W&6RVff–6–VçBF‡v’Fò&W&P¢¢FW‡GW&W2f÷"&VæFW&–ærà¢ ¢¢æ÷FRF†B´Æ–æ²FW‡GW&R6fÆ——ÒæB´Æ–æ²FW‡GW&R7&V×VÇF—Ç”Ç†Ò&R–væ÷&VBv—F‚–ÖvR&—FÖ2à¢¢F†W’æVVG2F†W6R6öæf–wW&F–öâöâ&—FÖ7&VF–öâVæÆ–¶R&VwVÆ"–ÖvW2æVVBF†VÒöâWÆöF–ærFòuRà¢ ¢¢–÷RæVVBFò6WBF†RWV—fÆVçB÷F–öç2f–´Æ–æ²–ÖvT&—FÖÆöFW"76WD÷F–öç7Ò–ç7FVBà¢ ¢¢Ç6òæ÷FRF†BVæÆ–¶R´Æ–æ²f–ÆTÆöFW'ÒÂF†—2ÆöFW"fö–G2×VÇF—ÆR6öæ7W'&VçB&WVW7G2FòF†R6ÖRU$ÂöæÇ’–b66†V—2Væ&ÆVBà¢ ¢¢§0¢¢6öç7BÆöFW"ÒæWrD…$TRä–ÖvT&—FÖÆöFW"‚“°¢¢ÆöFW"ç6WD÷F–öç2‚²–ÖvT÷&–VçFF–öã¢vfÆ—’rÒ“²òò6WB÷F–öç2–bæVVFV@¢¢6öç7B–ÖvT&—FÖÒv—BÆöFW"æÆöD7–æ2‚v–ÖvRçærr“°¢ ¢¢6öç7BFW‡GW&RÒæWrD…$TRåFW‡GW&R‚–ÖvT&—FÖ“°¢¢FW‡GW&RææVVG5WFFRÒG'VS°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72–ÖvT&—FÖÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWr–ÖvR&—FÖÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4–ÖvT&—FÖÆöFW"ÒG'VS°  ––b‚G—Vöb7&VFT–ÖvT&—FÖÓÓÒwVæFVf–æVBr’°  –6öç6öÆRçv&â‚uD…$TRä–ÖvT&—FÖÆöFW#¢7&VFT–ÖvT&—FÖ‚’æ÷B7W÷'FVBâr“°  —Ð  ––b‚G—VöbfWF6‚ÓÓÒwVæFVf–æVBr’°  –6öç6öÆRçv&â‚uD…$TRä–ÖvT&—FÖÆöFW#¢fWF6‚‚’æ÷B7W÷'FVBâr“°  —Ð  ’ò¢  ’¢&W&W6VçG2F†RÆöFW"÷F–öç2à ’  ’¢G—R´ö&¦V7GÐ ’¢FVfVÇB·&V×VÇF—Ç”Ç†¢væöæRwÐ ’¢ð —F†—2æ÷F–öç2Ò²&V×VÇF—Ç”Ç†¢væöæRrÓ°  ’ò¢  ’¢W6VBf÷"&÷'F–ær&WVW7G2à ’  ’¢&—fFP ’¢G—R´&÷'D6öçG&öÆÆW'Ð ’¢ð —F†—2åö&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâÆöFW"÷F–öç2âF†R7G'V7GW&RöbF†Rö&¦V7B×W7BÖF6‚F†R÷F–öç6&ÖWFW"ö` ’¢¶7&VFT–ÖvT&—FÖ×´Æ–æ²‡GG3¢òöFWfVÆ÷W"æÖ÷¦–ÆÆæ÷&röVâÕU2öFö72õvV"ô’õv–æF÷rö7&VFT–ÖvT&—FÖÒà ’  ’¢&Ò´ö&¦V7GÒ÷F–öç2ÒF†RÆöFW"÷F–öç2Fò6WBà ’¢&WGW&â´–ÖvT&—FÖÆöFW'Ò&VfW&Væ6RFòF†—2–ÖvR&—FÖÆöFW"à ’¢ð —6WD÷F–öç2‚÷F–öç2’°  —F†—2æ÷F–öç2Ò÷F–öç3°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB72F†RÆöFVB–ÖvR&—FÖFòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„–ÖvT&—FÖ—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒVç7W÷'FVB–âF†—2ÆöFW"à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢&WGW&â´–ÖvT&—FÖÇVæFVf–æVGÒF†R–ÖvR&—FÖà ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  ––b‚W&ÂÓÓÒVæFVf–æVB’W&ÂÒrs°  ––b‚F†—2çF‚ÓÒVæFVf–æVB’W&ÂÒF†—2çF‚²W&Ã°  —W&ÂÒF†—2æÖævW"ç&W6öÇfUU$Â‚W&Â“°  –6öç7B66÷RÒF†—3°  –6öç7B66†VBÒ66†RævWB‚–ÖvRÖ&—FÖ¢G·W&ÇÖ“°  ––b‚66†VBÓÒVæFVf–æVB’°  —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  ’òò–b66†VB—2&öÖ—6RÂv—Bf÷"—BFò&W6öÇfP ––b‚66†VBçF†Vâ’°  –66†VBçF†Vâ‚–ÖvT&—FÖÓâ°  ’òò6†V6²–bF†W&R—2âW'&÷"f÷"F†R66†VB&öÖ—6P  ––b‚öW'&÷$Öæ†2‚66†VB’ÓÓÒG'VR’°  ––b‚öäW'&÷"’öäW'&÷"‚öW'&÷$ÖævWB‚66†VB’“°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒVÇ6R°  ––b‚öäÆöB’öäÆöB‚–ÖvT&—FÖ“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —&WGW&â–ÖvT&—FÖ°  —Ð  —Ò“°  —&WGW&ã°  —Ð  ’òò–b66†VB—2æ÷B&öÖ—6R†’æRâÂ—Bw2Ç&VG’â–ÖvT&—FÖ —6WEF–ÖV÷WB‚gVæ7F–öâ‚’°  ––b‚öäÆöB’öäÆöB‚66†VB“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —ÒÂ“°  —&WGW&â66†VC°  —Ð  –6öç7BfWF6„÷F–öç2Ò·Ó° –fWF6„÷F–öç2æ7&VFVçF–Ç2Ò‚F†—2æ7&÷74÷&–v–âÓÓÒvæöç–Ö÷W2r’òw6ÖRÖ÷&–v–âr¢v–æ6ÇVFRs° –fWF6„÷F–öç2æ†VFW'2ÒF†—2ç&WVW7D†VFW#° –fWF6„÷F–öç2ç6–væÂÒ‚G—Vöb&÷'E6–væÂæç’ÓÓÒvgVæ7F–öâr’ò&÷'E6–væÂæç’‚²F†—2åö&÷'D6öçG&öÆÆW"ç6–væÂÂF†—2æÖævW"æ&÷'D6öçG&öÆÆW"ç6–væÂÒ’¢F†—2åö&÷'D6öçG&öÆÆW"ç6–væÃ°  –6öç7B&öÖ—6RÒfWF6‚‚W&ÂÂfWF6„÷F–öç2’çF†Vâ‚gVæ7F–öâ‚&W2’°  —&WGW&â&W2æ&Æö"‚“°  —Ò’çF†Vâ‚gVæ7F–öâ‚&Æö"’°  —&WGW&â7&VFT–ÖvT&—FÖ‚&Æö"Âö&¦V7Bæ76–vâ‚66÷Ræ÷F–öç2Â²6öÆ÷%76T6öçfW'6–öã¢væöæRrÒ’“°  —Ò’çF†Vâ‚gVæ7F–öâ‚–ÖvT&—FÖ’°  ”66†RæFB‚–ÖvRÖ&—FÖ¢G·W&ÇÖÂ–ÖvT&—FÖ“°  ––b‚öäÆöB’öäÆöB‚–ÖvT&—FÖ“°  —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —&WGW&â–ÖvT&—FÖ°  —Ò’æ6F6‚‚gVæ7F–öâ‚R’°  ––b‚öäW'&÷"’öäW'&÷"‚R“°  •öW'&÷$Öç6WB‚&öÖ—6RÂR“°  ”66†Rç&VÖ÷fR‚–ÖvRÖ&—FÖ¢G·W&ÇÖ“°  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“° —66÷RæÖævW"æ—FVÔVæB‚W&Â“°  —Ò“°  ”66†RæFB‚–ÖvRÖ&—FÖ¢G·W&ÇÖÂ&öÖ—6R“° —66÷RæÖævW"æ—FVÕ7F'B‚W&Â“°  —Ð  ’ò¢  ’¢&÷'G2öævö–ærfWF6‚&WVW7G2à ’  ’¢&WGW&â´–ÖvT&—FÖÆöFW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð –&÷'B‚’°  —F†—2åö&÷'D6öçG&öÆÆW"æ&÷'B‚“° —F†—2åö&÷'D6öçG&öÆÆW"ÒæWr&÷'D6öçG&öÆÆW"‚“°  —&WGW&âF†—3°  —Ð §Ð ¦ÆWBö6öçFW‡C° ¢ò¢ ¢¢ÖævW2F†RvÆö&ÂVF–ò6öçFW‡B–âF†RVæv–æRà¢ ¢¢†–FV6öç7G'V7F÷ ¢¢ð¦6Æ72VF–ô6öçFW‡B°  ’ò¢  ’¢&WGW&ç2F†RvÆö&ÂæF—fRVF–ò6öçFW‡Bà ’  ’¢&WGW&â´VF–ô6öçFW‡GÒF†RæF—fRVF–ò6öçFW‡Bà ’¢ð —7FF–2vWD6öçFW‡B‚’°  ––b‚ö6öçFW‡BÓÓÒVæFVf–æVB’°  •ö6öçFW‡BÒæWr‚v–æF÷räVF–ô6öçFW‡BÇÂv–æF÷rçvV&¶—DVF–ô6öçFW‡B’‚“°  —Ð  —&WGW&âö6öçFW‡C°  —Ð  ’ò¢  ’¢ÆÆ÷w2Fò6WBF†RvÆö&ÂæF—fRVF–ò6öçFW‡Bg&öÒ÷WG6–FRà ’  ’¢&Ò´VF–ô6öçFW‡GÒfÇVRÒF†RæF—fR6öçFW‡BFò6WBà ’¢ð —7FF–26WD6öçFW‡B‚fÇVR’°  •ö6öçFW‡BÒfÇVS°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"ÆöF–ærVF–ò'VffW'2âVF–÷2&R–çFW&æÆÇ¢¢ÆöFVBf–´Æ–æ²f–ÆTÆöFW'Òà¢ ¢¢§0¢¢6öç7BVF–ôÆ—7FVæW"ÒæWrD…$TRäVF–ôÆ—7FVæW"‚“°¢¢6öç7BÖ&–VçE6÷VæBÒæWrD…$TRäVF–ò‚VF–ôÆ—7FVæW"“°¢ ¢¢6öç7BÆöFW"ÒæWrD…$TRäVF–ôÆöFW"‚“°¢¢6öç7BVF–ô'VffW"Òv—BÆöFW"æÆöD7–æ2‚vVF–òöÖ&–VçEöö6Vâæövrr“°¢ ¢¢Ö&–VçE6÷VæBç6WD'VffW"‚VF–ô'VffW"“°¢¢Ö&–VçE6÷VæBçÆ’‚“°¢¢ ¢ ¢¢VvÖVçG2ÆöFW ¢¢ð¦6Æ72VF–ôÆöFW"W‡FVæG2ÆöFW"°  ’ò¢  ’¢6öç7G'V7G2æWrVF–òÆöFW"à ’  ’¢&Ò´ÆöF–ætÖævW'Ò¶ÖævW%ÒÒF†RÆöF–ærÖævW"à ’¢ð –6öç7G'V7F÷"‚ÖævW"’°  —7WW"‚ÖævW"“°  —Ð  ’ò¢  ’¢7F'G2ÆöF–ærg&öÒF†Rv—fVâU$ÂæB76W2F†RÆöFVBVF–ò'VffW  ’¢FòF†RöäÆöB‚–6ÆÆ&6²à ’  ’¢&Ò·7G&–æwÒW&ÂÒF†RF‚õU$ÂöbF†Rf–ÆRFò&RÆöFVBâF†—26âÇ6ò&RFFU$’à ’¢&Ò¶gVæ7F–öâ„VF–ô'VffW"—ÒöäÆöBÒW†V7WFVBv†VâF†RÆöF–ær&ö6W72†2&VVâf–æ—6†VBà ’¢&Ò¶öå&öw&W746ÆÆ&6·Òöå&öw&W72ÒW†V7WFVBv†–ÆRF†RÆöF–ær—2–â&öw&W72à ’¢&Ò¶öäW'&÷$6ÆÆ&6·ÒöäW'&÷"ÒW†V7WFVBv†VâW'&÷'2ö67W"à ’¢ð –ÆöB‚W&ÂÂöäÆöBÂöå&öw&W72ÂöäW'&÷"’°  –6öç7B66÷RÒF†—3°  –6öç7BÆöFW"ÒæWrf–ÆTÆöFW"‚F†—2æÖævW"“° –ÆöFW"ç6WE&W7öç6UG—R‚v'&–'VffW"r“° –ÆöFW"ç6WEF‚‚F†—2çF‚“° –ÆöFW"ç6WE&WVW7D†VFW"‚F†—2ç&WVW7D†VFW"“° –ÆöFW"ç6WEv—F„7&VFVçF–Ç2‚F†—2çv—F„7&VFVçF–Ç2“° –ÆöFW"æÆöB‚W&ÂÂgVæ7F–öâ‚'VffW"’°  —G'’°  ’òò7&VFR6÷’öbF†R'VffW"âF†RFV6öFTVF–ôFFÖWF†ö@ ’òòFWF6†W2F†R'VffW"v†Vâ6ö×ÆWFRÂ&WfVçF–ær&WW6Rà –6öç7B'VffW$6÷’Ò'VffW"ç6Æ–6R‚“°  –6öç7B6öçFW‡BÒVF–ô6öçFW‡BævWD6öçFW‡B‚“° –6öçFW‡BæFV6öFTVF–ôFF‚'VffW$6÷’ÂgVæ7F–öâ‚VF–ô'VffW"’°  –öäÆöB‚VF–ô'VffW"“°  —Ò’æ6F6‚‚†æFÆTW'&÷"“°  —Ò6F6‚‚R’°  –†æFÆTW'&÷"‚R“°  —Ð  —ÒÂöå&öw&W72ÂöäW'&÷"“°  –gVæ7F–öâ†æFÆTW'&÷"‚R’°  ––b‚öäW'&÷"’°  –öäW'&÷"‚R“°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚R“°  —Ð  —66÷RæÖævW"æ—FVÔW'&÷"‚W&Â“°  —Ð  —Ð §Ð ¦6öç7BöW–U&–v‡BÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöW–TÆVgBÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7B÷&ö¦V7F–öäÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“° ¢ò¢ ¢¢7V6–ÂG—Röb6ÖW&F†BW6W2GvòW'7V7F—fR6ÖW&2v—F€¢¢7FW&V÷66÷–2&ö¦V7F–öââ6â&RW6VBf÷"&VæFW&–ær7FW&VòVffV7G0¢¢Æ–¶R³4BævÇ—…×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’ôævÇ—…ó4GÒ÷ ¢¢µ&ÆÆ‚&'&–W%×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’÷&ÆÆ…ö&'&–W'Òà¢¢ð¦6Æ727FW&Vô6ÖW&°  ’ò¢  ’¢6öç7G'V7G2æWr7FW&Vò6ÖW&à ’¢ð –6öç7G'V7F÷"‚’°  ’ò¢  ’¢F†RG—R&÷W'G’—2W6VBf÷"FWFV7F–ærF†Rö&¦V7BG—P ’¢–â6öçFW‡Böb6W&–Æ—¦F–öâöFW6W&–Æ—¦F–öâà ’  ’¢G—R·7G&–æwÐ ’¢&VFöæÇ ’¢ð —F†—2çG—RÒu7FW&Vô6ÖW&s°  ’ò¢  ’¢F†R7V7Bà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æ7V7BÒ°  ’ò¢  ’¢F†RW–R6W&F–öâv†–6‚&W&W6VçG2F†RF—7Fæ6P ’¢&WGvVVâF†RÆVgBæB&–v‡B6ÖW&à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBãc@ ’¢ð —F†—2æW–U6WÒãcC°  ’ò¢  ’¢F†R6ÖW&&W&W6VçF–ærF†RÆVgBW–RâF†—2—2FFVBFòÆ–W"6òö&¦V7G2Fò&P ’¢&VæFW&VB'’F†RÆVgB6ÖW&×W7BÇ6ò&RFFVBFòF†—2Æ–W"à ’  ’¢G—RµW'7V7F—fT6ÖW&Ð ’¢ð —F†—2æ6ÖW&ÂÒæWrW'7V7F—fT6ÖW&‚“° —F†—2æ6ÖW&ÂæÆ–W'2æVæ&ÆR‚“° —F†—2æ6ÖW&ÂæÖG&—„WFõWFFRÒfÇ6S°  ’ò¢  ’¢F†R6ÖW&&W&W6VçF–ærF†R&–v‡BW–RâF†—2—2FFVBFòÆ–W"&6òö&¦V7G2Fò&P ’¢&VæFW&VB'’F†R&–v‡B6ÖW&×W7BÇ6ò&RFFVBFòF†—2Æ–W"à ’  ’¢G—RµW'7V7F—fT6ÖW&Ð ’¢ð —F†—2æ6ÖW&"ÒæWrW'7V7F—fT6ÖW&‚“° —F†—2æ6ÖW&"æÆ–W'2æVæ&ÆR‚"“° —F†—2æ6ÖW&"æÖG&—„WFõWFFRÒfÇ6S°  —F†—2åö66†RÒ° –fö7W3¢çVÆÂÀ –f÷c¢çVÆÂÀ –7V7C¢çVÆÂÀ –æV#¢çVÆÂÀ –f#¢çVÆÂÀ —¦ööÓ¢çVÆÂÀ –W–U6W¢çVÆÀ —Ó°  —Ð  ’ò¢  ’¢WFFW2F†R7FW&Vò6ÖW&&6VBöâF†Rv—fVâW'7V7F—fR6ÖW&à ’  ’¢&ÒµW'7V7F—fT6ÖW&Ò6ÖW&ÒF†RW'7V7F—fR6ÖW&à ’¢ð —WFFR‚6ÖW&’°  –6öç7B66†RÒF†—2åö66†S°  –6öç7BæVVG5WFFRÒ66†Ræfö7W2ÓÒ6ÖW&æfö7W2ÇÂ66†Ræf÷bÓÒ6ÖW&æf÷bÇÀ –66†Ræ7V7BÓÒ6ÖW&æ7V7B¢F†—2æ7V7BÇÂ66†RææV"ÓÒ6ÖW&ææV"ÇÀ –66†Ræf"ÓÒ6ÖW&æf"ÇÂ66†Rç¦ööÒÓÒ6ÖW&ç¦ööÒÇÂ66†RæW–U6WÓÒF†—2æW–U6W°  ––b‚æVVG5WFFR’°  –66†Ræfö7W2Ò6ÖW&æfö7W3° –66†Ræf÷bÒ6ÖW&æf÷c° –66†Ræ7V7BÒ6ÖW&æ7V7B¢F†—2æ7V7C° –66†RææV"Ò6ÖW&ææV#° –66†Ræf"Ò6ÖW&æf#° –66†Rç¦ööÒÒ6ÖW&ç¦ööÓ° –66†RæW–U6WÒF†—2æW–U6W°  ’òòöfbÖ†—27FW&V÷66÷–2VffV7B&6VBöà ’òò‡GG¢ò÷VÆ&÷W&¶RææWB÷7FW&Vöw&†–72÷7FW&V÷&VæFW"ð  •÷&ö¦V7F–öäÖG&—‚æ6÷’‚6ÖW&ç&ö¦V7F–öäÖG&—‚“° –6öç7BW–U6W†ÆbÒ66†RæW–U6Wò#° –6öç7BW–U6Wöå&ö¦V7F–öâÒW–U6W†Æb¢66†RææV"ò66†Ræfö7W3° –6öç7B–Ö‚Ò‚66†RææV"¢ÖF‚çFâ‚DTs%$B¢66†Ræf÷b¢ãR’’ò66†Rç¦ööÓ° –ÆWB†Ö–âÂ†Öƒ°  ’òòG&ç6ÆFR„öfg6W@  •öW–TÆVgBæVÆVÖVçG5²"ÒÒÒW–U6W†Æc° •öW–U&–v‡BæVÆVÖVçG5²"ÒÒW–U6W†Æc°  ’òòf÷"ÆVgBW–P  —†Ö–âÒÒ–Ö‚¢66†Ræ7V7B²W–U6Wöå&ö¦V7F–öã° —†Ö‚Ò–Ö‚¢66†Ræ7V7B²W–U6Wöå&ö¦V7F–öã°  •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²ÒÒ"¢66†RææV"ò‚†Ö‚Ò†Ö–â“° •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²‚ÒÒ‚†Ö‚²†Ö–â’ò‚†Ö‚Ò†Ö–â“°  —F†—2æ6ÖW&Âç&ö¦V7F–öäÖG&—‚æ6÷’‚÷&ö¦V7F–öäÖG&—‚“°  ’òòf÷"&–v‡BW–P  —†Ö–âÒÒ–Ö‚¢66†Ræ7V7BÒW–U6Wöå&ö¦V7F–öã° —†Ö‚Ò–Ö‚¢66†Ræ7V7BÒW–U6Wöå&ö¦V7F–öã°  •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²ÒÒ"¢66†RææV"ò‚†Ö‚Ò†Ö–â“° •÷&ö¦V7F–öäÖG&—‚æVÆVÖVçG5²‚ÒÒ‚†Ö‚²†Ö–â’ò‚†Ö‚Ò†Ö–â“°  —F†—2æ6ÖW&"ç&ö¦V7F–öäÖG&—‚æ6÷’‚÷&ö¦V7F–öäÖG&—‚“°  —Ð  —F†—2æ6ÖW&ÂæÖG&—…v÷&ÆBæ6÷’‚6ÖW&æÖG&—…v÷&ÆB’æ×VÇF—Ç’‚öW–TÆVgB“° —F†—2æ6ÖW&"æÖG&—…v÷&ÆBæ6÷’‚6ÖW&æÖG&—…v÷&ÆB’æ×VÇF—Ç’‚öW–U&–v‡B“°  —Ð §Ð ¢ò¢ ¢¢F†—2G—Röb6ÖW&6â&RW6VB–â÷&FW"FòVff–6–VçFÇ’&VæFW"66VæRv—F‚¢¢&VFVf–æVB6WBöb6ÖW&2âF†—2—2â–×÷'FçBW&f÷&Öæ6R7V7Bf÷ ¢¢&VæFW&–ære"66VæW2à¢ ¢¢â–ç7Fæ6Röb'&”6ÖW&Çv—2†2â'&’öb7V"6ÖW&2â—Bw2ÖæFF÷'¢¢FòFVf–æRf÷"V6‚7V"6ÖW&F†Rf–Ww÷'F&÷W'G’v†–6‚FWFW&Ö–æW2F†P¢¢'BöbF†Rf–Ww÷'BF†B—2&VæFW&VBv—F‚F†—26ÖW&à¢ ¢¢VvÖVçG2W'7V7F—fT6ÖW&¢¢ð¦6Æ72'&”6ÖW&W‡FVæG2W'7V7F—fT6ÖW&°  ’ò¢  ’¢6öç7G'V7G2æWr'&’6ÖW&à ’  ’¢&Ò´'&“ÅW'7V7F—fT6ÖW&çÒ¶'&“ÕµÕÒÒâ'&’öbW'7V7F—fR7V"6ÖW&2à ’¢ð –6öç7G'V7F÷"‚'&’ÒµÒ’°  —7WW"‚“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4'&”6ÖW&ÒG'VS°  ’ò¢  ’¢v†WF†W"F†—26ÖW&—2W6VBv—F‚×VÇF—f–Wr&VæFW&–ær÷"æ÷Bà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBfÇ6P ’¢ð —F†—2æ—4×VÇF•f–Wt6ÖW&ÒfÇ6S°  ’ò¢  ’¢â'&’öbW'7V7F—fR7V"6ÖW&2à ’  ’¢G—R´'&“ÅW'7V7F—fT6ÖW&çÐ ’¢ð —F†—2æ6ÖW&2Ò'&“°  —Ð §Ð ¢ò¢ ¢¢6Æ72f÷"¶VW–ærG&6²öbF–ÖRà¢¢ð¦6Æ726Æö6²°  ’ò¢  ’¢6öç7G'V7G2æWr6Æö6²à ’  ’¢&Ò¶&ööÆVçÒ¶WFõ7F'C×G'VUÒÒv†WF†W"FòWFöÖF–6ÆÇ’7F'BF†R6Æö6²v†Và ’¢vWDFVÇF‚–—26ÆÆVBf÷"F†Rf—'7BF–ÖRà ’¢ð –6öç7G'V7F÷"‚WFõ7F'BÒG'VR’°  ’ò¢  ’¢–b6WBFòG'VVÂF†R6Æö6²7F'G2WFöÖF–6ÆÇ’v†VâvWDFVÇF‚–—26ÆÆV@ ’¢f÷"F†Rf—'7BF–ÖRà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2æWFõ7F'BÒWFõ7F'C°  ’ò¢  ’¢†öÆG2F†RF–ÖRBv†–6‚F†R6Æö6²w27F'B‚–ÖWF†öBv2Æ7B6ÆÆVBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ç7F'EF–ÖRÒ°  ’ò¢  ’¢†öÆG2F†RF–ÖRBv†–6‚F†R6Æö6²w27F'B‚–ÂvWDVÆ6VEF–ÖR‚–÷  ’¢vWDFVÇF‚–ÖWF†öG2vW&RÆ7B6ÆÆVBà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æöÆEF–ÖRÒ°  ’ò¢  ’¢¶VW2G&6²öbF†RF÷FÂF–ÖRF†BF†R6Æö6²†2&VVâ'Vææ–ærà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æVÆ6VEF–ÖRÒ°  ’ò¢  ’¢v†WF†W"F†R6Æö6²—2'Vææ–ær÷"æ÷Bà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2ç'Vææ–ærÒfÇ6S°  —Ð  ’ò¢  ’¢7F'G2F†R6Æö6²âv†VâWFõ7F'F—26WBFòG'VVÂF†RÖWF†öB—2WFöÖF–6ÆÇ ’¢6ÆÆVB'’F†R6Æ72à ’¢ð —7F'B‚’°  —F†—2ç7F'EF–ÖRÒW&f÷&Öæ6Rææ÷r‚“°  —F†—2æöÆEF–ÖRÒF†—2ç7F'EF–ÖS° —F†—2æVÆ6VEF–ÖRÒ° —F†—2ç'Vææ–ærÒG'VS°  —Ð  ’ò¢  ’¢7F÷2F†R6Æö6²à ’¢ð —7F÷‚’°  —F†—2ævWDVÆ6VEF–ÖR‚“° —F†—2ç'Vææ–ærÒfÇ6S° —F†—2æWFõ7F'BÒfÇ6S°  —Ð  ’ò¢  ’¢&WGW&ç2F†RVÆ6VBF–ÖR–â6V6öæG2à ’  ’¢&WGW&â¶çVÖ&W'ÒF†RVÆ6VBF–ÖRà ’¢ð –vWDVÆ6VEF–ÖR‚’°  —F†—2ævWDFVÇF‚“° —&WGW&âF†—2æVÆ6VEF–ÖS°  —Ð  ’ò¢  ’¢&WGW&ç2F†RFVÇFF–ÖR–â6V6öæG2à ’  ’¢&WGW&â¶çVÖ&W'ÒF†RFVÇFF–ÖRà ’¢ð –vWDFVÇF‚’°  –ÆWBF–fbÒ°  ––b‚F†—2æWFõ7F'BbbF†—2ç'Vææ–ær’°  —F†—2ç7F'B‚“° —&WGW&â°  —Ð  ––b‚F†—2ç'Vææ–ær’°  –6öç7BæWuF–ÖRÒW&f÷&Öæ6Rææ÷r‚“°  –F–fbÒ‚æWuF–ÖRÒF†—2æöÆEF–ÖR’ò° —F†—2æöÆEF–ÖRÒæWuF–ÖS°  —F†—2æVÆ6VEF–ÖR³ÒF–fc°  —Ð  —&WGW&âF–fc°  —Ð §Ð ¦6öç7B÷÷6—F–öâCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷VFW&æ–öâCÒò¤õõU$Uõò¢òæWrVFW&æ–öâ‚“°¦6öç7B÷66ÆRCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6öç7Böf÷'v&BÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷WÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢F†R6Æ72&W&W6VçG2f—'GVÂÆ—7FVæW"öbF†RÆÂ÷6—F–öæÂæBæöâ×÷6—F–öæÂVF–òVffV7G0¢¢–âF†R66VæRâF‡&VRæ§2Æ–6F–öâW7VÆÇ’7&VFW26–ævÆRÆ—7FVæW"â—B—2ÖæFF÷'¢¢6öç7G'V7F÷"&ÖWFW"f÷"VF–÷2VçF—F–W2Æ–¶R´Æ–æ²VF–÷ÒæB´Æ–æ²÷6—F–öæÄVF–÷Òà¢ ¢¢–âÖ÷7B66W2ÂF†RÆ—7FVæW"ö&¦V7B—26†–ÆBöbF†R6ÖW&â6òF†R4BG&ç6f÷&ÖF–öâöbF†P¢¢6ÖW&&W&W6VçG2F†R4BG&ç6f÷&ÖF–öâöbF†RÆ—7FVæW"à¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72VF–ôÆ—7FVæW"W‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWrVF–òÆ—7FVæW"à ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚“°  —F†—2çG—RÒtVF–ôÆ—7FVæW"s°  ’ò¢  ’¢F†RæF—fRVF–ò6öçFW‡Bà ’  ’¢G—R´VF–ô6öçFW‡GÐ ’¢&VFöæÇ ’¢ð —F†—2æ6öçFW‡BÒVF–ô6öçFW‡BævWD6öçFW‡B‚“°  ’ò¢  ’¢F†Rv–âæöFRW6VBf÷"föÇVÖR6öçG&öÂà ’  ’¢G—R´v–äæöFWÐ ’¢&VFöæÇ ’¢ð —F†—2æv–âÒF†—2æ6öçFW‡Bæ7&VFTv–â‚“° —F†—2æv–âæ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  ’ò¢  ’¢â÷F–öæÂf–ÇFW"à ’  ’¢FVf–æVBf–´Æ–æ²VF–ôÆ—7FVæW"76WDf–ÇFW'Òà ’  ’¢G—R³ôVF–ôæöFWÐ ’¢FVfVÇBçVÆÀ ’¢&VFöæÇ ’¢ð —F†—2æf–ÇFW"ÒçVÆÃ°  ’ò¢  ’¢F–ÖRFVÇFfÇVW2&WV—&VBf÷"Æ–æV%&×FõfÇVTEF–ÖR‚–W6vRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢&VFöæÇ ’¢ð —F†—2çF–ÖTFVÇFÒ°  ’òò&—fFP  —F†—2åö6Æö6²ÒæWr6Æö6²‚“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RÆ—7FVæW"w2–çWBæöFRà ’  ’¢F†—2ÖWF†öB—2W6VB'’÷F†W"VF–òæöFW2Fò6öææV7BFòF†—2Æ—7FVæW"à ’  ’¢&WGW&â´v–äæöFWÒF†R–çWBæöFRà ’¢ð –vWD–çWB‚’°  —&WGW&âF†—2æv–ã°  —Ð  ’ò¢  ’¢&VÖ÷fW2F†R7W'&VçBf–ÇFW"g&öÒF†—2Æ—7FVæW"à ’  ’¢&WGW&â´VF–ôÆ—7FVæW'Ò&VfW&Væ6RFòF†—2Æ—7FVæW"à ’¢ð —&VÖ÷fTf–ÇFW"‚’°  ––b‚F†—2æf–ÇFW"ÓÒçVÆÂ’°  —F†—2æv–âæF—66öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“° —F†—2æv–âæ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“° —F†—2æf–ÇFW"ÒçVÆÃ°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçB6WBf–ÇFW"à ’  ’¢&WGW&â³ôVF–ôæöFWÒF†Rf–ÇFW"à ’¢ð –vWDf–ÇFW"‚’°  —&WGW&âF†—2æf–ÇFW#°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâf–ÇFW"FòF†—2Æ—7FVæW"à ’  ’¢&Ò´VF–ôæöFWÒfÇVRÒF†Rf–ÇFW"Fò6WBà ’¢&WGW&â´VF–ôÆ—7FVæW'Ò&VfW&Væ6RFòF†—2Æ—7FVæW"à ’¢ð —6WDf–ÇFW"‚fÇVR’°  ––b‚F†—2æf–ÇFW"ÓÒçVÆÂ’°  —F†—2æv–âæF—66öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —ÒVÇ6R°  —F†—2æv–âæF—66öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —Ð  —F†—2æf–ÇFW"ÒfÇVS° —F†—2æv–âæ6öææV7B‚F†—2æf–ÇFW"“° —F†—2æf–ÇFW"æ6öææV7B‚F†—2æ6öçFW‡BæFW7F–æF–öâ“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†RÆ–6F–öç2Ö7FW"föÇVÖRà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RÖ7FW"föÇVÖRà ’¢ð –vWDÖ7FW%föÇVÖR‚’°  —&WGW&âF†—2æv–âæv–âçfÇVS°  —Ð  ’ò¢  ’¢6WG2F†RÆ–6F–öç2Ö7FW"föÇVÖRâF†—2föÇVÖR6WGF–ærffV7G0 ’¢ÆÂVF–òæöFW2–âF†R66VæRà ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RÖ7FW"föÇVÖRFò6WBà ’¢&WGW&â´VF–ôÆ—7FVæW'Ò&VfW&Væ6RFòF†—2Æ—7FVæW"à ’¢ð —6WDÖ7FW%föÇVÖR‚fÇVR’°  —F†—2æv–âæv–âç6WEF&vWDEF–ÖR‚fÇVRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —&WGW&âF†—3°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  –6öç7BÆ—7FVæW"ÒF†—2æ6öçFW‡BæÆ—7FVæW#°  —F†—2çF–ÖTFVÇFÒF†—2åö6Æö6²ævWDFVÇF‚“°  —F†—2æÖG&—…v÷&ÆBæFV6ö×÷6R‚÷÷6—F–öâCÂ÷VFW&æ–öâCÂ÷66ÆRC“°  ’òòF†R–æ—F–Âf÷'v&BæBWF—&V7F–öç2×W7B&R÷'F†övöæÀ •öf÷'v&Bç6WB‚ÂÂÓ’æÇ•VFW&æ–öâ‚÷VFW&æ–öâC“° •÷Wç6WB‚ÂÂ’æÇ•VFW&æ–öâ‚÷VFW&æ–öâC“°  ––b‚Æ—7FVæW"ç÷6—F–öå‚’°  ’òò6öFRF‚f÷"6‡&öÖR‡6VR3C3“2  –6öç7BVæEF–ÖRÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²F†—2çF–ÖTFVÇF°  –Æ—7FVæW"ç÷6—F–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç‚ÂVæEF–ÖR“° –Æ—7FVæW"ç÷6—F–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç’ÂVæEF–ÖR“° –Æ—7FVæW"ç÷6—F–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâCç¢ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E‚æÆ–æV%&×FõfÇVTEF–ÖR‚öf÷'v&Bç‚ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E’æÆ–æV%&×FõfÇVTEF–ÖR‚öf÷'v&Bç’ÂVæEF–ÖR“° –Æ—7FVæW"æf÷'v&E¢æÆ–æV%&×FõfÇVTEF–ÖR‚öf÷'v&Bç¢ÂVæEF–ÖR“° –Æ—7FVæW"çW‚æÆ–æV%&×FõfÇVTEF–ÖR‚÷Wç‚ÂVæEF–ÖR“° –Æ—7FVæW"çW’æÆ–æV%&×FõfÇVTEF–ÖR‚÷Wç’ÂVæEF–ÖR“° –Æ—7FVæW"çW¢æÆ–æV%&×FõfÇVTEF–ÖR‚÷Wç¢ÂVæEF–ÖR“°  —ÒVÇ6R°  –Æ—7FVæW"ç6WE÷6—F–öâ‚÷÷6—F–öâCç‚Â÷÷6—F–öâCç’Â÷÷6—F–öâCç¢“° –Æ—7FVæW"ç6WD÷&–VçFF–öâ‚öf÷'v&Bç‚Âöf÷'v&Bç’Âöf÷'v&Bç¢Â÷Wç‚Â÷Wç’Â÷Wç¢“°  —Ð  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2æöâ×÷6—F–öæÂ‚vÆö&Â’VF–òö&¦V7Bà¢ ¢¢F†—2æB&VÆFVBVF–òÖöGVÆW2Ö¶RW6RöbF†RµvV"VF–ò•×´Æ–æ²‡GG3¢ò÷wwrçs2æ÷&rõE"÷vV&VF–òÓã÷Òà¢ ¢¢§0¢¢òò7&VFRâVF–ôÆ—7FVæW"æBFB—BFòF†R6ÖW&¢¢6öç7BÆ—7FVæW"ÒæWrD…$TRäVF–ôÆ—7FVæW"‚“°¢¢6ÖW&æFB‚Æ—7FVæW"“°¢ ¢¢òò7&VFRvÆö&ÂVF–ò6÷W&6P¢¢6öç7B6÷VæBÒæWrD…$TRäVF–ò‚Æ—7FVæW"“°¢ ¢¢òòÆöB6÷VæBæB6WB—B2F†RVF–òö&¦V7Bw2'VffW ¢¢6öç7BVF–ôÆöFW"ÒæWrD…$TRäVF–ôÆöFW"‚“°¢¢VF–ôÆöFW"æÆöB‚w6÷VæG2öÖ&–VçBæövrrÂgVæ7F–öâ‚'VffW"’°¢¢ —6÷VæBç6WD'VffW"‚'VffW"“°¢¢ —6÷VæBç6WDÆö÷‚G'VR“°¢¢ —6÷VæBç6WEföÇVÖR‚ãR“°¢¢ —6÷VæBçÆ’‚“°¢¢Ò“°¢¢ ¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72VF–òW‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWrVF–òà ’  ’¢&Ò´VF–ôÆ—7FVæW'ÒÆ—7FVæW"ÒF†RvÆö&ÂVF–òÆ—7FVæW"à ’¢ð –6öç7G'V7F÷"‚Æ—7FVæW"’°  —7WW"‚“°  —F†—2çG—RÒtVF–òs°  ’ò¢  ’¢F†RvÆö&ÂVF–òÆ—7FVæW"à ’  ’¢G—R´VF–ôÆ—7FVæW'Ð ’¢&VFöæÇ ’¢ð —F†—2æÆ—7FVæW"ÒÆ—7FVæW#°  ’ò¢  ’¢F†RVF–ò6öçFW‡Bà ’  ’¢G—R´VF–ô6öçFW‡GÐ ’¢&VFöæÇ ’¢ð —F†—2æ6öçFW‡BÒÆ—7FVæW"æ6öçFW‡C°  ’ò¢  ’¢F†Rv–âæöFRW6VBf÷"föÇVÖR6öçG&öÂà ’  ’¢G—R´v–äæöFWÐ ’¢&VFöæÇ ’¢ð —F†—2æv–âÒF†—2æ6öçFW‡Bæ7&VFTv–â‚“° —F†—2æv–âæ6öææV7B‚Æ—7FVæW"ævWD–çWB‚’“°  ’ò¢  ’¢v†WF†W"Fò7F'BÆ–&6²WFöÖF–6ÆÇ’÷"æ÷Bà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð —F†—2æWF÷Æ’ÒfÇ6S°  ’ò¢  ’¢&VfW&Væ6RFòâVF–ò'VffW"à ’  ’¢FVf–æVBf–´Æ–æ²VF–ò76WD'VffW'Òà ’  ’¢G—R³ôVF–ô'VffW'Ð ’¢FVfVÇBçVÆÀ ’¢&VFöæÇ ’¢ð —F†—2æ'VffW"ÒçVÆÃ°  ’ò¢  ’¢ÖöF–g’—F6‚ÂÖV7W&VB–â6VçG2â²òÒ—26VÖ—FöæRà ’¢²òÒ#—2âö7FfRà ’  ’¢FVf–æVBf–´Æ–æ²VF–ò76WDFWGVæWÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢&VFöæÇ ’¢ð —F†—2æFWGVæRÒ°  ’ò¢  ’¢v†WF†W"F†RVF–ò6†÷VÆBÆö÷÷"æ÷Bà ’  ’¢FVf–æVBf–´Æ–æ²VF–ò76WDÆö÷Òà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢&VFöæÇ ’¢ð —F†—2æÆö÷ÒfÇ6S°  ’ò¢  ’¢FVf–æW2v†W&R–âF†RVF–ò'VffW"F†R&WÆ’6†÷VÆ@ ’¢7F'BÂ–â6V6öæG2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æÆö÷7F'BÒ°  ’ò¢  ’¢FVf–æW2v†W&R–âF†RVF–ò'VffW"F†R&WÆ’6†÷VÆ@ ’¢7F÷Â–â6V6öæG2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æÆö÷VæBÒ°  ’ò¢  ’¢âöfg6WBFòF†RF–ÖRv—F†–âF†RVF–ò'VffW"F†RÆ–&6° ’¢6†÷VÆB&Vv–âÂ–â6V6öæG2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æöfg6WBÒ°  ’ò¢  ’¢÷fW'&–FW2F†RFVfVÇBGW&F–öâöbF†RVF–òà ’  ’¢G—R·VæFVf–æVGÆçVÖ&W'Ð ’¢FVfVÇBVæFVf–æV@ ’¢ð —F†—2æGW&F–öâÒVæFVf–æVC°  ’ò¢  ’¢F†RÆ–&6²7VVBà ’  ’¢FVf–æVBf–´Æ–æ²VF–ò76WEÆ–&6µ&FWÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢&VFöæÇ ’¢FVfVÇB ’¢ð —F†—2çÆ–&6µ&FRÒ°  ’ò¢  ’¢–æF–6FW2v†WF†W"F†RVF–ò—2Æ––ær÷"æ÷Bà ’  ’¢F†—2fÆrv–ÆÂ&RWFöÖF–6ÆÇ’6WBv†VâW6–ær´Æ–æ²VF–ò7Æ—ÒÀ ’¢´Æ–æ²VF–ò7W6WÒÂ´Æ–æ²VF–ò77F÷Òà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBfÇ6P ’¢ð —F†—2æ—5Æ––ærÒfÇ6S°  ’ò¢  ’¢–æF–6FW2v†WF†W"F†RVF–òÆ–&6²6â&R6öçG&öÆÆV@ ’¢v—F‚ÖWF†öBÆ–¶R´Æ–æ²VF–ò7Æ—Ò÷"´Æ–æ²VF–ò7W6WÒà ’  ’¢F†—2fÆrv–ÆÂ&RWFöÖF–6ÆÇ’6WBv†VâVF–ò6÷W&6W2&P ’¢FVf–æVBà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ†5Æ–&6´6öçG&öÂÒG'VS°  ’ò¢  ’¢†öÆG2&VfW&Væ6RFòF†R7W'&VçBVF–ò6÷W&6Rà ’  ’¢F†R&÷W'G’—2WFöÖF–6ÆÇ’'’öæRöbF†R6WB¢‚–ÖWF†öG2à ’  ’¢G—R³ôVF–ôæöFWÐ ’¢&VFöæÇ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2ç6÷W&6RÒçVÆÃ°  ’ò¢  ’¢FVf–æW2F†R6÷W&6RG—Rà ’  ’¢F†R&÷W'G’—2WFöÖF–6ÆÇ’'’öæRöbF†R6WB¢‚–ÖWF†öG2à ’  ’¢G—R²‚vV×G’wÂvVF–ôæöFRwÂvÖVF–æöFRwÂvÖVF–7G&VÔæöFRwÂv'VffW"r—Ð ’¢&VFöæÇ ’¢FVfVÇBvV×G’p ’¢ð —F†—2ç6÷W&6UG—RÒvV×G’s°  —F†—2å÷7F'FVDBÒ° —F†—2å÷&öw&W72Ò° —F†—2åö6öææV7FVBÒfÇ6S°  ’ò¢  ’¢6â&RW6VBFòÇ’f&–WG’öbÆ÷rÖ÷&FW"f–ÇFW'2Fò7&VFP ’¢Ö÷&R6ö×ÆW‚6÷VæBVffV7G2Rærâf–&—VDf–ÇFW$æöFVà ’  ’¢F†R&÷W'G’—2WFöÖF–6ÆÇ’6WB'’´Æ–æ²VF–ò76WDf–ÇFW'7Òà ’  ’¢G—R´'&“ÄVF–ôæöFSçÐ ’¢&VFöæÇ ’¢ð —F†—2æf–ÇFW'2ÒµÓ°  —Ð  ’ò¢  ’¢&WGW&ç2F†R÷WGWBVF–òæöFRà ’  ’¢&WGW&â´v–äæöFWÒF†R÷WGWBæöFRà ’¢ð –vWD÷WGWB‚’°  —&WGW&âF†—2æv–ã°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâVF–òæöFR2F†R6÷W&6RöbF†—2–ç7Fæ6Rà ’  ’¢´Æ–æ²VF–ò76÷W&6UG—WÒ—26WBFòVF–ôæöFVæB´Æ–æ²VF–ò6†5Æ–&6´6öçG&öÇÒFòfÇ6Và ’  ’¢&Ò´VF–ôæöFWÒVF–ôæöFRÒF†RVF–òæöFRÆ–¶Râ–ç7Fæ6Röb÷66–ÆÆF÷$æöFVà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDæöFU6÷W&6R‚VF–ôæöFR’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvVF–ôæöFRs° —F†—2ç6÷W&6RÒVF–ôæöFS° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâÖVF–VÆVÖVçB2F†R6÷W&6RöbF†—2–ç7Fæ6Rà ’  ’¢´Æ–æ²VF–ò76÷W&6UG—WÒ—26WBFòÖVF–æöFVæB´Æ–æ²VF–ò6†5Æ–&6´6öçG&öÇÒFòfÇ6Và ’  ’¢&Ò´…DÔÄÖVF–VÆVÖVçGÒÖVF–VÆVÖVçBÒF†RÖVF–VÆVÖVçBà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÖVF–VÆVÖVçE6÷W&6R‚ÖVF–VÆVÖVçB’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvÖVF–æöFRs° —F†—2ç6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFTÖVF–VÆVÖVçE6÷W&6R‚ÖVF–VÆVÖVçB“° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâÖVF–7G&VÒ2F†R6÷W&6RöbF†—2–ç7Fæ6Rà ’  ’¢´Æ–æ²VF–ò76÷W&6UG—WÒ—26WBFòÖVF–7G&VÔæöFVæB´Æ–æ²VF–ò6†5Æ–&6´6öçG&öÇÒFòfÇ6Và ’  ’¢&Ò´ÖVF–7G&V×ÒÖVF–7G&VÒÒF†RÖVF–7G&VÒà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÖVF–7G&VÕ6÷W&6R‚ÖVF–7G&VÒ’°  —F†—2æ†5Æ–&6´6öçG&öÂÒfÇ6S° —F†—2ç6÷W&6UG—RÒvÖVF–7G&VÔæöFRs° —F†—2ç6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFTÖVF–7G&VÕ6÷W&6R‚ÖVF–7G&VÒ“° —F†—2æ6öææV7B‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâVF–ò'VffW"2F†R6÷W&6RöbF†—2–ç7Fæ6Rà ’  ’¢´Æ–æ²VF–ò76÷W&6UG—WÒ—26WBFò'VffW&æB´Æ–æ²VF–ò6†5Æ–&6´6öçG&öÇÒFòG'VVà ’  ’¢&Ò´VF–ô'VffW'ÒVF–ô'VffW"ÒF†RVF–ò'VffW"à ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WD'VffW"‚VF–ô'VffW"’°  —F†—2æ'VffW"ÒVF–ô'VffW#° —F†—2ç6÷W&6UG—RÒv'VffW"s°  ––b‚F†—2æWF÷Æ’’F†—2çÆ’‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7F'G2F†RÆ–&6²öbF†RVF–òà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&Ò¶çVÖ&W'Ò¶FVÆ“ÓÒÒF†RFVÆ’Â–â6V6öæG2ÂBv†–6‚F†RVF–ò6†÷VÆB7F'BÆ––ærà ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —Æ’‚FVÆ’Ò’°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢VF–ò—2Ç&VG’Æ––ærâr“° —&WGW&ã°  —Ð  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2å÷7F'FVDBÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²FVÆ“°  –6öç7B6÷W&6RÒF†—2æ6öçFW‡Bæ7&VFT'VffW%6÷W&6R‚“° —6÷W&6Ræ'VffW"ÒF†—2æ'VffW#° —6÷W&6RæÆö÷ÒF†—2æÆö÷° —6÷W&6RæÆö÷7F'BÒF†—2æÆö÷7F'C° —6÷W&6RæÆö÷VæBÒF†—2æÆö÷VæC° —6÷W&6RæöæVæFVBÒF†—2æöäVæFVBæ&–æB‚F†—2“° —6÷W&6Rç7F'B‚F†—2å÷7F'FVDBÂF†—2å÷&öw&W72²F†—2æöfg6WBÂF†—2æGW&F–öâ“°  —F†—2æ—5Æ––ærÒG'VS°  —F†—2ç6÷W&6RÒ6÷W&6S°  —F†—2ç6WDFWGVæR‚F†—2æFWGVæR“° —F†—2ç6WEÆ–&6µ&FR‚F†—2çÆ–&6µ&FR“°  —&WGW&âF†—2æ6öææV7B‚“°  —Ð  ’ò¢  ’¢W6W2F†RÆ–&6²öbF†RVF–òà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —W6R‚’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  ’òòWFFR7W'&VçB&öw&W70  —F†—2å÷&öw&W72³ÒÖF‚æÖ‚‚F†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÒF†—2å÷7F'FVDBÂ’¢F†—2çÆ–&6µ&FS°  ––b‚F†—2æÆö÷ÓÓÒG'VR’°  ’òòVç7W&R÷&öw&W72FöW2æ÷BW†6VVBGW&F–öâv—F‚Æö÷VBVF–÷0  —F†—2å÷&öw&W72ÒF†—2å÷&öw&W72R‚F†—2æGW&F–öâÇÂF†—2æ'VffW"æGW&F–öâ“°  —Ð  —F†—2ç6÷W&6Rç7F÷‚“° —F†—2ç6÷W&6RæöæVæFVBÒçVÆÃ°  —F†—2æ—5Æ––ærÒfÇ6S°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7F÷2F†RÆ–&6²öbF†RVF–òà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&Ò¶çVÖ&W'Ò¶FVÆ“ÓÒÒF†RFVÆ’Â–â6V6öæG2ÂBv†–6‚F†RVF–ò6†÷VÆB7F÷Æ––ærà ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —7F÷‚FVÆ’Ò’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2å÷&öw&W72Ò°  ––b‚F†—2ç6÷W&6RÓÒçVÆÂ’°  —F†—2ç6÷W&6Rç7F÷‚F†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²FVÆ’“° —F†—2ç6÷W&6RæöæVæFVBÒçVÆÃ°  —Ð  —F†—2æ—5Æ––ærÒfÇ6S°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6öææV7G2FòF†RVF–ò6÷W&6RâF†—2—2W6VB–çFW&æÆÇ’öà ’¢–æ—F–Æ—6F–öâæBv†Vâ6WGF–ærò&VÖ÷f–ærf–ÇFW'2à ’  ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð –6öææV7B‚’°  ––b‚F†—2æf–ÇFW'2æÆVæwF‚â’°  —F†—2ç6÷W&6Ræ6öææV7B‚F†—2æf–ÇFW'5²Ò“°  –f÷"‚ÆWB’ÒÂÂÒF†—2æf–ÇFW'2æÆVæwFƒ²’ÂÃ²’²²’°  —F†—2æf–ÇFW'5²’ÒÒæ6öææV7B‚F†—2æf–ÇFW'5²’Ò“°  —Ð  —F†—2æf–ÇFW'5²F†—2æf–ÇFW'2æÆVæwF‚ÒÒæ6öææV7B‚F†—2ævWD÷WGWB‚’“°  —ÒVÇ6R°  —F†—2ç6÷W&6Ræ6öææV7B‚F†—2ævWD÷WGWB‚’“°  —Ð  —F†—2åö6öææV7FVBÒG'VS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢F—66öææV7G2FòF†RVF–ò6÷W&6RâF†—2—2W6VB–çFW&æÆÇ’öà ’¢–æ—F–Æ—6F–öâæBv†Vâ6WGF–ærò&VÖ÷f–ærf–ÇFW'2à ’  ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð –F—66öææV7B‚’°  ––b‚F†—2åö6öææV7FVBÓÓÒfÇ6R’°  —&WGW&ã°  —Ð  ––b‚F†—2æf–ÇFW'2æÆVæwF‚â’°  —F†—2ç6÷W&6RæF—66öææV7B‚F†—2æf–ÇFW'5²Ò“°  –f÷"‚ÆWB’ÒÂÂÒF†—2æf–ÇFW'2æÆVæwFƒ²’ÂÃ²’²²’°  —F†—2æf–ÇFW'5²’ÒÒæF—66öææV7B‚F†—2æf–ÇFW'5²’Ò“°  —Ð  —F†—2æf–ÇFW'5²F†—2æf–ÇFW'2æÆVæwF‚ÒÒæF—66öææV7B‚F†—2ævWD÷WGWB‚’“°  —ÒVÇ6R°  —F†—2ç6÷W&6RæF—66öææV7B‚F†—2ævWD÷WGWB‚’“°  —Ð  —F†—2åö6öææV7FVBÒfÇ6S°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçB6WBf–ÇFW'2à ’  ’¢&WGW&â´'&“ÄVF–ôæöFSçÒF†RÆ—7Böbf–ÇFW'2à ’¢ð –vWDf–ÇFW'2‚’°  —&WGW&âF†—2æf–ÇFW'3°  —Ð  ’ò¢  ’¢6WG2â'&’öbf–ÇFW'2æB6öææV7G2F†VÒv—F‚F†RVF–ò6÷W&6Rà ’  ’¢&Ò´'&“ÄVF–ôæöFSçÒ·fÇVUÒÒÆ—7Böbf–ÇFW'2à ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDf–ÇFW'2‚fÇVR’°  ––b‚fÇVR’fÇVRÒµÓ°  ––b‚F†—2åö6öææV7FVBÓÓÒG'VR’°  —F†—2æF—66öææV7B‚“° —F†—2æf–ÇFW'2ÒfÇVRç6Æ–6R‚“° —F†—2æ6öææV7B‚“°  —ÒVÇ6R°  —F†—2æf–ÇFW'2ÒfÇVRç6Æ–6R‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FVf–æW2F†RFWGVæ–æröb÷66–ÆÆF–öâ–â6VçG2à ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RFWGVæ–æröb÷66–ÆÆF–öâ–â6VçG2à ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDFWGVæR‚fÇVR’°  —F†—2æFWGVæRÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VRbbF†—2ç6÷W&6RæFWGVæRÓÒVæFVf–æVB’°  —F†—2ç6÷W&6RæFWGVæRç6WEF&vWDEF–ÖR‚F†—2æFWGVæRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†RFWGVæ–æröb÷66–ÆÆF–öâ–â6VçG2à ’  ’¢&WGW&â¶çVÖ&W'ÒF†RFWGVæ–æröb÷66–ÆÆF–öâ–â6VçG2à ’¢ð –vWDFWGVæR‚’°  —&WGW&âF†—2æFWGVæS°  —Ð  ’ò¢  ’¢&WGW&ç2F†Rf—'7Bf–ÇFW"–âF†RÆ—7Böbf–ÇFW'2à ’  ’¢&WGW&â´VF–ôæöFWÇVæFVf–æVGÒF†Rf—'7Bf–ÇFW"–âF†RÆ—7Böbf–ÇFW'2à ’¢ð –vWDf–ÇFW"‚’°  —&WGW&âF†—2ævWDf–ÇFW'2‚•²Ó°  —Ð  ’ò¢  ’¢Æ–W26–ævÆRf–ÇFW"æöFRFòF†RVF–òà ’  ’¢&Ò´VF–ôæöFWÒ¶f–ÇFW%ÒÒF†Rf–ÇFW"Fò6WBà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDf–ÇFW"‚f–ÇFW"’°  —&WGW&âF†—2ç6WDf–ÇFW'2‚f–ÇFW"ò²f–ÇFW"Ò¢µÒ“°  —Ð  ’ò¢  ’¢6WG2F†RÆ–&6²&FRà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&Ò¶çVÖ&W'Ò·fÇVUÒÒF†RÆ–&6²&FRFò6WBà ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WEÆ–&6µ&FR‚fÇVR’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2çÆ–&6µ&FRÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  —F†—2ç6÷W&6RçÆ–&6µ&FRç6WEF&vWDEF–ÖR‚F†—2çÆ–&6µ&FRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçBÆ–&6²&FRà  ’¢&WGW&â¶çVÖ&W'ÒF†RÆ–&6²&FRà ’¢ð –vWEÆ–&6µ&FR‚’°  —&WGW&âF†—2çÆ–&6µ&FS°  —Ð  ’ò¢  ’¢WFöÖF–6ÆÇ’6ÆÆVBv†VâÆ–&6²f–æ—6†VBà ’¢ð –öäVæFVB‚’°  —F†—2æ—5Æ––ærÒfÇ6S° —F†—2å÷&öw&W72Ò°  —Ð  ’ò¢  ’¢&WGW&ç2F†RÆö÷fÆrà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†RVF–ò6†÷VÆBÆö÷÷"æ÷Bà ’¢ð –vWDÆö÷‚’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&âfÇ6S°  —Ð  —&WGW&âF†—2æÆö÷°  —Ð  ’ò¢  ’¢6WG2F†RÆö÷fÆrà ’  ’¢6âöæÇ’&RW6VBv—F‚6ö×F–&ÆRVF–ò6÷W&6W2F†BÆÆ÷rÆ–&6²6öçG&öÂà ’  ’¢&Ò¶&ööÆVçÒfÇVRÒv†WF†W"F†RVF–ò6†÷VÆBÆö÷÷"æ÷Bà ’¢&WGW&â´VF–÷ÇVæFVf–æVGÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÆö÷‚fÇVR’°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒfÇ6R’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢F†—2VF–ò†2æòÆ–&6²6öçG&öÂâr“° —&WGW&ã°  —Ð  —F†—2æÆö÷ÒfÇVS°  ––b‚F†—2æ—5Æ––ærÓÓÒG'VR’°  —F†—2ç6÷W&6RæÆö÷ÒF†—2æÆö÷°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RÆö÷7F'BfÇVRv†–6‚FVf–æW2v†W&R–âF†RVF–ò'VffW"F†R&WÆ’6†÷VÆ@ ’¢7F'BÂ–â6V6öæG2à ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RÆö÷7F'BfÇVRà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÆö÷7F'B‚fÇVR’°  —F†—2æÆö÷7F'BÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RÆö÷VæBfÇVRv†–6‚FVf–æW2v†W&R–âF†RVF–ò'VffW"F†R&WÆ’6†÷VÆ@ ’¢7F÷Â–â6V6öæG2à ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RÆö÷VæBfÇVRà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÆö÷VæB‚fÇVR’°  —F†—2æÆö÷VæBÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†RföÇVÖRà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RföÇVÖRà ’¢ð –vWEföÇVÖR‚’°  —&WGW&âF†—2æv–âæv–âçfÇVS°  —Ð  ’ò¢  ’¢6WG2F†RföÇVÖRà ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RföÇVÖRFò6WBà ’¢&WGW&â´VF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WEföÇVÖR‚fÇVR’°  —F†—2æv–âæv–âç6WEF&vWDEF–ÖR‚fÇVRÂF†—2æ6öçFW‡Bæ7W'&VçEF–ÖRÂã“°  —&WGW&âF†—3°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  ––b‚6÷W&6Rç6÷W&6UG—RÓÒv'VffW"r’°  –6öç6öÆRçv&â‚uD…$TRäVF–ó¢VF–ò6÷W&6RG—R6ææ÷B&R6÷–VBâr“°  —&WGW&âF†—3°  —Ð  —F†—2æWF÷Æ’Ò6÷W&6RæWF÷Æ“°  —F†—2æ'VffW"Ò6÷W&6Ræ'VffW#° —F†—2æFWGVæRÒ6÷W&6RæFWGVæS° —F†—2æÆö÷Ò6÷W&6RæÆö÷° —F†—2æÆö÷7F'BÒ6÷W&6RæÆö÷7F'C° —F†—2æÆö÷VæBÒ6÷W&6RæÆö÷VæC° —F†—2æöfg6WBÒ6÷W&6Ræöfg6WC° —F†—2æGW&F–öâÒ6÷W&6RæGW&F–öã° —F†—2çÆ–&6µ&FRÒ6÷W&6RçÆ–&6µ&FS° —F†—2æ†5Æ–&6´6öçG&öÂÒ6÷W&6Ræ†5Æ–&6´6öçG&öÃ° —F†—2ç6÷W&6UG—RÒ6÷W&6Rç6÷W&6UG—S°  —F†—2æf–ÇFW'2Ò6÷W&6Ræf–ÇFW'2ç6Æ–6R‚“°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚&V7W'6—fR’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚F†—2æÆ—7FVæW"’æ6÷’‚F†—2Â&V7W'6—fR“°  —Ð §Ð ¦6öç7B÷÷6—F–öâÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷VFW&æ–öâÒò¤õõU$Uõò¢òæWrVFW&æ–öâ‚“°¦6öç7B÷66ÆRÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö÷&–VçFF–öâÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢&W&W6VçG2÷6—F–öæÂVF–òö&¦V7Bà¢ ¢¢§0¢¢òò7&VFRâVF–ôÆ—7FVæW"æBFB—BFòF†R6ÖW&¢¢6öç7BÆ—7FVæW"ÒæWrD…$TRäVF–ôÆ—7FVæW"‚“°¢¢6ÖW&æFB‚Æ—7FVæW"“°¢ ¢¢òò7&VFRF†R÷6—F–öæÄVF–òö&¦V7B‡76–ær–âF†RÆ—7FVæW"¢¢6öç7B6÷VæBÒæWrD…$TRå÷6—F–öæÄVF–ò‚Æ—7FVæW"“°¢ ¢¢òòÆöB6÷VæBæB6WB—B2F†R÷6—F–öæÄVF–òö&¦V7Bw2'VffW ¢¢6öç7BVF–ôÆöFW"ÒæWrD…$TRäVF–ôÆöFW"‚“°¢¢VF–ôÆöFW"æÆöB‚w6÷VæG2÷6öæræövrrÂgVæ7F–öâ‚'VffW"’°¢¢ —6÷VæBç6WD'VffW"‚'VffW"“°¢¢ —6÷VæBç6WE&VdF—7Fæ6R‚#“°¢¢ —6÷VæBçÆ’‚“°¢¢Ò“°¢ ¢¢òò7&VFRâö&¦V7Bf÷"F†R6÷VæBFòÆ’g&öÐ¢¢6öç7B7†W&RÒæWrD…$TRå7†W&TvVöÖWG'’‚#Â3"Âb“°¢¢6öç7BÖFW&–ÂÒæWrD…$TRäÖW6…†öætÖFW&–Â‚²6öÆ÷#¢†fc##Ò“°¢¢6öç7BÖW6‚ÒæWrD…$TRäÖW6‚‚7†W&RÂÖFW&–Â“°¢¢66VæRæFB‚ÖW6‚“°¢ ¢¢òòf–æÆÇ’FBF†R6÷VæBFòF†RÖW6€¢¢ÖW6‚æFB‚6÷VæB“°¢ ¢¢VvÖVçG2VF–ð¢¢ð¦6Æ72÷6—F–öæÄVF–òW‡FVæG2VF–ò°  ’ò¢  ’¢6öç7G'V7G2÷6—F–öæÂVF–òà ’  ’¢&Ò´VF–ôÆ—7FVæW'ÒÆ—7FVæW"ÒF†RvÆö&ÂVF–òÆ—7FVæW"à ’¢ð –6öç7G'V7F÷"‚Æ—7FVæW"’°  —7WW"‚Æ—7FVæW"“°  ’ò¢  ’¢F†RææW"æöFR&W&W6VçG2F†RÆö6F–öâÂF—&V7F–öâÂæB&V†f–÷"öbâVF–ð ’¢6÷W&6R–â4B76Rà ’  ’¢G—RµææW$æöFWÐ ’¢&VFöæÇ ’¢ð —F†—2çææW"ÒF†—2æ6öçFW‡Bæ7&VFUææW"‚“° —F†—2çææW"çææ–ætÖöFVÂÒt…%Dbs° —F†—2çææW"æ6öææV7B‚F†—2æv–â“°  —Ð  –6öææV7B‚’°  —7WW"æ6öææV7B‚“°  —F†—2çææW"æ6öææV7B‚F†—2æv–â“°  —&WGW&âF†—3°  —Ð  –F—66öææV7B‚’°  —7WW"æF—66öææV7B‚“°  —F†—2çææW"æF—66öææV7B‚F†—2æv–â“°  —&WGW&âF†—3°  —Ð  –vWD÷WGWB‚’°  —&WGW&âF†—2çææW#°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçB&VfW&Væ6RF—7Fæ6Rà ’  ’¢&WGW&â¶çVÖ&W'ÒF†R&VfW&Væ6RF—7Fæ6Rà ’¢ð –vWE&VdF—7Fæ6R‚’°  —&WGW&âF†—2çææW"ç&VdF—7Fæ6S°  —Ð  ’ò¢  ’¢FVf–æW2F†R&VfW&Væ6RF—7Fæ6Rf÷"&VGV6–ærföÇVÖR2F†RVF–ò6÷W&6RÖ÷fW0 ’¢gW'F†W"g&öÒF†RÆ—7FVæW"(	2’æRâF†RF—7Fæ6RBv†–6‚F†RföÇVÖR&VGV7F–öà ’¢7F'G2F¶–ærVffV7Bà ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†R&VfW&Væ6RF—7Fæ6RFò6WBà ’¢&WGW&âµ÷6—F–öæÄVF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WE&VdF—7Fæ6R‚fÇVR’°  —F†—2çææW"ç&VdF—7Fæ6RÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçB&öÆÆöfbf7F÷"à ’  ’¢&WGW&â¶çVÖ&W'ÒF†R&öÆÆöfbf7F÷"à ’¢ð –vWE&öÆÆöfdf7F÷"‚’°  —&WGW&âF†—2çææW"ç&öÆÆöfdf7F÷#°  —Ð  ’ò¢  ’¢FVf–æW2†÷rV–6¶Ç’F†RföÇVÖR—2&VGV6VB2F†R6÷W&6RÖ÷fW2v’g&öÒF†RÆ—7FVæW"à ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†R&öÆÆöfbf7F÷"à ’¢&WGW&âµ÷6—F–öæÄVF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WE&öÆÆöfdf7F÷"‚fÇVR’°  —F†—2çææW"ç&öÆÆöfdf7F÷"ÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçBF—7Fæ6RÖöFVÂà ’  ’¢&WGW&â²‚vÆ–æV"wÂv–çfW'6RwÂvW‡öæVçF–Âr—ÒF†RF—7Fæ6RÖöFVÂà ’¢ð –vWDF—7Fæ6TÖöFVÂ‚’°  —&WGW&âF†—2çææW"æF—7Fæ6TÖöFVÃ°  —Ð  ’ò¢  ’¢FVf–æW2v†–6‚Æv÷&—F†ÒFòW6RFò&VGV6RF†RföÇVÖRöbF†RVF–ò6÷W&6P ’¢2—BÖ÷fW2v’g&öÒF†RÆ—7FVæW"à ’  ’¢&VB·F†R7V5×´Æ–æ²‡GG3¢ò÷wwrçs2æ÷&rõE"÷vV&VF–òÓãò6VçVÖFVbÖF—7Fæ6VÖöFVÇG—WÐ ’¢f÷"Ö÷&RFWF–Ç2à ’  ’¢&Ò²‚vÆ–æV"wÂv–çfW'6RwÂvW‡öæVçF–Âr—ÒfÇVRÒF†RF—7Fæ6RÖöFVÂFò6WBà ’¢&WGW&âµ÷6—F–öæÄVF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDF—7Fæ6TÖöFVÂ‚fÇVR’°  —F†—2çææW"æF—7Fæ6TÖöFVÂÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7W'&VçBÖ‚F—7Fæ6Rà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RÖ‚F—7Fæ6Rà ’¢ð –vWDÖ„F—7Fæ6R‚’°  —&WGW&âF†—2çææW"æÖ„F—7Fæ6S°  —Ð  ’ò¢  ’¢FVf–æW2F†RÖ†–×VÒF—7Fæ6R&WGvVVâF†RVF–ò6÷W&6RæBF†RÆ—7FVæW"À ’¢gFW"v†–6‚F†RföÇVÖR—2æ÷B&VGV6VBç’gW'F†W"à ’  ’¢F†—2fÇVR—2W6VBöæÇ’'’F†RÆ–æV&F—7Fæ6RÖöFVÂà ’  ’¢&Ò¶çVÖ&W'ÒfÇVRÒF†RÖ‚F—7Fæ6Rà ’¢&WGW&âµ÷6—F–öæÄVF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDÖ„F—7Fæ6R‚fÇVR’°  —F†—2çææW"æÖ„F—7Fæ6RÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RF—&V7F–öæÂ6öæR–âv†–6‚F†RVF–ò6â&RÆ—7FVæVBà ’  ’¢&Ò¶çVÖ&W'Ò6öæT–ææW$ævÆRÒâævÆRÂ–âFVw&VW2Âöb6öæR–ç6–FRöbv†–6‚F†W&Rv–ÆÂ&RæòföÇVÖR&VGV7F–öâà ’¢&Ò¶çVÖ&W'Ò6öæT÷WFW$ævÆRÒâævÆRÂ–âFVw&VW2Âöb6öæR÷WG6–FRöbv†–6‚F†RföÇVÖRv–ÆÂ&R&VGV6VB'’6öç7FçBfÇVRÂFVf–æVB'’F†R6öæT÷WFW$v–æ&ÖWFW"à ’¢&Ò¶çVÖ&W'Ò6öæT÷WFW$v–âÒF†RÖ÷VçBöbföÇVÖR&VGV7F–öâ÷WG6–FRF†R6öæRFVf–æVB'’F†R6öæT÷WFW$ævÆVâv†Vâ6WBFòÂæò6÷VæB6â&R†V&Bà ’¢&WGW&âµ÷6—F–öæÄVF–÷Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDF—&V7F–öæÄ6öæR‚6öæT–ææW$ævÆRÂ6öæT÷WFW$ævÆRÂ6öæT÷WFW$v–â’°  —F†—2çææW"æ6öæT–ææW$ævÆRÒ6öæT–ææW$ævÆS° —F†—2çææW"æ6öæT÷WFW$ævÆRÒ6öæT÷WFW$ævÆS° —F†—2çææW"æ6öæT÷WFW$v–âÒ6öæT÷WFW$v–ã°  —&WGW&âF†—3°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  ––b‚F†—2æ†5Æ–&6´6öçG&öÂÓÓÒG'VRbbF†—2æ—5Æ––ærÓÓÒfÇ6R’&WGW&ã°  —F†—2æÖG&—…v÷&ÆBæFV6ö×÷6R‚÷÷6—F–öâÂ÷VFW&æ–öâÂ÷66ÆR“°  •ö÷&–VçFF–öâç6WB‚ÂÂ’æÇ•VFW&æ–öâ‚÷VFW&æ–öâ“°  –6öç7BææW"ÒF†—2çææW#°  ––b‚ææW"ç÷6—F–öå‚’°  ’òò6öFRF‚f÷"6‡&öÖRæBf—&Vf÷‚‡6VR3C3“2  –6öç7BVæEF–ÖRÒF†—2æ6öçFW‡Bæ7W'&VçEF–ÖR²F†—2æÆ—7FVæW"çF–ÖTFVÇF°  —ææW"ç÷6—F–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç‚ÂVæEF–ÖR“° —ææW"ç÷6—F–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç’ÂVæEF–ÖR“° —ææW"ç÷6—F–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚÷÷6—F–öâç¢ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå‚æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç‚ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå’æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç’ÂVæEF–ÖR“° —ææW"æ÷&–VçFF–öå¢æÆ–æV%&×FõfÇVTEF–ÖR‚ö÷&–VçFF–öâç¢ÂVæEF–ÖR“°  —ÒVÇ6R°  —ææW"ç6WE÷6—F–öâ‚÷÷6—F–öâç‚Â÷÷6—F–öâç’Â÷÷6—F–öâç¢“° —ææW"ç6WD÷&–VçFF–öâ‚ö÷&–VçFF–öâç‚Âö÷&–VçFF–öâç’Âö÷&–VçFF–öâç¢“°  —Ð  —Ð §Ð ¢ò¢ ¢¢F†—26Æ726â&RW6VBFòæÇ—6RVF–òFFà¢ ¢¢§0¢¢òò7&VFRâVF–ôÆ—7FVæW"æBFB—BFòF†R6ÖW&¢¢6öç7BÆ—7FVæW"ÒæWrD…$TRäVF–ôÆ—7FVæW"‚“°¢¢6ÖW&æFB‚Æ—7FVæW"“°¢ ¢¢òò7&VFRâVF–ò6÷W&6P¢¢6öç7B6÷VæBÒæWrD…$TRäVF–ò‚Æ—7FVæW"“°¢ ¢¢òòÆöB6÷VæBæB6WB—B2F†RVF–òö&¦V7Bw2'VffW ¢¢6öç7BVF–ôÆöFW"ÒæWrD…$TRäVF–ôÆöFW"‚“°¢¢VF–ôÆöFW"æÆöB‚w6÷VæG2öÖ&–VçBæövrrÂgVæ7F–öâ‚'VffW"’°¢¢ —6÷VæBç6WD'VffW"‚'VffW"“°¢¢ —6÷VæBç6WDÆö÷‡G'VR“°¢¢ —6÷VæBç6WEföÇVÖRƒãR“°¢¢ —6÷VæBçÆ’‚“°¢¢Ò“°¢ ¢¢òò7&VFRâVF–ôæÇ—6W"Â76–ær–âF†R6÷VæBæBFW6—&VBfgE6—¦P¢¢6öç7BæÇ—6W"ÒæWrD…$TRäVF–ôæÇ—6W"‚6÷VæBÂ3"“°¢ ¢¢òòvWBF†RfW&vRg&WVVæ7’öbF†R6÷Væ@¢¢6öç7BFFÒæÇ—6W"ævWDfW&vTg&WVVæ7’‚“°¢¢ ¢¢ð¦6Æ72VF–ôæÇ—6W"°  ’ò¢  ’¢6öç7G'V7G2æWrVF–òæÇ—¦W"à ’  ’¢&Ò´VF–÷ÒVF–òÒF†RVF–òFòæÇ—¦Rà ’¢&Ò¶çVÖ&W'Ò¶fgE6—¦SÓ#C…ÒÒF†Rv–æF÷r6—¦R–â6×ÆW2F†B—2W6VBv†VâW&f÷&Ö–ærf7Bf÷W&–W"G&ç6f÷&Ò„deB’FòvWBg&WVVæ7’FöÖ–âFFà ’¢ð –6öç7G'V7F÷"‚VF–òÂfgE6—¦RÒ#C‚’°  ’ò¢  ’¢F†RvÆö&ÂVF–òÆ—7FVæW"à ’  ’¢G—R´æÇ—6W$æöFWÐ ’¢ð —F†—2ææÇ—6W"ÒVF–òæ6öçFW‡Bæ7&VFTæÇ—6W"‚“° —F†—2ææÇ—6W"æfgE6—¦RÒfgE6—¦S°  ’ò¢  ’¢†öÆG2F†RæÇ—¦VBFFà ’  ’¢G—RµV–çC„'&—Ð ’¢ð —F†—2æFFÒæWrV–çC„'&’‚F†—2ææÇ—6W"æg&WVVæ7”&–ä6÷VçB“°  –VF–òævWD÷WGWB‚’æ6öææV7B‚F†—2ææÇ—6W"“°  —Ð  ’ò¢  ’¢&WGW&ç2â'&’v—F‚g&WVVæ7’FFöbF†RVF–òà ’  ’¢V6‚—FVÒ–âF†R'&’&W&W6VçG2F†RFV6–&VÂfÇVRf÷"7V6–f–2g&WVVæ7’à ’¢F†Rg&WVVæ6–W2&R7&VBÆ–æV&Ç’g&öÒFòó"öbF†R6×ÆR&FRà ’¢f÷"W†×ÆRÂf÷"Cƒ6×ÆR&FRÂF†RÆ7B—FVÒöbF†R'&’v–ÆÂ&W&W6Vç@ ’¢F†RFV6–&VÂfÇVRf÷"#C‡¢à ’  ’¢&WGW&âµV–çC„'&—ÒF†Rg&WVVæ7’FFà ’¢ð –vWDg&WVVæ7”FF‚’°  —F†—2ææÇ—6W"ævWD'—FTg&WVVæ7”FF‚F†—2æFF“°  —&WGW&âF†—2æFF°  —Ð  ’ò¢  ’¢&WGW&ç2F†RfW&vRöbF†Rg&WVVæ6–W2&WGW&æVB'’´Æ–æ²VF–ôæÇ—6W"6vWDg&WVVæ7”FFÒà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RfW&vRg&WVVæ7’à ’¢ð –vWDfW&vTg&WVVæ7’‚’°  –ÆWBfÇVRÒ° –6öç7BFFÒF†—2ævWDg&WVVæ7”FF‚“°  –f÷"‚ÆWB’Ò²’ÂFFæÆVæwFƒ²’²²’°  —fÇVR³ÒFF²’Ó°  —Ð  —&WGW&âfÇVRòFFæÆVæwFƒ°  —Ð §Ð ¢ò¢ ¢¢'VffW&VB66VæRw&‚&÷W'G’F†BÆÆ÷w2vV–v‡FVB67V×VÆF–öã²W6VB–çFW&æÆÇ’à¢¢ð¦6Æ72&÷W'G”Ö—†W"°  ’ò¢  ’¢6öç7G'V7G2æWr&÷W'G’Ö—†W"à ’  ’¢&Òµ&÷W'G”&–æF–æwÒ&–æF–ærÒF†R&÷W'G’&–æF–ærà ’¢&Ò·7G&–æwÒG—TæÖRÒF†R¶W–g&ÖRG&6²G—RæÖRà ’¢&Ò¶çVÖ&W'ÒfÇVU6—¦RÒF†R¶W–g&ÖRG&6²fÇVR6—¦Rà ’¢ð –6öç7G'V7F÷"‚&–æF–ærÂG—TæÖRÂfÇVU6—¦R’°  ’ò¢  ’¢F†R&÷W'G’&–æF–ærà ’  ’¢G—Rµ&÷W'G”&–æF–æwÐ ’¢ð —F†—2æ&–æF–ærÒ&–æF–æs°  ’ò¢  ’¢F†R¶W–g&ÖRG&6²fÇVR6—¦Rà ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2çfÇVU6—¦RÒfÇVU6—¦S°  –ÆWBÖ—„gVæ7F–öâÀ –Ö—„gVæ7F–öäFF—F—fRÀ —6WD–FVçF—G“°  ’òò'VffW"Æ–÷WC¢²–æ6öÖ–ærÂ67SÂ67SÂ÷&–rÂFD67RÂ†÷F–öæÂv÷&²’Ð ’òð ’òò–çFW'öÆF÷'26âW6Ræ'VffW"2F†V—"ç&W7VÇ@ ’òòF†RFFF†VâvöW2Fòv–æ6öÖ–ærp ’òð ’òòv67SræBv67Sr&RW6VBg&ÖRÖ–çFW&ÆVfVBf÷  ’òòF†R7V×VÆF—fR&W7VÇBæB&R6ö×&VBFòFWFV7@ ’òò6†ævW0 ’òð ’òòv÷&–rr7F÷&W2F†R÷&–v–æÂ7FFRöbF†R&÷W'G ’òð ’òòvFBr—2W6VBf÷"FF—F—fR7V×VÆF—fR&W7VÇG0 ’òð ’òòwv÷&²r—2÷F–öæÂæB—2öæÇ’&W6VçBf÷"VFW&æ–öâG—W2â—B—2W6V@ ’òòFò7F÷&R–çFW&ÖVF–FRVFW&æ–öâ×VÇF—Æ–6F–öâ&W7VÇG0  —7v—F6‚‚G—TæÖR’°  –66RwVFW&æ–öâs  –Ö—„gVæ7F–öâÒF†—2å÷6ÆW'° –Ö—„gVæ7F–öäFF—F—fRÒF†—2å÷6ÆW'FF—F—fS° —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G•VFW&æ–öã°  —F†—2æ'VffW"ÒæWrfÆöCcD'&’‚fÇVU6—¦R¢b“° —F†—2å÷v÷&´–æFW‚ÒS° –'&V³°  –66Rw7G&–ærs  –66Rv&ööÂs  –Ö—„gVæ7F–öâÒF†—2å÷6VÆV7C°  ’òòW6RF†R&VwVÆ"Ö—‚gVæ7F–öâæBf÷"FF—F—fRöâF†W6RG—W2À ’òòFF—F—fR—2æ÷B&VÆWfçBf÷"æöâÖçVÖW&–2G—W0 –Ö—„gVæ7F–öäFF—F—fRÒF†—2å÷6VÆV7C°  —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G”÷F†W#°  —F†—2æ'VffW"ÒæWr'&’‚fÇVU6—¦R¢R“° –'&V³°  –FVfVÇC  –Ö—„gVæ7F–öâÒF†—2åöÆW'° –Ö—„gVæ7F–öäFF—F—fRÒF†—2åöÆW'FF—F—fS° —6WD–FVçF—G’ÒF†—2å÷6WDFF—F—fT–FVçF—G”çVÖW&–3°  —F†—2æ'VffW"ÒæWrfÆöCcD'&’‚fÇVU6—¦R¢R“°  —Ð  —F†—2åöÖ—„'VffW%&Vv–öâÒÖ—„gVæ7F–öã° —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fRÒÖ—„gVæ7F–öäFF—F—fS° —F†—2å÷6WD–FVçF—G’Ò6WD–FVçF—G“° —F†—2åö÷&–t–æFW‚Ò3° —F†—2åöFD–æFW‚ÒC°  ’ò¢  ’¢DôDð ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æ7V×VÆF—fUvV–v‡BÒ°  ’ò¢  ’¢DôDð ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  ’ò¢  ’¢DôDð ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çW6T6÷VçBÒ°  ’ò¢  ’¢DôDð ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ç&VfW&Væ6T6÷VçBÒ°  —Ð  ’ò¢  ’¢67V×VÆFW2FF–âF†R–æ6öÖ–æv&Vv–öâ–çFò67SÆ“æà ’  ’¢&Ò¶çVÖ&W'Ò67T–æFW‚ÒF†R67V×VÆF–öâ–æFW‚à ’¢&Ò¶çVÖ&W'ÒvV–v‡BÒF†RvV–v‡Bà ’¢ð –67V×VÆFR‚67T–æFW‚ÂvV–v‡B’°  ’òòæ÷FS¢†–Ç’67V×VÆF–æræ÷F†–ærv†VâvV–v‡BÒÂF†R6ÆÆW"¶æ÷w0 ’òòF†RvV–v‡BæB6†÷VÆFâwB†fRÖFRF†R6ÆÂ–âF†Rf—'7BÆ6P  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ –öfg6WBÒ67T–æFW‚¢7G&–FR²7G&–FS°  –ÆWB7W'&VçEvV–v‡BÒF†—2æ7V×VÆF—fUvV–v‡C°  ––b‚7W'&VçEvV–v‡BÓÓÒ’°  ’òò67Tâ£Ò–æ6öÖ–ær¢vV–v‡@  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –'VffW%²öfg6WB²’ÒÒ'VffW%²’Ó°  —Ð  –7W'&VçEvV–v‡BÒvV–v‡C°  —ÒVÇ6R°  ’òò67Tâ£Ò67Tâ²–æ6öÖ–ær¢vV–v‡@  –7W'&VçEvV–v‡B³ÒvV–v‡C° –6öç7BÖ—‚ÒvV–v‡Bò7W'&VçEvV–v‡C° —F†—2åöÖ—„'VffW%&Vv–öâ‚'VffW"Âöfg6WBÂÂÖ—‚Â7G&–FR“°  —Ð  —F†—2æ7V×VÆF—fUvV–v‡BÒ7W'&VçEvV–v‡C°  —Ð  ’ò¢  ’¢67V×VÆFW2FF–âF†R–æ6öÖ–æv&Vv–öâ–çFòFFà ’  ’¢&Ò¶çVÖ&W'ÒvV–v‡BÒF†RvV–v‡Bà ’¢ð –67V×VÆFTFF—F—fR‚vV–v‡B’°  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ –öfg6WBÒ7G&–FR¢F†—2åöFD–æFWƒ°  ––b‚F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÓÓÒ’°  ’òòFBÒ–FVçF—G  —F†—2å÷6WD–FVçF—G’‚“°  —Ð  ’òòFB£ÒFB²–æ6öÖ–ær¢vV–v‡@  —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fR‚'VffW"Âöfg6WBÂÂvV–v‡BÂ7G&–FR“° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fR³ÒvV–v‡C°  —Ð  ’ò¢  ’¢Æ–W2F†R7FFRöb67SÆ“æFòF†R&–æF–ærv†Vâ67W2F–ffW"à ’  ’¢&Ò¶çVÖ&W'Ò67T–æFW‚ÒF†R67V×VÆF–öâ–æFW‚à ’¢ð –Ç’‚67T–æFW‚’°  –6öç7B7G&–FRÒF†—2çfÇVU6—¦RÀ –'VffW"ÒF†—2æ'VffW"À –öfg6WBÒ67T–æFW‚¢7G&–FR²7G&–FRÀ  —vV–v‡BÒF†—2æ7V×VÆF—fUvV–v‡BÀ —vV–v‡DFF—F—fRÒF†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÀ  –&–æF–ærÒF†—2æ&–æF–æs°  —F†—2æ7V×VÆF—fUvV–v‡BÒ° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  ––b‚vV–v‡BÂ’°  ’òò67Tâ£Ò67Tâ²÷&–v–æÂ¢‚Ò7V×VÆF—fUvV–v‡B  –6öç7B÷&–v–æÅfÇVTöfg6WBÒ7G&–FR¢F†—2åö÷&–t–æFWƒ°  —F†—2åöÖ—„'VffW%&Vv–öâ€ –'VffW"Âöfg6WBÂ÷&–v–æÅfÇVTöfg6WBÂÒvV–v‡BÂ7G&–FR“°  —Ð  ––b‚vV–v‡DFF—F—fRâ’°  ’òò67Tâ£Ò67Tâ²FF—F—fR67Tà  —F†—2åöÖ—„'VffW%&Vv–öäFF—F—fR‚'VffW"Âöfg6WBÂF†—2åöFD–æFW‚¢7G&–FRÂÂ7G&–FR“°  —Ð  –f÷"‚ÆWB’Ò7G&–FRÂRÒ7G&–FR²7G&–FS²’ÓÒS²²²’’°  ––b‚'VffW%²’ÒÓÒ'VffW%²’²7G&–FRÒ’°  ’òòfÇVR†26†ævVBÓâWFFR66VæRw&€  –&–æF–ærç6WEfÇVR‚'VffW"Âöfg6WB“° –'&V³°  —Ð  —Ð  —Ð   ’ò¢  ’¢&VÖVÖ&W'2F†R7FFRöbF†R&÷VæB&÷W'G’æB6÷’—BFò&÷F‚67W2à ’¢ð —6fT÷&–v–æÅ7FFR‚’°  –6öç7B&–æF–ærÒF†—2æ&–æF–æs°  –6öç7B'VffW"ÒF†—2æ'VffW"À —7G&–FRÒF†—2çfÇVU6—¦RÀ  –÷&–v–æÅfÇVTöfg6WBÒ7G&–FR¢F†—2åö÷&–t–æFWƒ°  –&–æF–ærævWEfÇVR‚'VffW"Â÷&–v–æÅfÇVTöfg6WB“°  ’òò67U³âãÒ£Ò÷&–rÒÒ–æ—F–ÆÇ’FWFV7B6†ævW2v–ç7BF†R÷&–v–æÀ –f÷"‚ÆWB’Ò7G&–FRÂRÒ÷&–v–æÅfÇVTöfg6WC²’ÓÒS²²²’’°  –'VffW%²’ÒÒ'VffW%²÷&–v–æÅfÇVTöfg6WB²‚’R7G&–FR’Ó°  —Ð  ’òòFBFò–FVçF—G’f÷"FF—F—fP —F†—2å÷6WD–FVçF—G’‚“°  —F†—2æ7V×VÆF—fUvV–v‡BÒ° —F†—2æ7V×VÆF—fUvV–v‡DFF—F—fRÒ°  —Ð  ’ò¢  ’¢Æ–W2F†R7FFR&Wf–÷W6Ç’F¶Vâf–´Æ–æ²&÷W'G”Ö—†W"76fT÷&–v–æÅ7FFWÒFòF†R&–æF–ærà ’¢ð —&W7F÷&T÷&–v–æÅ7FFR‚’°  –6öç7B÷&–v–æÅfÇVTöfg6WBÒF†—2çfÇVU6—¦R¢3° —F†—2æ&–æF–ærç6WEfÇVR‚F†—2æ'VffW"Â÷&–v–æÅfÇVTöfg6WB“°  —Ð  ’òò–çFW&æÇ0  •÷6WDFF—F—fT–FVçF—G”çVÖW&–2‚’°  –6öç7B7F'D–æFW‚ÒF†—2åöFD–æFW‚¢F†—2çfÇVU6—¦S° –6öç7BVæD–æFW‚Ò7F'D–æFW‚²F†—2çfÇVU6—¦S°  –f÷"‚ÆWB’Ò7F'D–æFWƒ²’ÂVæD–æFWƒ²’²²’°  —F†—2æ'VffW%²’ÒÒ°  —Ð  —Ð  •÷6WDFF—F—fT–FVçF—G•VFW&æ–öâ‚’°  —F†—2å÷6WDFF—F—fT–FVçF—G”çVÖW&–2‚“° —F†—2æ'VffW%²F†—2åöFD–æFW‚¢F†—2çfÇVU6—¦R²2ÒÒ°  —Ð  •÷6WDFF—F—fT–FVçF—G”÷F†W"‚’°  –6öç7B7F'D–æFW‚ÒF†—2åö÷&–t–æFW‚¢F†—2çfÇVU6—¦S° –6öç7BF&vWD–æFW‚ÒF†—2åöFD–æFW‚¢F†—2çfÇVU6—¦S°  –f÷"‚ÆWB’Ò²’ÂF†—2çfÇVU6—¦S²’²²’°  —F†—2æ'VffW%²F&vWD–æFW‚²’ÒÒF†—2æ'VffW%²7F'D–æFW‚²’Ó°  —Ð  —Ð   ’òòÖ—‚gVæ7F–öç0  •÷6VÆV7B‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  ––b‚BãÒãR’°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –'VffW%²G7Döfg6WB²’ÒÒ'VffW%²7&4öfg6WB²’Ó°  —Ð  —Ð  —Ð  •÷6ÆW'‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂB’°  •VFW&æ–öâç6ÆW'fÆB‚'VffW"ÂG7Döfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Â7&4öfg6WBÂB“°  —Ð  •÷6ÆW'FF—F—fR‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –6öç7Bv÷&´öfg6WBÒF†—2å÷v÷&´–æFW‚¢7G&–FS°  ’òò7F÷&R&W7VÇB–â–çFW&ÖVF–FR'VffW"öfg6W@ •VFW&æ–öâæ×VÇF—Ç•VFW&æ–öç4fÆB‚'VffW"Âv÷&´öfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Â7&4öfg6WB“°  ’òò6ÆW'FòF†R–çFW&ÖVF–FR&W7VÇ@ •VFW&æ–öâç6ÆW'fÆB‚'VffW"ÂG7Döfg6WBÂ'VffW"ÂG7Döfg6WBÂ'VffW"Âv÷&´öfg6WBÂB“°  —Ð  •öÆW'‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –6öç7B2ÒÒC°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –6öç7B¢ÒG7Döfg6WB²“°  –'VffW%²¢ÒÒ'VffW%²¢Ò¢2²'VffW%²7&4öfg6WB²’Ò¢C°  —Ð  —Ð  •öÆW'FF—F—fR‚'VffW"ÂG7Döfg6WBÂ7&4öfg6WBÂBÂ7G&–FR’°  –f÷"‚ÆWB’Ò²’ÓÒ7G&–FS²²²’’°  –6öç7B¢ÒG7Döfg6WB²“°  –'VffW%²¢ÒÒ'VffW%²¢Ò²'VffW%²7&4öfg6WB²’Ò¢C°  —Ð  —Ð §Ð ¢òò6†&7FW'2µÒã¢ò&R&W6W'fVBf÷"G&6²&–æF–ær7–çF‚à¦6öç7Bõ$U4U%dTEô4„%5õ$RÒuÅÅµÅÅÕÅÂã¥ÅÂòs°¦6öç7B÷&W6W'fVE&RÒæWr&VtW‡‚u²r²õ$U4U%dTEô4„%5õ$R²uÒrÂvrr“° ¢òòGFV×G2FòÆÆ÷ræöFRæÖW2g&öÒç’ÆæwVvRâU3Rw2Çv&VvW‡ÖF6†W0¢òòöæÇ’ÆF–â6†&7FW'2ÂæBF†RVæ–6öFRÇ´ÇÒ—2æ÷B–WB7W÷'FVBâ6ð¢òò–ç7FVBÂvRW†6ÇVFR&W6W'fVB6†&7FW'2æBÖF6‚WfW'—F†–ærVÇ6Rà¦6öç7B÷v÷&D6†"Òuµâr²õ$U4U%dTEô4„%5õ$R²uÒs°¦6öç7B÷v÷&D6†$÷$F÷BÒuµâr²õ$U4U%dTEô4„%5õ$Rç&WÆ6R‚uÅÂârÂrr’²uÒs° ¢òò&VçBF—&V7F÷&–W2ÂFVÆ–Ö—FVB'’ròr÷"s¢râ7W'&VçFÇ’VçW6VBÂ'WB×W7@¢òò&RÖF6†VBFò'6RF†R&W7BöbF†RG&6²æÖRà¦6öç7BöF—&V7F÷'•&RÒò¤õõU$Uõò¢òò‚ƒó¥t2µµÂó¥Ò’¢’òç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¢òòF&vWBæöFRâÖ’6öçF–âv÷&B6†&7FW'2†×¤Õ£Ó•ò’æBrâr÷"rÒrà¦6öç7BöæöFU&RÒò¤õõU$Uõò¢òò…t4ôB²“òòç6÷W&6Rç&WÆ6R‚ut4ôBrÂ÷v÷&D6†$÷$F÷B“° ¢òòö&¦V7BöâF&vWBæöFRÂæB66W76÷"âÖ’æ÷B6öçF–â&W6W'fV@¢òò6†&7FW'2â66W76÷"Ö’6öçF–âç’6†&7FW"W†6WB6Æ÷6–ær'&6¶WBà¦6öç7Böö&¦V7E&RÒò¤õõU$Uõò¢òòƒó¥Ââ…t2²’ƒó¥Å²‚â²•ÅÒ“ò“òòç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¢òò&÷W'G’æB66W76÷"âÖ’æ÷B6öçF–â&W6W'fVB6†&7FW'2â66W76÷"Ö¢òò6öçF–âç’æöâÖ'&6¶WB6†&7FW'2à¦6öç7B÷&÷W'G•&RÒò¤õõU$Uõò¢òõÂâ…t2²’ƒó¥Å²‚â²•ÅÒ“òòç6÷W&6Rç&WÆ6R‚ut2rÂ÷v÷&D6†"“° ¦6öç7B÷G&6µ&RÒæWr&VtW‡‚rp ’²uâp ’²öF—&V7F÷'•&P ’²öæöFU&P ’²öö&¦V7E&P ’²÷&÷W'G•&P ’²rBp¢“° ¦6öç7B÷7W÷'FVDö&¦V7DæÖW2Ò²vÖFW&–ÂrÂvÖFW&–Ç2rÂv&öæW2rÂvÖrÓ° ¦6Æ726ö×÷6—FR°  –6öç7G'V7F÷"‚F&vWDw&÷WÂF‚Â÷F–öæÅ'6VEF‚’°  –6öç7B'6VEF‚Ò÷F–öæÅ'6VEF‚ÇÂ&÷W'G”&–æF–ærç'6UG&6´æÖR‚F‚“°  —F†—2å÷F&vWDw&÷WÒF&vWDw&÷W° —F†—2åö&–æF–æw2ÒF&vWDw&÷Wç7V'67&–&Uò‚F‚Â'6VEF‚“°  —Ð  –vWEfÇVR‚'&’Âöfg6WB’°  —F†—2æ&–æB‚“²òò&–æBÆÂ&–æF–æp  –6öç7Bf—'7EfÆ–D–æFW‚ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÀ –&–æF–ærÒF†—2åö&–æF–æw5²f—'7EfÆ–D–æFW‚Ó°  ’òòæBöæÇ’6ÆÂævWEfÇVRöâF†Rf—'7@ ––b‚&–æF–ærÓÒVæFVf–æVB’&–æF–ærævWEfÇVR‚'&’Âöfg6WB“°  —Ð  —6WEfÇVR‚'&’Âöfg6WB’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’Òç6WEfÇVR‚'&’Âöfg6WB“°  —Ð  —Ð  –&–æB‚’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’Òæ&–æB‚“°  —Ð  —Ð  —Væ&–æB‚’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  –f÷"‚ÆWB’ÒF†—2å÷F&vWDw&÷Wæä66†VDö&¦V7G5òÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –&–æF–æw5²’ÒçVæ&–æB‚“°  —Ð  —Ð §Ð ¢òòæ÷FS¢F†—26Æ72W6W27FFRGFW&âöâW"ÖÖWF†öB&6—3 ¢òòv&–æBr6WG2wF†—2ævWEfÇVRròw6WEfÇVRræB6†F÷w2F†P¢òò&÷F÷G—RfW'6–öâöbF†W6RÖWF†öG2v—F‚öæRF†B&W&W6VçG0¢òòF†R&÷VæB7FFRâv†VâF†R&÷W'G’—2æ÷Bf÷VæBÂF†RÖWF†öG0¢òò&V6öÖRæòÖ÷2à  ¢ò¢ ¢¢F†—2†öÆG2&VfW&Væ6RFò&VÂ&÷W'G’–âF†R66VæRw&ƒ²W6VB–çFW&æÆÇ’à¢¢ð¦6Æ72&÷W'G”&–æF–ær°  ’ò¢  ’¢6öç7G'V7G2æWr&÷W'G’&–æF–ærà ’  ’¢&Ò´ö&¦V7GÒ&ö÷DæöFRÒF†R&ö÷BæöFRà ’¢&Ò·7G&–æwÒF‚ÒF†RF‚à ’¢&Ò³ôö&¦V7GÒ·'6VEF…ÒÒF†R'6VBF‚à ’¢ð –6öç7G'V7F÷"‚&ö÷DæöFRÂF‚Â'6VEF‚’°  ’ò¢  ’¢F†Rö&¦V7BF‚FòF†Ræ–ÖFVB&÷W'G’à ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2çF‚ÒFƒ°  ’ò¢  ’¢âö&¦V7B†öÆF–ær–æf÷&ÖF–öâ&÷WBF†RF‚à ’  ’¢G—R´ö&¦V7GÐ ’¢ð —F†—2ç'6VEF‚Ò'6VEF‚ÇÂ&÷W'G”&–æF–ærç'6UG&6´æÖR‚F‚“°  ’ò¢  ’¢F†Rö&¦V7B÷vç2F†Ræ–ÖFVB&÷W'G’à ’  ’¢G—R³ôö&¦V7GÐ ’¢ð —F†—2ææöFRÒ&÷W'G”&–æF–æræf–æDæöFR‚&ö÷DæöFRÂF†—2ç'6VEF‚ææöFTæÖR“°  ’ò¢  ’¢F†R&ö÷BæöFRà ’  ’¢G—R´ö&¦V7C4GÅ6¶VÆWFöçÐ ’¢ð —F†—2ç&ö÷DæöFRÒ&ö÷DæöFS°  ’òò–æ—F–Â7FFRöbF†W6RÖWF†öG2F†B6ÆÇ2v&–æBp —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væ&÷VæC° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væ&÷VæC°  —Ð   ’ò¢  ’¢f7F÷'’ÖWF†öBf÷"7&VF–ær&÷W'G’&–æF–ærg&öÒF†Rv—fVâ&ÖWFW'2à ’  ’¢7FF–0 ’¢&Ò´ö&¦V7GÒ&ö÷BÒF†R&ö÷BæöFRà ’¢&Ò·7G&–æwÒF‚ÒF†RF‚à ’¢&Ò³ôö&¦V7GÒ·'6VEF…ÒÒF†R'6VBF‚à ’¢&WGW&âµ&÷W'G”&–æF–æwÄ6ö×÷6—FWÒF†R7&VFVB&÷W'G’&–æF–ær÷"6ö×÷6—FRà ’¢ð —7FF–27&VFR‚&ö÷BÂF‚Â'6VEF‚’°  ––b‚‚&ö÷Bbb&ö÷Bæ—4æ–ÖF–öäö&¦V7Dw&÷W’’°  —&WGW&âæWr&÷W'G”&–æF–ær‚&ö÷BÂF‚Â'6VEF‚“°  —ÒVÇ6R°  —&WGW&âæWr&÷W'G”&–æF–ærä6ö×÷6—FR‚&ö÷BÂF‚Â'6VEF‚“°  —Ð  —Ð  ’ò¢  ’¢&WÆ6W276W2v—F‚VæFW'66÷&W2æB&VÖ÷fW2Vç7W÷'FVB6†&7FW'2g&öÐ ’¢æöFRæÖW2ÂFòVç7W&R6ö×F–&–Æ—G’v—F‚'6UG&6´æÖR‚’à ’  ’¢&Ò·7G&–æwÒæÖRÒæöFRæÖRFò&R6æ—F—¦VBà ’¢&WGW&â·7G&–æwÒF†R6æ—F—¦VBæöFRæÖRà ’¢ð —7FF–26æ—F—¦TæöFTæÖR‚æÖR’°  —&WGW&âæÖRç&WÆ6R‚õÇ2örÂuòr’ç&WÆ6R‚÷&W6W'fVE&RÂrr“°  —Ð  ’ò¢  ’¢'6W2F†Rv—fVâG&6²æÖR†âö&¦V7BF‚Fòâæ–ÖFVB&÷W'G’’æ@ ’¢&WGW&ç2âö&¦V7Bv—F‚–æf÷&ÖF–öâ&÷WBF†RF‚âÖF6†W27G&–æw2–âF†RföÆÆ÷v–ærf÷&×3  ’  ’¢ÒæöFTæÖRç&÷W'G ’¢ÒæöFTæÖRç&÷W'G•¶66W76÷%Ð ’¢ÒæöFTæÖRæÖFW&–Âç&÷W'G•¶66W76÷%Ð ’¢ÒWV–Bç&÷W'G•¶66W76÷%Ð ’¢ÒWV–Bæö&¦V7DæÖU¶ö&¦V7D–æFW…Òç&÷W'G”æÖU·&÷W'G”–æFW…Ð ’¢Ò&VçDæÖRöæöFTæÖRç&÷W'G ’¢Ò&VçDæÖR÷&VçDæÖRöæöFTæÖRç&÷W'G•¶–æFW…Ð ’¢Òæ&öæU´&ÖGW&RäDTeö6öuÒç÷6—F–öà ’¢Ò66VæS¦†VÆ—VÕö&ÆÆööåöÖöFVÃ¦†VÆ—VÕö&ÆÆööåöÖöFVÂç÷6—F–öà ’  ’¢7FF–0 ’¢&Ò·7G&–æwÒG&6´æÖRÒF†RG&6²æÖRFò'6Rà ’¢&WGW&â´ö&¦V7GÒF†R'6VBG&6²æÖR2âö&¦V7Bà ’¢ð —7FF–2'6UG&6´æÖR‚G&6´æÖR’°  –6öç7BÖF6†W2Ò÷G&6µ&RæW†V2‚G&6´æÖR“°  ––b‚ÖF6†W2ÓÓÒçVÆÂ’°  —F‡&÷ræWrW'&÷"‚u&÷W'G”&–æF–æs¢6ææ÷B'6RG&6´æÖS¢r²G&6´æÖR“°  —Ð  –6öç7B&W7VÇG2Ò° ’òòF—&V7F÷'”æÖS¢ÖF6†W5²ÒÂòò‡G66‡r’7W'&VçFÇ’VçW6V@ –æöFTæÖS¢ÖF6†W5²"ÒÀ –ö&¦V7DæÖS¢ÖF6†W5²2ÒÀ –ö&¦V7D–æFWƒ¢ÖF6†W5²BÒÀ —&÷W'G”æÖS¢ÖF6†W5²RÒÂòò&WV—&V@ —&÷W'G”–æFWƒ¢ÖF6†W5²bÐ —Ó°  –6öç7BÆ7DF÷BÒ&W7VÇG2ææöFTæÖRbb&W7VÇG2ææöFTæÖRæÆ7D–æFW„öb‚râr“°  ––b‚Æ7DF÷BÓÒVæFVf–æVBbbÆ7DF÷BÓÒÓ’°  –6öç7Bö&¦V7DæÖRÒ&W7VÇG2ææöFTæÖRç7V'7G&–ær‚Æ7DF÷B²“°  ’òòö&¦V7BæÖW2×W7B&R6†V6¶VBv–ç7BâÆÆ÷vÆ—7Bâ÷F†W'v—6RÂF†W&P ’òò—2æòv’Fò'6Rvföòæ&"æ&¢s¢v&¢r×W7B&R&÷W'G’Â'W@ ’òòv&"r6÷VÆB&RF†Rö&¦V7DæÖRÂ÷"'BöbæöFTæÖR‡v†–6‚6à ’òò–æ6ÇVFRrâr6†&7FW'2’à ––b‚÷7W÷'FVDö&¦V7DæÖW2æ–æFW„öb‚ö&¦V7DæÖR’ÓÒÓ’°  —&W7VÇG2ææöFTæÖRÒ&W7VÇG2ææöFTæÖRç7V'7G&–ær‚ÂÆ7DF÷B“° —&W7VÇG2æö&¦V7DæÖRÒö&¦V7DæÖS°  —Ð  —Ð  ––b‚&W7VÇG2ç&÷W'G”æÖRÓÓÒçVÆÂÇÂ&W7VÇG2ç&÷W'G”æÖRæÆVæwF‚ÓÓÒ’°  —F‡&÷ræWrW'&÷"‚u&÷W'G”&–æF–æs¢6âæ÷B'6R&÷W'G”æÖRg&öÒG&6´æÖS¢r²G&6´æÖR“°  —Ð  —&WGW&â&W7VÇG3°  —Ð  ’ò¢  ’¢6V&6†W2f÷"æöFR–âF†R†–W&&6‡’öbF†Rv—fVâ&ö÷Bö&¦V7B'’F†Rv—fVà ’¢æöFRæÖRà ’  ’¢7FF–0 ’¢&Ò´ö&¦V7GÒ&ö÷BÒF†R&ö÷Bö&¦V7Bà ’¢&Ò·7G&–æwÆçVÖ&W'ÒæöFTæÖRÒF†RæÖRöbF†RæöFRà ’¢&WGW&â³ôö&¦V7GÒF†Rf÷VæBæöFRâ&WGW&ç2çVÆÆ–bæòö&¦V7Bv2f÷VæBà ’¢ð —7FF–2f–æDæöFR‚&ö÷BÂæöFTæÖR’°  ––b‚æöFTæÖRÓÓÒVæFVf–æVBÇÂæöFTæÖRÓÓÒrrÇÂæöFTæÖRÓÓÒrârÇÂæöFTæÖRÓÓÒÓÇÂæöFTæÖRÓÓÒ&ö÷BææÖRÇÂæöFTæÖRÓÓÒ&ö÷BçWV–B’°  —&WGW&â&ö÷C°  —Ð  ’òò6V&6‚–çFò6¶VÆWFöâ&öæW2à ––b‚&ö÷Bç6¶VÆWFöâ’°  –6öç7B&öæRÒ&ö÷Bç6¶VÆWFöâævWD&öæT'”æÖR‚æöFTæÖR“°  ––b‚&öæRÓÒVæFVf–æVB’°  —&WGW&â&öæS°  —Ð  —Ð  ’òò6V&6‚–çFòæöFR7V'G&VRà ––b‚&ö÷Bæ6†–ÆG&Vâ’°  –6öç7B6V&6„æöFU7V'G&VRÒgVæ7F–öâ‚6†–ÆG&Vâ’°  –f÷"‚ÆWB’Ò²’Â6†–ÆG&VâæÆVæwFƒ²’²²’°  –6öç7B6†–ÆDæöFRÒ6†–ÆG&Vå²’Ó°  ––b‚6†–ÆDæöFRææÖRÓÓÒæöFTæÖRÇÂ6†–ÆDæöFRçWV–BÓÓÒæöFTæÖR’°  —&WGW&â6†–ÆDæöFS°  —Ð  –6öç7B&W7VÇBÒ6V&6„æöFU7V'G&VR‚6†–ÆDæöFRæ6†–ÆG&Vâ“°  ––b‚&W7VÇB’&WGW&â&W7VÇC°  —Ð  —&WGW&âçVÆÃ°  —Ó°  –6öç7B7V%G&VTæöFRÒ6V&6„æöFU7V'G&VR‚&ö÷Bæ6†–ÆG&Vâ“°  ––b‚7V%G&VTæöFR’°  —&WGW&â7V%G&VTæöFS°  —Ð  —Ð  —&WGW&âçVÆÃ°  —Ð  ’òòF†W6R&RW6VBFò&&–æB"æöæW†—7FVçB&÷W'G •övWEfÇVU÷Væf–Æ&ÆR‚’·Ð •÷6WEfÇVU÷Væf–Æ&ÆR‚’·Ð  ’òòvWGFW'0  •övWEfÇVUöF—&V7B‚'VffW"Âöfg6WB’°  –'VffW%²öfg6WBÒÒF†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÓ°  —Ð  •övWEfÇVUö'&’‚'VffW"Âöfg6WB’°  –6öç7B6÷W&6RÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒ6÷W&6RæÆVæwFƒ²’ÓÒã²²²’’°  –'VffW%²öfg6WB²²ÒÒ6÷W&6U²’Ó°  —Ð  —Ð  •övWEfÇVUö'&”VÆVÖVçB‚'VffW"Âöfg6WB’°  –'VffW%²öfg6WBÒÒF†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚Ó°  —Ð  •övWEfÇVU÷Fô'&’‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’çFô'&’‚'VffW"Âöfg6WB“°  —Ð  ’òòF—&V7@  •÷6WEfÇVUöF—&V7B‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ°  —Ð  •÷6WEfÇVUöF—&V7E÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUöF—&V7E÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2çF&vWDö&¦V7E²F†—2ç&÷W'G”æÖRÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òòVçF—&T'&  •÷6WEfÇVUö'&’‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —Ð  •÷6WEfÇVUö'&•÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUö'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  –6öç7BFW7BÒF†—2ç&W6öÇfVE&÷W'G“°  –f÷"‚ÆWB’ÒÂâÒFW7BæÆVæwFƒ²’ÓÒã²²²’’°  –FW7E²’ÒÒ'VffW%²öfg6WB²²Ó°  —Ð  —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òò'&”VÆVÖVç@  •÷6WEfÇVUö'&”VÆVÖVçB‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ°  —Ð  •÷6WEfÇVUö'&”VÆVÖVçE÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUö'&”VÆVÖVçE÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G•²F†—2ç&÷W'G”–æFW‚ÒÒ'VffW%²öfg6WBÓ° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  ’òò†5Fôg&öÔ'&  •÷6WEfÇVUög&öÔ'&’‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“°  —Ð  •÷6WEfÇVUög&öÔ'&•÷6WDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“° —F†—2çF&vWDö&¦V7BææVVG5WFFRÒG'VS°  —Ð  •÷6WEfÇVUög&öÔ'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFR‚'VffW"Âöfg6WB’°  —F†—2ç&W6öÇfVE&÷W'G’æg&öÔ'&’‚'VffW"Âöfg6WB“° —F†—2çF&vWDö&¦V7BæÖG&—…v÷&ÆDæVVG5WFFRÒG'VS°  —Ð  •övWEfÇVU÷Væ&÷VæB‚F&vWD'&’Âöfg6WB’°  —F†—2æ&–æB‚“° —F†—2ævWEfÇVR‚F&vWD'&’Âöfg6WB“°  —Ð  •÷6WEfÇVU÷Væ&÷VæB‚6÷W&6T'&’Âöfg6WB’°  —F†—2æ&–æB‚“° —F†—2ç6WEfÇVR‚6÷W&6T'&’Âöfg6WB“°  —Ð  ’ò¢  ’¢7&VFW2vWGFW"ò6WGFW"—"f÷"F†R&÷W'G’G&6¶VB'’F†—2&–æF–ærà ’¢ð –&–æB‚’°  –ÆWBF&vWDö&¦V7BÒF†—2ææöFS° –6öç7B'6VEF‚ÒF†—2ç'6VEFƒ°  –6öç7Bö&¦V7DæÖRÒ'6VEF‚æö&¦V7DæÖS° –6öç7B&÷W'G”æÖRÒ'6VEF‚ç&÷W'G”æÖS° –ÆWB&÷W'G”–æFW‚Ò'6VEF‚ç&÷W'G”–æFWƒ°  ––b‚F&vWDö&¦V7B’°  —F&vWDö&¦V7BÒ&÷W'G”&–æF–æræf–æDæöFR‚F†—2ç&ö÷DæöFRÂ'6VEF‚ææöFTæÖR“°  —F†—2ææöFRÒF&vWDö&¦V7C°  —Ð  ’òò6WBf–Â7FFR6òvR6â§W7Bw&WGW&âröâW'&÷  —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væf–Æ&ÆS° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væf–Æ&ÆS°  ’òòVç7W&RF†W&R—2fÇVRæöFP ––b‚F&vWDö&¦V7B’°  –6öç6öÆRçv&â‚uD…$TRå&÷W'G”&–æF–æs¢æòF&vWBæöFRf÷VæBf÷"G&6³¢r²F†—2çF‚²râr“° —&WGW&ã°  —Ð  ––b‚ö&¦V7DæÖR’°  –ÆWBö&¦V7D–æFW‚Ò'6VEF‚æö&¦V7D–æFWƒ°  ’òò7V6–Â66W2vW&RvRæVVBFò&V6‚FVWW"–çFòF†R†–W&&6‡’FòvWBF†Rf6RÖFW&–Ç2âââà —7v—F6‚‚ö&¦V7DæÖR’°  –66RvÖFW&–Ç2s   ––b‚F&vWDö&¦V7BæÖFW&–Â’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–Â2æöFRFöW2æ÷B†fRÖFW&–ÂârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–ÂæÖFW&–Ç2’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–ÂæÖFW&–Ç22æöFRæÖFW&–ÂFöW2æ÷B†fRÖFW&–Ç2'&’ârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖFW&–ÂæÖFW&–Ç3°  –'&V³°  –66Rv&öæW2s   ––b‚F&vWDö&¦V7Bç6¶VÆWFöâ’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFò&öæW22æöFRFöW2æ÷B†fR6¶VÆWFöâârÂF†—2“° —&WGW&ã°  —Ð  ’òò÷FVçF–ÂgWGW&R÷F–Ö—¦F–öã¢6¶—F†—2–b&÷W'G”–æFW‚—2Ç&VG’â–çFVvW  ’òòæB6öçfW'BF†R–çFVvW"7G&–ærFòG'VR–çFVvW"à  —F&vWDö&¦V7BÒF&vWDö&¦V7Bç6¶VÆWFöâæ&öæW3°  ’òò7W÷'B&W6öÇf–ærÖ÷'…F&vWBæÖW2–çFò–æF–6W2à –f÷"‚ÆWB’Ò²’ÂF&vWDö&¦V7BæÆVæwFƒ²’²²’°  ––b‚F&vWDö&¦V7E²’ÒææÖRÓÓÒö&¦V7D–æFW‚’°  –ö&¦V7D–æFW‚Ò“° –'&V³°  —Ð  —Ð  –'&V³°  –66RvÖs   ––b‚vÖr–âF&vWDö&¦V7B’°  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖ° –'&V³°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–Â’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–Â2æöFRFöW2æ÷B†fRÖFW&–ÂârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖFW&–ÂæÖ’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖFW&–ÂæÖ2æöFRæÖFW&–ÂFöW2æ÷B†fRÖârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7BæÖFW&–ÂæÖ° –'&V³°  –FVfVÇC   ––b‚F&vWDö&¦V7E²ö&¦V7DæÖRÒÓÓÒVæFVf–æVB’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòö&¦V7DæÖRöbæöFRVæFVf–æVBârÂF†—2“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7E²ö&¦V7DæÖRÓ°  —Ð   ––b‚ö&¦V7D–æFW‚ÓÒVæFVf–æVB’°  ––b‚F&vWDö&¦V7E²ö&¦V7D–æFW‚ÒÓÓÒVæFVf–æVB’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢G'––ærFò&–æBFòö&¦V7D–æFW‚öbö&¦V7DæÖRÂ'WB—2VæFVf–æVBârÂF†—2ÂF&vWDö&¦V7B“° —&WGW&ã°  —Ð  —F&vWDö&¦V7BÒF&vWDö&¦V7E²ö&¦V7D–æFW‚Ó°  —Ð  —Ð  ’òò&W6öÇfR&÷W'G –6öç7BæöFU&÷W'G’ÒF&vWDö&¦V7E²&÷W'G”æÖRÓ°  ––b‚æöFU&÷W'G’ÓÓÒVæFVf–æVB’°  –6öç7BæöFTæÖRÒ'6VEF‚ææöFTæÖS°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢G'––ærFòWFFR&÷W'G’f÷"G&6³¢r²æöFTæÖR° ’râr²&÷W'G”æÖR²r'WB—Bv6åÂwBf÷VæBârÂF&vWDö&¦V7B“° —&WGW&ã°  —Ð  ’òòFWFW&Ö–æRfW'6–öæ–ær66†VÖP –ÆWBfW'6–öæ–ærÒF†—2åfW'6–öæ–æräæöæS°  —F†—2çF&vWDö&¦V7BÒF&vWDö&¦V7C°  ––b‚F&vWDö&¦V7Bæ—4ÖFW&–ÂÓÓÒG'VR’°  —fW'6–öæ–ærÒF†—2åfW'6–öæ–æräæVVG5WFFS°  —ÒVÇ6R–b‚F&vWDö&¦V7Bæ—4ö&¦V7C4BÓÓÒG'VR’°  —fW'6–öæ–ærÒF†—2åfW'6–öæ–æräÖG&—…v÷&ÆDæVVG5WFFS°  —Ð  ’òòFWFW&Ö–æR†÷rF†R&÷W'G’vWG2&÷Væ@ –ÆWB&–æF–æuG—RÒF†—2ä&–æF–æuG—RäF—&V7C°  ––b‚&÷W'G”–æFW‚ÓÒVæFVf–æVB’°  ’òò66W727V"VÆVÖVçBöbF†R&÷W'G’'&’†öæÇ’&–Ö—F—fW2&R7W÷'FVB&–v‡Bæ÷r  ––b‚&÷W'G”æÖRÓÓÒvÖ÷'…F&vWD–æfÇVVæ6W2r’°  ’òò÷FVçF–Â÷F–Ö—¦F–öâÂ6¶—F†—2–b&÷W'G”–æFW‚—2Ç&VG’â–çFVvW"ÂæB6öçfW'BF†R–çFVvW"7G&–ærFòG'VR–çFVvW"à  ’òò7W÷'B&W6öÇf–ærÖ÷'…F&vWBæÖW2–çFò–æF–6W2à ––b‚F&vWDö&¦V7BævVöÖWG'’’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖ÷'…F&vWD–æfÇVVæ6W2&V6W6RæöFRFöW2æ÷B†fRvVöÖWG'’ârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BævVöÖWG'’æÖ÷'„GG&–'WFW2’°  –6öç6öÆRæW'&÷"‚uD…$TRå&÷W'G”&–æF–æs¢6âæ÷B&–æBFòÖ÷'…F&vWD–æfÇVVæ6W2&V6W6RæöFRFöW2æ÷B†fRvVöÖWG'’æÖ÷'„GG&–'WFW2ârÂF†—2“° —&WGW&ã°  —Ð  ––b‚F&vWDö&¦V7BæÖ÷'…F&vWDF–7F–öæ'•²&÷W'G”–æFW‚ÒÓÒVæFVf–æVB’°  —&÷W'G”–æFW‚ÒF&vWDö&¦V7BæÖ÷'…F&vWDF–7F–öæ'•²&÷W'G”–æFW‚Ó°  —Ð  —Ð  –&–æF–æuG—RÒF†—2ä&–æF–æuG—Rä'&”VÆVÖVçC°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“° —F†—2ç&÷W'G”–æFW‚Ò&÷W'G”–æFWƒ°  —ÒVÇ6R–b‚æöFU&÷W'G’æg&öÔ'&’ÓÒVæFVf–æVBbbæöFU&÷W'G’çFô'&’ÓÒVæFVf–æVB’°  ’òò×W7BW6R6÷’f÷"ö&¦V7C4BäWVÆW"õVFW&æ–öà  –&–æF–æuG—RÒF†—2ä&–æF–æuG—Rä†4g&öÕFô'&“°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“°  —ÒVÇ6R–b‚'&’æ—4'&’‚æöFU&÷W'G’’’°  –&–æF–æuG—RÒF†—2ä&–æF–æuG—RäVçF—&T'&“°  —F†—2ç&W6öÇfVE&÷W'G’ÒæöFU&÷W'G“°  —ÒVÇ6R°  —F†—2ç&÷W'G”æÖRÒ&÷W'G”æÖS°  —Ð  ’òò6VÆV7BvWGFW"ò6WGFW  —F†—2ævWEfÇVRÒF†—2ävWGFW$'”&–æF–æuG—U²&–æF–æuG—RÓ° —F†—2ç6WEfÇVRÒF†—2å6WGFW$'”&–æF–æuG—TæEfW'6–öæ–æu²&–æF–æuG—RÕ²fW'6–öæ–ærÓ°  —Ð  ’ò¢  ’¢Væ&–æG2F†R&÷W'G’à ’¢ð —Væ&–æB‚’°  —F†—2ææöFRÒçVÆÃ°  ’òò&6²FòF†R&÷F÷G—RfW'6–öâöbvWEfÇVRò6WEfÇVP ’òòæ÷FS¢fö–F–ærFò×WFFRF†R6†RöbwF†—2rf–vFVÆWFRp —F†—2ævWEfÇVRÒF†—2åövWEfÇVU÷Væ&÷VæC° —F†—2ç6WEfÇVRÒF†—2å÷6WEfÇVU÷Væ&÷VæC°  —Ð §Ð ¥&÷W'G”&–æF–ærä6ö×÷6—FRÒ6ö×÷6—FS° ¥&÷W'G”&–æF–ærç&÷F÷G—Rä&–æF–æuG—RÒ° ”F—&V7C¢À ”VçF—&T'&“¢À ”'&”VÆVÖVçC¢"À ”†4g&öÕFô'&“¢0§Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—RåfW'6–öæ–ærÒ° ”æöæS¢À ”æVVG5WFFS¢À ”ÖG&—…v÷&ÆDæVVG5WFFS¢ §Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—RävWGFW$'”&–æF–æuG—RÒ°  •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUöF—&V7BÀ •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUö'&’À •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVUö'&”VÆVÖVçBÀ •&÷W'G”&–æF–ærç&÷F÷G—RåövWEfÇVU÷Fô'&’À ¥Ó° ¥&÷W'G”&–æF–ærç&÷F÷G—Rå6WGFW$'”&–æF–æuG—TæEfW'6–öæ–ærÒ°  •° ’òòF—&V7@ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7BÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7E÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUöF—&V7E÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òòVçF—&T'&  •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&’À •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&•÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òò'&”VÆVÖVç@ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçBÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçE÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUö'&”VÆVÖVçE÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •ÒÂ°  ’òò†5Fôg&öÔ'& •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&’À •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&•÷6WDæVVG5WFFRÀ •&÷W'G”&–æF–ærç&÷F÷G—Rå÷6WEfÇVUög&öÔ'&•÷6WDÖG&—…v÷&ÆDæVVG5WFFRÀ  •Ð ¥Ó° ¢ò¢ ¢¢w&÷Wöbö&¦V7G2F†B&V6V—fW26†&VBæ–ÖF–öâ7FFRà¢ ¢¢W6vS ¢ ¢¢ÒFBö&¦V7G2–÷Rv÷VÆB÷F†W'v—6R722w&ö÷BrFòF†P¢¢6öç7G'V7F÷"÷"F†Ræ6Æ—7F–öâÖWF†öBöbæ–ÖF–öäÖ—†W"à¢¢Ò–ç7FVB72F†—2ö&¦V7B2w&ö÷Brà¢¢Ò–÷R6âÇ6òFBæB&VÖ÷fRö&¦V7G2ÆFW"v†VâF†RÖ—†W"—2'Vææ–ærà¢ ¢¢æ÷FS ¢ ¢¢Òö&¦V7G2öbF†—26Æ72V"2öæRö&¦V7BFòF†RÖ—†W"À¢¢6ò66†R6öçG&öÂöbF†R–æF—f–GVÂö&¦V7G2×W7B&RFöæRöâF†Rw&÷Wà¢ ¢¢Æ–Ö—FF–öã ¢ ¢¢ÒF†Ræ–ÖFVB&÷W'F–W2×W7B&R6ö×F–&ÆRÖöærF†RÆÂö&¦V7G2–âF†Rw&÷Wà¢¢Ò6–ævÆR&÷W'G’6âV—F†W"&R6öçG&öÆÆVBF‡&÷Vv‚F&vWBw&÷W÷"F—&V7FÇ’Â'WBæ÷B&÷F‚à¢¢ð¦6Æ72æ–ÖF–öäö&¦V7Dw&÷W°  ’ò¢  ’¢6öç7G'V7G2æWræ–ÖF–öâw&÷Wà ’  ’¢&Ò²ââäö&¦V7C4GÒ&wVÖVçG2Òâ&&—G&'’çVÖ&W"öb4Bö&¦V7G2F†B6†&RF†R6ÖRæ–ÖF–öâ7FFRà ’¢ð –6öç7G'V7F÷"‚’°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4æ–ÖF–öäö&¦V7Dw&÷WÒG'VS°  ’ò¢  ’¢F†RUT”BöbF†R4Bö&¦V7Bà ’  ’¢G—R·7G&–æwÐ ’¢&VFöæÇ ’¢ð —F†—2çWV–BÒvVæW&FUUT”B‚“°  ’òò66†VBö&¦V7G2föÆÆ÷vVB'’F†R7F—fRöæW0 —F†—2åöö&¦V7G2Ò'&’ç&÷F÷G—Rç6Æ–6Ræ6ÆÂ‚&wVÖVçG2“°  —F†—2æä66†VDö&¦V7G5òÒ²òòF‡&W6†öÆ@ ’òòæ÷FS¢&VB'’&÷W'G”&–æF–ærä6ö×÷6—FP  –6öç7B–æF–6W2Ò·Ó° —F†—2åö–æF–6W4'•UT”BÒ–æF–6W3²òòf÷"&öö¶¶VW–æp  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  ––æF–6W5²&wVÖVçG5²’ÒçWV–BÒÒ“°  —Ð  —F†—2å÷F‡2ÒµÓ²òò–ç6–FS¢7G&–æp —F†—2å÷'6VEF‡2ÒµÓ²òò–ç6–FS¢²vRFöâwB6&RÂ†W&RÐ —F†—2åö&–æF–æw2ÒµÓ²òò–ç6–FS¢'&“Â&÷W'G”&–æF–ærà —F†—2åö&–æF–æw4–æF–6W4'•F‚Ò·Ó²òò–ç6–FS¢–æF–6W2–âF†W6R'&—0  –6öç7B66÷RÒF†—3°  —F†—2ç7FG2Ò°  –ö&¦V7G3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råöö&¦V7G2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&âF†—2çF÷FÂÒ66÷Ræä66†VDö&¦V7G5ó°  —Ð —ÒÀ –vWB&–æF–æw5W$ö&¦V7B‚’°  —&WGW&â66÷Råö&–æF–æw2æÆVæwFƒ°  —Ð  —Ó°  —Ð  ’ò¢  ’¢FG2â&&—G&'’çVÖ&W"öbö&¦V7G2FòF†—2æ–ÖF–öâw&÷Wà ’  ’¢&Ò²ââäö&¦V7C4GÒ&wVÖVçG2ÒF†R4Bö&¦V7G2FòFBà ’¢ð –FB‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ —F‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWB¶æ÷väö&¦V7BÒVæFVf–æVBÀ –äö&¦V7G2Òö&¦V7G2æÆVæwF‚À –ä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5ó°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–C° –ÆWB–æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÓÒVæFVf–æVB’°  ’òòVæ¶æ÷vâö&¦V7BÓâFB—BFòF†R5D•dR&Vv–öà  ––æFW‚Òäö&¦V7G2²³° ––æF–6W4'•UT”E²WV–BÒÒ–æFWƒ° –ö&¦V7G2çW6‚‚ö&¦V7B“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –&–æF–æw5²¢ÒçW6‚‚æWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‡5²¢ÒÂ'6VEF‡5²¢Ò’“°  —Ð  —ÒVÇ6R–b‚–æFW‚Âä66†VDö&¦V7G2’°  –¶æ÷väö&¦V7BÒö&¦V7G5²–æFW‚Ó°  ’òòÖ÷fRW†—7F–ærö&¦V7BFòF†R5D•dR&Vv–öà  –6öç7Bf—'7D7F—fT–æFW‚ÒÒÒä66†VDö&¦V7G2À –Æ7D66†VDö&¦V7BÒö&¦V7G5²f—'7D7F—fT–æFW‚Ó°  ––æF–6W4'•UT”E²Æ7D66†VDö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒÆ7D66†VDö&¦V7C°  ––æF–6W4'•UT”E²WV–BÒÒf—'7D7F—fT–æFWƒ° –ö&¦V7G5²f—'7D7F—fT–æFW‚ÒÒö&¦V7C°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –Æ7D66†VBÒ&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚Ó°  –ÆWB&–æF–ærÒ&–æF–æw4f÷%F…²–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒÆ7D66†VC°  ––b‚&–æF–ærÓÓÒVæFVf–æVB’°  ’òò6–æ6RvRFòæ÷B&÷F†W"Fò7&VFRæWr&–æF–æw0 ’òòf÷"ö&¦V7G2F†B&R66†VBÂF†R&–æF–ærÖ ’òò÷"Ö’æ÷BW†—7@  –&–æF–ærÒæWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‡5²¢ÒÂ'6VEF‡5²¢Ò“°  —Ð  –&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÒ&–æF–æs°  —Ð  —ÒVÇ6R–b‚ö&¦V7G5²–æFW‚ÒÓÒ¶æ÷väö&¦V7B’°  –6öç6öÆRæW'&÷"‚uD…$TRäæ–ÖF–öäö&¦V7Dw&÷W¢F–ffW&VçBö&¦V7G2v—F‚F†R6ÖRUT”Br° ’vFWFV7FVBâ6ÆVâF†R66†W2÷"&V7&VFR–÷W"–æg&7G'V7GW&Rv†Vâ&VÆöF–ær66VæW2âr“°  —ÒòòVÇ6RF†Rö&¦V7B—2Ç&VG’v†W&RvRvçB—BFò&P  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  ’ò¢  ’¢&VÖ÷fW2â&&—G&'’çVÖ&W"öbö&¦V7G2FòF†—2æ–ÖF–öâw&÷W  ’  ’¢&Ò²ââäö&¦V7C4GÒ&wVÖVçG2ÒF†R4Bö&¦V7G2Fò&VÖ÷fRà ’¢ð —&VÖ÷fR‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWBä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5ó°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–BÀ ––æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÒVæFVf–æVBbb–æFW‚ãÒä66†VDö&¦V7G2’°  ’òòÖ÷fRW†—7F–ærö&¦V7B–çFòF†R44„TB&Vv–öà  –6öç7BÆ7D66†VD–æFW‚Òä66†VDö&¦V7G2²²À –f—'7D7F—fTö&¦V7BÒö&¦V7G5²Æ7D66†VD–æFW‚Ó°  ––æF–6W4'•UT”E²f—'7D7F—fTö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒf—'7D7F—fTö&¦V7C°  ––æF–6W4'•UT”E²WV–BÒÒÆ7D66†VD–æFWƒ° –ö&¦V7G5²Æ7D66†VD–æFW‚ÒÒö&¦V7C°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –f—'7D7F—fRÒ&–æF–æw4f÷%F…²Æ7D66†VD–æFW‚ÒÀ –&–æF–ærÒ&–æF–æw4f÷%F…²–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒf—'7D7F—fS° –&–æF–æw4f÷%F…²Æ7D66†VD–æFW‚ÒÒ&–æF–æs°  —Ð  —Ð  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  ’ò¢  ’¢FVÆÆö6FW2ÆÂÖVÖ÷'’&W6÷W&6W2f÷"F†R76VB4Bö&¦V7G2öbF†—2æ–ÖF–öâw&÷Wà ’  ’¢&Ò²ââäö&¦V7C4GÒ&wVÖVçG2ÒF†R4Bö&¦V7G2FòVæ66†Rà ’¢ð —Væ66†R‚’°  –6öç7Bö&¦V7G2ÒF†—2åöö&¦V7G2À ––æF–6W4'•UT”BÒF†—2åö–æF–6W4'•UT”BÀ –&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2Ò&–æF–æw2æÆVæwFƒ°  –ÆWBä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5òÀ –äö&¦V7G2Òö&¦V7G2æÆVæwFƒ°  –f÷"‚ÆWB’ÒÂâÒ&wVÖVçG2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒ&wVÖVçG5²’ÒÀ —WV–BÒö&¦V7BçWV–BÀ ––æFW‚Ò–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –FVÆWFR–æF–6W4'•UT”E²WV–BÓ°  ––b‚–æFW‚Âä66†VDö&¦V7G2’°  ’òòö&¦V7B—266†VBÂ6‡&–æ²F†R44„TB&Vv–öà  –6öç7Bf—'7D7F—fT–æFW‚ÒÒÒä66†VDö&¦V7G2À –Æ7D66†VDö&¦V7BÒö&¦V7G5²f—'7D7F—fT–æFW‚ÒÀ –Æ7D–æFW‚ÒÒÒäö&¦V7G2À –Æ7Dö&¦V7BÒö&¦V7G5²Æ7D–æFW‚Ó°  ’òòÆ7B66†VBö&¦V7BF¶W2F†—2ö&¦V7Bw2Æ6P ––æF–6W4'•UT”E²Æ7D66†VDö&¦V7BçWV–BÒÒ–æFWƒ° –ö&¦V7G5²–æFW‚ÒÒÆ7D66†VDö&¦V7C°  ’òòÆ7Bö&¦V7BvöW2FòF†R7F—fFVB6Æ÷BæB÷  ––æF–6W4'•UT”E²Æ7Dö&¦V7BçWV–BÒÒf—'7D7F—fT–æFWƒ° –ö&¦V7G5²f—'7D7F—fT–æFW‚ÒÒÆ7Dö&¦V7C° –ö&¦V7G2ç÷‚“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢ÒÀ –Æ7D66†VBÒ&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÀ –Æ7BÒ&–æF–æw4f÷%F…²Æ7D–æFW‚Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒÆ7D66†VC° –&–æF–æw4f÷%F…²f—'7D7F—fT–æFW‚ÒÒÆ7C° –&–æF–æw4f÷%F‚ç÷‚“°  —Ð  —ÒVÇ6R°  ’òòö&¦V7B—27F—fRÂ§W7B7vv—F‚F†RÆ7BæB÷   –6öç7BÆ7D–æFW‚ÒÒÒäö&¦V7G2À –Æ7Dö&¦V7BÒö&¦V7G5²Æ7D–æFW‚Ó°  ––b‚Æ7D–æFW‚â’°  ––æF–6W4'•UT”E²Æ7Dö&¦V7BçWV–BÒÒ–æFWƒ°  —Ð  –ö&¦V7G5²–æFW‚ÒÒÆ7Dö&¦V7C° –ö&¦V7G2ç÷‚“°  ’òò66÷VçF–ær—2FöæRÂæ÷rFòF†R6ÖRf÷"ÆÂ&–æF–æw0  –f÷"‚ÆWB¢ÒÂÒÒä&–æF–æw3²¢ÓÒÓ²²²¢’°  –6öç7B&–æF–æw4f÷%F‚Ò&–æF–æw5²¢Ó°  –&–æF–æw4f÷%F…²–æFW‚ÒÒ&–æF–æw4f÷%F…²Æ7D–æFW‚Ó° –&–æF–æw4f÷%F‚ç÷‚“°  —Ð  —Òòò66†VB÷"7F—fP  —Òòò–bö&¦V7B—2¶æ÷và  —Òòòf÷"&wVÖVçG0  —F†—2æä66†VDö&¦V7G5òÒä66†VDö&¦V7G3°  —Ð  ’òò–çFW&æÂ–çFW&f6RW6VB'’&Vg&–VæFVB&÷W'G”&–æF–ærä6ö×÷6—FS   —7V'67&–&Uò‚F‚Â'6VEF‚’°  ’òò&WGW&ç2â'&’öb&–æF–æw2f÷"F†Rv—fVâF‚F†B—26†ævV@ ’òò66÷&F–ærFòF†R6öçF–æVBö&¦V7G2–âF†Rw&÷W   –6öç7B–æF–6W4'•F‚ÒF†—2åö&–æF–æw4–æF–6W4'•Fƒ° –ÆWB–æFW‚Ò–æF–6W4'•F…²F‚Ó° –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw3°  ––b‚–æFW‚ÓÒVæFVf–æVB’&WGW&â&–æF–æw5²–æFW‚Ó°  –6öç7BF‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –ö&¦V7G2ÒF†—2åöö&¦V7G2À –äö&¦V7G2Òö&¦V7G2æÆVæwF‚À –ä66†VDö&¦V7G2ÒF†—2æä66†VDö&¦V7G5òÀ –&–æF–æw4f÷%F‚ÒæWr'&’‚äö&¦V7G2“°  ––æFW‚Ò&–æF–æw2æÆVæwFƒ°  ––æF–6W4'•F…²F‚ÒÒ–æFWƒ°  —F‡2çW6‚‚F‚“° —'6VEF‡2çW6‚‚'6VEF‚“° –&–æF–æw2çW6‚‚&–æF–æw4f÷%F‚“°  –f÷"‚ÆWB’Òä66†VDö&¦V7G2ÂâÒö&¦V7G2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7Bö&¦V7BÒö&¦V7G5²’Ó° –&–æF–æw4f÷%F…²’ÒÒæWr&÷W'G”&–æF–ær‚ö&¦V7BÂF‚Â'6VEF‚“°  —Ð  —&WGW&â&–æF–æw4f÷%Fƒ°  —Ð  —Vç7V'67&–&Uò‚F‚’°  ’òòFVÆÇ2F†Rw&÷WFòf÷&vWB&÷WB&÷W'G’F‚æBæòÆöævW  ’òòWFFRF†R'&’&Wf–÷W6Ç’ö'F–æVBv—F‚w7V'67&–&Uòp  –6öç7B–æF–6W4'•F‚ÒF†—2åö&–æF–æw4–æF–6W4'•F‚À ––æFW‚Ò–æF–6W4'•F…²F‚Ó°  ––b‚–æFW‚ÓÒVæFVf–æVB’°  –6öç7BF‡2ÒF†—2å÷F‡2À —'6VEF‡2ÒF†—2å÷'6VEF‡2À –&–æF–æw2ÒF†—2åö&–æF–æw2À –Æ7D&–æF–æw4–æFW‚Ò&–æF–æw2æÆVæwF‚ÒÀ –Æ7D&–æF–æw2Ò&–æF–æw5²Æ7D&–æF–æw4–æFW‚ÒÀ –Æ7D&–æF–æw5F‚ÒF…²Æ7D&–æF–æw4–æFW‚Ó°  ––æF–6W4'•F…²Æ7D&–æF–æw5F‚ÒÒ–æFWƒ°  –&–æF–æw5²–æFW‚ÒÒÆ7D&–æF–æw3° –&–æF–æw2ç÷‚“°  —'6VEF‡5²–æFW‚ÒÒ'6VEF‡5²Æ7D&–æF–æw4–æFW‚Ó° —'6VEF‡2ç÷‚“°  —F‡5²–æFW‚ÒÒF‡5²Æ7D&–æF–æw4–æFW‚Ó° —F‡2ç÷‚“°  —Ð  —Ð §Ð ¢ò¢ ¢¢â–ç7Fæ6Röbæ–ÖF–öä7F–öæ66†VGVÆW2F†RÆ–&6²öbâæ–ÖF–öâv†–6‚—0¢¢7F÷&VB–â´Æ–æ²æ–ÖF–öä6Æ—Òà¢¢ð¦6Æ72æ–ÖF–öä7F–öâ°  ’ò¢  ’¢6öç7G'V7G2æWræ–ÖF–öâ7F–öâà ’  ’¢&Ò´æ–ÖF–öäÖ—†W'ÒÖ—†W"ÒF†RÖ—†W"F†B—26öçG&öÆÆVB'’F†—27F–öâà ’¢&Ò´æ–ÖF–öä6Æ—Ò6Æ—ÒF†Ræ–ÖF–öâ6Æ—F†B†öÆG2F†R7GVÂ¶W–g&ÖW2à ’¢&Ò³ôö&¦V7C4GÒ¶Æö6Å&ö÷CÖçVÆÅÒÒF†R&ö÷Bö&¦V7Böâv†–6‚F†—27F–öâ—2W&f÷&ÖVBà ’¢&Ò²„æ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFWÄFF—F—fTæ–ÖF–öä&ÆVæDÖöFR—Ò¶&ÆVæDÖöFUÒÒF†R&ÆVæBÖöFRà ’¢ð –6öç7G'V7F÷"‚Ö—†W"Â6Æ—ÂÆö6Å&ö÷BÒçVÆÂÂ&ÆVæDÖöFRÒ6Æ—æ&ÆVæDÖöFR’°  —F†—2åöÖ—†W"ÒÖ—†W#° —F†—2åö6Æ—Ò6Æ—° —F†—2åöÆö6Å&ö÷BÒÆö6Å&ö÷C°  ’ò¢  ’¢FVf–æW2†÷rF†Ræ–ÖF–öâ—2&ÆVæFVBö6öÖ&–æVBv†VâGvò÷"Ö÷&Ræ–ÖF–öç0 ’¢&R6–×VÇFæV÷W6Ç’Æ–VBà ’  ’¢G—R²„æ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFWÄFF—F—fTæ–ÖF–öä&ÆVæDÖöFR—Ð ’¢ð —F†—2æ&ÆVæDÖöFRÒ&ÆVæDÖöFS°  –6öç7BG&6·2Ò6Æ—çG&6·2À –åG&6·2ÒG&6·2æÆVæwF‚À ––çFW'öÆçG2ÒæWr'&’‚åG&6·2“°  –6öç7B–çFW'öÆçE6WGF–æw2Ò° –VæF–æu7F'C¢¦W&ô7W'fGW&TVæF–ærÀ –VæF–ætVæC¢¦W&ô7W'fGW&TVæF–æp —Ó°  –f÷"‚ÆWB’Ò²’ÓÒåG&6·3²²²’’°  –6öç7B–çFW'öÆçBÒG&6·5²’Òæ7&VFT–çFW'öÆçB‚çVÆÂ“° ––çFW'öÆçG5²’ÒÒ–çFW'öÆçC° ––çFW'öÆçBç6WGF–æw2Ò–çFW'öÆçE6WGF–æw3°  —Ð  —F†—2åö–çFW'öÆçE6WGF–æw2Ò–çFW'öÆçE6WGF–æw3°  —F†—2åö–çFW'öÆçG2Ò–çFW'öÆçG3²òò&÷VæB'’F†RÖ—†W   ’òò–ç6–FS¢&÷W'G”Ö—†W"†ÖævVB'’F†RÖ—†W" —F†—2å÷&÷W'G”&–æF–æw2ÒæWr'&’‚åG&6·2“°  —F†—2åö66†T–æFW‚ÒçVÆÃ²òòf÷"F†RÖVÖ÷'’ÖævW  —F†—2åö'”6Æ—66†T–æFW‚ÒçVÆÃ²òòf÷"F†RÖVÖ÷'’ÖævW   —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒçVÆÃ° —F†—2å÷vV–v‡D–çFW'öÆçBÒçVÆÃ°  ’ò¢  ’¢F†RÆö÷ÖöFRÂ6WBf–´Æ–æ²æ–ÖF–öä7F–öâ76WDÆö÷Òà ’  ’¢G—R²„Æö÷&WVGÄÆö÷öæ6WÄÆö÷–æuöær—Ð ’¢FVfVÇBÆö÷&WV@ ’¢ð —F†—2æÆö÷ÒÆö÷&WVC° —F†—2åöÆö÷6÷VçBÒÓ°  ’òòvÆö&ÂÖ—†W"F–ÖRv†VâF†R7F–öâ—2Fò&R7F'FV@ ’òò—Bw26WB&6²FòvçVÆÂrWöâ7F'BöbF†R7F–öà —F†—2å÷7F'EF–ÖRÒçVÆÃ°  ’ò¢  ’¢F†RÆö6ÂF–ÖRöbF†—27F–öâ†–â6V6öæG2Â7F'F–ærv—F‚’à ’  ’¢F†RfÇVRvWG26Æ×VB÷"w&VBFò³Æ6Æ—æGW&F–öåÖ†66÷&F–ærFòF†P ’¢Æö÷7FFR’à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB–æf–æ—G ’¢ð —F†—2çF–ÖRÒ°  ’ò¢  ’¢66Æ–ærf7F÷"f÷"F†R´Æ–æ²æ–ÖF–öä7F–öâ7F–ÖWÒâfÇVRöb6W6W2F†P ’¢æ–ÖF–öâFòW6RâæVvF—fRfÇVW26W6RF†Ræ–ÖF–öâFòÆ’&6·v&G2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2çF–ÖU66ÆRÒ° —F†—2åöVffV7F—fUF–ÖU66ÆRÒ°  ’ò¢  ’¢F†RFVw&VRöb–æfÇVVæ6RöbF†—27F–öâ†–âF†R–çFW'fÂ³ÂÖ’âfÇVW0 ’¢&WGvVVâ†æò–×7B’æB†gVÆÂ–×7B’6â&RW6VBFò&ÆVæB&WGvVVà ’¢6WfW&Â7F–öç2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2çvV–v‡BÒ° —F†—2åöVffV7F—fUvV–v‡BÒ°  ’ò¢  ’¢F†RçVÖ&W"öb&WWF—F–öç2öbF†RW&f÷&ÖVB6Æ—÷fW"F†R6÷W'6RöbF†—27F–öâà ’¢6â&R6WBf–´Æ–æ²æ–ÖF–öä7F–öâ76WDÆö÷Òà ’  ’¢6WGF–ærF†—2çVÖ&W"†2æòVffV7B–b´Æ–æ²æ–ÖF–öä7F–öâ6Æö÷Ò—26WBFð ’¢D…$TS¤Æö÷öæ6Và ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB–æf–æ—G ’¢ð —F†—2ç&WWF—F–öç2Ò–æf–æ—G“°  ’ò¢  ’¢–b6WBFòG'VVÂF†RÆ–&6²öbF†R7F–öâ—2W6VBà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð —F†—2çW6VBÒfÇ6S°  ’ò¢  ’¢–b6WBFòfÇ6VÂF†R7F–öâ—2F—6&ÆVB6ò—B†2æò–×7Bà ’  ’¢v†VâF†R7F–öâ—2&RÖVæ&ÆVBÂF†Ræ–ÖF–öâ6öçF–çVW2g&öÒ—G27W'&Vç@ ’¢F–ÖR‡6WGF–ærVæ&ÆVFFòfÇ6VFöW6âwB&W6WBF†R7F–öâ’à ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2æVæ&ÆVBÒG'VS°  ’ò¢  ’¢–b6WBFòG'VRF†Ræ–ÖF–öâv–ÆÂWFöÖF–6ÆÇ’&RW6VBöâ—G2Æ7Bg&ÖRà ’  ’¢–b6WBFòfÇ6RÂ´Æ–æ²æ–ÖF–öä7F–öâ6Væ&ÆVGÒv–ÆÂWFöÖF–6ÆÇ’&R7v—F6†V@ ’¢FòfÇ6Vv†VâF†RÆ7BÆö÷öbF†R7F–öâ†2f–æ—6†VBÂ6òF†BF†—27F–öâ†0 ’¢æògW'F†W"–×7Bà ’  ’¢æ÷FS¢F†—2ÖVÖ&W"†2æò–×7B–bF†R7F–öâ—2–çFW''WFVB†—@ ’¢†2öæÇ’âVffV7B–b—G2Æ7BÆö÷†2&VÆÇ’f–æ—6†VB’à ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBfÇ6P ’¢ð —F†—2æ6Æ×v†Väf–æ—6†VBÒfÇ6S°  ’ò¢  ’¢Væ&ÆW26Öö÷F‚–çFW'öÆF–öâv—F†÷WB6W&FR6Æ—2f÷"7F'BÂÆö÷æBVæBà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2ç¦W&õ6Æ÷TE7F'BÒG'VS°  ’ò¢  ’¢Væ&ÆW26Öö÷F‚–çFW'öÆF–öâv—F†÷WB6W&FR6Æ—2f÷"7F'BÂÆö÷æBVæBà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2ç¦W&õ6Æ÷TDVæBÒG'VS°  —Ð  ’ò¢  ’¢7F'G2F†RÆ–&6²öbF†Ræ–ÖF–öâà ’  ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —Æ’‚’°  —F†—2åöÖ—†W"åö7F—fFT7F–öâ‚F†—2“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7F÷2F†RÆ–&6²öbF†Ræ–ÖF–öâà ’  ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —7F÷‚’°  —F†—2åöÖ—†W"åöFV7F—fFT7F–öâ‚F†—2“°  —&WGW&âF†—2ç&W6WB‚“°  —Ð  ’ò¢  ’¢&W6WG2F†RÆ–&6²öbF†Ræ–ÖF–öâà ’  ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —&W6WB‚’°  —F†—2çW6VBÒfÇ6S° —F†—2æVæ&ÆVBÒG'VS°  —F†—2çF–ÖRÒ²òò&W7F'B6Æ—  —F†—2åöÆö÷6÷VçBÒÓ²òòf÷&vWB&Wf–÷W2Æö÷0 —F†—2å÷7F'EF–ÖRÒçVÆÃ²òòf÷&vWB66†VGVÆ–æp  —&WGW&âF†—2ç7F÷fF–ær‚’ç7F÷v'–ær‚“°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†Ræ–ÖF–öâ—2'Vææ–ærà ’  ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†Ræ–ÖF–öâ—2'Vææ–ær÷"æ÷Bà ’¢ð –—5'Vææ–ær‚’°  —&WGW&âF†—2æVæ&ÆVBbbF†—2çW6VBbbF†—2çF–ÖU66ÆRÓÒb` —F†—2å÷7F'EF–ÖRÓÓÒçVÆÂbbF†—2åöÖ—†W"åö—47F—fT7F–öâ‚F†—2“°  —Ð  ’ò¢  ’¢&WGW&ç2G'VVv†Vâ´Æ–æ²æ–ÖF–öä7F–öâ7Æ—Ò†2&VVâ6ÆÆVBà ’  ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†Ræ–ÖF–öâ—266†VGVÆVB÷"æ÷Bà ’¢ð –—566†VGVÆVB‚’°  —&WGW&âF†—2åöÖ—†W"åö—47F—fT7F–öâ‚F†—2“°  —Ð  ’ò¢  ’¢FVf–æW2F†RF–ÖRv†VâF†Ræ–ÖF–öâ6†÷VÆB7F'Bà ’  ’¢&Ò¶çVÖ&W'ÒF–ÖRÒF†R7F'BF–ÖR–â6V6öæG2à ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —7F'DB‚F–ÖR’°  —F†—2å÷7F'EF–ÖRÒF–ÖS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6öæf–wW&W2F†RÆö÷6WGF–æw2f÷"F†—27F–öâà ’  ’¢&Ò²„Æö÷&WVGÄÆö÷öæ6WÄÆö÷–æuöær—ÒÖöFRÒF†RÆö÷ÖöFRà ’¢&Ò¶çVÖ&W'Ò&WWF—F–öç2ÒF†RçVÖ&W"öb&WWF—F–öç2à ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —6WDÆö÷‚ÖöFRÂ&WWF—F–öç2’°  —F†—2æÆö÷ÒÖöFS° —F†—2ç&WWF—F–öç2Ò&WWF—F–öç3°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RVffV7F—fRvV–v‡BöbF†—27F–öâà ’  ’¢â7F–öâ†2æòVffV7BæBF‡W2âVffV7F—fRvV–v‡Böb¦W&òv†VâF†P ’¢7F–öâ—2F—6&ÆVBà ’  ’¢&Ò¶çVÖ&W'ÒvV–v‡BÒF†RvV–v‡BFò6WBà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —6WDVffV7F—fUvV–v‡B‚vV–v‡B’°  —F†—2çvV–v‡BÒvV–v‡C°  ’òòæ÷FS¢6ÖRÆöv–22v†VâWFFVBB'VçF–ÖP —F†—2åöVffV7F—fUvV–v‡BÒF†—2æVæ&ÆVBòvV–v‡B¢°  —&WGW&âF†—2ç7F÷fF–ær‚“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RVffV7F—fRvV–v‡BöbF†—27F–öâà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RVffV7F—fRvV–v‡Bà ’¢ð –vWDVffV7F—fUvV–v‡B‚’°  —&WGW&âF†—2åöVffV7F—fUvV–v‡C°  —Ð  ’ò¢  ’¢fFW2F†Ræ–ÖF–öâ–â'’–æ7&V6–ær—G2vV–v‡Bw&GVÆÇ’g&öÒFòÀ ’¢v—F†–âF†R76VBF–ÖR–çFW'fÂà ’  ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâöbF†RfFRà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð –fFT–â‚GW&F–öâ’°  —&WGW&âF†—2å÷66†VGVÆTfF–ær‚GW&F–öâÂÂ“°  —Ð  ’ò¢  ’¢fFW2F†Ræ–ÖF–öâ÷WB'’FV7&V6–ær—G2vV–v‡Bw&GVÆÇ’g&öÒFòÀ ’¢v—F†–âF†R76VBF–ÖR–çFW'fÂà ’  ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâöbF†RfFRà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð –fFT÷WB‚GW&F–öâ’°  —&WGW&âF†—2å÷66†VGVÆTfF–ær‚GW&F–öâÂÂ“°  —Ð  ’ò¢  ’¢6W6W2F†—27F–öâFòfFR–âæBF†Rv—fVâ7F–öâFòfFR÷WBÀ ’¢v—F†–âF†R76VBF–ÖR–çFW'fÂà ’  ’¢&Ò´æ–ÖF–öä7F–öçÒfFT÷WD7F–öâÒF†Ræ–ÖF–öâ7F–öâFòfFR÷WBà ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâöbF†RfFRà ’¢&Ò¶&ööÆVçÒ·v'ÖfÇ6UÒÒv†WF†W"v'–ær6†÷VÆB&RW6VB÷"æ÷Bà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð –7&÷74fFTg&öÒ‚fFT÷WD7F–öâÂGW&F–öâÂv'ÒfÇ6R’°  –fFT÷WD7F–öâæfFT÷WB‚GW&F–öâ“° —F†—2æfFT–â‚GW&F–öâ“°  ––b‚v'ÓÓÒG'VR’°  –6öç7BfFT–äGW&F–öâÒF†—2åö6Æ—æGW&F–öâÀ –fFT÷WDGW&F–öâÒfFT÷WD7F–öâåö6Æ—æGW&F–öâÀ  —7F'DVæE&F–òÒfFT÷WDGW&F–öâòfFT–äGW&F–öâÀ –VæE7F'E&F–òÒfFT–äGW&F–öâòfFT÷WDGW&F–öã°  –fFT÷WD7F–öâçv'‚ãÂ7F'DVæE&F–òÂGW&F–öâ“° —F†—2çv'‚VæE7F'E&F–òÂãÂGW&F–öâ“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6W6W2F†—27F–öâFòfFR÷WBæBF†Rv—fVâ7F–öâFòfFR–âÀ ’¢v—F†–âF†R76VBF–ÖR–çFW'fÂà ’  ’¢&Ò´æ–ÖF–öä7F–öçÒfFT–ä7F–öâÒF†Ræ–ÖF–öâ7F–öâFòfFR–âà ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâöbF†RfFRà ’¢&Ò¶&ööÆVçÒ·v'ÖfÇ6UÒÒv†WF†W"v'–ær6†÷VÆB&RW6VB÷"æ÷Bà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð –7&÷74fFUFò‚fFT–ä7F–öâÂGW&F–öâÂv'ÒfÇ6R’°  —&WGW&âfFT–ä7F–öâæ7&÷74fFTg&öÒ‚F†—2ÂGW&F–öâÂv'“°  —Ð  ’ò¢  ’¢7F÷2ç’fF–ærv†–6‚—2Æ–VBFòF†—27F–öâà ’  ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —7F÷fF–ær‚’°  –6öç7BvV–v‡D–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚vV–v‡D–çFW'öÆçBÓÒçVÆÂ’°  —F†—2å÷vV–v‡D–çFW'öÆçBÒçVÆÃ° —F†—2åöÖ—†W"å÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚vV–v‡D–çFW'öÆçB“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RVffV7F—fRF–ÖR66ÆRöbF†—27F–öâà ’  ’¢â7F–öâ†2æòVffV7BæBF‡W2âVffV7F—fRF–ÖR66ÆRöb¦W&òv†VâF†P ’¢7F–öâ—2W6VBà ’  ’¢&Ò¶çVÖ&W'ÒF–ÖU66ÆRÒF†RF–ÖR66ÆRFò6WBà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —6WDVffV7F—fUF–ÖU66ÆR‚F–ÖU66ÆR’°  —F†—2çF–ÖU66ÆRÒF–ÖU66ÆS° —F†—2åöVffV7F—fUF–ÖU66ÆRÒF†—2çW6VBò¢F–ÖU66ÆS°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RVffV7F—fRF–ÖR66ÆRöbF†—27F–öâà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RVffV7F—fRF–ÖR66ÆRà ’¢ð –vWDVffV7F—fUF–ÖU66ÆR‚’°  —&WGW&âF†—2åöVffV7F—fUF–ÖU66ÆS°  —Ð  ’ò¢  ’¢6WG2F†RGW&F–öâf÷"6–ævÆRÆö÷öbF†—27F–öâà ’  ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâFò6WBà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —6WDGW&F–öâ‚GW&F–öâ’°  —F†—2çF–ÖU66ÆRÒF†—2åö6Æ—æGW&F–öâòGW&F–öã°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  ’ò¢  ’¢7–æ6‡&öæ—¦W2F†—27F–öâv—F‚F†R76VB÷F†W"7F–öâà ’  ’¢&Ò´æ–ÖF–öä7F–öçÒ7F–öâÒF†R7F–öâFò7–æ2v—F‚à ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —7–æ5v—F‚‚7F–öâ’°  —F†—2çF–ÖRÒ7F–öâçF–ÖS° —F†—2çF–ÖU66ÆRÒ7F–öâçF–ÖU66ÆS°  —&WGW&âF†—2ç7F÷v'–ær‚“°  —Ð  ’ò¢  ’¢FV6VÆW&FW2F†—2æ–ÖF–öâw27VVBFòv—F†–âF†R76VBF–ÖR–çFW'fÂà ’  ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð –†ÇB‚GW&F–öâ’°  —&WGW&âF†—2çv'‚F†—2åöVffV7F—fUF–ÖU66ÆRÂÂGW&F–öâ“°  —Ð  ’ò¢  ’¢6†ævW2F†RÆ–&6²7VVBÂv—F†–âF†R76VBF–ÖR–çFW'fÂÂ'’ÖöF–g––æp ’¢´Æ–æ²æ–ÖF–öä7F–öâ7F–ÖU66ÆWÒw&GVÆÇ’g&öÒ7F'EF–ÖU66ÆVFð ’¢VæEF–ÖU66ÆVà ’  ’¢&Ò¶çVÖ&W'Ò7F'EF–ÖU66ÆRÒF†R7F'BF–ÖR66ÆRà ’¢&Ò¶çVÖ&W'ÒVæEF–ÖU66ÆRÒF†RVæBF–ÖR66ÆRà ’¢&Ò¶çVÖ&W'ÒGW&F–öâÒF†RGW&F–öâà ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —v'‚7F'EF–ÖU66ÆRÂVæEF–ÖU66ÆRÂGW&F–öâ’°  –6öç7BÖ—†W"ÒF†—2åöÖ—†W"À –æ÷rÒÖ—†W"çF–ÖRÀ —F–ÖU66ÆRÒF†—2çF–ÖU66ÆS°  –ÆWB–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÓÒçVÆÂ’°  ––çFW'öÆçBÒÖ—†W"åöÆVæD6öçG&öÄ–çFW'öÆçB‚“° —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒ–çFW'öÆçC°  —Ð  –6öç7BF–ÖW2Ò–çFW'öÆçBç&ÖWFW%÷6—F–öç2À —fÇVW2Ò–çFW'öÆçBç6×ÆUfÇVW3°  —F–ÖW5²ÒÒæ÷s° —F–ÖW5²ÒÒæ÷r²GW&F–öã°  —fÇVW5²ÒÒ7F'EF–ÖU66ÆRòF–ÖU66ÆS° —fÇVW5²ÒÒVæEF–ÖU66ÆRòF–ÖU66ÆS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢7F÷2ç’66†VGVÆVBv'–ærv†–6‚—2Æ–VBFòF†—27F–öâà ’  ’¢&WGW&â´æ–ÖF–öä7F–öçÒ&VfW&Væ6RFòF†—2æ–ÖF–öâ7F–öâà ’¢ð —7F÷v'–ær‚’°  –6öç7BF–ÖU66ÆT–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚F–ÖU66ÆT–çFW'öÆçBÓÒçVÆÂ’°  —F†—2å÷F–ÖU66ÆT–çFW'öÆçBÒçVÆÃ° —F†—2åöÖ—†W"å÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚F–ÖU66ÆT–çFW'öÆçB“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†Ræ–ÖF–öâÖ—†W"öbF†—2æ–ÖF–öâ7F–öâà ’  ’¢&WGW&â´æ–ÖF–öäÖ—†W'ÒF†Ræ–ÖF–öâÖ—†W"à ’¢ð –vWDÖ—†W"‚’°  —&WGW&âF†—2åöÖ—†W#°  —Ð  ’ò¢  ’¢&WGW&ç2F†Ræ–ÖF–öâ6Æ—öbF†—2æ–ÖF–öâ7F–öâà ’  ’¢&WGW&â´æ–ÖF–öä6Æ—ÒF†Ræ–ÖF–öâ6Æ—à ’¢ð –vWD6Æ—‚’°  —&WGW&âF†—2åö6Æ—°  —Ð  ’ò¢  ’¢&WGW&ç2F†R&ö÷Bö&¦V7BöbF†—2æ–ÖF–öâ7F–öâà ’  ’¢&WGW&â´ö&¦V7C4GÒF†R&ö÷Bö&¦V7Bà ’¢ð –vWE&ö÷B‚’°  —&WGW&âF†—2åöÆö6Å&ö÷BÇÂF†—2åöÖ—†W"å÷&ö÷C°  —Ð  ’òò–çFW&æ  •÷WFFR‚F–ÖRÂFVÇFF–ÖRÂF–ÖTF—&V7F–öâÂ67T–æFW‚’°  ’òò6ÆÆVB'’F†RÖ—†W   ––b‚F†—2æVæ&ÆVB’°  ’òò6ÆÂå÷WFFUvV–v‡B‚’FòWFFRåöVffV7F—fUvV–v‡@  —F†—2å÷WFFUvV–v‡B‚F–ÖR“° —&WGW&ã°  —Ð  –6öç7B7F'EF–ÖRÒF†—2å÷7F'EF–ÖS°  ––b‚7F'EF–ÖRÓÒçVÆÂ’°  ’òò6†V6²f÷"66†VGVÆVB7F'Böb7F–öà  –6öç7BF–ÖU'Vææ–ærÒ‚F–ÖRÒ7F'EF–ÖR’¢F–ÖTF—&V7F–öã° ––b‚F–ÖU'Vææ–ærÂÇÂF–ÖTF—&V7F–öâÓÓÒ’°  –FVÇFF–ÖRÒ°  —ÒVÇ6R°   —F†—2å÷7F'EF–ÖRÒçVÆÃ²òòVç66†VGVÆP –FVÇFF–ÖRÒF–ÖTF—&V7F–öâ¢F–ÖU'Vææ–æs°  —Ð  —Ð  ’òòÇ’F–ÖR66ÆRæBGfæ6RF–ÖP  –FVÇFF–ÖR£ÒF†—2å÷WFFUF–ÖU66ÆR‚F–ÖR“° –6öç7B6Æ—F–ÖRÒF†—2å÷WFFUF–ÖR‚FVÇFF–ÖR“°  ’òòæ÷FS¢÷WFFUF–ÖRÖ’F—6&ÆRF†R7F–öâ&W7VÇF–ær–à ’òòâVffV7F—fRvV–v‡Böb   –6öç7BvV–v‡BÒF†—2å÷WFFUvV–v‡B‚F–ÖR“°  ––b‚vV–v‡Bâ’°  –6öç7B–çFW'öÆçG2ÒF†—2åö–çFW'öÆçG3° –6öç7B&÷W'G”Ö—†W'2ÒF†—2å÷&÷W'G”&–æF–æw3°  —7v—F6‚‚F†—2æ&ÆVæDÖöFR’°  –66RFF—F—fTæ–ÖF–öä&ÆVæDÖöFS   –f÷"‚ÆWB¢ÒÂÒÒ–çFW'öÆçG2æÆVæwFƒ²¢ÓÒÓ²²²¢’°  ––çFW'öÆçG5²¢ÒæWfÇVFR‚6Æ—F–ÖR“° —&÷W'G”Ö—†W'5²¢Òæ67V×VÆFTFF—F—fR‚vV–v‡B“°  —Ð  –'&V³°  –66Ræ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFS  –FVfVÇC   –f÷"‚ÆWB¢ÒÂÒÒ–çFW'öÆçG2æÆVæwFƒ²¢ÓÒÓ²²²¢’°  ––çFW'öÆçG5²¢ÒæWfÇVFR‚6Æ—F–ÖR“° —&÷W'G”Ö—†W'5²¢Òæ67V×VÆFR‚67T–æFW‚ÂvV–v‡B“°  —Ð  —Ð  —Ð  —Ð  •÷WFFUvV–v‡B‚F–ÖR’°  –ÆWBvV–v‡BÒ°  ––b‚F†—2æVæ&ÆVB’°  —vV–v‡BÒF†—2çvV–v‡C° –6öç7B–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÒçVÆÂ’°  –6öç7B–çFW'öÆçEfÇVRÒ–çFW'öÆçBæWfÇVFR‚F–ÖR•²Ó°  —vV–v‡B£Ò–çFW'öÆçEfÇVS°  ––b‚F–ÖRâ–çFW'öÆçBç&ÖWFW%÷6—F–öç5²Ò’°  —F†—2ç7F÷fF–ær‚“°  ––b‚–çFW'öÆçEfÇVRÓÓÒ’°  ’òòfFVB÷WBÂF—6&ÆP —F†—2æVæ&ÆVBÒfÇ6S°  —Ð  —Ð  —Ð  —Ð  —F†—2åöVffV7F—fUvV–v‡BÒvV–v‡C° —&WGW&âvV–v‡C°  —Ð  •÷WFFUF–ÖU66ÆR‚F–ÖR’°  –ÆWBF–ÖU66ÆRÒ°  ––b‚F†—2çW6VB’°  —F–ÖU66ÆRÒF†—2çF–ÖU66ÆS°  –6öç7B–çFW'öÆçBÒF†—2å÷F–ÖU66ÆT–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÒçVÆÂ’°  –6öç7B–çFW'öÆçEfÇVRÒ–çFW'öÆçBæWfÇVFR‚F–ÖR•²Ó°  —F–ÖU66ÆR£Ò–çFW'öÆçEfÇVS°  ––b‚F–ÖRâ–çFW'öÆçBç&ÖWFW%÷6—F–öç5²Ò’°  —F†—2ç7F÷v'–ær‚“°  ––b‚F–ÖU66ÆRÓÓÒ’°  ’òòÖ÷F–öâ†2†ÇFVBÂW6P —F†—2çW6VBÒG'VS°  —ÒVÇ6R°  ’òòv'FöæRÒÇ’f–æÂF–ÖR66ÆP —F†—2çF–ÖU66ÆRÒF–ÖU66ÆS°  —Ð  —Ð  —Ð  —Ð  —F†—2åöVffV7F—fUF–ÖU66ÆRÒF–ÖU66ÆS° —&WGW&âF–ÖU66ÆS°  —Ð  •÷WFFUF–ÖR‚FVÇFF–ÖR’°  –6öç7BGW&F–öâÒF†—2åö6Æ—æGW&F–öã° –6öç7BÆö÷ÒF†—2æÆö÷°  –ÆWBF–ÖRÒF†—2çF–ÖR²FVÇFF–ÖS° –ÆWBÆö÷6÷VçBÒF†—2åöÆö÷6÷VçC°  –6öç7B–æuöærÒ‚Æö÷ÓÓÒÆö÷–æuöær“°  ––b‚FVÇFF–ÖRÓÓÒ’°  ––b‚Æö÷6÷VçBÓÓÒÓ’&WGW&âF–ÖS°  —&WGW&â‚–æuöærbb‚Æö÷6÷VçBb’ÓÓÒ’òGW&F–öâÒF–ÖR¢F–ÖS°  —Ð  ––b‚Æö÷ÓÓÒÆö÷öæ6R’°  ––b‚Æö÷6÷VçBÓÓÒÓ’°  ’òò§W7B7F'FV@  —F†—2åöÆö÷6÷VçBÒ° —F†—2å÷6WDVæF–æw2‚G'VRÂG'VRÂfÇ6R“°  —Ð  –†æFÆU÷7F÷¢°  ––b‚F–ÖRãÒGW&F–öâ’°  —F–ÖRÒGW&F–öã°  —ÒVÇ6R–b‚F–ÖRÂ’°  —F–ÖRÒ°  —ÒVÇ6R°  —F†—2çF–ÖRÒF–ÖS°  –'&V²†æFÆU÷7F÷°  —Ð  ––b‚F†—2æ6Æ×v†Väf–æ—6†VB’F†—2çW6VBÒG'VS° –VÇ6RF†—2æVæ&ÆVBÒfÇ6S°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vf–æ—6†VBrÂ7F–öã¢F†—2À –F—&V7F–öã¢FVÇFF–ÖRÂòÓ¢ —Ò“°  —Ð  —ÒVÇ6R²òò&WWF—F—fR&WVB÷"–æuöæp  ––b‚Æö÷6÷VçBÓÓÒÓ’°  ’òò§W7B7F'FV@  ––b‚FVÇFF–ÖRãÒ’°  –Æö÷6÷VçBÒ°  —F†—2å÷6WDVæF–æw2‚G'VRÂF†—2ç&WWF—F–öç2ÓÓÒÂ–æuöær“°  —ÒVÇ6R°  ’òòv†VâÆö÷–ær–â&WfW'6RF—&V7F–öâÂF†R–æ—F–À ’òòG&ç6—F–öâF‡&÷Vv‚¦W&ò6÷VçG22&WWF—F–öâÀ ’òò6òÆVfRÆö÷6÷VçBBÓ  —F†—2å÷6WDVæF–æw2‚F†—2ç&WWF—F–öç2ÓÓÒÂG'VRÂ–æuöær“°  —Ð  —Ð  ––b‚F–ÖRãÒGW&F–öâÇÂF–ÖRÂ’°  ’òòw&&÷Væ@  –6öç7BÆö÷FVÇFÒÖF‚æfÆö÷"‚F–ÖRòGW&F–öâ“²òò6–væV@ —F–ÖRÓÒGW&F–öâ¢Æö÷FVÇF°  –Æö÷6÷VçB³ÒÖF‚æ'2‚Æö÷FVÇF“°  –6öç7BVæF–ærÒF†—2ç&WWF—F–öç2ÒÆö÷6÷VçC°  ––b‚VæF–ærÃÒ’°  ’òò†fRFò7F÷‡7v—F6‚7FFRÂ6Æ×F–ÖRÂf—&RWfVçB  ––b‚F†—2æ6Æ×v†Väf–æ—6†VB’F†—2çW6VBÒG'VS° –VÇ6RF†—2æVæ&ÆVBÒfÇ6S°  —F–ÖRÒFVÇFF–ÖRâòGW&F–öâ¢°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vf–æ—6†VBrÂ7F–öã¢F†—2À –F—&V7F–öã¢FVÇFF–ÖRâò¢Ó —Ò“°  —ÒVÇ6R°  ’òò¶VW'Vææ–æp  ––b‚VæF–ærÓÓÒ’°  ’òòVçFW&–ærF†RÆ7B&÷Væ@  –6öç7BE7F'BÒFVÇFF–ÖRÂ° —F†—2å÷6WDVæF–æw2‚E7F'BÂE7F'BÂ–æuöær“°  —ÒVÇ6R°  —F†—2å÷6WDVæF–æw2‚fÇ6RÂfÇ6RÂ–æuöær“°  —Ð  —F†—2åöÆö÷6÷VçBÒÆö÷6÷VçC°  —F†—2çF–ÖRÒF–ÖS°  —F†—2åöÖ—†W"æF—7F6„WfVçB‚° —G—S¢vÆö÷rÂ7F–öã¢F†—2ÂÆö÷FVÇF¢Æö÷FVÇF —Ò“°  —Ð  —ÒVÇ6R°  —F†—2çF–ÖRÒF–ÖS°  —Ð  ––b‚–æuöærbb‚Æö÷6÷VçBb’ÓÓÒ’°  ’òò–çfW'BF–ÖRf÷"F†R'öær&÷VæB   —&WGW&âGW&F–öâÒF–ÖS°  —Ð  —Ð  —&WGW&âF–ÖS°  —Ð  •÷6WDVæF–æw2‚E7F'BÂDVæBÂ–æuöær’°  –6öç7B6WGF–æw2ÒF†—2åö–çFW'öÆçE6WGF–æw3°  ––b‚–æuöær’°  —6WGF–æw2æVæF–æu7F'BÒ¦W&õ6Æ÷TVæF–æs° —6WGF–æw2æVæF–ætVæBÒ¦W&õ6Æ÷TVæF–æs°  —ÒVÇ6R°  ’òò77VÖ–ærf÷"Æö÷öæ6RE7F'BÓÒDVæBÓÒG'VP  ––b‚E7F'B’°  —6WGF–æw2æVæF–æu7F'BÒF†—2ç¦W&õ6Æ÷TE7F'Bò¦W&õ6Æ÷TVæF–ær¢¦W&ô7W'fGW&TVæF–æs°  —ÒVÇ6R°  —6WGF–æw2æVæF–æu7F'BÒw&&÷VæDVæF–æs°  —Ð  ––b‚DVæB’°  —6WGF–æw2æVæF–ætVæBÒF†—2ç¦W&õ6Æ÷TDVæBò¦W&õ6Æ÷TVæF–ær¢¦W&ô7W'fGW&TVæF–æs°  —ÒVÇ6R°  —6WGF–æw2æVæF–ætVæB ’Òw&&÷VæDVæF–æs°  —Ð  —Ð  —Ð  •÷66†VGVÆTfF–ær‚GW&F–öâÂvV–v‡Dæ÷rÂvV–v‡EF†Vâ’°  –6öç7BÖ—†W"ÒF†—2åöÖ—†W"Âæ÷rÒÖ—†W"çF–ÖS° –ÆWB–çFW'öÆçBÒF†—2å÷vV–v‡D–çFW'öÆçC°  ––b‚–çFW'öÆçBÓÓÒçVÆÂ’°  ––çFW'öÆçBÒÖ—†W"åöÆVæD6öçG&öÄ–çFW'öÆçB‚“° —F†—2å÷vV–v‡D–çFW'öÆçBÒ–çFW'öÆçC°  —Ð  –6öç7BF–ÖW2Ò–çFW'öÆçBç&ÖWFW%÷6—F–öç2À —fÇVW2Ò–çFW'öÆçBç6×ÆUfÇVW3°  —F–ÖW5²ÒÒæ÷s° —fÇVW5²ÒÒvV–v‡Dæ÷s° —F–ÖW5²ÒÒæ÷r²GW&F–öã° —fÇVW5²ÒÒvV–v‡EF†Vã°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7Bö6öçG&öÄ–çFW'öÆçG5&W7VÇD'VffW"ÒæWrfÆöC3$'&’‚“° ¢ò¢ ¢¢æ–ÖF–öäÖ—†W&—2Æ–W"f÷"æ–ÖF–öç2öâ'F–7VÆ"ö&¦V7B–à¢¢F†R66VæRâv†Vâ×VÇF—ÆRö&¦V7G2–âF†R66VæR&Ræ–ÖFVB–æFWVæFVçFÇ’À¢¢öæRæ–ÖF–öäÖ—†W&Ö’&RW6VBf÷"V6‚ö&¦V7Bà¢¢ð¦6Æ72æ–ÖF–öäÖ—†W"W‡FVæG2WfVçDF—7F6†W"°  ’ò¢  ’¢6öç7G'V7G2æWræ–ÖF–öâÖ—†W"à ’  ’¢&Ò´ö&¦V7C4GÒ&ö÷BÒF†Rö&¦V7Bv†÷6Ræ–ÖF–öç26†ÆÂ&RÆ–VB'’F†—2Ö—†W"à ’¢ð –6öç7G'V7F÷"‚&ö÷B’°  —7WW"‚“°  —F†—2å÷&ö÷BÒ&ö÷C° —F†—2åö–æ—DÖVÖ÷'”ÖævW"‚“° —F†—2åö67T–æFW‚Ò°  ’ò¢  ’¢F†RvÆö&ÂÖ—†W"F–ÖR†–â6V6öæG3²7F'F–ærv—F‚öâF†RÖ—†W"w27&VF–öâ’à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çF–ÖRÒ°  ’ò¢  ’¢66Æ–ærf7F÷"f÷"F†RvÆö&ÂF–ÖRà ’  ’¢æ÷FS¢6WGF–ærF†—2ÖVÖ&W"FòæBÆFW"&6²Fò—2 ’¢÷76–&–Æ—G’FòW6R÷VçW6RÆÂ7F–öç2F†B&R6öçG&öÆÆVB'’F†—0 ’¢Ö—†W"à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2çF–ÖU66ÆRÒã°  —Ð  •ö&–æD7F–öâ‚7F–öâÂ&÷F÷G—T7F–öâ’°  –6öç7B&ö÷BÒ7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷BÀ —G&6·2Ò7F–öâåö6Æ—çG&6·2À –åG&6·2ÒG&6·2æÆVæwF‚À –&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw2À ––çFW'öÆçG2Ò7F–öâåö–çFW'öÆçG2À —&ö÷EWV–BÒ&ö÷BçWV–BÀ –&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖS°  –ÆWB&–æF–æw4'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æw4'”æÖRÓÓÒVæFVf–æVB’°  –&–æF–æw4'”æÖRÒ·Ó° –&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÒ&–æF–æw4'”æÖS°  —Ð  –f÷"‚ÆWB’Ò²’ÓÒåG&6·3²²²’’°  –6öç7BG&6²ÒG&6·5²’ÒÀ —G&6´æÖRÒG&6²ææÖS°  –ÆWB&–æF–ærÒ&–æF–æw4'”æÖU²G&6´æÖRÓ°  ––b‚&–æF–ærÓÒVæFVf–æVB’°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° –&–æF–æw5²’ÒÒ&–æF–æs°  —ÒVÇ6R°  –&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚&–æF–ærÓÒVæFVf–æVB’°  ’òòW†—7F–ær&–æF–ærÂÖ¶R7W&RF†R66†R¶æ÷w0  ––b‚&–æF–æråö66†T–æFW‚ÓÓÒçVÆÂ’°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° —F†—2åöFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR“°  —Ð  –6öçF–çVS°  —Ð  –6öç7BF‚Ò&÷F÷G—T7F–öâbb&÷F÷G—T7F–öâà •÷&÷W'G”&–æF–æw5²’Òæ&–æF–ærç'6VEFƒ°  –&–æF–ærÒæWr&÷W'G”Ö—†W"€ •&÷W'G”&–æF–æræ7&VFR‚&ö÷BÂG&6´æÖRÂF‚’À —G&6²åfÇVUG—TæÖRÂG&6²ævWEfÇVU6—¦R‚’“°  ’²²&–æF–ærç&VfW&Væ6T6÷VçC° —F†—2åöFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR“°  –&–æF–æw5²’ÒÒ&–æF–æs°  —Ð  ––çFW'öÆçG5²’Òç&W7VÇD'VffW"Ò&–æF–æræ'VffW#°  —Ð  —Ð  •ö7F—fFT7F–öâ‚7F–öâ’°  ––b‚F†—2åö—47F—fT7F–öâ‚7F–öâ’’°  ––b‚7F–öâåö66†T–æFW‚ÓÓÒçVÆÂ’°  ’òòF†—27F–öâ†2&VVâf÷&v÷GFVâ'’F†R66†RÂ'WBF†RW6W  ’òòV'2Fò&R7F–ÆÂW6–ær—BÓâ&V&–æ@  –6öç7B&ö÷EWV–BÒ‚7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷B’çWV–BÀ –6Æ—WV–BÒ7F–öâåö6Æ—çWV–BÀ –7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ°  —F†—2åö&–æD7F–öâ‚7F–öâÀ –7F–öç4f÷$6Æ—bb7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç5²Ò“°  —F†—2åöFD–æ7F—fT7F–öâ‚7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B“°  —Ð  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  ’òò–æ7&VÖVçB&VfW&Væ6R6÷VçG2ò6÷'B÷WB7FFP –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚&–æF–ærçW6T6÷VçB²²ÓÓÒ’°  —F†—2åöÆVæD&–æF–ær‚&–æF–ær“° –&–æF–ærç6fT÷&–v–æÅ7FFR‚“°  —Ð  —Ð  —F†—2åöÆVæD7F–öâ‚7F–öâ“°  —Ð  —Ð  •öFV7F—fFT7F–öâ‚7F–öâ’°  ––b‚F†—2åö—47F—fT7F–öâ‚7F–öâ’’°  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  ’òòFV7&VÖVçB&VfW&Væ6R6÷VçG2ò6÷'B÷WB7FFP –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚ÒÒ&–æF–ærçW6T6÷VçBÓÓÒ’°  –&–æF–ærç&W7F÷&T÷&–v–æÅ7FFR‚“° —F†—2å÷F¶T&6´&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —F†—2å÷F¶T&6´7F–öâ‚7F–öâ“°  —Ð  —Ð  ’òòÖVÖ÷'’ÖævW   •ö–æ—DÖVÖ÷'”ÖævW"‚’°  —F†—2åö7F–öç2ÒµÓ²òòvä7F—fT7F–öç2rföÆÆ÷vVB'’–æ7F—fRöæW0 —F†—2åöä7F—fT7F–öç2Ò°  —F†—2åö7F–öç4'”6Æ—Ò·Ó° ’òò–ç6–FS  ’òò° ’òò –¶æ÷vä7F–öç3¢'&“Âæ–ÖF–öä7F–öââÒW6VB2&÷F÷G—W0 ’òò –7F–öä'•&ö÷C¢æ–ÖF–öä7F–öâÒÆöö·W  ’òòÐ   —F†—2åö&–æF–æw2ÒµÓ²òòvä7F—fT&–æF–æw2rföÆÆ÷vVB'’–æ7F—fRöæW0 —F†—2åöä7F—fT&–æF–æw2Ò°  —F†—2åö&–æF–æw4'•&ö÷DæDæÖRÒ·Ó²òò–ç6–FS¢ÖÂæÖRÂ&÷W'G”Ö—†W"à   —F†—2åö6öçG&öÄ–çFW'öÆçG2ÒµÓ²òò6ÖRvÖR2&÷fP —F†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2Ò°  –6öç7B66÷RÒF†—3°  —F†—2ç7FG2Ò°  –7F–öç3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö7F–öç2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT7F–öç3°  —Ð —ÒÀ –&–æF–æw3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö&–æF–æw2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT&–æF–æw3°  —Ð —ÒÀ –6öçG&öÄ–çFW'öÆçG3¢° –vWBF÷FÂ‚’°  —&WGW&â66÷Råö6öçG&öÄ–çFW'öÆçG2æÆVæwFƒ°  —ÒÀ –vWB–åW6R‚’°  —&WGW&â66÷Råöä7F—fT6öçG&öÄ–çFW'öÆçG3°  —Ð —Ð  —Ó°  —Ð  ’òòÖVÖ÷'’ÖævVÖVçBf÷"æ–ÖF–öä7F–öâö&¦V7G0  •ö—47F—fT7F–öâ‚7F–öâ’°  –6öç7B–æFW‚Ò7F–öâåö66†T–æFWƒ° —&WGW&â–æFW‚ÓÒçVÆÂbb–æFW‚ÂF†—2åöä7F—fT7F–öç3°  —Ð  •öFD–æ7F—fT7F–öâ‚7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—°  –ÆWB7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÓÒVæFVf–æVB’°  –7F–öç4f÷$6Æ—Ò°  –¶æ÷vä7F–öç3¢²7F–öâÒÀ –7F–öä'•&ö÷C¢·Ð  —Ó°  –7F–öâåö'”6Æ—66†T–æFW‚Ò°  –7F–öç4'”6Æ—²6Æ—WV–BÒÒ7F–öç4f÷$6Æ—°  —ÒVÇ6R°  –6öç7B¶æ÷vä7F–öç2Ò7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç3°  –7F–öâåö'”6Æ—66†T–æFW‚Ò¶æ÷vä7F–öç2æÆVæwFƒ° –¶æ÷vä7F–öç2çW6‚‚7F–öâ“°  —Ð  –7F–öâåö66†T–æFW‚Ò7F–öç2æÆVæwFƒ° –7F–öç2çW6‚‚7F–öâ“°  –7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÒÒ7F–öã°  —Ð  •÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –Æ7D–æ7F—fT7F–öâÒ7F–öç5²7F–öç2æÆVæwF‚ÒÒÀ –66†T–æFW‚Ò7F–öâåö66†T–æFWƒ°  –Æ7D–æ7F—fT7F–öâåö66†T–æFW‚Ò66†T–æFWƒ° –7F–öç5²66†T–æFW‚ÒÒÆ7D–æ7F—fT7F–öã° –7F–öç2ç÷‚“°  –7F–öâåö66†T–æFW‚ÒçVÆÃ°   –6öç7B6Æ—WV–BÒ7F–öâåö6Æ—çWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—À –7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÒÀ –¶æ÷vä7F–öç4f÷$6Æ—Ò7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç2À  –Æ7D¶æ÷vä7F–öâÐ –¶æ÷vä7F–öç4f÷$6Æ—²¶æ÷vä7F–öç4f÷$6Æ—æÆVæwF‚ÒÒÀ  –'”6Æ—66†T–æFW‚Ò7F–öâåö'”6Æ—66†T–æFWƒ°  –Æ7D¶æ÷vä7F–öâåö'”6Æ—66†T–æFW‚Ò'”6Æ—66†T–æFWƒ° –¶æ÷vä7F–öç4f÷$6Æ—²'”6Æ—66†T–æFW‚ÒÒÆ7D¶æ÷vä7F–öã° –¶æ÷vä7F–öç4f÷$6Æ—ç÷‚“°  –7F–öâåö'”6Æ—66†T–æFW‚ÒçVÆÃ°   –6öç7B7F–öä'•&ö÷BÒ7F–öç4f÷$6Æ—æ7F–öä'•&ö÷BÀ —&ö÷EWV–BÒ‚7F–öâåöÆö6Å&ö÷BÇÂF†—2å÷&ö÷B’çWV–C°  –FVÆWFR7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚¶æ÷vä7F–öç4f÷$6Æ—æÆVæwF‚ÓÓÒ’°  –FVÆWFR7F–öç4'”6Æ—²6Æ—WV–BÓ°  —Ð  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ“°  —Ð  •÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ’°  –6öç7B&–æF–æw2Ò7F–öâå÷&÷W'G”&–æF–æw3°  –f÷"‚ÆWB’ÒÂâÒ&–æF–æw2æÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B&–æF–ærÒ&–æF–æw5²’Ó°  ––b‚ÒÒ&–æF–ærç&VfW&Væ6T6÷VçBÓÓÒ’°  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —Ð  •öÆVæD7F–öâ‚7F–öâ’°  ’òò²7F—fR7F–öç2Â–æ7F—fR7F–öç2Ð ’òò²7F—fR7F–öç2çÂ–æ7F—fR7F–öç2Ð ’òò2 ’òòÂ×7vÓà ’òò0  –6öç7B7F–öç2ÒF†—2åö7F–öç2À —&Wd–æFW‚Ò7F–öâåö66†T–æFW‚À  –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT7F–öç2²²À  –f—'7D–æ7F—fT7F–öâÒ7F–öç5²Æ7D7F—fT–æFW‚Ó°  –7F–öâåö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° –7F–öç5²Æ7D7F—fT–æFW‚ÒÒ7F–öã°  –f—'7D–æ7F—fT7F–öâåö66†T–æFW‚Ò&Wd–æFWƒ° –7F–öç5²&Wd–æFW‚ÒÒf—'7D–æ7F—fT7F–öã°  —Ð  •÷F¶T&6´7F–öâ‚7F–öâ’°  ’òò²7F—fR7F–öç2Â–æ7F—fR7F–öç2Ð ’òò²7F—fR7F–öç2ÃÂ–æ7F—fR7F–öç2Ð ’òò0 ’òòÂ×7vÓà ’òò2  –6öç7B7F–öç2ÒF†—2åö7F–öç2À —&Wd–æFW‚Ò7F–öâåö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT7F–öç2À  –Æ7D7F—fT7F–öâÒ7F–öç5²f—'7D–æ7F—fT–æFW‚Ó°  –7F–öâåö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° –7F–öç5²f—'7D–æ7F—fT–æFW‚ÒÒ7F–öã°  –Æ7D7F—fT7F–öâåö66†T–æFW‚Ò&Wd–æFWƒ° –7F–öç5²&Wd–æFW‚ÒÒÆ7D7F—fT7F–öã°  —Ð  ’òòÖVÖ÷'’ÖævVÖVçBf÷"&÷W'G”Ö—†W"ö&¦V7G0  •öFD–æ7F—fT&–æF–ær‚&–æF–ærÂ&ö÷EWV–BÂG&6´æÖR’°  –6öç7B&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æw2ÒF†—2åö&–æF–æw3°  –ÆWB&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æt'”æÖRÓÓÒVæFVf–æVB’°  –&–æF–æt'”æÖRÒ·Ó° –&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÒ&–æF–æt'”æÖS°  —Ð  –&–æF–æt'”æÖU²G&6´æÖRÒÒ&–æF–æs°  –&–æF–æråö66†T–æFW‚Ò&–æF–æw2æÆVæwFƒ° –&–æF–æw2çW6‚‚&–æF–ær“°  —Ð  •÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&÷&–æF–ærÒ&–æF–æræ&–æF–ærÀ —&ö÷EWV–BÒ&÷&–æF–ærç&ö÷DæöFRçWV–BÀ —G&6´æÖRÒ&÷&–æF–ærçF‚À –&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÒÀ  –Æ7D–æ7F—fT&–æF–ærÒ&–æF–æw5²&–æF–æw2æÆVæwF‚ÒÒÀ –66†T–æFW‚Ò&–æF–æråö66†T–æFWƒ°  –Æ7D–æ7F—fT&–æF–æråö66†T–æFW‚Ò66†T–æFWƒ° –&–æF–æw5²66†T–æFW‚ÒÒÆ7D–æ7F—fT&–æF–æs° –&–æF–æw2ç÷‚“°  –FVÆWFR&–æF–æt'”æÖU²G&6´æÖRÓ°  ––b‚ö&¦V7Bæ¶W—2‚&–æF–æt'”æÖR’æÆVæwF‚ÓÓÒ’°  –FVÆWFR&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  —Ð  —Ð  •öÆVæD&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&Wd–æFW‚Ò&–æF–æråö66†T–æFW‚À  –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT&–æF–æw2²²À  –f—'7D–æ7F—fT&–æF–ærÒ&–æF–æw5²Æ7D7F—fT–æFW‚Ó°  –&–æF–æråö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° –&–æF–æw5²Æ7D7F—fT–æFW‚ÒÒ&–æF–æs°  –f—'7D–æ7F—fT&–æF–æråö66†T–æFW‚Ò&Wd–æFWƒ° –&–æF–æw5²&Wd–æFW‚ÒÒf—'7D–æ7F—fT&–æF–æs°  —Ð  •÷F¶T&6´&–æF–ær‚&–æF–ær’°  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À —&Wd–æFW‚Ò&–æF–æråö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT&–æF–æw2À  –Æ7D7F—fT&–æF–ærÒ&–æF–æw5²f—'7D–æ7F—fT–æFW‚Ó°  –&–æF–æråö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° –&–æF–æw5²f—'7D–æ7F—fT–æFW‚ÒÒ&–æF–æs°  –Æ7D7F—fT&–æF–æråö66†T–æFW‚Ò&Wd–æFWƒ° –&–æF–æw5²&Wd–æFW‚ÒÒÆ7D7F—fT&–æF–æs°  —Ð   ’òòÖVÖ÷'’ÖævVÖVçBöb–çFW'öÆçG2f÷"vV–v‡BæBF–ÖR66ÆP  •öÆVæD6öçG&öÄ–çFW'öÆçB‚’°  –6öç7B–çFW'öÆçG2ÒF†—2åö6öçG&öÄ–çFW'öÆçG2À –Æ7D7F—fT–æFW‚ÒF†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2²³°  –ÆWB–çFW'öÆçBÒ–çFW'öÆçG5²Æ7D7F—fT–æFW‚Ó°  ––b‚–çFW'öÆçBÓÓÒVæFVf–æVB’°  ––çFW'öÆçBÒæWrÆ–æV$–çFW'öÆçB€ –æWrfÆöC3$'&’‚"’ÂæWrfÆöC3$'&’‚"’À “Âö6öçG&öÄ–çFW'öÆçG5&W7VÇD'VffW"“°  ––çFW'öÆçBåõö66†T–æFW‚ÒÆ7D7F—fT–æFWƒ° ––çFW'öÆçG5²Æ7D7F—fT–æFW‚ÒÒ–çFW'öÆçC°  —Ð  —&WGW&â–çFW'öÆçC°  —Ð  •÷F¶T&6´6öçG&öÄ–çFW'öÆçB‚–çFW'öÆçB’°  –6öç7B–çFW'öÆçG2ÒF†—2åö6öçG&öÄ–çFW'öÆçG2À —&Wd–æFW‚Ò–çFW'öÆçBåõö66†T–æFW‚À  –f—'7D–æ7F—fT–æFW‚ÒÒÒF†—2åöä7F—fT6öçG&öÄ–çFW'öÆçG2À  –Æ7D7F—fT–çFW'öÆçBÒ–çFW'öÆçG5²f—'7D–æ7F—fT–æFW‚Ó°  ––çFW'öÆçBåõö66†T–æFW‚Òf—'7D–æ7F—fT–æFWƒ° ––çFW'öÆçG5²f—'7D–æ7F—fT–æFW‚ÒÒ–çFW'öÆçC°  –Æ7D7F—fT–çFW'öÆçBåõö66†T–æFW‚Ò&Wd–æFWƒ° ––çFW'öÆçG5²&Wd–æFW‚ÒÒÆ7D7F—fT–çFW'öÆçC°  —Ð  ’ò¢  ’¢&WGW&ç2â–ç7Fæ6Röb´Æ–æ²æ–ÖF–öä7F–öçÒf÷"F†R76VB6Æ—à ’  ’¢–bâ7F–öâf—GF–ærF†R6Æ—æB&ö÷B&ÖWFW'2FöW6âwB–WBW†—7BÂ—@ ’¢v–ÆÂ&R7&VFVB'’F†—2ÖWF†öBâ6ÆÆ–ærF†—2ÖWF†öB6WfW&ÂF–ÖW2v—F‚F†P ’¢6ÖR6Æ—æB&ö÷B&ÖWFW'2Çv—2&WGW&ç2F†R6ÖR7F–öâà ’  ’¢&Ò´æ–ÖF–öä6Æ—Ç7G&–æwÒ6Æ—Òâæ–ÖF–öâ6Æ—÷"ÇFW&æF—fVÇ’F†RæÖRöbF†Ræ–ÖF–öâ6Æ—à ’¢&Ò´ö&¦V7C4GÒ¶÷F–öæÅ&ö÷EÒÒâÇFW&æF—fR&ö÷Bö&¦V7Bà ’¢&Ò²„æ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFWÄFF—F—fTæ–ÖF–öä&ÆVæDÖöFR—Ò¶&ÆVæDÖöFUÒÒF†R&ÆVæBÖöFRà ’¢&WGW&â³ôæ–ÖF–öä7F–öçÒF†Ræ–ÖF–öâ7F–öâà ’¢ð –6Æ—7F–öâ‚6Æ—Â÷F–öæÅ&ö÷BÂ&ÆVæDÖöFR’°  –6öç7B&ö÷BÒ÷F–öæÅ&ö÷BÇÂF†—2å÷&ö÷BÀ —&ö÷EWV–BÒ&ö÷BçWV–C°  –ÆWB6Æ—ö&¦V7BÒG—Vöb6Æ—ÓÓÒw7G&–ærròæ–ÖF–öä6Æ—æf–æD'”æÖR‚&ö÷BÂ6Æ—’¢6Æ—°  –6öç7B6Æ—WV–BÒ6Æ—ö&¦V7BÓÒçVÆÂò6Æ—ö&¦V7BçWV–B¢6Æ—°  –6öç7B7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ° –ÆWB&÷F÷G—T7F–öâÒçVÆÃ°  ––b‚&ÆVæDÖöFRÓÓÒVæFVf–æVB’°  ––b‚6Æ—ö&¦V7BÓÒçVÆÂ’°  –&ÆVæDÖöFRÒ6Æ—ö&¦V7Bæ&ÆVæDÖöFS°  —ÒVÇ6R°  –&ÆVæDÖöFRÒæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFS°  —Ð  —Ð  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  –6öç7BW†—7F–æt7F–öâÒ7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚W†—7F–æt7F–öâÓÒVæFVf–æVBbbW†—7F–æt7F–öâæ&ÆVæDÖöFRÓÓÒ&ÆVæDÖöFR’°  —&WGW&âW†—7F–æt7F–öã°  —Ð  ’òòvR¶æ÷rF†R6Æ—Â6òvRFöâwB†fRFò'6RÆÀ ’òòF†R&–æF–æw2v–â'WB6â§W7B6÷ —&÷F÷G—T7F–öâÒ7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç5²Ó°  ’òòÇ6òÂF¶RF†R6Æ—g&öÒF†R&÷F÷G—R7F–öà ––b‚6Æ—ö&¦V7BÓÓÒçVÆÂ –6Æ—ö&¦V7BÒ&÷F÷G—T7F–öâåö6Æ—°  —Ð  ’òò6Æ—×W7B&R¶æ÷vâv†Vâ7V6–f–VBf–7G&–æp ––b‚6Æ—ö&¦V7BÓÓÒçVÆÂ’&WGW&âçVÆÃ°  ’òòÆÆö6FRÆÂ&W6÷W&6W2&WV—&VBFò'Vâ—@ –6öç7BæWt7F–öâÒæWræ–ÖF–öä7F–öâ‚F†—2Â6Æ—ö&¦V7BÂ÷F–öæÅ&ö÷BÂ&ÆVæDÖöFR“°  —F†—2åö&–æD7F–öâ‚æWt7F–öâÂ&÷F÷G—T7F–öâ“°  ’òòæBÖ¶RF†R7F–öâ¶æ÷vâFòF†RÖVÖ÷'’ÖævW  —F†—2åöFD–æ7F—fT7F–öâ‚æWt7F–öâÂ6Æ—WV–BÂ&ö÷EWV–B“°  —&WGW&âæWt7F–öã°  —Ð  ’ò¢  ’¢&WGW&ç2âW†—7F–æræ–ÖF–öâ7F–öâf÷"F†R76VB6Æ—à ’  ’¢&Ò´æ–ÖF–öä6Æ—Ç7G&–æwÒ6Æ—Òâæ–ÖF–öâ6Æ—÷"ÇFW&æF—fVÇ’F†RæÖRöbF†Ræ–ÖF–öâ6Æ—à ’¢&Ò´ö&¦V7C4GÒ¶÷F–öæÅ&ö÷EÒÒâÇFW&æF—fR&ö÷Bö&¦V7Bà ’¢&WGW&â³ôæ–ÖF–öä7F–öçÒF†Ræ–ÖF–öâ7F–öââ&WGW&ç2çVÆÆ–bæò7F–öâv2f÷VæBà ’¢ð –W†—7F–æt7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B’°  –6öç7B&ö÷BÒ÷F–öæÅ&ö÷BÇÂF†—2å÷&ö÷BÀ —&ö÷EWV–BÒ&ö÷BçWV–BÀ  –6Æ—ö&¦V7BÒG—Vöb6Æ—ÓÓÒw7G&–ærrð ”æ–ÖF–öä6Æ—æf–æD'”æÖR‚&ö÷BÂ6Æ—’¢6Æ—À  –6Æ—WV–BÒ6Æ—ö&¦V7Bò6Æ—ö&¦V7BçWV–B¢6Æ—À  –7F–öç4f÷$6Æ—ÒF†—2åö7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  —&WGW&â7F–öç4f÷$6Æ—æ7F–öä'•&ö÷E²&ö÷EWV–BÒÇÂçVÆÃ°  —Ð  —&WGW&âçVÆÃ°  —Ð  ’ò¢  ’¢FV7F—fFW2ÆÂ&Wf–÷W6Ç’66†VGVÆVB7F–öç2öâF†—2Ö—†W"à ’  ’¢&WGW&â´æ–ÖF–öäÖ—†W'Ò&VfW&Væ6RFòF†’æ–ÖF–öâÖ—†W"à ’¢ð —7F÷ÆÄ7F–öâ‚’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –ä7F–öç2ÒF†—2åöä7F—fT7F–öç3°  –f÷"‚ÆWB’Òä7F–öç2Ò²’ãÒ²ÒÒ’’°  –7F–öç5²’Òç7F÷‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢Gfæ6W2F†RvÆö&ÂÖ—†W"F–ÖRæBWFFW2F†Ræ–ÖF–öâà ’  ’¢F†—2—2W7VÆÇ’FöæR–âF†R&VæFW"Æö÷'’76–ærF†RFVÇF ’¢F–ÖRg&öÒ´Æ–æ²6Æö6·Ò÷"´Æ–æ²F–ÖW'Òà ’  ’¢&Ò¶çVÖ&W'ÒFVÇFF–ÖRÒF†RFVÇFF–ÖR–â6V6öæG2à ’¢&WGW&â´æ–ÖF–öäÖ—†W'Ò&VfW&Væ6RFòF†’æ–ÖF–öâÖ—†W"à ’¢ð —WFFR‚FVÇFF–ÖR’°  –FVÇFF–ÖR£ÒF†—2çF–ÖU66ÆS°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –ä7F–öç2ÒF†—2åöä7F—fT7F–öç2À  —F–ÖRÒF†—2çF–ÖR³ÒFVÇFF–ÖRÀ —F–ÖTF—&V7F–öâÒÖF‚ç6–vâ‚FVÇFF–ÖR’À  –67T–æFW‚ÒF†—2åö67T–æFW‚ãÒ°  ’òò'Vâ7F—fR7F–öç0  –f÷"‚ÆWB’Ò²’ÓÒä7F–öç3²²²’’°  –6öç7B7F–öâÒ7F–öç5²’Ó°  –7F–öâå÷WFFR‚F–ÖRÂFVÇFF–ÖRÂF–ÖTF—&V7F–öâÂ67T–æFW‚“°  —Ð  ’òòWFFR66VæRw&€  –6öç7B&–æF–æw2ÒF†—2åö&–æF–æw2À –ä&–æF–æw2ÒF†—2åöä7F—fT&–æF–æw3°  –f÷"‚ÆWB’Ò²’ÓÒä&–æF–æw3²²²’’°  –&–æF–æw5²’ÒæÇ’‚67T–æFW‚“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RvÆö&ÂÖ—†W"Fò7V6–f–2F–ÖRæBWFFW2F†Ræ–ÖF–öâ66÷&F–ævÇ’à ’  ’¢F†—2—2W6VgVÂv†Vâ–÷RæVVBFò§V×FòâW†7BF–ÖR–ââæ–ÖF–öââF†P ’¢–çWB&ÖWFW"v–ÆÂ&R66ÆVB'’´Æ–æ²æ–ÖF–öäÖ—†W"7F–ÖU66ÆWÐ ’  ’¢&Ò¶çVÖ&W'ÒF–ÖRÒF†RF–ÖRFò6WB–â6V6öæG2à ’¢&WGW&â´æ–ÖF–öäÖ—†W'Ò&VfW&Væ6RFòF†’æ–ÖF–öâÖ—†W"à ’¢ð —6WEF–ÖR‚F–ÖR’°  —F†—2çF–ÖRÒ²òò¦W&ò÷WBF–ÖRGG&–'WFRf÷"æ–ÖF–öäÖ—†W"ö&¦V7C° –f÷"‚ÆWB’Ò²’ÂF†—2åö7F–öç2æÆVæwFƒ²’²²’°  —F†—2åö7F–öç5²’ÒçF–ÖRÒ²òò¦W&ò÷WBF–ÖRGG&–'WFRf÷"ÆÂ76ö6–FVBæ–ÖF–öä7F–öâö&¦V7G2à  —Ð  —&WGW&âF†—2çWFFR‚F–ÖR“²òòWFFRW6VBFò6WBW†7BF–ÖRâ&WGW&ç2'F†—2"æ–ÖF–öäÖ—†W"ö&¦V7Bà  —Ð  ’ò¢  ’¢&WGW&ç2F†—2Ö—†W"w2&ö÷Bö&¦V7Bà ’  ’¢&WGW&â´ö&¦V7C4GÒF†RÖ—†W"w2&ö÷Bö&¦V7Bà ’¢ð –vWE&ö÷B‚’°  —&WGW&âF†—2å÷&ö÷C°  —Ð  ’ò¢  ’¢FVÆÆö6FW2ÆÂÖVÖ÷'’&W6÷W&6W2f÷"6Æ—â&Vf÷&RW6–ærF†—2ÖWF†öBÖ¶P ’¢7W&RFò6ÆÂ´Æ–æ²æ–ÖF–öä7F–öâ77F÷Òf÷"ÆÂ&VÆFVB7F–öç2à ’  ’¢&Ò´æ–ÖF–öä6Æ—Ò6Æ—ÒF†R6Æ—FòVæ66†Rà ’¢ð —Væ66†T6Æ—‚6Æ—’°  –6öç7B7F–öç2ÒF†—2åö7F–öç2À –6Æ—WV–BÒ6Æ—çWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—À –7F–öç4f÷$6Æ—Ò7F–öç4'”6Æ—²6Æ—WV–BÓ°  ––b‚7F–öç4f÷$6Æ—ÓÒVæFVf–æVB’°  ’òòæ÷FS¢§W7B6ÆÆ–ær÷&VÖ÷fT–æ7F—fT7F–öâv÷VÆBÖW72WF†P ’òò—FW&F–öâ7FFRæBÇ6ò&WV—&RWFF–ærF†R7FFRvR6à ’òò§W7BF‡&÷rv  –6öç7B7F–öç5Fõ&VÖ÷fRÒ7F–öç4f÷$6Æ—æ¶æ÷vä7F–öç3°  –f÷"‚ÆWB’ÒÂâÒ7F–öç5Fõ&VÖ÷fRæÆVæwFƒ²’ÓÒã²²²’’°  –6öç7B7F–öâÒ7F–öç5Fõ&VÖ÷fU²’Ó°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“°  –6öç7B66†T–æFW‚Ò7F–öâåö66†T–æFW‚À –Æ7D–æ7F—fT7F–öâÒ7F–öç5²7F–öç2æÆVæwF‚ÒÓ°  –7F–öâåö66†T–æFW‚ÒçVÆÃ° –7F–öâåö'”6Æ—66†T–æFW‚ÒçVÆÃ°  –Æ7D–æ7F—fT7F–öâåö66†T–æFW‚Ò66†T–æFWƒ° –7F–öç5²66†T–æFW‚ÒÒÆ7D–æ7F—fT7F–öã° –7F–öç2ç÷‚“°  —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–æw4f÷$7F–öâ‚7F–öâ“°  —Ð  –FVÆWFR7F–öç4'”6Æ—²6Æ—WV–BÓ°  —Ð  —Ð  ’ò¢  ’¢FVÆÆö6FW2ÆÂÖVÖ÷'’&W6÷W&6W2f÷"&ö÷Bö&¦V7Bâ&Vf÷&RW6–ærF†—0 ’¢ÖWF†öBÖ¶R7W&RFò6ÆÂ´Æ–æ²æ–ÖF–öä7F–öâ77F÷Òf÷"ÆÂ&VÆFV@ ’¢7F–öç2÷"ÇFW&æF—fVÇ’´Æ–æ²æ–ÖF–öäÖ—†W"77F÷ÆÄ7F–öçÒv†VâF†P ’¢Ö—†W"÷W&FW2öâ6–ævÆR&ö÷Bà ’  ’¢&Ò´ö&¦V7C4GÒ&ö÷BÒF†R&ö÷Bö&¦V7BFòVæ66†Rà ’¢ð —Væ66†U&ö÷B‚&ö÷B’°  –6öç7B&ö÷EWV–BÒ&ö÷BçWV–BÀ –7F–öç4'”6Æ—ÒF†—2åö7F–öç4'”6Æ—°  –f÷"‚6öç7B6Æ—WV–B–â7F–öç4'”6Æ—’°  –6öç7B7F–öä'•&ö÷BÒ7F–öç4'”6Æ—²6Æ—WV–BÒæ7F–öä'•&ö÷BÀ –7F–öâÒ7F–öä'•&ö÷E²&ö÷EWV–BÓ°  ––b‚7F–öâÓÒVæFVf–æVB’°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“° —F†—2å÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ“°  —Ð  —Ð  –6öç7B&–æF–æw4'•&ö÷BÒF†—2åö&–æF–æw4'•&ö÷DæDæÖRÀ –&–æF–æt'”æÖRÒ&–æF–æw4'•&ö÷E²&ö÷EWV–BÓ°  ––b‚&–æF–æt'”æÖRÓÒVæFVf–æVB’°  –f÷"‚6öç7BG&6´æÖR–â&–æF–æt'”æÖR’°  –6öç7B&–æF–ærÒ&–æF–æt'”æÖU²G&6´æÖRÓ° –&–æF–ærç&W7F÷&T÷&–v–æÅ7FFR‚“° —F†—2å÷&VÖ÷fT–æ7F—fT&–æF–ær‚&–æF–ær“°  —Ð  —Ð  —Ð  ’ò¢  ’¢FVÆÆö6FW2ÆÂÖVÖ÷'’&W6÷W&6W2f÷"â7F–öââF†R7F–öâ—2–FVçF–f–VB'’F†P ’¢v—fVâ6Æ—æBâ÷F–öæÂ&ö÷Bö&¦V7Bâ&Vf÷&RW6–ærF†—2ÖWF†öBÖ¶P ’¢7W&RFò6ÆÂ´Æ–æ²æ–ÖF–öä7F–öâ77F÷ÒFòFV7F—fFRF†R7F–öâà ’  ’¢&Ò´æ–ÖF–öä6Æ—Ç7G&–æwÒ6Æ—Òâæ–ÖF–öâ6Æ—÷"ÇFW&æF—fVÇ’F†RæÖRöbF†Ræ–ÖF–öâ6Æ—à ’¢&Ò´ö&¦V7C4GÒ¶÷F–öæÅ&ö÷EÒÒâÇFW&æF—fR&ö÷Bö&¦V7Bà ’¢ð —Væ66†T7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B’°  –6öç7B7F–öâÒF†—2æW†—7F–æt7F–öâ‚6Æ—Â÷F–öæÅ&ö÷B“°  ––b‚7F–öâÓÒçVÆÂ’°  —F†—2åöFV7F—fFT7F–öâ‚7F–öâ“° —F†—2å÷&VÖ÷fT–æ7F—fT7F–öâ‚7F–öâ“°  —Ð  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG24B&VæFW"F&vWBà¢ ¢¢VvÖVçG2&VæFW%F&vW@¢¢ð¦6Æ72&VæFW%F&vWC4BW‡FVæG2&VæFW%F&vWB°  ’ò¢  ’¢6öç7G'V7G2æWr4B&VæFW"F&vWBà ’  ’¢&Ò¶çVÖ&W'Ò·v–GFƒÓÒÒF†Rv–GF‚öbF†R&VæFW"F&vWBà ’¢&Ò¶çVÖ&W'Ò¶†V–v‡CÓÒÒF†R†V–v‡BöbF†R&VæFW"F&vWBà ’¢&Ò¶çVÖ&W'Ò¶FWFƒÓÒÒF†R†V–v‡BöbF†R&VæFW"F&vWBà ’¢&Òµ&VæFW%F&vWGä÷F–öç7Ò¶÷F–öç5ÒÒF†R6öæf–wW&F–öâö&¦V7Bà ’¢ð –6öç7G'V7F÷"‚v–GF‚ÒÂ†V–v‡BÒÂFWF‚ÒÂ÷F–öç2Ò·Ò’°  —7WW"‚v–GF‚Â†V–v‡BÂ÷F–öç2“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—5&VæFW%F&vWC4BÒG'VS°  —F†—2æFWF‚ÒFWFƒ°  ’ò¢  ’¢÷fW'w&—GFVâv—F‚F–ffW&VçBFW‡GW&RG—Rà ’  ’¢G—R´FF4EFW‡GW&WÐ ’¢ð —F†—2çFW‡GW&RÒæWrFF4EFW‡GW&R‚çVÆÂÂv–GF‚Â†V–v‡BÂFWF‚“° —F†—2å÷6WEFW‡GW&T÷F–öç2‚÷F–öç2“°  —F†—2çFW‡GW&Ræ—5&VæFW%F&vWEFW‡GW&RÒG'VS°  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2Væ–f÷&Òv†–6‚—2vÆö&Â6†FW"f&–&ÆRâF†W’&R76VBFò6†FW"&öw&×2à¢ ¢¢v†VâFV6Æ&–ærVæ–f÷&Òöb´Æ–æ²6†FW$ÖFW&–ÇÒÂ—B—2FV6Æ&VB'’fÇVR÷"'’ö&¦V7Bà¢¢§0¢¢Væ–f÷&×3¢°¢¢ —F–ÖS¢²fÇVS¢ãÒÀ¢¢ —&W6öÇWF–öã¢æWrVæ–f÷&Ò‚æWrfV7F÷#"‚’¢¢Ó°¢¢ ¢¢6–æ6RF†—26Æ726âöæÇ’&RW6VB–â6öçFW‡Böb´Æ–æ²6†FW$ÖFW&–ÇÒÂ—B—2öæÇ’7W÷'FV@¢¢–â´Æ–æ²vV$tÅ&VæFW&W'Òà¢¢ð¦6Æ72Væ–f÷&Ò°  ’ò¢  ’¢6öç7G'V7G2æWrVæ–f÷&Òà ’  ’¢&Ò¶ç—ÒfÇVRÒF†RVæ–f÷&ÒfÇVRà ’¢ð –6öç7G'V7F÷"‚fÇVR’°  ’ò¢  ’¢F†RVæ–f÷&ÒfÇVRà ’  ’¢G—R¶ç—Ð ’¢ð —F†—2çfÇVRÒfÇVS°  —Ð  ’ò¢  ’¢&WGW&ç2æWrVæ–f÷&Òv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’¢–bF†RfÇVR†26ÆöæR‚–ÖWF†öBÂF†RfÇVR—26ÆöæVB2vVÆÂà ’  ’¢&WGW&âµVæ–f÷&×Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrVæ–f÷&Ò‚F†—2çfÇVRæ6ÆöæRÓÓÒVæFVf–æVBòF†—2çfÇVR¢F†—2çfÇVRæ6ÆöæR‚’“°  —Ð §Ð ¦ÆWBö–BÒ° ¢ò¢ ¢¢6Æ72f÷"Öæv–ær×VÇF—ÆRVæ–f÷&×2–â6–ævÆRw&÷WâF†R&VæFW&W"v–ÆÂ&ö6W70¢¢7V6‚FVf–æ—F–öâ26–ævÆRT$òà¢ ¢¢6–æ6RF†—26Æ726âöæÇ’&RW6VB–â6öçFW‡Böb´Æ–æ²6†FW$ÖFW&–ÇÒÂ—B—2öæÇ’7W÷'FV@¢¢–â´Æ–æ²vV$tÅ&VæFW&W'Òà¢ ¢¢VvÖVçG2WfVçDF—7F6†W ¢¢ð¦6Æ72Væ–f÷&×4w&÷WW‡FVæG2WfVçDF—7F6†W"°  ’ò¢  ’¢6öç7G'V7G2æWrVæ–f÷&×2w&÷Wà ’¢ð –6öç7G'V7F÷"‚’°  —7WW"‚“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—5Væ–f÷&×4w&÷WÒG'VS°  ’ò¢  ’¢F†R”BöbF†R4Bö&¦V7Bà ’  ’¢æÖRVæ–f÷&×4w&÷W6–@ ’¢G—R¶çVÖ&W'Ð ’¢&VFöæÇ ’¢ð ”ö&¦V7BæFVf–æU&÷W'G’‚F†—2Âv–BrÂ²fÇVS¢ö–B²²Ò“°  ’ò¢  ’¢F†RæÖRöbF†RVæ–f÷&×2w&÷Wà ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2ææÖRÒrs°  ’ò¢  ’¢F†R'VffW"W6vRà ’  ’¢G—R²…7FF–4G&uW6vWÄG–æÖ–4G&uW6vWÅ7G&VÔG&uW6vWÅ7FF–5&VEW6vWÄG–æÖ–5&VEW6vWÅ7G&VÕ&VEW6vWÅ7FF–46÷•W6vWÄG–æÖ–46÷•W6vWÅ7G&VÔ6÷•W6vR—Ð ’¢FVfVÇB7FF–4G&uW6vP ’¢ð —F†—2çW6vRÒ7FF–4G&uW6vS°  ’ò¢  ’¢â'&’†öÆF–ærF†RVæ–f÷&×2à ’  ’¢G—R´'&“ÅVæ–f÷&ÓçÐ ’¢ð —F†—2çVæ–f÷&×2ÒµÓ°  —Ð  ’ò¢  ’¢FG2F†Rv—fVâVæ–f÷&ÒFòF†—2Væ–f÷&×2w&÷Wà ’  ’¢&ÒµVæ–f÷&×ÒVæ–f÷&ÒÒF†RVæ–f÷&ÒFòFBà ’¢&WGW&âµVæ–f÷&×4w&÷WÒ&VfW&Væ6RFòF†—2Væ–f÷&×2w&÷Wà ’¢ð –FB‚Væ–f÷&Ò’°  —F†—2çVæ–f÷&×2çW6‚‚Væ–f÷&Ò“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&VÖ÷fW2F†Rv—fVâVæ–f÷&Òg&öÒF†—2Væ–f÷&×2w&÷Wà ’  ’¢&ÒµVæ–f÷&×ÒVæ–f÷&ÒÒF†RVæ–f÷&ÒFò&VÖ÷fRà ’¢&WGW&âµVæ–f÷&×4w&÷WÒ&VfW&Væ6RFòF†—2Væ–f÷&×2w&÷Wà ’¢ð —&VÖ÷fR‚Væ–f÷&Ò’°  –6öç7B–æFW‚ÒF†—2çVæ–f÷&×2æ–æFW„öb‚Væ–f÷&Ò“°  ––b‚–æFW‚ÓÒÓ’F†—2çVæ–f÷&×2ç7Æ–6R‚–æFW‚Â“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RæÖRöbF†—2Væ–f÷&×2w&÷Wà ’  ’¢&Ò·7G&–æwÒæÖRÒF†RæÖRFò6WBà ’¢&WGW&âµVæ–f÷&×4w&÷WÒ&VfW&Væ6RFòF†—2Væ–f÷&×2w&÷Wà ’¢ð —6WDæÖR‚æÖR’°  —F†—2ææÖRÒæÖS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RW6vRöbF†—2Væ–f÷&×2w&÷Wà ’  ’¢&Ò²…7FF–4G&uW6vWÄG–æÖ–4G&uW6vWÅ7G&VÔG&uW6vWÅ7FF–5&VEW6vWÄG–æÖ–5&VEW6vWÅ7G&VÕ&VEW6vWÅ7FF–46÷•W6vWÄG–æÖ–46÷•W6vWÅ7G&VÔ6÷•W6vR—ÒfÇVRÒF†RW6vRFò6WBà ’¢&WGW&âµVæ–f÷&×4w&÷WÒ&VfW&Væ6RFòF†—2Væ–f÷&×2w&÷Wà ’¢ð —6WEW6vR‚fÇVR’°  —F†—2çW6vRÒfÇVS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’  ’¢f—&W2FW‡GW&R6F—7÷6P ’¢ð –F—7÷6R‚’°  —F†—2æF—7F6„WfVçB‚²G—S¢vF—7÷6RrÒ“°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâVæ–f÷&×2w&÷WFòF†—2–ç7Fæ6Rà ’  ’¢&ÒµVæ–f÷&×4w&÷WÒ6÷W&6RÒF†RVæ–f÷&×2w&÷WFò6÷’à ’¢&WGW&âµVæ–f÷&×4w&÷WÒ&VfW&Væ6RFòF†—2Væ–f÷&×2w&÷Wà ’¢ð –6÷’‚6÷W&6R’°  —F†—2ææÖRÒ6÷W&6RææÖS° —F†—2çW6vRÒ6÷W&6RçW6vS°  –6öç7BVæ–f÷&×56÷W&6RÒ6÷W&6RçVæ–f÷&×3°  —F†—2çVæ–f÷&×2æÆVæwF‚Ò°  –f÷"‚ÆWB’ÒÂÂÒVæ–f÷&×56÷W&6RæÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BVæ–f÷&×2Ò'&’æ—4'&’‚Væ–f÷&×56÷W&6U²’Ò’òVæ–f÷&×56÷W&6U²’Ò¢²Væ–f÷&×56÷W&6U²’ÒÓ°  –f÷"‚ÆWB¢Ò²¢ÂVæ–f÷&×2æÆVæwFƒ²¢²²’°  —F†—2çVæ–f÷&×2çW6‚‚Væ–f÷&×5²¢Òæ6ÆöæR‚’“°  —Ð  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWrVæ–f÷&×2w&÷Wv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&âµVæ–f÷&×4w&÷WÒ6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¢ò¢ ¢¢â–ç7Fæ6VBfW'6–öâöbâ–çFW&ÆVfVB'VffW"à¢ ¢¢VvÖVçG2–çFW&ÆVfVD'VffW ¢¢ð¦6Æ72–ç7Fæ6VD–çFW&ÆVfVD'VffW"W‡FVæG2–çFW&ÆVfVD'VffW"°  ’ò¢  ’¢6öç7G'V7G2æWr–ç7Fæ6VB–çFW&ÆVfVB'VffW"à ’  ’¢&ÒµG—VD'&—Ò'&’ÒG—VB'&’v—F‚6†&VB'VffW"7F÷&–ærGG&–'WFRFFà ’¢&Ò¶çVÖ&W'Ò7G&–FRÒF†RçVÖ&W"öbG—VBÖ'&’VÆVÖVçG2W"fW'FW‚à ’¢&Ò¶çVÖ&W'Ò¶ÖW6…W$GG&–'WFSÓÒÒFVf–æW2†÷rögFVâfÇVRöbF†—2–çFW&ÆVfVB'VffW"6†÷VÆB&R&WVFVBà ’¢ð –6öç7G'V7F÷"‚'&’Â7G&–FRÂÖW6…W$GG&–'WFRÒ’°  —7WW"‚'&’Â7G&–FR“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4–ç7Fæ6VD–çFW&ÆVfVD'VffW"ÒG'VS°  ’ò¢  ’¢FVf–æW2†÷rögFVâfÇVRöbF†—2'VffW"GG&–'WFR6†÷VÆB&R&WVFVBÀ ’¢6VR´Æ–æ²–ç7Fæ6VD'VffW$GG&–'WFR6ÖW6…W$GG&–'WFWÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2æÖW6…W$GG&–'WFRÒÖW6…W$GG&–'WFS°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6R“°  —F†—2æÖW6…W$GG&–'WFRÒ6÷W&6RæÖW6…W$GG&–'WFS°  —&WGW&âF†—3°  —Ð  –6ÆöæR‚FF’°  –6öç7B–"Ò7WW"æ6ÆöæR‚FF“°  ––"æÖW6…W$GG&–'WFRÒF†—2æÖW6…W$GG&–'WFS°  —&WGW&â–#°  —Ð  —Fô¥4ôâ‚FF’°  –6öç7B§6öâÒ7WW"çFô¥4ôâ‚FF“°  –§6öâæ—4–ç7Fæ6VD–çFW&ÆVfVD'VffW"ÒG'VS° –§6öâæÖW6…W$GG&–'WFRÒF†—2æÖW6…W$GG&–'WFS°  —&WGW&â§6öã°  —Ð §Ð ¢ò¢ ¢¢âÇFW&æF—fRfW'6–öâöb'VffW"GG&–'WFRv—F‚Ö÷&R6öçG&öÂ÷fW"F†Rd$òà¢ ¢¢F†R&VæFW&W"FöW2æ÷B6öç7G'V7Bd$òf÷"F†—2¶–æBöbGG&–'WFRâ–ç7FVBÂ—BW6W0¢¢v†FWfW"d$ò—276VB–â6öç7G'V7F÷"æB6âÆFW"&RÇFW&VBf–F†R'VffW&&÷W'G’à¢ ¢¢F†RÖ÷7B6öÖÖöâW6R66Rf÷"F†—26Æ72—2v†Vâ6öÖR¶–æBöbuuR6Æ7VÆF–öâ–çFW&fW&W0¢¢÷"WfVâ&öGV6W2F†Rd$÷2–âVW7F–öâà¢ ¢¢æ÷F–6RF†BF†—26Æ726âöæÇ’&RW6VBv—F‚´Æ–æ²vV$tÅ&VæFW&W'Òà¢¢ð¦6Æ72tÄ'VffW$GG&–'WFR°  ’ò¢  ’¢6öç7G'V7G2æWrtÂ'VffW"GG&–'WFRà ’  ’¢&ÒµvV$tÄ'VffW'Ò'VffW"ÒF†RæF—fRvV$tÂ'VffW"à ’¢&Ò¶çVÖ&W'ÒG—RÒF†RæF—fRFFG—R†RærâvÂädÄôF’à ’¢&Ò¶çVÖ&W'Ò—FVÕ6—¦RÒF†R—FVÒ6—¦Rà ’¢&Ò¶çVÖ&W'ÒVÆVÖVçE6—¦RÒF†R6÷'&W7öæF–ær6—¦R†–â'—FW2’f÷"F†Rv—fVâG—V&ÖWFW"à ’¢&Ò¶çVÖ&W'Ò6÷VçBÒF†RW‡V7FVBçVÖ&W"öbfW'F–6W2–âd$òà ’¢&Ò¶&ööÆVçÒ¶æ÷&ÖÆ—¦VCÖfÇ6UÒÒv†WF†W"F†RFF&Ræ÷&ÖÆ—¦VB÷"æ÷Bà ’¢ð –6öç7G'V7F÷"‚'VffW"ÂG—RÂ—FVÕ6—¦RÂVÆVÖVçE6—¦RÂ6÷VçBÂæ÷&ÖÆ—¦VBÒfÇ6R’°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4tÄ'VffW$GG&–'WFRÒG'VS°  ’ò¢  ’¢F†RæÖRöbF†R'VffW"GG&–'WFRà ’  ’¢G—R·7G&–æwÐ ’¢ð —F†—2ææÖRÒrs°  ’ò¢  ’¢F†RæF—fRvV$tÂ'VffW"à ’  ’¢G—RµvV$tÄ'VffW'Ð ’¢ð —F†—2æ'VffW"Ò'VffW#°  ’ò¢  ’¢F†RæF—fRFFG—Rà ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2çG—RÒG—S°  ’ò¢  ’¢F†R—FVÒ6—¦RÂ6VR´Æ–æ²'VffW$GG&–'WFR6—FVÕ6—¦WÒà ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2æ—FVÕ6—¦RÒ—FVÕ6—¦S°  ’ò¢  ’¢F†R6÷'&W7öæF–ær6—¦R†–â'—FW2’f÷"F†Rv—fVâG—V&ÖWFW"à ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2æVÆVÖVçE6—¦RÒVÆVÖVçE6—¦S°  ’ò¢  ’¢F†RW‡V7FVBçVÖ&W"öbfW'F–6W2–âd$òà ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2æ6÷VçBÒ6÷VçC°  ’ò¢  ’¢Æ–W2Fò–çFVvW"FFöæÇ’â–æF–6FW2†÷rF†RVæFW&Ç––ærFF–âF†R'VffW"Ö2Fð ’¢F†RfÇVW2–âF†RtÅ4Â6öFRâf÷"–ç7Fæ6RÂ–b'VffW&6öçF–ç2FFöbvÂåTå4”täTEõ4„õ%FÀ ’¢æBæ÷&ÖÆ—¦VF—2G'VVÂF†RfÇVW2Ò³cSS3V–âF†R'VffW"FFv–ÆÂ&RÖVBFð ’¢ãbÒ³ãf–âF†RtÅ4ÂGG&–'WFRâ–bæ÷&ÖÆ—¦VF—2fÇ6VÂF†RfÇVW2v–ÆÂ&R6öçfW'FV@ ’¢FòfÆöG2VæÖöF–f–VBÂ’æRâcSS3V&V6öÖW2cSS3Rãfà ’  ’¢G—R¶&ööÆVçÐ ’¢ð —F†—2ææ÷&ÖÆ—¦VBÒæ÷&ÖÆ—¦VC°  ’ò¢  ’¢fW'6–öâçVÖ&W"Â–æ7&VÖVçFVBWfW'’F–ÖRF†RæVVG5WFFV—26WBFòG'VVà ’  ’¢G—R¶çVÖ&W'Ð ’¢ð —F†—2çfW'6–öâÒ°  —Ð  ’ò¢  ’¢fÆrFò–æF–6FRF†BF†—2GG&–'WFR†26†ævVBæB6†÷VÆB&R&R×6VçBFð ’¢F†RuRâ6WBF†—2FòG'VVv†Vâ–÷RÖöF–g’F†RfÇVRöbF†R'&’à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBfÇ6P ’¢&Ò¶&ööÆVçÒfÇVP ’¢ð —6WBæVVG5WFFR‚fÇVR’°  ––b‚fÇVRÓÓÒG'VR’F†—2çfW'6–öâ²³°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâæF—fRvV$tÂ'VffW"à ’  ’¢&ÒµvV$tÄ'VffW'Ò'VffW"ÒF†R'VffW"Fò6WBà ’¢&WGW&â´'VffW$GG&–'WFWÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WD'VffW"‚'VffW"’°  —F†—2æ'VffW"Ò'VffW#°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâæF—fRFFG—RæBVÆVÖVçB6—¦Rà ’  ’¢&Ò¶çVÖ&W'ÒG—RÒF†RæF—fRFFG—R†RærâvÂädÄôF’à ’¢&Ò¶çVÖ&W'ÒVÆVÖVçE6—¦RÒF†R6÷'&W7öæF–ær6—¦R†–â'—FW2’f÷"F†Rv—fVâG—V&ÖWFW"à ’¢&WGW&â´'VffW$GG&–'WFWÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WEG—R‚G—RÂVÆVÖVçE6—¦R’°  —F†—2çG—RÒG—S° —F†—2æVÆVÖVçE6—¦RÒVÆVÖVçE6—¦S°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R—FVÒ6—¦Rà ’  ’¢&Ò¶çVÖ&W'Ò—FVÕ6—¦RÒF†R—FVÒ6—¦Rà ’¢&WGW&â´'VffW$GG&–'WFWÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WD—FVÕ6—¦R‚—FVÕ6—¦R’°  —F†—2æ—FVÕ6—¦RÒ—FVÕ6—¦S°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R6÷VçB‡F†RW‡V7FVBçVÖ&W"öbfW'F–6W2–âd$ò’à ’  ’¢&Ò¶çVÖ&W'Ò6÷VçBÒF†R6÷VçBà ’¢&WGW&â´'VffW$GG&–'WFWÒ&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WD6÷VçB‚6÷VçB’°  —F†—2æ6÷VçBÒ6÷VçC°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7BöÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“° ¢ò¢ ¢¢F†—26Æ72—2FW6–væVBFò76—7Bv—F‚&–67F–ærâ&–67F–ær—2W6VBf÷ ¢¢Ö÷W6R–6¶–ær‡v÷&¶–ær÷WBv†Bö&¦V7G2–âF†R6B76RF†RÖ÷W6R—2÷fW"¢¢Ööæw7B÷F†W"F†–æw2à¢¢ð¦6Æ72&–67FW"°  ’ò¢  ’¢6öç7G'V7G2æWr&–67FW"à ’  ’¢&ÒµfV7F÷#7Ò÷&–v–âÒF†R÷&–v–âfV7F÷"v†W&RF†R&’67G2g&öÒà ’¢&ÒµfV7F÷#7ÒF—&V7F–öâÒF†R†æ÷&ÖÆ—¦VB’F—&V7F–öâfV7F÷"F†Bv—fW2F—&V7F–öâFòF†R&’à ’¢&Ò¶çVÖ&W'Ò¶æV#ÓÒÒÆÂ&W7VÇG2&WGW&æVB&RgW'F†W"v’F†âæV"âæV"6âwB&RæVvF—fRà ’¢&Ò¶çVÖ&W'Ò¶f#Ô–æf–æ—G•ÒÒÆÂ&W7VÇG2&WGW&æVB&R6Æ÷6W"F†âf"âf"6âwB&RÆ÷vW"F†âæV"à ’¢ð –6öç7G'V7F÷"‚÷&–v–âÂF—&V7F–öâÂæV"ÒÂf"Ò–æf–æ—G’’°  ’ò¢  ’¢F†R&’W6VBf÷"&–67F–ærà ’  ’¢G—Rµ&—Ð ’¢ð —F†—2ç&’ÒæWr&’‚÷&–v–âÂF—&V7F–öâ“°  ’ò¢  ’¢ÆÂ&W7VÇG2&WGW&æVB&RgW'F†W"v’F†âæV"âæV"6âwB&RæVvF—fRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ææV"ÒæV#°  ’ò¢  ’¢ÆÂ&W7VÇG2&WGW&æVB&RgW'F†W"v’F†âæV"âæV"6âwB&RæVvF—fRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB–æf–æ—G ’¢ð —F†—2æf"Òf#°  ’ò¢  ’¢F†R6ÖW&FòW6Rv†Vâ&–67F–ærv–ç7Bf–WrÖFWVæFVçBö&¦V7G27V6‚0 ’¢&–ÆÆ&ö&FVBö&¦V7G2Æ–¶R7&—FW2âF†—2f–VÆB6â&R6WBÖçVÆÇ’÷  ’¢—26WBv†Vâ6ÆÆ–ær6WDg&öÔ6ÖW&‚–à ’  ’¢G—R³ô6ÖW&Ð ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æ6ÖW&ÒçVÆÃ°  ’ò¢  ’¢ÆÆ÷w2Fò6VÆV7F—fVÇ’–væ÷&R4Bö&¦V7G2v†VâW&f÷&Ö–ær–çFW'6V7F–öâFW7G2à ’¢F†RföÆÆ÷v–ær6öFRW†×ÆRVç7W&W2F†BöæÇ’4Bö&¦V7G2öâÆ–W"v–ÆÂ&P ’¢†öæ÷&VB'’&–67FW"à ’¢§0 ’¢&–67FW"æÆ–W'2ç6WB‚“° ’¢ö&¦V7BæÆ–W'2æVæ&ÆR‚“° ’¢  ’  ’¢G—R´Æ–W'7Ð ’¢ð —F†—2æÆ–W'2ÒæWrÆ–W'2‚“°   ’ò¢  ’¢&ÖWFW"ö&¦V7BF†B6öæf–wW&W2F†R&–67F–ærâ—B†2F†R7G'V7GW&S  ’  ’¢  ’¢° ’¢ ”ÖW6ƒ¢·ÒÀ ’¢ ”Æ–æS¢²F‡&W6†öÆC¢ÒÀ ’¢ ”ÄôC¢·ÒÀ ’¢ •ö–çG3¢²F‡&W6†öÆC¢ÒÀ ’¢ •7&—FS¢·Ð ’¢Ð ’¢  ’¢v†W&RF‡&W6†öÆF—2F†R&V6—6–öâöbF†R&–67FW"v†Vâ–çFW'6V7F–ærö&¦V7G2Â–âv÷&ÆBVæ—G2à ’  ’¢G—R´ö&¦V7GÐ ’¢ð —F†—2ç&×2Ò° ”ÖW6ƒ¢·ÒÀ ”Æ–æS¢²F‡&W6†öÆC¢ÒÀ ”ÄôC¢·ÒÀ •ö–çG3¢²F‡&W6†öÆC¢ÒÀ •7&—FS¢·Ð —Ó°  —Ð  ’ò¢  ’¢WFFW2F†R&’v—F‚æWr÷&–v–âæBF—&V7F–öâ'’6÷––ærF†RfÇVW2g&öÒF†R&wVÖVçG2à ’  ’¢&ÒµfV7F÷#7Ò÷&–v–âÒF†R÷&–v–âfV7F÷"v†W&RF†R&’67G2g&öÒà ’¢&ÒµfV7F÷#7ÒF—&V7F–öâÒF†R†æ÷&ÖÆ—¦VB’F—&V7F–öâfV7F÷"F†Bv—fW2F—&V7F–öâFòF†R&’à ’¢ð —6WB‚÷&–v–âÂF—&V7F–öâ’°  ’òòF—&V7F–öâ—277VÖVBFò&Ræ÷&ÖÆ—¦VB†f÷"67W&FRF—7Fæ6R6Æ7VÆF–öç2  —F†—2ç&’ç6WB‚÷&–v–âÂF—&V7F–öâ“°  —Ð  ’ò¢  ’¢W6W2F†Rv—fVâ6ö÷&F–æFW2æB6ÖW&Fò6ö×WFRæWr÷&–v–âæBF—&V7F–öâf÷"F†R–çFW&æÂ&’à ’  ’¢&ÒµfV7F÷#'Ò6ö÷&G2Ò$B6ö÷&F–æFW2öbF†RÖ÷W6RÂ–âæ÷&ÖÆ—¦VBFWf–6R6ö÷&F–æFW2„äD2’à ’¢‚æB’6ö×öæVçG26†÷VÆB&R&WGvVVâÓæBà ’¢&Ò´6ÖW&Ò6ÖW&ÒF†R6ÖW&g&öÒv†–6‚F†R&’6†÷VÆB÷&–v–æFRà ’¢ð —6WDg&öÔ6ÖW&‚6ö÷&G2Â6ÖW&’°  ––b‚6ÖW&æ—5W'7V7F—fT6ÖW&’°  —F†—2ç&’æ÷&–v–âç6WDg&öÔÖG&—…÷6—F–öâ‚6ÖW&æÖG&—…v÷&ÆB“° —F†—2ç&’æF—&V7F–öâç6WB‚6ö÷&G2ç‚Â6ö÷&G2ç’ÂãR’çVç&ö¦V7B‚6ÖW&’ç7V"‚F†—2ç&’æ÷&–v–â’ææ÷&ÖÆ—¦R‚“° —F†—2æ6ÖW&Ò6ÖW&°  —ÒVÇ6R–b‚6ÖW&æ—4÷'F†öw&†–46ÖW&’°  —F†—2ç&’æ÷&–v–âç6WB‚6ö÷&G2ç‚Â6ö÷&G2ç’Â‚6ÖW&ææV"²6ÖW&æf"’ò‚6ÖW&ææV"Ò6ÖW&æf"’’çVç&ö¦V7B‚6ÖW&“²òò6WB÷&–v–â–âÆæRöb6ÖW& —F†—2ç&’æF—&V7F–öâç6WB‚ÂÂÓ’çG&ç6f÷&ÔF—&V7F–öâ‚6ÖW&æÖG&—…v÷&ÆB“° —F†—2æ6ÖW&Ò6ÖW&°  —ÒVÇ6R°  –6öç6öÆRæW'&÷"‚uD…$TRå&–67FW#¢Vç7W÷'FVB6ÖW&G—S¢r²6ÖW&çG—R“°  —Ð  —Ð  ’ò¢  ’¢W6W2F†Rv—fVâvV%…"6öçG&öÆÆW"Fò6ö×WFRæWr÷&–v–âæBF—&V7F–öâf÷"F†R–çFW&æÂ&’à ’  ’¢&ÒµvV%…$6öçG&öÆÆW'Ò6öçG&öÆÆW"ÒF†R6öçG&öÆÆW"Fò6÷’F†R÷6—F–öâæBF—&V7F–öâg&öÒà ’¢&WGW&âµ&–67FW'Ò&VfW&Væ6RFòF†—2&–67FW"à ’¢ð —6WDg&öÕ…$6öçG&öÆÆW"‚6öçG&öÆÆW"’°  •öÖG&—‚æ–FVçF—G’‚’æW‡G&7E&÷FF–öâ‚6öçG&öÆÆW"æÖG&—…v÷&ÆB“°  —F†—2ç&’æ÷&–v–âç6WDg&öÔÖG&—…÷6—F–öâ‚6öçG&öÆÆW"æÖG&—…v÷&ÆB“° —F†—2ç&’æF—&V7F–öâç6WB‚ÂÂÓ’æÇ”ÖG&—ƒB‚öÖG&—‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢F†R–çFW'6V7F–öâö–çBöb&–67FW"–çFW'6V7F–öâFW7Bà ’¢G—VFVb´ö&¦V7GÒ&–67FW'ä–çFW'6V7F–öà ’¢&÷W'G’¶çVÖ&W'ÒF—7Fæ6RÒF†RF—7Fæ6Rg&öÒF†R&’w2÷&–v–âFòF†R–çFW'6V7F–öâö–çBà ’¢&÷W'G’¶çVÖ&W'ÒF—7Fæ6UFõ&’Ò6öÖR4Bö&¦V7G2Rærâ´Æ–æ²ö–çG7Ò&÷f–FRF†RF—7Fæ6RöbF†P ’¢–çFW'6V7F–öâFòF†RæV&W7Bö–çBöâF†R&’âf÷"÷F†W"ö&¦V7G2—Bv–ÆÂ&RVæFVf–æVFà ’¢&÷W'G’µfV7F÷#7Òö–çBÒF†R–çFW'6V7F–öâö–çBÂ–âv÷&ÆB6ö÷&F–æFW2à ’¢&÷W'G’´ö&¦V7GÒf6RÒF†Rf6RF†B†2&VVâ–çFW'6V7FVBà ’¢&÷W'G’¶çVÖ&W'Òf6T–æFW‚ÒF†Rf6R–æFW‚à ’¢&÷W'G’´ö&¦V7C4GÒö&¦V7BÒF†R4Bö&¦V7BF†B†2&VVâ–çFW'6V7FVBà ’¢&÷W'G’µfV7F÷#'ÒWbÒRÅb6ö÷&F–æFW2Bö–çBöb–çFW'6V7F–öâà ’¢&÷W'G’µfV7F÷#'ÒWcÒ6V6öæB6WBöbRÅb6ö÷&F–æFW2Bö–çBöb–çFW'6V7F–öâà ’¢&÷W'G’µfV7F÷#7ÒWcÒ–çFW'öÆFVBæ÷&ÖÂfV7F÷"Bö–çBöb–çFW'6V7F–öâà ’¢&÷W'G’¶çVÖ&W'Ò–ç7Fæ6T–BÒF†R–æFW‚çVÖ&W"öbF†R–ç7Fæ6Rv†W&RF†R& ’¢–çFW'6V7G2F†R´Æ–æ²–ç7Fæ6VDÖW6‡Òà ’¢ð  ’ò¢  ’¢6†V6·2ÆÂ–çFW'6V7F–öâ&WGvVVâF†R&’æBF†Rö&¦V7Bv—F‚÷"v—F†÷WBF†P ’¢FW66VæFçG2â–çFW'6V7F–öç2&R&WGW&æVB6÷'FVB'’F—7Fæ6RÂ6Æ÷6W7Bf—'7Bà ’  ’¢&–67FW&FVÆVvFW2FòF†R&–67B‚–ÖWF†öBöbF†R76VB4Bö&¦V7BÂv†Và ’¢WfÇVF–ærv†WF†W"F†R&’–çFW'6V7G2F†Rö&¦V7B÷"æ÷BâF†—2ÆÆ÷w2ÖW6†W2Fò&W7öæ@ ’¢F–ffW&VçFÇ’Fò&’67F–ærF†âÆ–æW2÷"ö–çG2à ’  ’¢æ÷FRF†Bf÷"ÖW6†W2Âf6W2×W7B&Rö–çFVBF÷v&G2F†R÷&–v–âöbF†R&’–â÷&FW  ’¢Fò&RFWFV7FVC²–çFW'6V7F–öç2öbF†R&’76–ærF‡&÷Vv‚F†R&6²öbf6Rv–ÆÂæ÷@ ’¢&RFWFV7FVBâFò&–67Bv–ç7B&÷F‚f6W2öbâö&¦V7BÂ–÷RvÆÂvçBFò6WB´Æ–æ²ÖFW&–Â76–FWÐ ’¢FòD…$TRäF÷V&ÆU6–FVà ’  ’¢&Ò´ö&¦V7C4GÒö&¦V7BÒF†R4Bö&¦V7BFò6†V6²f÷"–çFW'6V7F–öâv—F‚F†R&’à ’¢&Ò¶&ööÆVçÒ·&V7W'6—fS×G'VUÒÒ–b6WBFòG'VVÂ—BÇ6ò6†V6·2ÆÂFW66VæFçG2à ’¢÷F†W'v—6R—BöæÇ’6†V6·2–çFW'6V7F–öâv—F‚F†Rö&¦V7Bà ’¢&Ò´'&“Å&–67FW'ä–çFW'6V7F–öãçÒ¶–çFW'6V7G3ÕµÕÒF†RF&vWB'&’F†B†öÆG2F†R&W7VÇBöbF†RÖWF†öBà ’¢&WGW&â´'&“Å&–67FW'ä–çFW'6V7F–öãçÒâ'&’†öÆF–ærF†R–çFW'6V7F–öâö–çG2à ’¢ð ––çFW'6V7Dö&¦V7B‚ö&¦V7BÂ&V7W'6—fRÒG'VRÂ–çFW'6V7G2ÒµÒ’°  ––çFW'6V7B‚ö&¦V7BÂF†—2Â–çFW'6V7G2Â&V7W'6—fR“°  ––çFW'6V7G2ç6÷'B‚656÷'B“°  —&WGW&â–çFW'6V7G3°  —Ð  ’ò¢  ’¢6†V6·2ÆÂ–çFW'6V7F–öâ&WGvVVâF†R&’æBF†Rö&¦V7G2v—F‚÷"v—F†÷W@ ’¢F†RFW66VæFçG2â–çFW'6V7F–öç2&R&WGW&æVB6÷'FVB'’F—7Fæ6RÂ6Æ÷6W7Bf—'7Bà ’  ’¢&Ò´'&“Äö&¦V7C4CçÒö&¦V7G2ÒF†R4Bö&¦V7G2Fò6†V6²f÷"–çFW'6V7F–öâv—F‚F†R&’à ’¢&Ò¶&ööÆVçÒ·&V7W'6—fS×G'VUÒÒ–b6WBFòG'VVÂ—BÇ6ò6†V6·2ÆÂFW66VæFçG2à ’¢÷F†W'v—6R—BöæÇ’6†V6·2–çFW'6V7F–öâv—F‚F†Rö&¦V7Bà ’¢&Ò´'&“Å&–67FW'ä–çFW'6V7F–öãçÒ¶–çFW'6V7G3ÕµÕÒF†RF&vWB'&’F†B†öÆG2F†R&W7VÇBöbF†RÖWF†öBà ’¢&WGW&â´'&“Å&–67FW'ä–çFW'6V7F–öãçÒâ'&’†öÆF–ærF†R–çFW'6V7F–öâö–çG2à ’¢ð ––çFW'6V7Dö&¦V7G2‚ö&¦V7G2Â&V7W'6—fRÒG'VRÂ–çFW'6V7G2ÒµÒ’°  –f÷"‚ÆWB’ÒÂÂÒö&¦V7G2æÆVæwFƒ²’ÂÃ²’²²’°  ––çFW'6V7B‚ö&¦V7G5²’ÒÂF†—2Â–çFW'6V7G2Â&V7W'6—fR“°  —Ð  ––çFW'6V7G2ç6÷'B‚656÷'B“°  —&WGW&â–çFW'6V7G3°  —Ð §Ð ¦gVæ7F–öâ656÷'B‚Â"’°  —&WGW&âæF—7Fæ6RÒ"æF—7Fæ6S° §Ð ¦gVæ7F–öâ–çFW'6V7B‚ö&¦V7BÂ&–67FW"Â–çFW'6V7G2Â&V7W'6—fR’°  –ÆWB&÷vFRÒG'VS°  ––b‚ö&¦V7BæÆ–W'2çFW7B‚&–67FW"æÆ–W'2’’°  –6öç7B&W7VÇBÒö&¦V7Bç&–67B‚&–67FW"Â–çFW'6V7G2“°  ––b‚&W7VÇBÓÓÒfÇ6R’&÷vFRÒfÇ6S°  —Ð  ––b‚&÷vFRÓÓÒG'VRbb&V7W'6—fRÓÓÒG'VR’°  –6öç7B6†–ÆG&VâÒö&¦V7Bæ6†–ÆG&Vã°  –f÷"‚ÆWB’ÒÂÂÒ6†–ÆG&VâæÆVæwFƒ²’ÂÃ²’²²’°  ––çFW'6V7B‚6†–ÆG&Vå²’ÒÂ&–67FW"Â–çFW'6V7G2ÂG'VR“°  —Ð  —Ð §Ð ¢ò¢ ¢¢F†—26Æ72—2âÇFW&æF—fRFò´Æ–æ²6Æö6·Òv—F‚F–ffW&VçB’FW6–vâæB&V†f–÷"à¢¢F†RvöÂ—2Fòfö–BF†R6öæ6WGVÂfÆw2F†B&V6ÖR&VçB–â6Æö6¶÷fW"F–ÖRà¢ ¢¢ÒF–ÖW&†2âWFFR‚–ÖWF†öBF†BWFFW2—G2–çFW&æÂ7FFRâF†BÖ¶W2—B÷76–&ÆRFð¢¢6ÆÂvWDFVÇF‚–æBvWDVÆ6VB‚–×VÇF—ÆRF–ÖW2W"6–×VÆF–öâ7FWv—F†÷WBvWGF–ærF–ffW&VçBfÇVW2à¢¢ÒF†R6Æ726âÖ¶RW6RöbF†RvRf—6–&–Æ—G’’Fòfö–BÆ&vRF–ÖRFVÇFfÇVW2v†VâF†R ¢¢—2–æ7F—fR†RærâF"7v—F6†VB÷"'&÷w6W"†–FFVâ’à¢ ¢¢§0¢¢6öç7BF–ÖW"ÒæWrF–ÖW"‚“°¢¢F–ÖW"æ6öææV7B‚Fö7VÖVçB“²òòW6RvRf—6–&–Æ—G’¢¢ ¢¢ð¦6Æ72F–ÖW"°  ’ò¢  ’¢6öç7G'V7G2æWrF–ÖW"à ’¢ð –6öç7G'V7F÷"‚’°  —F†—2å÷&Wf–÷W5F–ÖRÒ° —F†—2åö7W'&VçEF–ÖRÒ° —F†—2å÷7F'EF–ÖRÒW&f÷&Öæ6Rææ÷r‚“°  —F†—2åöFVÇFÒ° —F†—2åöVÆ6VBÒ°  —F†—2å÷F–ÖW66ÆRÒ°  —F†—2åöFö7VÖVçBÒçVÆÃ° —F†—2å÷vUf—6–&–Æ—G”†æFÆW"ÒçVÆÃ°  —Ð  ’ò¢  ’¢6öææV7BF†RF–ÖW"FòF†Rv—fVâFö7VÖVçBä6ÆÆ–ærF†—2ÖWF†öB—2æ÷BÖæFF÷'’Fð ’¢W6RF†RF–ÖW"'WBVæ&ÆW2F†RW6vRöbF†RvRf—6–&–Æ—G’’Fòfö–BÆ&vRF–ÖP ’¢FVÇFfÇVW2à ’  ’¢&Ò´Fö7VÖVçGÒFö7VÖVçBÒF†RFö7VÖVçBà ’¢ð –6öææV7B‚Fö7VÖVçB’°  —F†—2åöFö7VÖVçBÒFö7VÖVçC°  ’òòW6RvRf—6–&–Æ—G’’Fòfö–BÆ&vRF–ÖRFVÇFfÇVW0  ––b‚Fö7VÖVçBæ†–FFVâÓÒVæFVf–æVB’°  —F†—2å÷vUf—6–&–Æ—G”†æFÆW"Ò†æFÆUf—6–&–Æ—G”6†ævRæ&–æB‚F†—2“°  –Fö7VÖVçBæFDWfVçDÆ—7FVæW"‚wf—6–&–Æ—G–6†ævRrÂF†—2å÷vUf—6–&–Æ—G”†æFÆW"ÂfÇ6R“°  —Ð  —Ð  ’ò¢  ’¢F—66öææV7G2F†RF–ÖW"g&öÒF†RDôÒæBÇ6òF—6&ÆW2F†RW6vRöbF†RvRf—6–&–Æ—G’’à ’¢ð –F—66öææV7B‚’°  ––b‚F†—2å÷vUf—6–&–Æ—G”†æFÆW"ÓÒçVÆÂ’°  —F†—2åöFö7VÖVçBç&VÖ÷fTWfVçDÆ—7FVæW"‚wf—6–&–Æ—G–6†ævRrÂF†—2å÷vUf—6–&–Æ—G”†æFÆW"“° —F†—2å÷vUf—6–&–Æ—G”†æFÆW"ÒçVÆÃ°  —Ð  —F†—2åöFö7VÖVçBÒçVÆÃ°  —Ð  ’ò¢  ’¢&WGW&ç2F†RF–ÖRFVÇF–â6V6öæG2à ’  ’¢&WGW&â¶çVÖ&W'ÒF†RF–ÖRFVÇF–â6V6öæBà ’¢ð –vWDFVÇF‚’°  —&WGW&âF†—2åöFVÇFò°  —Ð  ’ò¢  ’¢&WGW&ç2F†RVÆ6VBF–ÖR–â6V6öæG2à ’  ’¢&WGW&â¶çVÖ&W'ÒF†RVÆ6VBF–ÖR–â6V6öæBà ’¢ð –vWDVÆ6VB‚’°  —&WGW&âF†—2åöVÆ6VBò°  —Ð  ’ò¢  ’¢&WGW&ç2F†RF–ÖW66ÆRà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RF–ÖW66ÆRà ’¢ð –vWEF–ÖW66ÆR‚’°  —&WGW&âF†—2å÷F–ÖW66ÆS°  —Ð  ’ò¢  ’¢6WG2F†Rv—fVâF–ÖW66ÆRv†–6‚66ÆRF†RF–ÖRFVÇF6ö×WFF–öà ’¢–âWFFR‚–à ’  ’¢&Ò¶çVÖ&W'ÒF–ÖW66ÆRÒF†RF–ÖW66ÆRFò6WBà ’¢&WGW&âµF–ÖW'Ò&VfW&Væ6RFòF†—2F–ÖW"à ’¢ð —6WEF–ÖW66ÆR‚F–ÖW66ÆR’°  —F†—2å÷F–ÖW66ÆRÒF–ÖW66ÆS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&W6WG2F†RF–ÖR6ö×WFF–öâf÷"F†R7W'&VçB6–×VÆF–öâ7FWà ’  ’¢&WGW&âµF–ÖW'Ò&VfW&Væ6RFòF†—2F–ÖW"à ’¢ð —&W6WB‚’°  —F†—2åö7W'&VçEF–ÖRÒW&f÷&Öæ6Rææ÷r‚’ÒF†—2å÷7F'EF–ÖS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6â&RW6VBFòg&VRÆÂ–çFW&æÂ&W6÷W&6W2âW7VÆÇ’6ÆÆVBv†Và ’¢F†RF–ÖW"–ç7Fæ6R—6âwB&WV—&VBç–Ö÷&Rà ’¢ð –F—7÷6R‚’°  —F†—2æF—66öææV7B‚“°  —Ð  ’ò¢  ’¢WFFW2F†R–çFW&æÂ7FFRöbF†RF–ÖW"âF†—2ÖWF†öB6†÷VÆB&R6ÆÆV@ ’¢öæ6RW"6–×VÆF–öâ7FWæB&Vf÷&R–÷RW&f÷&ÒVW&–W2v–ç7BF†RF–ÖW  ’¢†Rærâf–vWDFVÇF‚–’à ’  ’¢&Ò¶çVÖ&W'ÒF–ÖW7F×ÒF†R7W'&VçBF–ÖR–âÖ–ÆÆ—6V6öæG2â6â&Rö'F–æV@ ’¢g&öÒF†R&WVW7Dæ–ÖF–öäg&ÖV6ÆÆ&6²&wVÖVçBâ–bæ÷B&÷f–FVBÂF†R7W'&Vç@ ’¢F–ÖRv–ÆÂ&RFWFW&Ö–æVBv—F‚W&f÷&Öæ6Rææ÷và ’¢&WGW&âµF–ÖW'Ò&VfW&Væ6RFòF†—2F–ÖW"à ’¢ð —WFFR‚F–ÖW7F×’°  ––b‚F†—2å÷vUf—6–&–Æ—G”†æFÆW"ÓÒçVÆÂbbF†—2åöFö7VÖVçBæ†–FFVâÓÓÒG'VR’°  —F†—2åöFVÇFÒ°  —ÒVÇ6R°  —F†—2å÷&Wf–÷W5F–ÖRÒF†—2åö7W'&VçEF–ÖS° —F†—2åö7W'&VçEF–ÖRÒ‚F–ÖW7F×ÓÒVæFVf–æVBòF–ÖW7F×¢W&f÷&Öæ6Rææ÷r‚’’ÒF†—2å÷7F'EF–ÖS°  —F†—2åöFVÇFÒ‚F†—2åö7W'&VçEF–ÖRÒF†—2å÷&Wf–÷W5F–ÖR’¢F†—2å÷F–ÖW66ÆS° —F†—2åöVÆ6VB³ÒF†—2åöFVÇF²òòöVÆ6VB—2F†R67V×VÆF–öâöbÆÂ&Wf–÷W2FVÇF0  —Ð  —&WGW&âF†—3°  —Ð §Ð ¦gVæ7F–öâ†æFÆUf—6–&–Æ—G”6†ævR‚’°  ––b‚F†—2åöFö7VÖVçBæ†–FFVâÓÓÒfÇ6R’F†—2ç&W6WB‚“° §Ð ¢ò¢ ¢¢F†—26Æ726â&RW6VBFò&W&W6VçBö–çG2–â4B76R0¢¢µ7†W&–6Â6ö÷&F–æFW5×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’õ7†W&–6Åö6ö÷&F–æFU÷7—7FV×Òà¢¢ð¦6Æ727†W&–6Â°  ’ò¢  ’¢6öç7G'V7G2æWr7†W&–6Âà ’  ’¢&Ò¶çVÖ&W'Ò·&F—W3ÓÒÒF†R&F—W2Â÷"F†RWV6Æ–FVâF—7Fæ6R‡7G&–v‡BÖÆ–æRF—7Fæ6R’g&öÒF†Rö–çBFòF†R÷&–v–âà ’¢&Ò¶çVÖ&W'Ò·†“ÓÒÒF†RöÆ"ævÆR–â&F–ç2g&öÒF†R’‡W’†—2à ’¢&Ò¶çVÖ&W'Ò·F†WFÓÒÒF†RWVF÷"ö¦–×WF†ÂævÆR–â&F–ç2&÷VæBF†R’‡W’†—2à ’¢ð –6öç7G'V7F÷"‚&F—W2ÒÂ†’ÒÂF†WFÒ’°  ’ò¢  ’¢F†R&F—W2Â÷"F†RWV6Æ–FVâF—7Fæ6R‡7G&–v‡BÖÆ–æRF—7Fæ6R’g&öÒF†Rö–çBFòF†R÷&–v–âà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç&F—W2Ò&F—W3°  ’ò¢  ’¢F†RöÆ"ævÆR–â&F–ç2g&öÒF†R’‡W’†—2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ç†’Ò†“°  ’ò¢  ’¢F†RWVF÷"ö¦–×WF†ÂævÆR–â&F–ç2&÷VæBF†R’‡W’†—2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çF†WFÒF†WF°  —Ð  ’ò¢  ’¢6WG2F†R7†W&–6Â6ö×öæVçG2'’6÷––ærF†Rv—fVâfÇVW2à ’  ’¢&Ò¶çVÖ&W'Ò&F—W2ÒF†R&F—W2à ’¢&Ò¶çVÖ&W'Ò†’ÒF†RöÆ"ævÆRà ’¢&Ò¶çVÖ&W'ÒF†WFÒF†R¦–×WF†ÂævÆRà ’¢&WGW&âµ7†W&–6ÇÒ&VfW&Væ6RFòF†—27†W&–6Âà ’¢ð —6WB‚&F—W2Â†’ÂF†WF’°  —F†—2ç&F—W2Ò&F—W3° —F†—2ç†’Ò†“° —F†—2çF†WFÒF†WF°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâ7†W&–6ÂFòF†—2–ç7Fæ6Rà ’  ’¢&Òµ7†W&–6ÇÒ÷F†W"ÒF†R7†W&–6ÂFò6÷’à ’¢&WGW&âµ7†W&–6ÇÒ&VfW&Væ6RFòF†—27†W&–6Âà ’¢ð –6÷’‚÷F†W"’°  —F†—2ç&F—W2Ò÷F†W"ç&F—W3° —F†—2ç†’Ò÷F†W"ç†“° —F†—2çF†WFÒ÷F†W"çF†WF°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&W7G&–7G2F†RöÆ"ævÆR·vS¢ç†’†•ÒFò&R&WGvVVâãæB’Ð ’¢ãà ’  ’¢&WGW&âµ7†W&–6ÇÒ&VfW&Væ6RFòF†—27†W&–6Âà ’¢ð –Ö¶U6fR‚’°  –6öç7BU2Òã° —F†—2ç†’Ò6Æ×‚F†—2ç†’ÂU2ÂÖF‚å’ÒU2“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R7†W&–6Â6ö×öæVçG2g&öÒF†Rv—fVâfV7F÷"v†–6‚—277VÖVBFò†öÆ@ ’¢6'FW6–â6ö÷&F–æFW2à ’  ’¢&ÒµfV7F÷#7ÒbÒF†RfV7F÷"Fò6WBà ’¢&WGW&âµ7†W&–6ÇÒ&VfW&Væ6RFòF†—27†W&–6Âà ’¢ð —6WDg&öÕfV7F÷#2‚b’°  —&WGW&âF†—2ç6WDg&öÔ6'FW6–ä6ö÷&G2‚bç‚Âbç’Âbç¢“°  —Ð  ’ò¢  ’¢6WG2F†R7†W&–6Â6ö×öæVçG2g&öÒF†Rv—fVâ6'FW6–â6ö÷&F–æFW2à ’  ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚fÇVRà ’¢&Ò¶çVÖ&W'Ò’ÒF†R’fÇVRà ’¢&Ò¶çVÖ&W'Ò¢ÒF†R¢fÇVRà ’¢&WGW&âµ7†W&–6ÇÒ&VfW&Væ6RFòF†—27†W&–6Âà ’¢ð —6WDg&öÔ6'FW6–ä6ö÷&G2‚‚Â’Â¢’°  —F†—2ç&F—W2ÒÖF‚ç7'B‚‚¢‚²’¢’²¢¢¢“°  ––b‚F†—2ç&F—W2ÓÓÒ’°  —F†—2çF†WFÒ° —F†—2ç†’Ò°  —ÒVÇ6R°  —F†—2çF†WFÒÖF‚æFã"‚‚Â¢“° —F†—2ç†’ÒÖF‚æ6÷2‚6Æ×‚’òF†—2ç&F—W2ÂÓÂ’“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWr7†W&–6Âv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&âµ7†W&–6ÇÒ6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¢ò¢ ¢¢F†—26Æ726â&RW6VBFò&W&W6VçBö–çG2–â4B76R0¢¢´7–Æ–æG&–6Â6ö÷&F–æFW5×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’ô7–Æ–æG&–6Åö6ö÷&F–æFU÷7—7FV×Òà¢¢ð¦6Æ727–Æ–æG&–6Â°  ’ò¢  ’¢6öç7G'V7G2æWr7–Æ–æG&–6Âà ’  ’¢&Ò¶çVÖ&W'Ò·&F—W3ÓÒÒF†RF—7Fæ6Rg&öÒF†R÷&–v–âFòö–çB–âF†R‚×¢ÆæRà ’¢&Ò¶çVÖ&W'Ò·F†WFÓÒÒ6÷VçFW&6Æö6·v—6RævÆR–âF†R‚×¢ÆæRÖV7W&VB–â&F–ç2g&öÒF†R÷6—F—fR¢Ö†—2à ’¢&Ò¶çVÖ&W'Ò·“ÓÒÒF†R†V–v‡B&÷fRF†R‚×¢ÆæRà ’¢ð –6öç7G'V7F÷"‚&F—W2ÒÂF†WFÒÂ’Ò’°  ’ò¢  ’¢F†RF—7Fæ6Rg&öÒF†R÷&–v–âFòö–çB–âF†R‚×¢ÆæRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç&F—W2Ò&F—W3°  ’ò¢  ’¢6÷VçFW&6Æö6·v—6RævÆR–âF†R‚×¢ÆæRÖV7W&VB–â&F–ç2g&öÒF†R÷6—F—fR¢Ö†—2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2çF†WFÒF†WF°  ’ò¢  ’¢F†R†V–v‡B&÷fRF†R‚×¢ÆæRà ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB  ’¢ð —F†—2ç’Ò“°  —Ð  ’ò¢  ’¢6WG2F†R7–Æ–æG&–6Â6ö×öæVçG2'’6÷––ærF†Rv—fVâfÇVW2à ’  ’¢&Ò¶çVÖ&W'Ò&F—W2ÒF†R&F—W2à ’¢&Ò¶çVÖ&W'ÒF†WFÒF†RF†WFævÆRà ’¢&Ò¶çVÖ&W'Ò’ÒF†R†V–v‡BfÇVRà ’¢&WGW&â´7–Æ–æG&–6ÇÒ&VfW&Væ6RFòF†—27–Æ–æG&–6Âà ’¢ð —6WB‚&F—W2ÂF†WFÂ’’°  —F†—2ç&F—W2Ò&F—W3° —F†—2çF†WFÒF†WF° —F†—2ç’Ò“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâ7–Æ–æG&–6ÂFòF†—2–ç7Fæ6Rà ’  ’¢&Ò´7–Æ–æG&–6ÇÒ÷F†W"ÒF†R7–Æ–æG&–6ÂFò6÷’à ’¢&WGW&â´7–Æ–æG&–6ÇÒ&VfW&Væ6RFòF†—27–Æ–æG&–6Âà ’¢ð –6÷’‚÷F†W"’°  —F†—2ç&F—W2Ò÷F†W"ç&F—W3° —F†—2çF†WFÒ÷F†W"çF†WF° —F†—2ç’Ò÷F†W"ç“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†R7–Æ–æG&–6Â6ö×öæVçG2g&öÒF†Rv—fVâfV7F÷"v†–6‚—277VÖVBFò†öÆ@ ’¢6'FW6–â6ö÷&F–æFW2à ’  ’¢&ÒµfV7F÷#7ÒbÒF†RfV7F÷"Fò6WBà ’¢&WGW&â´7–Æ–æG&–6ÇÒ&VfW&Væ6RFòF†—27–Æ–æG&–6Âà ’¢ð —6WDg&öÕfV7F÷#2‚b’°  —&WGW&âF†—2ç6WDg&öÔ6'FW6–ä6ö÷&G2‚bç‚Âbç’Âbç¢“°  —Ð  ’ò¢  ’¢6WG2F†R7–Æ–æG&–6Â6ö×öæVçG2g&öÒF†Rv—fVâ6'FW6–â6ö÷&F–æFW2à ’  ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚fÇVRà ’¢&Ò¶çVÖ&W'Ò’ÒF†R‚fÇVRà ’¢&Ò¶çVÖ&W'Ò¢ÒF†R‚fÇVRà ’¢&WGW&â´7–Æ–æG&–6ÇÒ&VfW&Væ6RFòF†—27–Æ–æG&–6Âà ’¢ð —6WDg&öÔ6'FW6–ä6ö÷&G2‚‚Â’Â¢’°  —F†—2ç&F—W2ÒÖF‚ç7'B‚‚¢‚²¢¢¢“° —F†—2çF†WFÒÖF‚æFã"‚‚Â¢“° —F†—2ç’Ò“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWr7–Æ–æG&–6Âv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´7–Æ–æG&–6ÇÒ6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¢ò¢ ¢¢&W&W6VçG2'ƒ"ÖG&—‚à¢ ¢¢æ÷FRöâ&÷rÔÖ¦÷"æB6öÇVÖâÔÖ¦÷"÷&FW&–æs ¢ ¢¢F†R6öç7G'V7F÷"æB´Æ–æ²ÖG&—ƒ"76WGÒÖWF†öBF¶R&wVÖVçG2–à¢¢·&÷rÖÖ¦÷%×´Æ–æ²‡GG3¢òöVâçv–¶—VF–æ÷&r÷v–¶’õ&÷rÕöæEö6öÇVÖâÖÖ¦÷%ö÷&FW"46öÇVÖâÖÖ¦÷%ö÷&FW'Ð¢¢÷&FW"Âv†–ÆR–çFW&æÆÇ’F†W’&R7F÷&VB–âF†R´Æ–æ²ÖG&—ƒ"6VÆVÖVçG7Ò'&’–â6öÇVÖâÖÖ¦÷"÷&FW"à¢¢F†—2ÖVç2F†B6ÆÆ–æs ¢¢§0¢¢6öç7BÒÒæWrD…$TRäÖG&—ƒ"‚“°¢¢Òç6WB‚Â"À¢¢#Â#"“°¢¢ ¢¢v–ÆÂ&W7VÇB–âF†RVÆVÖVçG2'&’6öçF–æ–æs ¢¢§0¢¢ÒæVÆVÖVçG2Ò²Â#À¢¢"Â#"Ó°¢¢ ¢¢æB–çFW&æÆÇ’ÆÂ6Æ7VÆF–öç2&RW&f÷&ÖVBW6–ær6öÇVÖâÖÖ¦÷"÷&FW&–ærà¢¢†÷vWfW"Â2F†R7GVÂ÷&FW&–ærÖ¶W2æòF–ffW&Væ6RÖF†VÖF–6ÆÇ’æ@¢¢Ö÷7BV÷ÆR&RW6VBFòF†–æ¶–ær&÷WBÖG&–6W2–â&÷rÖÖ¦÷"÷&FW"ÂF†P¢¢F‡&VRæ§2Fö7VÖVçFF–öâ6†÷w2ÖG&–6W2–â&÷rÖÖ¦÷"÷&FW"â§W7B&V"–à¢¢Ö–æBF†B–b–÷R&R&VF–ærF†R6÷W&6R6öFRÂ–÷RvÆÂ†fRFòF¶RF†P¢¢G&ç7÷6Röbç’ÖG&–6W2÷WFÆ–æVB†W&RFòÖ¶R6Vç6RöbF†R6Æ7VÆF–öç2à¢¢ð¦6Æ72ÖG&—ƒ"°  ’ò¢  ’¢6öç7G'V7G2æWr'ƒ"ÖG&—‚âF†R&wVÖVçG2&R7W÷6VBFò&P ’¢–â&÷rÖÖ¦÷"÷&FW"â–bæò&wVÖVçG2&R&÷f–FVBÂF†R6öç7G'V7F÷  ’¢–æ—F–Æ—¦W2F†RÖG&—‚2â–FVçF—G’ÖG&—‚à ’  ’¢&Ò¶çVÖ&W'Ò¶ãÒÒÓÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Ò¶ã%ÒÒÓ"ÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Ò¶ã#ÒÒ"ÓÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Ò¶ã#%ÒÒ"Ó"ÖG&—‚VÆVÖVçBà ’¢ð –6öç7G'V7F÷"‚ãÂã"Âã#Âã#"’°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð ”ÖG&—ƒ"ç&÷F÷G—Ræ—4ÖG&—ƒ"ÒG'VS°  ’ò¢  ’¢6öÇVÖâÖÖ¦÷"Æ—7BöbÖG&—‚fÇVW2à ’  ’¢G—R´'&“ÆçVÖ&W#çÐ ’¢ð —F†—2æVÆVÖVçG2Ò° “ÂÀ “ÂÀ •Ó°  ––b‚ãÓÒVæFVf–æVB’°  —F†—2ç6WB‚ãÂã"Âã#Âã#"“°  —Ð  —Ð  ’ò¢  ’¢6WG2F†—2ÖG&—‚FòF†R'ƒ"–FVçF—G’ÖG&—‚à ’  ’¢&WGW&â´ÖG&—ƒ'Ò&VfW&Væ6RFòF†—2ÖG&—‚à ’¢ð ––FVçF—G’‚’°  —F†—2ç6WB€ “ÂÀ “ÂÀ ’“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RVÆVÖVçG2öbF†RÖG&—‚g&öÒF†Rv—fVâ'&’à ’  ’¢&Ò´'&“ÆçVÖ&W#çÒ'&’ÒF†RÖG&—‚VÆVÖVçG2–â6öÇVÖâÖÖ¦÷"÷&FW"à ’¢&Ò¶çVÖ&W'Ò¶öfg6WCÓÒÒ–æFW‚öbF†Rf—'7BVÆVÖVçB–âF†R'&’à ’¢&WGW&â´ÖG&—ƒ'Ò&VfW&Væ6RFòF†—2ÖG&—‚à ’¢ð –g&öÔ'&’‚'&’Âöfg6WBÒ’°  –f÷"‚ÆWB’Ò²’ÂC²’²²’°  —F†—2æVÆVÖVçG5²’ÒÒ'&•²’²öfg6WBÓ°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RVÆVÖVçG2öbF†RÖG&—‚åF†R&wVÖVçG2&R7W÷6VBFò&P ’¢–â&÷rÖÖ¦÷"÷&FW"à ’  ’¢&Ò¶çVÖ&W'ÒãÒÓÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Òã"ÒÓ"ÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Òã#Ò"ÓÖG&—‚VÆVÖVçBà ’¢&Ò¶çVÖ&W'Òã#"Ò"Ó"ÖG&—‚VÆVÖVçBà ’¢&WGW&â´ÖG&—ƒ'Ò&VfW&Væ6RFòF†—2ÖG&—‚à ’¢ð —6WB‚ãÂã"Âã#Âã#"’°  –6öç7BFRÒF†—2æVÆVÖVçG3°  —FU²ÒÒã²FU²"ÒÒã#° —FU²ÒÒã#²FU²2ÒÒã##°  —&WGW&âF†—3°  —Ð §Ð ¦6öç7B÷fV7F÷"CBÒò¤õõU$Uõò¢òæWrfV7F÷#"‚“° ¢ò¢ ¢¢&W&W6VçG2â†—2ÖÆ–væVB&÷VæF–ær&÷‚„$"’–â$B76Rà¢¢ð¦6Æ72&÷ƒ"°  ’ò¢  ’¢6öç7G'V7G2æWr&÷VæF–ær&÷‚à ’  ’¢&ÒµfV7F÷#'Ò¶Ö–ãÒ„–æf–æ—G’Ä–æf–æ—G’•ÒÒfV7F÷"&W&W6VçF–ærF†RÆ÷vW"&÷VæF'’öbF†R&÷‚à ’¢&ÒµfV7F÷#'Ò¶ÖƒÒ‚Ô–æf–æ—G’ÂÔ–æf–æ—G’•ÒÒfV7F÷"&W&W6VçF–ærF†RWW"&÷VæF'’öbF†R&÷‚à ’¢ð –6öç7G'V7F÷"‚Ö–âÒæWrfV7F÷#"‚²–æf–æ—G’Â²–æf–æ—G’’ÂÖ‚ÒæWrfV7F÷#"‚Ò–æf–æ—G’ÂÒ–æf–æ—G’’’°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—4&÷ƒ"ÒG'VS°  ’ò¢  ’¢F†RÆ÷vW"&÷VæF'’öbF†R&÷‚à ’  ’¢G—RµfV7F÷#'Ð ’¢ð —F†—2æÖ–âÒÖ–ã°  ’ò¢  ’¢F†RWW"&÷VæF'’öbF†R&÷‚à ’  ’¢G—RµfV7F÷#'Ð ’¢ð —F†—2æÖ‚ÒÖƒ°  —Ð  ’ò¢  ’¢6WG2F†RÆ÷vW"æBWW"&÷VæF&–W2öbF†—2&÷‚à ’¢ÆV6Ræ÷FRF†BF†—2ÖWF†öBöæÇ’6÷–W2F†RfÇVW2g&öÒF†Rv—fVâö&¦V7G2à ’  ’¢&ÒµfV7F÷#'ÒÖ–âÒF†RÆ÷vW"&÷VæF'’öbF†R&÷‚à ’¢&ÒµfV7F÷#'ÒÖ‚ÒF†RWW"&÷VæF'’öbF†R&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð —6WB‚Ö–âÂÖ‚’°  —F†—2æÖ–âæ6÷’‚Ö–â“° —F†—2æÖ‚æ6÷’‚Ö‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6WG2F†RWW"æBÆ÷vW"&÷VæG2öbF†—2&÷‚6ò—BVæ6Æ÷6W2F†R÷6—F–öâFF ’¢–âF†Rv—fVâ'&’à ’  ’¢&Ò´'&“ÅfV7F÷##çÒö–çG2Òâ'&’†öÆF–ær$B÷6—F–öâFF2–ç7Fæ6W2öb´Æ–æ²fV7F÷#'Òà ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð —6WDg&öÕö–çG2‚ö–çG2’°  —F†—2æÖ¶TV×G’‚“°  –f÷"‚ÆWB’ÒÂ–ÂÒö–çG2æÆVæwFƒ²’Â–Ã²’²²’°  —F†—2æW‡æD'•ö–çB‚ö–çG5²’Ò“°  —Ð  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6VçFW'2F†—2&÷‚öâF†Rv—fVâ6VçFW"fV7F÷"æB6WG2F†—2&÷‚w2v–GF‚Â†V–v‡Bæ@ ’¢FWF‚FòF†Rv—fVâ6—¦RfÇVW2à ’  ’¢&ÒµfV7F÷#'Ò6VçFW"ÒF†R6VçFW"öbF†R&÷‚à ’¢&ÒµfV7F÷#'Ò6—¦RÒF†R‚æB’F–ÖVç6–öç2öbF†R&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð —6WDg&öÔ6VçFW$æE6—¦R‚6VçFW"Â6—¦R’°  –6öç7B†Æe6—¦RÒ÷fV7F÷"CBæ6÷’‚6—¦R’æ×VÇF—Ç•66Æ"‚ãR“° —F†—2æÖ–âæ6÷’‚6VçFW"’ç7V"‚†Æe6—¦R“° —F†—2æÖ‚æ6÷’‚6VçFW"’æFB‚†Æe6—¦R“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2æWr&÷‚v—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´&÷ƒ'Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâ&÷‚FòF†—2–ç7Fæ6Rà ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷‚Fò6÷’à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð –6÷’‚&÷‚’°  —F†—2æÖ–âæ6÷’‚&÷‚æÖ–â“° —F†—2æÖ‚æ6÷’‚&÷‚æÖ‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢Ö¶W2F†—2&÷‚V×G’v†–6‚ÖVç2–âVæ6Æ÷6W2¦W&ò76R–â$Bà ’  ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð –Ö¶TV×G’‚’°  —F†—2æÖ–âç‚ÒF†—2æÖ–âç’Ò²–æf–æ—G“° —F†—2æÖ‚ç‚ÒF†—2æÖ‚ç’ÒÒ–æf–æ—G“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2G'VR–bF†—2&÷‚–æ6ÇVFW2¦W&òö–çG2v—F†–â—G2&÷VæG2à ’¢æ÷FRF†B&÷‚v—F‚WVÂÆ÷vW"æBWW"&÷VæG27F–ÆÂ–æ6ÇVFW2öæP ’¢ö–çBÂF†RöæR&÷F‚&÷VæG26†&Rà ’  ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†—2&÷‚—2V×G’÷"æ÷Bà ’¢ð –—4V×G’‚’°  ’òòF†—2—2Ö÷&R&ö'W7B6†V6²f÷"V×G’F†â‚föÇVÖRÃÒ’&V6W6RföÇVÖR6âvWB÷6—F—fRv—F‚GvòæVvF—fR†W0  —&WGW&â‚F†—2æÖ‚ç‚ÂF†—2æÖ–âç‚’ÇÂ‚F†—2æÖ‚ç’ÂF†—2æÖ–âç’“°  —Ð  ’ò¢  ’¢&WGW&ç2F†R6VçFW"ö–çBöbF†—2&÷‚à ’  ’¢&ÒµfV7F÷#'ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#'ÒF†R6VçFW"ö–çBà ’¢ð –vWD6VçFW"‚F&vWB’°  —&WGW&âF†—2æ—4V×G’‚’òF&vWBç6WB‚Â’¢F&vWBæFEfV7F÷'2‚F†—2æÖ–âÂF†—2æÖ‚’æ×VÇF—Ç•66Æ"‚ãR“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RF–ÖVç6–öç2öbF†—2&÷‚à ’  ’¢&ÒµfV7F÷#'ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#'ÒF†R6—¦Rà ’¢ð –vWE6—¦R‚F&vWB’°  —&WGW&âF†—2æ—4V×G’‚’òF&vWBç6WB‚Â’¢F&vWBç7V%fV7F÷'2‚F†—2æÖ‚ÂF†—2æÖ–â“°  —Ð  ’ò¢  ’¢W‡æG2F†R&÷VæF&–W2öbF†—2&÷‚Fò–æ6ÇVFRF†Rv—fVâö–çBà ’  ’¢&ÒµfV7F÷#'Òö–çBÒF†Rö–çBF†B6†÷VÆB&R–æ6ÇVFVB'’F†R&÷VæF–ær&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð –W‡æD'•ö–çB‚ö–çB’°  —F†—2æÖ–âæÖ–â‚ö–çB“° —F†—2æÖ‚æÖ‚‚ö–çB“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢W‡æG2F†—2&÷‚WV–ÆFW&ÆÇ’'’F†Rv—fVâfV7F÷"âF†Rv–GF‚öbF†—0 ’¢&÷‚v–ÆÂ&RW‡æFVB'’F†R‚6ö×öæVçBöbF†RfV7F÷"–â&÷F€ ’¢F—&V7F–öç2âF†R†V–v‡BöbF†—2&÷‚v–ÆÂ&RW‡æFVB'’F†R’6ö×öæVçBö` ’¢F†RfV7F÷"–â&÷F‚F—&V7F–öç2à ’  ’¢&ÒµfV7F÷#'ÒfV7F÷"ÒF†RfV7F÷"F†B6†÷VÆBW‡æBF†R&÷VæF–ær&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð –W‡æD'•fV7F÷"‚fV7F÷"’°  —F†—2æÖ–âç7V"‚fV7F÷"“° —F†—2æÖ‚æFB‚fV7F÷"“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢W‡æG2V6‚F–ÖVç6–öâöbF†R&÷‚'’F†Rv—fVâ66Æ"â–bæVvF—fRÂF†P ’¢F–ÖVç6–öç2öbF†R&÷‚v–ÆÂ&R6öçG&7FVBà ’  ’¢&Ò¶çVÖ&W'Ò66Æ"ÒF†R66Æ"fÇVRF†B6†÷VÆBW‡æBF†R&÷VæF–ær&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð –W‡æD'•66Æ"‚66Æ"’°  —F†—2æÖ–âæFE66Æ"‚Ò66Æ"“° —F†—2æÖ‚æFE66Æ"‚66Æ"“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†Rv—fVâö–çBÆ–W2v—F†–â÷"öâF†R&÷VæF&–W2öbF†—2&÷‚à ’  ’¢&ÒµfV7F÷#'Òö–çBÒF†Rö–çBFòFW7Bà ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†R&÷VæF–ær&÷‚6öçF–ç2F†Rv—fVâö–çB÷"æ÷Bà ’¢ð –6öçF–ç5ö–çB‚ö–çB’°  —&WGW&âö–çBç‚ãÒF†—2æÖ–âç‚bbö–çBç‚ÃÒF†—2æÖ‚ç‚b` —ö–çBç’ãÒF†—2æÖ–âç’bbö–çBç’ÃÒF†—2æÖ‚ç“°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†—2&÷VæF–ær&÷‚–æ6ÇVFW2F†RVçF—&WG’öbF†Rv—fVâ&÷VæF–ær&÷‚à ’¢–bF†—2&÷‚æBF†Rv—fVâöæR&R–FVçF–6ÂÂF†—2gVæ7F–öâÇ6ò&WGW&ç2G'VVà ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷VæF–ær&÷‚FòFW7Bà ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†R&÷VæF–ær&÷‚6öçF–ç2F†Rv—fVâ&÷VæF–ær&÷‚÷"æ÷Bà ’¢ð –6öçF–ç4&÷‚‚&÷‚’°  —&WGW&âF†—2æÖ–âç‚ÃÒ&÷‚æÖ–âç‚bb&÷‚æÖ‚ç‚ÃÒF†—2æÖ‚ç‚b` —F†—2æÖ–âç’ÃÒ&÷‚æÖ–âç’bb&÷‚æÖ‚ç’ÃÒF†—2æÖ‚ç“°  —Ð  ’ò¢  ’¢&WGW&ç2ö–çB2&÷÷'F–öâöbF†—2&÷‚w2v–GF‚æB†V–v‡Bà ’  ’¢&ÒµfV7F÷#'Òö–çBÒö–çB–â$B76Rà ’¢&ÒµfV7F÷#'ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#'Òö–çB2&÷÷'F–öâöbF†—2&÷‚w2v–GF‚æB†V–v‡Bà ’¢ð –vWE&ÖWFW"‚ö–çBÂF&vWB’°  ’òòF†—26â÷FVçF–ÆÇ’†fRF—f–FR'’¦W&ò–bF†R&÷€ ’òò†26—¦RF–ÖVç6–öâöbà  —&WGW&âF&vWBç6WB€ ’‚ö–çBç‚ÒF†—2æÖ–âç‚’ò‚F†—2æÖ‚ç‚ÒF†—2æÖ–âç‚’À ’‚ö–çBç’ÒF†—2æÖ–âç’’ò‚F†—2æÖ‚ç’ÒF†—2æÖ–âç’ ’“°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†Rv—fVâ&÷VæF–ær&÷‚–çFW'6V7G2v—F‚F†—2&÷VæF–ær&÷‚à ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷VæF–ær&÷‚FòFW7Bà ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†Rv—fVâ&÷VæF–ær&÷‚–çFW'6V7G2v—F‚F†—2&÷VæF–ær&÷‚à ’¢ð ––çFW'6V7G4&÷‚‚&÷‚’°  ’òòW6–ærB7Æ—GF–ærÆæW2Fò'VÆR÷WB–çFW'6V7F–öç0  —&WGW&â&÷‚æÖ‚ç‚ãÒF†—2æÖ–âç‚bb&÷‚æÖ–âç‚ÃÒF†—2æÖ‚ç‚b` –&÷‚æÖ‚ç’ãÒF†—2æÖ–âç’bb&÷‚æÖ–âç’ÃÒF†—2æÖ‚ç“°  —Ð  ’ò¢  ’¢6Æ×2F†Rv—fVâö–çBv—F†–âF†R&÷VæG2öbF†—2&÷‚à ’  ’¢&ÒµfV7F÷#'Òö–çBÒF†Rö–çBFò6Æ×à ’¢&ÒµfV7F÷#'ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#'ÒF†R6Æ×VBö–çBà ’¢ð –6Æ×ö–çB‚ö–çBÂF&vWB’°  —&WGW&âF&vWBæ6÷’‚ö–çB’æ6Æ×‚F†—2æÖ–âÂF†—2æÖ‚“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RWV6Æ–FVâF—7Fæ6Rg&öÒç’VFvRöbF†—2&÷‚FòF†R7V6–f–VBö–çBâ–` ’¢F†Rv—fVâö–çBÆ–W2–ç6–FRöbF†—2&÷‚ÂF†RF—7Fæ6Rv–ÆÂ&Rà ’  ’¢&ÒµfV7F÷#'Òö–çBÒF†Rö–çBFò6ö×WFRF†RF—7Fæ6RFòà ’¢&WGW&â¶çVÖ&W'ÒF†RWV6Æ–FVâF—7Fæ6Rà ’¢ð –F—7Fæ6UFõö–çB‚ö–çB’°  —&WGW&âF†—2æ6Æ×ö–çB‚ö–çBÂ÷fV7F÷"CB’æF—7Fæ6UFò‚ö–çB“°  —Ð  ’ò¢  ’¢6ö×WFW2F†R–çFW'6V7F–öâöbF†—2&÷VæF–ær&÷‚æBF†Rv—fVâöæRÂ6WGF–ærF†RWW  ’¢&÷VæBöbF†—2&÷‚FòF†RÆW76W"öbF†RGvò&÷†W2rWW"&÷VæG2æBF†P ’¢Æ÷vW"&÷VæBöbF†—2&÷‚FòF†Rw&VFW"öbF†RGvò&÷†W2rÆ÷vW"&÷VæG2â–` ’¢F†W&Rw2æò÷fW&ÆÂÖ¶W2F†—2&÷‚V×G’à ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷VæF–ær&÷‚Fò–çFW'6V7Bv—F‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð ––çFW'6V7B‚&÷‚’°  —F†—2æÖ–âæÖ‚‚&÷‚æÖ–â“° —F†—2æÖ‚æÖ–â‚&÷‚æÖ‚“°  ––b‚F†—2æ—4V×G’‚’’F†—2æÖ¶TV×G’‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6ö×WFW2F†RVæ–öâöbF†—2&÷‚æBæ÷F†W"æBF†Rv—fVâöæRÂ6WGF–ærF†RWW  ’¢&÷VæBöbF†—2&÷‚FòF†Rw&VFW"öbF†RGvò&÷†W2rWW"&÷VæG2æBF†P ’¢Æ÷vW"&÷VæBöbF†—2&÷‚FòF†RÆW76W"öbF†RGvò&÷†W2rÆ÷vW"&÷VæG2à ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷VæF–ær&÷‚F†Bv–ÆÂ&RVæ–öæVBv—F‚F†—2–ç7Fæ6Rà ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð —Væ–öâ‚&÷‚’°  —F†—2æÖ–âæÖ–â‚&÷‚æÖ–â“° —F†—2æÖ‚æÖ‚‚&÷‚æÖ‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FG2F†Rv—fVâöfg6WBFò&÷F‚F†RWW"æBÆ÷vW"&÷VæG2öbF†—2&÷VæF–ær&÷‚À ’¢VffV7F—fVÇ’Ö÷f–ær—B–â$B76Rà ’  ’¢&ÒµfV7F÷#'Òöfg6WBÒF†Röfg6WBF†B6†÷VÆB&RW6VBFòG&ç6ÆFRF†R&÷VæF–ær&÷‚à ’¢&WGW&â´&÷ƒ'Ò&VfW&Væ6RFòF†—2&÷VæF–ær&÷‚à ’¢ð —G&ç6ÆFR‚öfg6WB’°  —F†—2æÖ–âæFB‚öfg6WB“° —F†—2æÖ‚æFB‚öfg6WB“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†—2&÷VæF–ær&÷‚—2WVÂv—F‚F†Rv—fVâöæRà ’  ’¢&Ò´&÷ƒ'Ò&÷‚ÒF†R&÷‚FòFW7Bf÷"WVÆ—G’à ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†—2&÷VæF–ær&÷‚—2WVÂv—F‚F†Rv—fVâöæRà ’¢ð –WVÇ2‚&÷‚’°  —&WGW&â&÷‚æÖ–âæWVÇ2‚F†—2æÖ–â’bb&÷‚æÖ‚æWVÇ2‚F†—2æÖ‚“°  —Ð §Ð ¦6öç7B÷7F'EÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷7F'DVæBÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¦6öç7BöCÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7BöC"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö3Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö3"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢âæÇ—F–6ÂÆ–æR6VvÖVçB–â4B76R&W&W6VçFVB'’7F'BæBVæBö–çBà¢¢ð¦6Æ72Æ–æS2°  ’ò¢  ’¢6öç7G'V7G2æWrÆ–æR6VvÖVçBà ’  ’¢&ÒµfV7F÷#7Ò·7F'CÒƒÃÃ•ÒÒ7F'BöbF†RÆ–æR6VvÖVçBà ’¢&ÒµfV7F÷#7Ò¶VæCÒƒÃÃ•ÒÒVæBöbF†RÆ–æR6VvÖVçBà ’¢ð –6öç7G'V7F÷"‚7F'BÒæWrfV7F÷#2‚’ÂVæBÒæWrfV7F÷#2‚’’°  ’ò¢  ’¢7F'BöbF†RÆ–æR6VvÖVçBà ’  ’¢G—RµfV7F÷#7Ð ’¢ð —F†—2ç7F'BÒ7F'C°  ’ò¢  ’¢VæBöbF†RÆ–æR6VvÖVçBà ’  ’¢G—RµfV7F÷#7Ð ’¢ð —F†—2æVæBÒVæC°  —Ð  ’ò¢  ’¢6WG2F†R7F'BæBVæBfÇVW2'’6÷––ærF†Rv—fVâfV7F÷'2à ’  ’¢&ÒµfV7F÷#7Ò7F'BÒF†R7F'Bö–çBà ’¢&ÒµfV7F÷#7ÒVæBÒF†RVæBö–çBà ’¢&WGW&â´Æ–æS7Ò&VfW&Væ6RFòF†—2Æ–æR6VvÖVçBà ’¢ð —6WB‚7F'BÂVæB’°  —F†—2ç7F'Bæ6÷’‚7F'B“° —F†—2æVæBæ6÷’‚VæB“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6÷–W2F†RfÇVW2öbF†Rv—fVâÆ–æR6VvÖVçBFòF†—2–ç7Fæ6Rà ’  ’¢&Ò´Æ–æS7ÒÆ–æRÒF†RÆ–æR6VvÖVçBFò6÷’à ’¢&WGW&â´Æ–æS7Ò&VfW&Væ6RFòF†—2Æ–æR6VvÖVçBà ’¢ð –6÷’‚Æ–æR’°  —F†—2ç7F'Bæ6÷’‚Æ–æRç7F'B“° —F†—2æVæBæ6÷’‚Æ–æRæVæB“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2F†R6VçFW"öbF†RÆ–æR6VvÖVçBà ’  ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†R6VçFW"ö–çBà ’¢ð –vWD6VçFW"‚F&vWB’°  —&WGW&âF&vWBæFEfV7F÷'2‚F†—2ç7F'BÂF†—2æVæB’æ×VÇF—Ç•66Æ"‚ãR“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RFVÇFfV7F÷"öbF†RÆ–æR6VvÖVçBw27F'BæBVæBö–çBà ’  ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†RFVÇFfV7F÷"à ’¢ð –FVÇF‚F&vWB’°  —&WGW&âF&vWBç7V%fV7F÷'2‚F†—2æVæBÂF†—2ç7F'B“°  —Ð  ’ò¢  ’¢&WGW&ç2F†R7V&VBWV6Æ–FVâF—7Fæ6R&WGvVVâF†RÆ–æRr7F'BæBVæBö–çBà ’  ’¢&WGW&â¶çVÖ&W'ÒF†R7V&VBWV6Æ–FVâF—7Fæ6Rà ’¢ð –F—7Fæ6U7‚’°  —&WGW&âF†—2ç7F'BæF—7Fæ6UFõ7V&VB‚F†—2æVæB“°  —Ð  ’ò¢  ’¢&WGW&ç2F†RWV6Æ–FVâF—7Fæ6R&WGvVVâF†RÆ–æRr7F'BæBVæBö–çBà ’  ’¢&WGW&â¶çVÖ&W'ÒF†RWV6Æ–FVâF—7Fæ6Rà ’¢ð –F—7Fæ6R‚’°  —&WGW&âF†—2ç7F'BæF—7Fæ6UFò‚F†—2æVæB“°  —Ð  ’ò¢  ’¢&WGW&ç2fV7F÷"B6W'F–â÷6—F–öâÆöærF†RÆ–æR6VvÖVçBà ’  ’¢&Ò¶çVÖ&W'ÒBÒfÇVR&WGvVVâ³ÃÖFò&W&W6VçB÷6—F–öâÆöærF†RÆ–æR6VvÖVçBà ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†RFVÇFfV7F÷"à ’¢ð –B‚BÂF&vWB’°  —&WGW&âF†—2æFVÇF‚F&vWB’æ×VÇF—Ç•66Æ"‚B’æFB‚F†—2ç7F'B“°  —Ð  ’ò¢  ’¢&WGW&ç2ö–çB&ÖWFW"&6VBöâF†R6Æ÷6W7Bö–çB2&ö¦V7FVBöâF†RÆ–æR6VvÖVçBà ’  ’¢&ÒµfV7F÷#7Òö–çBÒF†Rö–çBf÷"v†–6‚Fò&WGW&âö–çB&ÖWFW"à ’¢&Ò¶&ööÆVçÒ6Æ×FôÆ–æRÒv†WF†W"Fò6Æ×F†R&W7VÇBFòF†R&ævR³ÃÖ÷"æ÷Bà ’¢&WGW&â¶çVÖ&W'ÒF†Rö–çB&ÖWFW"à ’¢ð –6Æ÷6W7Eö–çEFõö–çE&ÖWFW"‚ö–çBÂ6Æ×FôÆ–æR’°  •÷7F'Eç7V%fV7F÷'2‚ö–çBÂF†—2ç7F'B“° •÷7F'DVæBç7V%fV7F÷'2‚F†—2æVæBÂF†—2ç7F'B“°  –6öç7B7F'DVæC"Ò÷7F'DVæBæF÷B‚÷7F'DVæB“° –6öç7B7F'DVæE÷7F'EÒ÷7F'DVæBæF÷B‚÷7F'E“°  –ÆWBBÒ7F'DVæE÷7F'Eò7F'DVæC#°  ––b‚6Æ×FôÆ–æR’°  —BÒ6Æ×‚BÂÂ“°  —Ð  —&WGW&âC°  —Ð  ’ò¢  ’¢&WGW&ç2F†R6Æ÷6W7Bö–çBöâF†RÆ–æRf÷"v—fVâö–çBà ’  ’¢&ÒµfV7F÷#7Òö–çBÒF†Rö–çBFò6ö×WFRF†R6Æ÷6W7Bö–çBöâF†RÆ–æRf÷"à ’¢&Ò¶&ööÆVçÒ6Æ×FôÆ–æRÒv†WF†W"Fò6Æ×F†R&W7VÇBFòF†R&ævR³ÃÖ÷"æ÷Bà ’¢&ÒµfV7F÷#7ÒF&vWBÒF†RF&vWBfV7F÷"F†B—2W6VBFò7F÷&RF†RÖWF†öBw2&W7VÇBà ’¢&WGW&âµfV7F÷#7ÒF†R6Æ÷6W7Bö–çBöâF†RÆ–æRà ’¢ð –6Æ÷6W7Eö–çEFõö–çB‚ö–çBÂ6Æ×FôÆ–æRÂF&vWB’°  –6öç7BBÒF†—2æ6Æ÷6W7Eö–çEFõö–çE&ÖWFW"‚ö–çBÂ6Æ×FôÆ–æR“°  —&WGW&âF†—2æFVÇF‚F&vWB’æ×VÇF—Ç•66Æ"‚B’æFB‚F†—2ç7F'B“°  —Ð  ’ò¢  ’¢&WGW&ç2F†R6Æ÷6W7B7V&VBF—7Fæ6R&WGvVVâF†—2Æ–æR6VvÖVçBæBF†Rv—fVâöæRà ’  ’¢&Ò´Æ–æS7ÒÆ–æRÒF†RÆ–æR6VvÖVçBFò6ö×WFRF†R6Æ÷6W7B7V&VBF—7Fæ6RFòà ’¢&ÒµfV7F÷#7Ò¶3ÒÒF†R6Æ÷6W7Bö–çBöâF†—2Æ–æR6VvÖVçBà ’¢&ÒµfV7F÷#7Ò¶3%ÒÒF†R6Æ÷6W7Bö–çBöâF†Rv—fVâÆ–æR6VvÖVçBà ’¢&WGW&â¶çVÖ&W'ÒF†R7V&VBF—7Fæ6R&WGvVVâF†—2Æ–æR6VvÖVçBæBF†Rv—fVâöæRà ’¢ð –F—7Fæ6U7FôÆ–æS2‚Æ–æRÂ3Òö3Â3"Òö3"’°  ’òòg&öÒ&VÂÕF–ÖR6öÆÆ—6–öâFWFV7F–öâ'’6‡&—7FW"W&–76öâÂ6†FW"Rãã  ’òò6ö×WFW26Æ÷6W7Bö–çG23æB3"öb3‡2“Õ·2¢…Õ’æ@ ’òò3"‡B“Õ"·B¢…"Õ"’Â&WGW&æ–ær2æBBâgVæ7F–öâ&W7VÇB—27V&V@ ’òòF—7Fæ6R&WGvVVâ&WGvVVâ3‡2’æB3"‡B  –6öç7BU4”ÄôâÒRÓ‚¢RÓƒ²òò×W7B&R7V&VB6–æ6RvR6ö×&R7V&VBÆVæwF€ –ÆWB2ÂC°  –6öç7BÒF†—2ç7F'C° –6öç7B"ÒÆ–æRç7F'C° –6öç7BÒF†—2æVæC° –6öç7B"ÒÆ–æRæVæC°  •öCç7V%fV7F÷'2‚Â“²òòF—&V7F–öâfV7F÷"öb6VvÖVçB3 •öC"ç7V%fV7F÷'2‚"Â"“²òòF—&V7F–öâfV7F÷"öb6VvÖVçB3  •÷"ç7V%fV7F÷'2‚Â"“°  –6öç7BÒöCæF÷B‚öC“²òò7V&VBÆVæwF‚öb6VvÖVçB3ÂÇv—2æöææVvF—fP –6öç7BRÒöC"æF÷B‚öC"“²òò7V&VBÆVæwF‚öb6VvÖVçB3"ÂÇv—2æöææVvF—fP –6öç7BbÒöC"æF÷B‚÷"“°  ’òò6†V6²–bV—F†W"÷"&÷F‚6VvÖVçG2FVvVæW&FR–çFòö–çG0  ––b‚ÃÒU4”ÄôâbbRÃÒU4”Äôâ’°  ’òò&÷F‚6VvÖVçG2FVvVæW&FR–çFòö–çG0  –3æ6÷’‚“° –3"æ6÷’‚"“°  –3ç7V"‚3"“°  —&WGW&â3æF÷B‚3“°  —Ð  ––b‚ÃÒU4”Äôâ’°  ’òòf—'7B6VvÖVçBFVvVæW&FW2–çFòö–ç@  —2Ò° —BÒbòS²òò2ÒÓâBÒ†"§2²b’òRÒbòP —BÒ6Æ×‚BÂÂ“°   —ÒVÇ6R°  –6öç7B2ÒöCæF÷B‚÷"“°  ––b‚RÃÒU4”Äôâ’°  ’òò6V6öæB6VvÖVçBFVvVæW&FW2–çFòö–ç@  —BÒ° —2Ò6Æ×‚Ò2òÂÂ“²òòBÒÓâ2Ò†"§BÒ2’òÒÖ2ò  —ÒVÇ6R°  ’òòF†RvVæW&ÂæöæFVvVæW&FR66R7F'G2†W&P  –6öç7B"ÒöCæF÷B‚öC"“° –6öç7BFVæöÒÒ¢RÒ"¢#²òòÇv—2æöææVvF—fP  ’òò–b6VvÖVçG2æ÷B&ÆÆVÂÂ6ö×WFR6Æ÷6W7Bö–çBöâÃFòÃ"æ@ ’òò6Æ×Fò6VvÖVçB3âVÇ6R–6²&&—G&'’2††W&R  ––b‚FVæöÒÓÒ’°  —2Ò6Æ×‚‚"¢bÒ2¢R’òFVæöÒÂÂ“°  —ÒVÇ6R°  —2Ò°  —Ð  ’òò6ö×WFRö–çBöâÃ"6Æ÷6W7BFò3‡2’W6–æp ’òòBÒF÷B‚…²C§2’Ò"ÄC"’òF÷B„C"ÄC"’Ò†"§2²b’òP  —BÒ‚"¢2²b’òS°  ’òò–bB–â³ÃÒFöæRâVÇ6R6Æ×BÂ&V6ö×WFR2f÷"F†RæWrfÇVP ’òòöbBW6–ær2ÒF÷B‚…"²C"§B’ÒÄC’òF÷B„CÄC“Ò‡B¦"Ò2’ò ’òòæB6Æ×2Fò³ÂÐ  ––b‚BÂ’°  —BÒã° —2Ò6Æ×‚Ò2òÂÂ“°  —ÒVÇ6R–b‚Bâ’°  —BÒ° —2Ò6Æ×‚‚"Ò2’òÂÂ“°  —Ð  —Ð  —Ð  –3æ6÷’‚’æFB‚öCæ×VÇF—Ç•66Æ"‚2’“° –3"æ6÷’‚"’æFB‚öC"æ×VÇF—Ç•66Æ"‚B’“°  –3ç7V"‚3"“°  —&WGW&â3æF÷B‚3“°  —Ð  ’ò¢  ’¢Æ–W2GƒBG&ç6f÷&ÖF–öâÖG&—‚FòF†—2Æ–æR6VvÖVçBà ’  ’¢&Ò´ÖG&—ƒGÒÖG&—‚ÒF†RG&ç6f÷&ÖF–öâÖG&—‚à ’¢&WGW&â´Æ–æS7Ò&VfW&Væ6RFòF†—2Æ–æR6VvÖVçBà ’¢ð –Ç”ÖG&—ƒB‚ÖG&—‚’°  —F†—2ç7F'BæÇ”ÖG&—ƒB‚ÖG&—‚“° —F†—2æVæBæÇ”ÖG&—ƒB‚ÖG&—‚“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢&WGW&ç2G'VV–bF†—2Æ–æR6VvÖVçB—2WVÂv—F‚F†Rv—fVâöæRà ’  ’¢&Ò´Æ–æS7ÒÆ–æRÒF†RÆ–æR6VvÖVçBFòFW7Bf÷"WVÆ—G’à ’¢&WGW&â¶&ööÆVçÒv†WF†W"F†—2Æ–æR6VvÖVçB—2WVÂv—F‚F†Rv—fVâöæRà ’¢ð –WVÇ2‚Æ–æR’°  —&WGW&âÆ–æRç7F'BæWVÇ2‚F†—2ç7F'B’bbÆ–æRæVæBæWVÇ2‚F†—2æVæB“°  —Ð  ’ò¢  ’¢&WGW&ç2æWrÆ–æR6VvÖVçBv—F‚6÷–VBfÇVW2g&öÒF†—2–ç7Fæ6Rà ’  ’¢&WGW&â´Æ–æS7Ò6ÆöæRöbF†—2–ç7Fæ6Rà ’¢ð –6ÆöæR‚’°  —&WGW&âæWrF†—2æ6öç7G'V7F÷"‚’æ6÷’‚F†—2“°  —Ð §Ð ¦6öç7B÷fV7F÷"C2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢F†—2F—7Æ—26öæR6†VB†VÇW"ö&¦V7Bf÷"´Æ–æ²7÷DÆ–v‡GÒà¢ ¢¢§0¢¢6öç7B7÷DÆ–v‡BÒæWrD…$TRå7÷DÆ–v‡B‚†fffffb“°¢¢7÷DÆ–v‡Bç÷6—F–öâç6WB‚ÂÂ“°¢¢66VæRæFB‚7÷DÆ–v‡B“°¢ ¢¢6öç7B7÷DÆ–v‡D†VÇW"ÒæWrD…$TRå7÷DÆ–v‡D†VÇW"‚7÷DÆ–v‡B“°¢¢66VæRæFB‚7÷DÆ–v‡D†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ727÷DÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWr7÷BÆ–v‡B†VÇW"à ’  ’¢&Ò´†VÖ—7†W&TÆ–v‡GÒÆ–v‡BÒF†RÆ–v‡BFò&Rf—7VÆ—¦VBà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷%ÒÒF†R†VÇW"w26öÆ÷"â–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶P ’¢F†R6öÆ÷"öbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚Æ–v‡BÂ6öÆ÷"’°  —7WW"‚“°  ’ò¢  ’¢F†RÆ–v‡B&V–ærf—7VÆ—¦VBà ’  ’¢G—Rµ7÷DÆ–v‡GÐ ’¢ð —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—„WFõWFFRÒfÇ6S°  ’ò¢  ’¢F†R6öÆ÷"&ÖWFW"76VB–âF†R6öç7G'V7F÷"à ’¢–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶RF†R6öÆ÷"öbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÐ ’¢ð —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒu7÷DÆ–v‡D†VÇW"s°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –6öç7B÷6—F–öç2Ò° “ÂÂÂ “ÂÂÀ “ÂÂÂ “ÂÂÀ “ÂÂÀ’ÓÂÂÀ “ÂÂÂ “ÂÂÀ “ÂÂÂ “ÂÓÂ •Ó°  –f÷"‚ÆWB’ÒÂ¢ÒÂÂÒ3#²’ÂÃ²’²²Â¢²²’°  –6öç7BÒ‚’òÂ’¢ÖF‚å’¢#° –6öç7B"Ò‚¢òÂ’¢ÖF‚å’¢#°  —÷6—F–öç2çW6‚€ ”ÖF‚æ6÷2‚’ÂÖF‚ç6–â‚’ÂÀ ”ÖF‚æ6÷2‚"’ÂÖF‚ç6–â‚"’Â ’“°  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  —F†—2æ6öæRÒæWrÆ–æU6VvÖVçG2‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2æ6öæR“°  —F†—2çWFFR‚“°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2æ6öæRævVöÖWG'’æF—7÷6R‚“° —F†—2æ6öæRæÖFW&–ÂæF—7÷6R‚“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"FòÖF6‚F†R÷6—F–öâæBF—&V7F–öâöbF†P ’¢Æ–v‡B&V–ærf—7VÆ—¦VBà ’¢ð —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“° —F†—2æÆ–v‡BçF&vWBçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  ’òòWFFRF†RÆö6ÂÖG&—‚&6VBöâF†R&VçBæBÆ–v‡BF&vWBG&ç6f÷&×0 ––b‚F†—2ç&VçB’°  —F†—2ç&VçBçWFFUv÷&ÆDÖG&—‚‚G'VR“°  —F†—2æÖG&—€ ’æ6÷’‚F†—2ç&VçBæÖG&—…v÷&ÆB ’æ–çfW'B‚ ’æ×VÇF—Ç’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  —ÒVÇ6R°  —F†—2æÖG&—‚æ6÷’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  —Ð  —F†—2æÖG&—…v÷&ÆBæ6÷’‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“°  –6öç7B6öæTÆVæwF‚ÒF†—2æÆ–v‡BæF—7Fæ6RòF†—2æÆ–v‡BæF—7Fæ6R¢° –6öç7B6öæUv–GF‚Ò6öæTÆVæwF‚¢ÖF‚çFâ‚F†—2æÆ–v‡BæævÆR“°  —F†—2æ6öæRç66ÆRç6WB‚6öæUv–GF‚Â6öæUv–GF‚Â6öæTÆVæwF‚“°  •÷fV7F÷"C2ç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BçF&vWBæÖG&—…v÷&ÆB“°  —F†—2æ6öæRæÆöö´B‚÷fV7F÷"C2“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  —Ð §Ð ¦6öç7B÷fV7F÷"C"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö&öæTÖG&—‚Òò¤õõU$Uõò¢òæWrÖG&—ƒB‚“°¦6öç7BöÖG&—…v÷&ÆD–çbÒò¤õõU$Uõò¢òæWrÖG&—ƒB‚“° ¢ò¢ ¢¢†VÇW"ö&¦V7BFò76—7Bv—F‚f—7VÆ—¦–ær´Æ–æ²6¶VÆWFöçÒà¢ ¢¢§0¢¢6öç7B†VÇW"ÒæWrD…$TRå6¶VÆWFöä†VÇW"‚6¶–ææVDÖW6‚“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ726¶VÆWFöä†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWr6¶VÆWFöâ†VÇW"à ’  ’¢&Ò´ö&¦V7C4GÒö&¦V7BÒW7VÆÇ’â–ç7Fæ6Röb´Æ–æ²6¶–ææVDÖW6‡Òâ†÷vWfW"Âç’4Bö&¦V7@ ’¢6â&RW6VB–b—B&W&W6VçG2†–W&&6‡’öb&öæW2‡6VR´Æ–æ²&öæWÒ’à ’¢ð –6öç7G'V7F÷"‚ö&¦V7B’°  –6öç7B&öæW2ÒvWD&öæTÆ—7B‚ö&¦V7B“°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  –f÷"‚ÆWB’Ò²’Â&öæW2æÆVæwFƒ²’²²’°  –6öç7B&öæRÒ&öæW5²’Ó°  ––b‚&öæRç&VçBbb&öæRç&VçBæ—4&öæR’°  —fW'F–6W2çW6‚‚ÂÂ“° —fW'F–6W2çW6‚‚ÂÂ“° –6öÆ÷'2çW6‚‚ÂÂ“° –6öÆ÷'2çW6‚‚ÂÂ“°  —Ð  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFWF…FW7C¢fÇ6RÂFWF…w&—FS¢fÇ6RÂFöæTÖVC¢fÇ6RÂG&ç7&VçC¢G'VRÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  ’ò¢  ’¢F†—2fÆr6â&RW6VBf÷"G—RFW7F–ærà ’  ’¢G—R¶&ööÆVçÐ ’¢&VFöæÇ ’¢FVfVÇBG'VP ’¢ð —F†—2æ—56¶VÆWFöä†VÇW"ÒG'VS°  —F†—2çG—RÒu6¶VÆWFöä†VÇW"s°  ’ò¢  ’¢F†Rö&¦V7B&V–ærf—7VÆ—¦VBà ’  ’¢G—R´ö&¦V7C4GÐ ’¢ð —F†—2ç&ö÷BÒö&¦V7C°  ’ò¢  ’¢F†RÆ—7Böb&öæW2F†BF†R†VÇW"f—7VÆ—¦W2à ’  ’¢G—R´'&“Ä&öæSçÐ ’¢ð —F†—2æ&öæW2Ò&öæW3°  —F†—2æÖG&—‚Òö&¦V7BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  ’òò6öÆ÷'0  –6öç7B6öÆ÷#ÒæWr6öÆ÷"‚ƒfb“° –6öç7B6öÆ÷#"ÒæWr6öÆ÷"‚ƒfc“°  —F†—2ç6WD6öÆ÷'2‚6öÆ÷#Â6öÆ÷#"“°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  –6öç7B&öæW2ÒF†—2æ&öæW3°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“°  •öÖG&—…v÷&ÆD–çbæ6÷’‚F†—2ç&ö÷BæÖG&—…v÷&ÆB’æ–çfW'B‚“°  –f÷"‚ÆWB’ÒÂ¢Ò²’Â&öæW2æÆVæwFƒ²’²²’°  –6öç7B&öæRÒ&öæW5²’Ó°  ––b‚&öæRç&VçBbb&öæRç&VçBæ—4&öæR’°  •ö&öæTÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚öÖG&—…v÷&ÆD–çbÂ&öæRæÖG&—…v÷&ÆB“° •÷fV7F÷"C"ç6WDg&öÔÖG&—…÷6—F–öâ‚ö&öæTÖG&—‚“° —÷6—F–öâç6WE…•¢‚¢Â÷fV7F÷"C"ç‚Â÷fV7F÷"C"ç’Â÷fV7F÷"C"ç¢“°  •ö&öæTÖG&—‚æ×VÇF—Ç”ÖG&–6W2‚öÖG&—…v÷&ÆD–çbÂ&öæRç&VçBæÖG&—…v÷&ÆB“° •÷fV7F÷"C"ç6WDg&öÔÖG&—…÷6—F–öâ‚ö&öæTÖG&—‚“° —÷6—F–öâç6WE…•¢‚¢²Â÷fV7F÷"C"ç‚Â÷fV7F÷"C"ç’Â÷fV7F÷"C"ç¢“°  –¢³Ò#°  —Ð  —Ð  –vVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr’ææVVG5WFFRÒG'VS°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  ’ò¢  ’¢FVf–æW2F†R6öÆ÷'2öbF†R†VÇW"à ’  ’¢&Ò´6öÆ÷'Ò6öÆ÷#ÒF†Rf—'7BÆ–æR6öÆ÷"f÷"V6‚&öæRà ’¢&Ò´6öÆ÷'Ò6öÆ÷#"ÒF†R6V6öæBÆ–æR6öÆ÷"f÷"V6‚&öæRà ’¢&WGW&âµ6¶VÆWFöä†VÇW'Ò&VfW&Væ6RFòF†—2†VÇW"à ’¢ð —6WD6öÆ÷'2‚6öÆ÷#Â6öÆ÷#"’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7B6öÆ÷$GG&–'WFRÒvVöÖWG'’ævWDGG&–'WFR‚v6öÆ÷"r“°  –f÷"‚ÆWB’Ò²’Â6öÆ÷$GG&–'WFRæ6÷VçC²’³Ò"’°  –6öÆ÷$GG&–'WFRç6WE…•¢‚’Â6öÆ÷#ç"Â6öÆ÷#ærÂ6öÆ÷#æ"“° –6öÆ÷$GG&–'WFRç6WE…•¢‚’²Â6öÆ÷#"ç"Â6öÆ÷#"ærÂ6öÆ÷#"æ"“°  —Ð  –6öÆ÷$GG&–'WFRææVVG5WFFRÒG'VS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð  ¦gVæ7F–öâvWD&öæTÆ—7B‚ö&¦V7B’°  –6öç7B&öæTÆ—7BÒµÓ°  ––b‚ö&¦V7Bæ—4&öæRÓÓÒG'VR’°  –&öæTÆ—7BçW6‚‚ö&¦V7B“°  —Ð  –f÷"‚ÆWB’Ò²’Âö&¦V7Bæ6†–ÆG&VâæÆVæwFƒ²’²²’°  –&öæTÆ—7BçW6‚‚ââævWD&öæTÆ—7B‚ö&¦V7Bæ6†–ÆG&Vå²’Ò’“°  —Ð  —&WGW&â&öæTÆ—7C° §Ð ¢ò¢ ¢¢F†—2F—7Æ—2†VÇW"ö&¦V7B6öç6—7F–æröb7†W&–6ÂÖW6‚f÷ ¢¢f—7VÆ—¦–ærâ–ç7Fæ6Röb´Æ–æ²ö–çDÆ–v‡GÒà¢ ¢¢§0¢¢6öç7Bö–çDÆ–v‡BÒæWrD…$TRåö–çDÆ–v‡B‚†fcÂÂ“°¢¢ö–çDÆ–v‡Bç÷6—F–öâç6WB‚ÂÂ“°¢¢66VæRæFB‚ö–çDÆ–v‡B“°¢ ¢¢6öç7B7†W&U6—¦RÒ°¢¢6öç7Bö–çDÆ–v‡D†VÇW"ÒæWrD…$TRåö–çDÆ–v‡D†VÇW"‚ö–çDÆ–v‡BÂ7†W&U6—¦R“°¢¢66VæRæFB‚ö–çDÆ–v‡D†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2ÖW6€¢¢ð¦6Æ72ö–çDÆ–v‡D†VÇW"W‡FVæG2ÖW6‚°  ’ò¢  ’¢6öç7G'V7G2æWrö–çBÆ–v‡B†VÇW"à ’  ’¢&Òµö–çDÆ–v‡GÒÆ–v‡BÒF†RÆ–v‡BFò&Rf—7VÆ—¦VBà ’¢&Ò¶çVÖ&W'Ò·7†W&U6—¦SÓÒÒF†R6—¦RöbF†R7†W&R†VÇW"à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷%ÒÒF†R†VÇW"w26öÆ÷"â–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶P ’¢F†R6öÆ÷"öbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚Æ–v‡BÂ7†W&U6—¦RÂ6öÆ÷"’°  –6öç7BvVöÖWG'’ÒæWr7†W&TvVöÖWG'’‚7†W&U6—¦RÂBÂ"“° –6öç7BÖFW&–ÂÒæWrÖW6„&6–4ÖFW&–Â‚²v—&Vg&ÖS¢G'VRÂfös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  ’ò¢  ’¢F†RÆ–v‡B&V–ærf—7VÆ—¦VBà ’  ’¢G—R´†VÖ—7†W&TÆ–v‡GÐ ’¢ð —F†—2æÆ–v‡BÒÆ–v‡C°  ’ò¢  ’¢F†R6öÆ÷"&ÖWFW"76VB–âF†R6öç7G'V7F÷"à ’¢–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶RF†R6öÆ÷"öbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÐ ’¢ð —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒuö–çDÆ–v‡D†VÇW"s°  —F†—2æÖG&—‚ÒF†—2æÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2çWFFR‚“°   ’ò  ’òòDôDó¢FVÆWFRF†—26öÖÖVçCð –6öç7BF—7Fæ6TvVöÖWG'’ÒæWrD…$TRä–6÷6†VG&öävVöÖWG'’‚Â"“° –6öç7BF—7Fæ6TÖFW&–ÂÒæWrD…$TRäÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢†W„6öÆ÷"Âfös¢fÇ6RÂv—&Vg&ÖS¢G'VRÂ÷6—G“¢ãÂG&ç7&VçC¢G'VRÒ“°  —F†—2æÆ–v‡E7†W&RÒæWrD…$TRäÖW6‚‚'VÆ$vVöÖWG'’Â'VÆ$ÖFW&–Â“° —F†—2æÆ–v‡DF—7Fæ6RÒæWrD…$TRäÖW6‚‚F—7Fæ6TvVöÖWG'’ÂF—7Fæ6TÖFW&–Â“°  –6öç7BBÒÆ–v‡BæF—7Fæ6S°  ––b‚BÓÓÒã’°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒfÇ6S°  —ÒVÇ6R°  —F†—2æÆ–v‡DF—7Fæ6Rç66ÆRç6WB‚BÂBÂB“°  —Ð  —F†—2æFB‚F†—2æÆ–v‡DF—7Fæ6R“° ’¢ð  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"FòÖF6‚F†R÷6—F–öâöbF†P ’¢Æ–v‡B&V–ærf—7VÆ—¦VBà ’¢ð —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  ’ò  –6öç7BBÒF†—2æÆ–v‡BæF—7Fæ6S°  ––b‚BÓÓÒã’°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒfÇ6S°  —ÒVÇ6R°  —F†—2æÆ–v‡DF—7Fæ6Rçf—6–&ÆRÒG'VS° —F†—2æÆ–v‡DF—7Fæ6Rç66ÆRç6WB‚BÂBÂB“°  —Ð ’¢ð  —Ð §Ð ¦6öç7B÷fV7F÷"CÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö6öÆ÷#Òò¤õõU$Uõò¢òæWr6öÆ÷"‚“°¦6öç7Bö6öÆ÷#"Òò¤õõU$Uõò¢òæWr6öÆ÷"‚“° ¢ò¢ ¢¢7&VFW2f—7VÂ–B6öç6—7F–æröb7†W&–6ÂÖW6‚f÷"¢¢v—fVâ´Æ–æ²†VÖ—7†W&TÆ–v‡GÒà¢ ¢¢§0¢¢6öç7BÆ–v‡BÒæWrD…$TRä†VÖ—7†W&TÆ–v‡B‚†ffff&"Âƒƒƒ#Â“°¢¢6öç7B†VÇW"ÒæWrD…$TRä†VÖ—7†W&TÆ–v‡D†VÇW"‚Æ–v‡BÂR“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72†VÖ—7†W&TÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWr†VÖ—7†W&RÆ–v‡B†VÇW"à ’  ’¢&Ò´†VÖ—7†W&TÆ–v‡GÒÆ–v‡BÒF†RÆ–v‡BFò&Rf—7VÆ—¦VBà ’¢&Ò¶çVÖ&W'Ò·6—¦SÓÒÒF†R6—¦RöbF†RÖW6‚W6VBFòf—7VÆ—¦RF†RÆ–v‡Bà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷%ÒÒF†R†VÇW"w26öÆ÷"â–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶P ’¢F†R6öÆ÷"öbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚Æ–v‡BÂ6—¦RÂ6öÆ÷"’°  —7WW"‚“°  ’ò¢  ’¢F†RÆ–v‡B&V–ærf—7VÆ—¦VBà ’  ’¢G—R´†VÖ—7†W&TÆ–v‡GÐ ’¢ð —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—‚ÒÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  ’ò¢  ’¢F†R6öÆ÷"&ÖWFW"76VB–âF†R6öç7G'V7F÷"à ’¢–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶RF†R6öÆ÷"öbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÐ ’¢ð —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒt†VÖ—7†W&TÆ–v‡D†VÇW"s°  –6öç7BvVöÖWG'’ÒæWrö7F†VG&öävVöÖWG'’‚6—¦R“° –vVöÖWG'’ç&÷FFU’‚ÖF‚å’¢ãR“°  —F†—2æÖFW&–ÂÒæWrÖW6„&6–4ÖFW&–Â‚²v—&Vg&ÖS¢G'VRÂfös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“° ––b‚F†—2æ6öÆ÷"ÓÓÒVæFVf–æVB’F†—2æÖFW&–ÂçfW'FW„6öÆ÷'2ÒG'VS°  –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“° –6öç7B6öÆ÷'2ÒæWrfÆöC3$'&’‚÷6—F–öâæ6÷VçB¢2“°  –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWr'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  —F†—2æFB‚æWrÖW6‚‚vVöÖWG'’ÂF†—2æÖFW&–Â’“°  —F†—2çWFFR‚“°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2æ6†–ÆG&Vå²ÒævVöÖWG'’æF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒæÖFW&–ÂæF—7÷6R‚“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"FòÖF6‚F†R÷6—F–öâæBF—&V7F–öâöbF†P ’¢Æ–v‡B&V–ærf—7VÆ—¦VBà ’¢ð —WFFR‚’°  –6öç7BÖW6‚ÒF†—2æ6†–ÆG&Vå²Ó°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  –6öç7B6öÆ÷'2ÒÖW6‚ævVöÖWG'’ævWDGG&–'WFR‚v6öÆ÷"r“°  •ö6öÆ÷#æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“° •ö6öÆ÷#"æ6÷’‚F†—2æÆ–v‡Bæw&÷VæD6öÆ÷"“°  –f÷"‚ÆWB’ÒÂÂÒ6öÆ÷'2æ6÷VçC²’ÂÃ²’²²’°  –6öç7B6öÆ÷"Ò‚’Â‚Âò"’’òö6öÆ÷#¢ö6öÆ÷##°  –6öÆ÷'2ç6WE…•¢‚’Â6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  –6öÆ÷'2ææVVG5WFFRÒG'VS°  —Ð  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  –ÖW6‚æÆöö´B‚÷fV7F÷"Cç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB’ææVvFR‚’“°  —Ð §Ð ¢ò¢ ¢¢F†R†VÇW"—2âö&¦V7BFòFVf–æRw&–G2âw&–G2&RGvòÖF–ÖVç6–öæÀ¢¢'&—2öbÆ–æW2à¢ ¢¢§0¢¢6öç7B6—¦RÒ°¢¢6öç7BF—f—6–öç2Ò°¢ ¢¢6öç7Bw&–D†VÇW"ÒæWrD…$TRäw&–D†VÇW"‚6—¦RÂF—f—6–öç2“°¢¢66VæRæFB‚w&–D†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ72w&–D†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWrw&–B†VÇW"à ’  ’¢&Ò¶çVÖ&W'Ò·6—¦SÓÒÒF†R6—¦RöbF†Rw&–Bà ’¢&Ò¶çVÖ&W'Ò¶F—f—6–öç3ÓÒÒF†RçVÖ&W"öbF—f—6–öç27&÷72F†Rw&–Bà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷#ÓƒCCCCCEÒÒF†R6öÆ÷"öbF†R6VçFW"Æ–æRà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷##Óƒƒƒƒƒƒ…ÒÒF†R6öÆ÷"öbF†RÆ–æW2öbF†Rw&–Bà ’¢ð –6öç7G'V7F÷"‚6—¦RÒÂF—f—6–öç2ÒÂ6öÆ÷#ÒƒCCCCCBÂ6öÆ÷#"Òƒƒƒƒƒƒ‚’°  –6öÆ÷#ÒæWr6öÆ÷"‚6öÆ÷#“° –6öÆ÷#"ÒæWr6öÆ÷"‚6öÆ÷#"“°  –6öç7B6VçFW"ÒF—f—6–öç2ò#° –6öç7B7FWÒ6—¦RòF—f—6–öç3° –6öç7B†Æe6—¦RÒ6—¦Rò#°  –6öç7BfW'F–6W2ÒµÒÂ6öÆ÷'2ÒµÓ°  –f÷"‚ÆWB’ÒÂ¢ÒÂ²ÒÒ†Æe6—¦S²’ÃÒF—f—6–öç3²’²²Â²³Ò7FW’°  —fW'F–6W2çW6‚‚Ò†Æe6—¦RÂÂ²Â†Æe6—¦RÂÂ²“° —fW'F–6W2çW6‚‚²ÂÂÒ†Æe6—¦RÂ²ÂÂ†Æe6—¦R“°  –6öç7B6öÆ÷"Ò’ÓÓÒ6VçFW"ò6öÆ÷#¢6öÆ÷##°  –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3° –6öÆ÷"çFô'&’‚6öÆ÷'2Â¢“²¢³Ò3°  —Ð  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒtw&–D†VÇW"s°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¢ò¢ ¢¢F†—2†VÇW"—2âö&¦V7BFòFVf–æRöÆ"w&–G2âw&–G2&P¢¢GvòÖF–ÖVç6–öæÂ'&—2öbÆ–æW2à¢ ¢¢§0¢¢6öç7B&F—W2Ò°¢¢6öç7B6V7F÷'2Òc°¢¢6öç7B&–æw2Òƒ°¢¢6öç7BF—f—6–öç2ÒcC°¢ ¢¢6öç7B†VÇW"ÒæWrD…$TRåöÆ$w&–D†VÇW"‚&F—W2Â6V7F÷'2Â&–æw2ÂF—f—6–öç2“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ72öÆ$w&–D†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWröÆ"w&–B†VÇW"à ’  ’¢&Ò¶çVÖ&W'Ò·&F—W3ÓÒÒF†R&F—W2öbF†RöÆ"w&–BâF†—26â&Rç’÷6—F—fRçVÖ&W"à ’¢&Ò¶çVÖ&W'Ò·6V7F÷'3ÓeÒÒF†RçVÖ&W"öb6V7F÷'2F†Rw&–Bv–ÆÂ&RF—f–FVB–çFòâF†—26â&Rç’÷6—F—fR–çFVvW"à ’¢&Ò¶çVÖ&W'Ò·&–æw3ÓeÒÒF†RçVÖ&W"öb&–æw2âF†—26â&Rç’÷6—F—fR–çFVvW"à ’¢&Ò¶çVÖ&W'Ò¶F—f—6–öç3ÓcEÒÒF†RçVÖ&W"öbÆ–æR6VvÖVçG2W6VBf÷"V6‚6—&6ÆRâF†—26â&Rç’÷6—F—fR–çFVvW"à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷#ÓƒCCCCCEÒÒF†Rf—'7B6öÆ÷"W6VBf÷"w&–BVÆVÖVçG2à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷##Óƒƒƒƒƒƒ…ÒÒF†R6V6öæB6öÆ÷"W6VBf÷"w&–BVÆVÖVçG2à ’¢ð –6öç7G'V7F÷"‚&F—W2ÒÂ6V7F÷'2ÒbÂ&–æw2Ò‚ÂF—f—6–öç2ÒcBÂ6öÆ÷#ÒƒCCCCCBÂ6öÆ÷#"Òƒƒƒƒƒƒ‚’°  –6öÆ÷#ÒæWr6öÆ÷"‚6öÆ÷#“° –6öÆ÷#"ÒæWr6öÆ÷"‚6öÆ÷#"“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  ’òò7&VFRF†R6V7F÷'0  ––b‚6V7F÷'2â’°  –f÷"‚ÆWB’Ò²’Â6V7F÷'3²’²²’°  –6öç7BbÒ‚’ò6V7F÷'2’¢‚ÖF‚å’¢"“°  –6öç7B‚ÒÖF‚ç6–â‚b’¢&F—W3° –6öç7B¢ÒÖF‚æ6÷2‚b’¢&F—W3°  —fW'F–6W2çW6‚‚ÂÂ“° —fW'F–6W2çW6‚‚‚ÂÂ¢“°  –6öç7B6öÆ÷"Ò‚’b’ò6öÆ÷#¢6öÆ÷##°  –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  —Ð  ’òò7&VFRF†R&–æw0  –f÷"‚ÆWB’Ò²’Â&–æw3²’²²’°  –6öç7B6öÆ÷"Ò‚’b’ò6öÆ÷#¢6öÆ÷##°  –6öç7B"Ò&F—W2Ò‚&F—W2ò&–æw2¢’“°  –f÷"‚ÆWB¢Ò²¢ÂF—f—6–öç3²¢²²’°  ’òòf—'7BfW'FW€  –ÆWBbÒ‚¢òF—f—6–öç2’¢‚ÖF‚å’¢"“°  –ÆWB‚ÒÖF‚ç6–â‚b’¢#° –ÆWB¢ÒÖF‚æ6÷2‚b’¢#°  —fW'F–6W2çW6‚‚‚ÂÂ¢“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  ’òò6V6öæBfW'FW€  —bÒ‚‚¢²’òF—f—6–öç2’¢‚ÖF‚å’¢"“°  —‚ÒÖF‚ç6–â‚b’¢#° —¢ÒÖF‚æ6÷2‚b’¢#°  —fW'F–6W2çW6‚‚‚ÂÂ¢“° –6öÆ÷'2çW6‚‚6öÆ÷"ç"Â6öÆ÷"ærÂ6öÆ÷"æ"“°  —Ð  —Ð  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒuöÆ$w&–D†VÇW"s°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6öç7B÷cÒò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷c"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7B÷c2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“° ¢ò¢ ¢¢†VÇW"ö&¦V7BFò76—7Bv—F‚f—7VÆ—¦–ær´Æ–æ²F—&V7F–öæÄÆ–v‡GÒw0¢¢VffV7BöâF†R66VæRâF†—26öç6—7G2öbÆæRæBÆ–æR&W&W6VçF–ærF†P¢¢Æ–v‡Bw2÷6—F–öâæBF—&V7F–öâà¢ ¢¢§0¢¢6öç7BÆ–v‡BÒæWrD…$TRäF—&V7F–öæÄÆ–v‡B‚„dddddb“°¢¢66VæRæFB‚Æ–v‡B“°¢ ¢¢6öç7B†VÇW"ÒæWrD…$TRäF—&V7F–öæÄÆ–v‡D†VÇW"‚Æ–v‡BÂR“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72F—&V7F–öæÄÆ–v‡D†VÇW"W‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWrF—&V7F–öæÂÆ–v‡B†VÇW"à ’  ’¢&Ò´F—&V7F–öæÄÆ–v‡GÒÆ–v‡BÒF†RÆ–v‡BFò&Rf—7VÆ—¦VBà ’¢&Ò¶çVÖ&W'Ò·6—¦SÓÒÒF†RF–ÖVç6–öç2öbF†RÆæRà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷%ÒÒF†R†VÇW"w26öÆ÷"â–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶P ’¢F†R6öÆ÷"öbF†RÆ–v‡Bà ’¢ð –6öç7G'V7F÷"‚Æ–v‡BÂ6—¦RÂ6öÆ÷"’°  —7WW"‚“°  ’ò¢  ’¢F†RÆ–v‡B&V–ærf—7VÆ—¦VBà ’  ’¢G—R´F—&V7F–öæÄÆ–v‡GÐ ’¢ð —F†—2æÆ–v‡BÒÆ–v‡C°  —F†—2æÖG&—‚ÒÆ–v‡BæÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  ’ò¢  ’¢F†R6öÆ÷"&ÖWFW"76VB–âF†R6öç7G'V7F÷"à ’¢–bæ÷B6WBÂF†R†VÇW"v–ÆÂF¶RF†R6öÆ÷"öbF†RÆ–v‡Bà ’  ’¢G—R¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÐ ’¢ð —F†—2æ6öÆ÷"Ò6öÆ÷#°  —F†—2çG—RÒtF—&V7F–öæÄÆ–v‡D†VÇW"s°  ––b‚6—¦RÓÓÒVæFVf–æVB’6—¦RÒ°  –ÆWBvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚° ’Ò6—¦RÂ6—¦RÂÀ —6—¦RÂ6—¦RÂÀ —6—¦RÂÒ6—¦RÂÀ ’Ò6—¦RÂÒ6—¦RÂÀ ’Ò6—¦RÂ6—¦RÂ  •ÒÂ2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fös¢fÇ6RÂFöæTÖVC¢fÇ6RÒ“°  ’ò¢  ’¢6öçF–ç2F†RÆ–æR6†÷v–ærF†RÆö6F–öâöbF†RF—&V7F–öæÂÆ–v‡Bà ’  ’¢G—R´Æ–æWÐ ’¢ð —F†—2æÆ–v‡EÆæRÒæWrÆ–æR‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2æÆ–v‡EÆæR“°  –vVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚²ÂÂÂÂÂÒÂ2’“°  ’ò¢  ’¢&W&W6VçG2F†RF&vWBÆ–æRöbF†RF—&V7F–öæÂÆ–v‡Bà ’  ’¢G—R´Æ–æWÐ ’¢ð —F†—2çF&vWDÆ–æRÒæWrÆ–æR‚vVöÖWG'’ÂÖFW&–Â“° —F†—2æFB‚F†—2çF&vWDÆ–æR“°  —F†—2çWFFR‚“°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2æÆ–v‡EÆæRævVöÖWG'’æF—7÷6R‚“° —F†—2æÆ–v‡EÆæRæÖFW&–ÂæF—7÷6R‚“° —F†—2çF&vWDÆ–æRævVöÖWG'’æF—7÷6R‚“° —F†—2çF&vWDÆ–æRæÖFW&–ÂæF—7÷6R‚“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"FòÖF6‚F†R÷6—F–öâæBF—&V7F–öâöbF†P ’¢Æ–v‡B&V–ærf—7VÆ—¦VBà ’¢ð —WFFR‚’°  —F†—2æÆ–v‡BçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“° —F†—2æÆ–v‡BçF&vWBçWFFUv÷&ÆDÖG&—‚‚G'VRÂfÇ6R“°  •÷cç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BæÖG&—…v÷&ÆB“° •÷c"ç6WDg&öÔÖG&—…÷6—F–öâ‚F†—2æÆ–v‡BçF&vWBæÖG&—…v÷&ÆB“° •÷c2ç7V%fV7F÷'2‚÷c"Â÷c“°  —F†—2æÆ–v‡EÆæRæÆöö´B‚÷c"“°  ––b‚F†—2æ6öÆ÷"ÓÒVæFVf–æVB’°  —F†—2æÆ–v‡EÆæRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“° —F†—2çF&vWDÆ–æRæÖFW&–Âæ6öÆ÷"ç6WB‚F†—2æ6öÆ÷"“°  —ÒVÇ6R°  —F†—2æÆ–v‡EÆæRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“° —F†—2çF&vWDÆ–æRæÖFW&–Âæ6öÆ÷"æ6÷’‚F†—2æÆ–v‡Bæ6öÆ÷"“°  —Ð  —F†—2çF&vWDÆ–æRæÆöö´B‚÷c"“° —F†—2çF&vWDÆ–æRç66ÆRç¢Ò÷c2æÆVæwF‚‚“°  —Ð §Ð ¦6öç7B÷fV7F÷"Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦6öç7Bö6ÖW&Òò¤õõU$Uõò¢òæWr6ÖW&‚“° ¢ò¢ ¢¢F†—2†VÇ2v—F‚f—7VÆ—¦–ærv†B6ÖW&6öçF–ç2–â—G2g'W7GVÒâ—@¢¢f—7VÆ—¦W2F†Rg'W7GVÒöb6ÖW&W6–ærÆ–æR6VvÖVçG2à¢ ¢¢&6VBöâg'W7GVÒf—7VÆ—¦F–öâ–â¶Æ–v‡FvÂæ§26†F÷vÖW†×ÆU×´Æ–æ²‡GG3¢òöv—F‡V"æ6öÒöWfçröÆ–v‡FvÂæ§2ö&Æö"öÖ7FW"÷FW7G2÷6†F÷vÖæ‡FÖÇÒà¢ ¢¢6ÖW&†VÇW&×W7B&R6†–ÆBöbF†R66VæRà¢ ¢¢§0¢¢6öç7B6ÖW&ÒæWrD…$TRåW'7V7F—fT6ÖW&‚sRÂv–æF÷ræ–ææW%v–GF‚òv–æF÷ræ–ææW$†V–v‡BÂãÂ“°¢¢6öç7B†VÇW"ÒæWrD…$TRä6ÖW&†VÇW"‚6ÖW&“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ726ÖW&†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWr'&÷r†VÇW"à ’  ’¢&Ò´6ÖW&Ò6ÖW&ÒF†R6ÖW&Fòf—7VÆ—¦Rà ’¢ð –6öç7G'V7F÷"‚6ÖW&’°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢†fffffbÂfW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  –6öç7BfW'F–6W2ÒµÓ° –6öç7B6öÆ÷'2ÒµÓ°  –6öç7Bö–çDÖÒ·Ó°  ’òòæV   –FDÆ–æR‚vãrÂvã"r“° –FDÆ–æR‚vã"rÂvãBr“° –FDÆ–æR‚vãBrÂvã2r“° –FDÆ–æR‚vã2rÂvãr“°  ’òòf   –FDÆ–æR‚vcrÂvc"r“° –FDÆ–æR‚vc"rÂvcBr“° –FDÆ–æR‚vcBrÂvc2r“° –FDÆ–æR‚vc2rÂvcr“°  ’òò6–FW0  –FDÆ–æR‚vãrÂvcr“° –FDÆ–æR‚vã"rÂvc"r“° –FDÆ–æR‚vã2rÂvc2r“° –FDÆ–æR‚vãBrÂvcBr“°  ’òò6öæP  –FDÆ–æR‚wrÂvãr“° –FDÆ–æR‚wrÂvã"r“° –FDÆ–æR‚wrÂvã2r“° –FDÆ–æR‚wrÂvãBr“°  ’òòW   –FDÆ–æR‚wSrÂwS"r“° –FDÆ–æR‚wS"rÂwS2r“° –FDÆ–æR‚wS2rÂwSr“°  ’òòF&vW@  –FDÆ–æR‚v2rÂwBr“° –FDÆ–æR‚wrÂv2r“°  ’òò7&÷70  –FDÆ–æR‚v6ãrÂv6ã"r“° –FDÆ–æR‚v6ã2rÂv6ãBr“°  –FDÆ–æR‚v6crÂv6c"r“° –FDÆ–æR‚v6c2rÂv6cBr“°  –gVæ7F–öâFDÆ–æR‚Â"’°  –FEö–çB‚“° –FEö–çB‚"“°  —Ð  –gVæ7F–öâFEö–çB‚–B’°  —fW'F–6W2çW6‚‚ÂÂ“° –6öÆ÷'2çW6‚‚ÂÂ“°  ––b‚ö–çDÖ²–BÒÓÓÒVæFVf–æVB’°  —ö–çDÖ²–BÒÒµÓ°  —Ð  —ö–çDÖ²–BÒçW6‚‚‚fW'F–6W2æÆVæwF‚ò2’Ò“°  —Ð  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒt6ÖW&†VÇW"s°  ’ò¢  ’¢F†R6ÖW&&V–ærf—7VÆ—¦VBà ’  ’¢G—R´6ÖW&Ð ’¢ð —F†—2æ6ÖW&Ò6ÖW&° ––b‚F†—2æ6ÖW&çWFFU&ö¦V7F–öäÖG&—‚’F†—2æ6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°  —F†—2æÖG&—‚Ò6ÖW&æÖG&—…v÷&ÆC° —F†—2æÖG&—„WFõWFFRÒfÇ6S°  ’ò¢  ’¢F†—26öçF–ç2F†Rö–çG2W6VBFòf—7VÆ—¦RF†R6ÖW&à ’  ’¢G—R´ö&¦V7CÇ7G&–ærÄ'&“ÆçVÖ&W#ãçÐ ’¢ð —F†—2çö–çDÖÒö–çDÖ°  —F†—2çWFFR‚“°  ’òò6öÆ÷'0  –6öç7B6öÆ÷$g'W7GVÒÒæWr6öÆ÷"‚†ff“° –6öç7B6öÆ÷$6öæRÒæWr6öÆ÷"‚†fc“° –6öç7B6öÆ÷%WÒæWr6öÆ÷"‚ƒfb“° –6öç7B6öÆ÷%F&vWBÒæWr6öÆ÷"‚†fffffb“° –6öç7B6öÆ÷$7&÷72ÒæWr6öÆ÷"‚ƒ333332“°  —F†—2ç6WD6öÆ÷'2‚6öÆ÷$g'W7GVÒÂ6öÆ÷$6öæRÂ6öÆ÷%WÂ6öÆ÷%F&vWBÂ6öÆ÷$7&÷72“°  —Ð  ’ò¢  ’¢FVf–æW2F†R6öÆ÷'2öbF†R†VÇW"à ’  ’¢&Ò´6öÆ÷'Òg'W7GVÒÒF†Rg'W7GVÒÆ–æR6öÆ÷"à ’¢&Ò´6öÆ÷'Ò6öæRÒF†R6öæRÆ–æR6öÆ÷"à ’¢&Ò´6öÆ÷'ÒWÒF†RWÆ–æR6öÆ÷"à ’¢&Ò´6öÆ÷'ÒF&vWBÒF†RF&vWBÆ–æR6öÆ÷"à ’¢&Ò´6öÆ÷'Ò7&÷72ÒF†R7&÷72Æ–æR6öÆ÷"à ’¢&WGW&â´6ÖW&†VÇW'Ò&VfW&Væ6RFòF†—2†VÇW"à ’¢ð —6WD6öÆ÷'2‚g'W7GVÒÂ6öæRÂWÂF&vWBÂ7&÷72’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“°  –6öç7B6öÆ÷$GG&–'WFRÒvVöÖWG'’ævWDGG&–'WFR‚v6öÆ÷"r“°  ’òòæV   –6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãÂã  –6öÆ÷$GG&–'WFRç6WE…•¢‚"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã"Âã@ –6öÆ÷$GG&–'WFRç6WE…•¢‚BÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚RÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãBÂã0 –6öÆ÷$GG&–'WFRç6WE…•¢‚bÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚rÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã2Âã  ’òòf   –6öÆ÷$GG&–'WFRç6WE…•¢‚‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚’Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòcÂc  –6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòc"Âc@ –6öÆ÷$GG&–'WFRç6WE…•¢‚"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòcBÂc0 –6öÆ÷$GG&–'WFRç6WE…•¢‚BÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚RÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòc2Âc  ’òò6–FW0  –6öÆ÷$GG&–'WFRç6WE…•¢‚bÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚rÂg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãÂc –6öÆ÷$GG&–'WFRç6WE…•¢‚‚Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚’Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã"Âc  –6öÆ÷$GG&–'WFRç6WE…•¢‚#Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòã2Âc0 –6öÆ÷$GG&–'WFRç6WE…•¢‚#"Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#2Âg'W7GVÒç"Âg'W7GVÒærÂg'W7GVÒæ"“²òòãBÂc@  ’òò6öæP  –6öÆ÷$GG&–'WFRç6WE…•¢‚#BÂ6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#RÂ6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã –6öÆ÷$GG&–'WFRç6WE…•¢‚#bÂ6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#rÂ6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã  –6öÆ÷$GG&–'WFRç6WE…•¢‚#‚Â6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚#’Â6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã0 –6öÆ÷$GG&–'WFRç6WE…•¢‚3Â6öæRç"Â6öæRærÂ6öæRæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3Â6öæRç"Â6öæRærÂ6öæRæ"“²òòÂã@  ’òòW   –6öÆ÷$GG&–'WFRç6WE…•¢‚3"ÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚32ÂWç"ÂWærÂWæ"“²òòSÂS  –6öÆ÷$GG&–'WFRç6WE…•¢‚3BÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3RÂWç"ÂWærÂWæ"“²òòS"ÂS0 –6öÆ÷$GG&–'WFRç6WE…•¢‚3bÂWç"ÂWærÂWæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3rÂWç"ÂWærÂWæ"“²òòS2ÂS  ’òòF&vW@  –6öÆ÷$GG&–'WFRç6WE…•¢‚3‚ÂF&vWBç"ÂF&vWBærÂF&vWBæ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚3’ÂF&vWBç"ÂF&vWBærÂF&vWBæ"“²òò2Â@ –6öÆ÷$GG&–'WFRç6WE…•¢‚CÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òòÂ0  ’òò7&÷70  –6öÆ÷$GG&–'WFRç6WE…•¢‚C"Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚C2Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6ãÂ6ã  –6öÆ÷$GG&–'WFRç6WE…•¢‚CBÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CRÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6ã2Â6ã@  –6öÆ÷$GG&–'WFRç6WE…•¢‚CbÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚CrÂ7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6cÂ6c  –6öÆ÷$GG&–'WFRç6WE…•¢‚C‚Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²6öÆ÷$GG&–'WFRç6WE…•¢‚C’Â7&÷72ç"Â7&÷72ærÂ7&÷72æ"“²òò6c2Â6c@  –6öÆ÷$GG&–'WFRææVVG5WFFRÒG'VS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"&6VBöâF†R&ö¦V7F–öâÖG&—‚öbF†R6ÖW&à ’¢ð —WFFR‚’°  –6öç7BvVöÖWG'’ÒF†—2ævVöÖWG'“° –6öç7Bö–çDÖÒF†—2çö–çDÖ°  –6öç7BrÒÂ‚Ò°  –ÆWBæV%¢Âf%£°  ’òòvRæVVB§W7B6ÖW&&ö¦V7F–öâÖG&—‚–çfW'6P ’òòv÷&ÆBÖG&—‚×W7B&R–FVçF—G  •ö6ÖW&ç&ö¦V7F–öäÖG&—„–çfW'6Ræ6÷’‚F†—2æ6ÖW&ç&ö¦V7F–öäÖG&—„–çfW'6R“°  ’òòF§W7B¢fÇVW2&6VBöâ6ö÷&F–æFR7—7FVÐ  ––b‚F†—2æ6ÖW&ç&WfW'6VDFWF‚ÓÓÒG'VR’°  –æV%¢Ò° –f%¢Ò°  —ÒVÇ6R°  ––b‚F†—2æ6ÖW&æ6ö÷&F–æFU7—7FVÒÓÓÒvV$tÄ6ö÷&F–æFU7—7FVÒ’°  –æV%¢ÒÓ° –f%¢Ò°  —ÒVÇ6R–b‚F†—2æ6ÖW&æ6ö÷&F–æFU7—7FVÒÓÓÒvV$uT6ö÷&F–æFU7—7FVÒ’°  –æV%¢Ò° –f%¢Ò°  —ÒVÇ6R°  —F‡&÷ræWrW'&÷"‚uD…$TRä6ÖW&†VÇW"çWFFR‚“¢–çfÆ–B6ö÷&F–æFR7—7FVÓ¢r²F†—2æ6ÖW&æ6ö÷&F–æFU7—7FVÒ“°  —Ð  —Ð   ’òò6VçFW"òF&vW@ —6WEö–çB‚v2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÂæV%¢“° —6WEö–çB‚wBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÂf%¢“°  ’òòæV   —6WEö–çB‚vãrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÒ‚ÂæV%¢“° —6WEö–çB‚vã"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÒ‚ÂæV%¢“° —6WEö–çB‚vã2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂ‚ÂæV%¢“° —6WEö–çB‚vãBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂ‚ÂæV%¢“°  ’òòf   —6WEö–çB‚vcrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÒ‚Âf%¢“° —6WEö–çB‚vc"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÒ‚Âf%¢“° —6WEö–çB‚vc2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂ‚Âf%¢“° —6WEö–çB‚vcBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂ‚Âf%¢“°  ’òòW   —6WEö–çB‚wSrÂö–çDÖÂvVöÖWG'’Âö6ÖW&Âr¢ãrÂ‚¢ãÂæV%¢“° —6WEö–çB‚wS"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒr¢ãrÂ‚¢ãÂæV%¢“° —6WEö–çB‚wS2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚¢"ÂæV%¢“°  ’òò7&÷70  —6WEö–çB‚v6crÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÂf%¢“° —6WEö–çB‚v6c"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÂf%¢“° —6WEö–çB‚v6c2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÒ‚Âf%¢“° —6WEö–çB‚v6cBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚Âf%¢“°  —6WEö–çB‚v6ãrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÒrÂÂæV%¢“° —6WEö–çB‚v6ã"rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂrÂÂæV%¢“° —6WEö–çB‚v6ã2rÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂÒ‚ÂæV%¢“° —6WEö–çB‚v6ãBrÂö–çDÖÂvVöÖWG'’Âö6ÖW&ÂÂ‚ÂæV%¢“°  –vVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr’ææVVG5WFFRÒG'VS°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð  ¦gVæ7F–öâ6WEö–çB‚ö–çBÂö–çDÖÂvVöÖWG'’Â6ÖW&Â‚Â’Â¢’°  •÷fV7F÷"ç6WB‚‚Â’Â¢’çVç&ö¦V7B‚6ÖW&“°  –6öç7Bö–çG2Òö–çDÖ²ö–çBÓ°  ––b‚ö–çG2ÓÒVæFVf–æVB’°  –6öç7B÷6—F–öâÒvVöÖWG'’ævWDGG&–'WFR‚w÷6—F–öâr“°  –f÷"‚ÆWB’ÒÂÂÒö–çG2æÆVæwFƒ²’ÂÃ²’²²’°  —÷6—F–öâç6WE…•¢‚ö–çG5²’ÒÂ÷fV7F÷"ç‚Â÷fV7F÷"ç’Â÷fV7F÷"ç¢“°  —Ð  —Ð §Ð ¦6öç7Bö&÷‚Òò¤õõU$Uõò¢òæWr&÷ƒ2‚“° ¢ò¢ ¢¢†VÇW"ö&¦V7BFòw&†–6ÆÇ’6†÷rF†Rv÷&ÆBÖ†—2ÖÆ–væVB&÷VæF–ær&÷€¢¢&÷VæBâö&¦V7BâF†R7GVÂ&÷VæF–ær&÷‚—2†æFÆVBv—F‚´Æ–æ²&÷ƒ7ÒÀ¢¢F†—2—2§W7Bf—7VÂ†VÇW"f÷"FV'Vvv–ærâ—B6â&RWFöÖF–6ÆÇ¢¢&W6—¦VBv—F‚´Æ–æ²&÷„†VÇW"7WFFWÒv†VâF†Rö&¦V7B—Bw27&VFVBg&öÐ¢¢—2G&ç6f÷&ÖVBâæ÷FRF†BF†Rö&¦V7B×W7B†fRvVöÖWG'’f÷"F†—2Fòv÷&²À¢¢6ò—BvöâwBv÷&²v—F‚7&—FW2à¢ ¢¢§0¢¢6öç7B7†W&RÒæWrD…$TRå7†W&TvVöÖWG'’‚“°¢¢6öç7Bö&¦V7BÒæWrD…$TRäÖW6‚‚7†W&RÂæWrD…$TRäÖW6„&6–4ÖFW&–Â‚†fc’“°¢¢6öç7B&÷‚ÒæWrD…$TRä&÷„†VÇW"‚ö&¦V7BÂ†fffc“°¢¢66VæRæFB‚&÷‚“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ72&÷„†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWr&÷‚†VÇW"à ’  ’¢&Ò´ö&¦V7C4GÒ¶ö&¦V7EÒÒF†R4Bö&¦V7BFò6†÷rF†Rv÷&ÆBÖ†—2ÖÆ–væVB&÷VæF–ær&÷‚à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷#Ó†fffcÒÒF†R&÷‚w26öÆ÷"à ’¢ð –6öç7G'V7F÷"‚ö&¦V7BÂ6öÆ÷"Ò†fffc’°  –6öç7B–æF–6W2ÒæWrV–çCd'&’‚²ÂÂÂ"Â"Â2Â2ÂÂBÂRÂRÂbÂbÂrÂrÂBÂÂBÂÂRÂ"ÂbÂ2ÂrÒ“° –6öç7B÷6—F–öç2ÒæWrfÆöC3$'&’‚‚¢2“°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚–æF–6W2Â’“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWr'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  ’ò¢  ’¢F†R4Bö&¦V7B&V–ærf—7VÆ—¦VBà ’  ’¢G—R´ö&¦V7C4GÐ ’¢ð —F†—2æö&¦V7BÒö&¦V7C° —F†—2çG—RÒt&÷„†VÇW"s°  —F†—2æÖG&—„WFõWFFRÒfÇ6S°  —F†—2çWFFR‚“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"w2vVöÖWG'’FòÖF6‚F†RF–ÖVç6–öç2öbF†Rö&¦V7BÀ ’¢–æ6ÇVF–ærç’6†–ÆG&Vâà ’¢ð —WFFR‚’°  ––b‚F†—2æö&¦V7BÓÒVæFVf–æVB’°  •ö&÷‚ç6WDg&öÔö&¦V7B‚F†—2æö&¦V7B“°  —Ð  ––b‚ö&÷‚æ—4V×G’‚’’&WGW&ã°  –6öç7BÖ–âÒö&÷‚æÖ–ã° –6öç7BÖ‚Òö&÷‚æÖƒ°  ’ò  “Uõõõó@ “õõõó÷À —Âeõ÷Åóp “"õõõó2ð  “¢Ö‚ç‚ÂÖ‚ç’ÂÖ‚ç  “¢Ö–âç‚ÂÖ‚ç’ÂÖ‚ç  “#¢Ö–âç‚ÂÖ–âç’ÂÖ‚ç  “3¢Ö‚ç‚ÂÖ–âç’ÂÖ‚ç  “C¢Ö‚ç‚ÂÖ‚ç’ÂÖ–âç  “S¢Ö–âç‚ÂÖ‚ç’ÂÖ–âç  “c¢Ö–âç‚ÂÖ–âç’ÂÖ–âç  “s¢Ö‚ç‚ÂÖ–âç’ÂÖ–âç  ’¢ð  –6öç7B÷6—F–öâÒF†—2ævVöÖWG'’æGG&–'WFW2ç÷6—F–öã° –6öç7B'&’Ò÷6—F–öâæ'&“°  –'&•²ÒÒÖ‚çƒ²'&•²ÒÒÖ‚ç“²'&•²"ÒÒÖ‚ç£° –'&•²2ÒÒÖ–âçƒ²'&•²BÒÒÖ‚ç“²'&•²RÒÒÖ‚ç£° –'&•²bÒÒÖ–âçƒ²'&•²rÒÒÖ–âç“²'&•²‚ÒÒÖ‚ç£° –'&•²’ÒÒÖ‚çƒ²'&•²ÒÒÖ–âç“²'&•²ÒÒÖ‚ç£° –'&•²"ÒÒÖ‚çƒ²'&•²2ÒÒÖ‚ç“²'&•²BÒÒÖ–âç£° –'&•²RÒÒÖ–âçƒ²'&•²bÒÒÖ‚ç“²'&•²rÒÒÖ–âç£° –'&•²‚ÒÒÖ–âçƒ²'&•²’ÒÒÖ–âç“²'&•²#ÒÒÖ–âç£° –'&•²#ÒÒÖ‚çƒ²'&•²#"ÒÒÖ–âç“²'&•²#2ÒÒÖ–âç£°  —÷6—F–öâææVVG5WFFRÒG'VS°  —F†—2ævVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —Ð  ’ò¢  ’¢WFFW2F†Rv—&Vg&ÖR&÷‚f÷"F†R76VBö&¦V7Bà ’  ’¢&Ò´ö&¦V7C4GÒö&¦V7BÒF†R4Bö&¦V7BFò7&VFRF†R†VÇW"f÷"à ’¢&WGW&â´&÷„†VÇW'Ò&VfW&Væ6RFòF†—2–ç7Fæ6Rà ’¢ð —6WDg&öÔö&¦V7B‚ö&¦V7B’°  —F†—2æö&¦V7BÒö&¦V7C° —F†—2çWFFR‚“°  —&WGW&âF†—3°  —Ð  –6÷’‚6÷W&6RÂ&V7W'6—fR’°  —7WW"æ6÷’‚6÷W&6RÂ&V7W'6—fR“°  —F†—2æö&¦V7BÒ6÷W&6Ræö&¦V7C°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¢ò¢ ¢¢†VÇW"ö&¦V7BFòf—7VÆ—¦Râ–ç7Fæ6Röb´Æ–æ²&÷ƒ7Òà¢ ¢¢§0¢¢6öç7B&÷‚ÒæWrD…$TRä&÷ƒ2‚“°¢¢&÷‚ç6WDg&öÔ6VçFW$æE6—¦R‚æWrD…$TRåfV7F÷#2‚ÂÂ’ÂæWrD…$TRåfV7F÷#2‚"ÂÂ2’“°¢ ¢¢6öç7B†VÇW"ÒæWrD…$TRä&÷ƒ4†VÇW"‚&÷‚Â†fffc“°¢¢66VæRæFB‚†VÇW"¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ72&÷ƒ4†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWr&÷ƒ2†VÇW"à ’  ’¢&Ò´&÷ƒ7Ò&÷‚ÒF†R&÷‚Fòf—7VÆ—¦Rà ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶6öÆ÷#Ó†fffcÒÒF†R&÷‚w26öÆ÷"à ’¢ð –6öç7G'V7F÷"‚&÷‚Â6öÆ÷"Ò†fffc’°  –6öç7B–æF–6W2ÒæWrV–çCd'&’‚²ÂÂÂ"Â"Â2Â2ÂÂBÂRÂRÂbÂbÂrÂrÂBÂÂBÂÂRÂ"ÂbÂ2ÂrÒ“°  –6öç7B÷6—F–öç2Ò²ÂÂÂÓÂÂÂÓÂÓÂÂÂÓÂÂÂÂÓÂÓÂÂÓÂÓÂÓÂÓÂÂÓÂÓÓ°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“°  –vVöÖWG'’ç6WD–æFW‚‚æWr'VffW$GG&–'WFR‚–æF–6W2Â’“°  –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  ’ò¢  ’¢F†R&÷‚&V–ærf—7VÆ—¦VBà ’  ’¢G—R´&÷ƒ7Ð ’¢ð —F†—2æ&÷‚Ò&÷ƒ°  —F†—2çG—RÒt&÷ƒ4†VÇW"s°  —F†—2ævVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  –6öç7B&÷‚ÒF†—2æ&÷ƒ°  ––b‚&÷‚æ—4V×G’‚’’&WGW&ã°  –&÷‚ævWD6VçFW"‚F†—2ç÷6—F–öâ“°  –&÷‚ævWE6—¦R‚F†—2ç66ÆR“°  —F†—2ç66ÆRæ×VÇF—Ç•66Æ"‚ãR“°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¢ò¢ ¢¢†VÇW"ö&¦V7BFòf—7VÆ—¦Râ–ç7Fæ6Röb´Æ–æ²ÆæWÒà¢ ¢¢§0¢¢6öç7BÆæRÒæWrD…$TRåÆæR‚æWrD…$TRåfV7F÷#2‚ÂÂã"’Â2“°¢¢6öç7B†VÇW"ÒæWrD…$TRåÆæT†VÇW"‚ÆæRÂÂ†fffc“°¢¢66VæRæFB‚†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æP¢¢ð¦6Æ72ÆæT†VÇW"W‡FVæG2Æ–æR°  ’ò¢  ’¢6öç7G'V7G2æWrÆæR†VÇW"à ’  ’¢&ÒµÆæWÒÆæRÒF†RÆæRFò&Rf—7VÆ—¦VBà ’¢&Ò¶çVÖ&W'Ò·6—¦SÓÒÒF†R6–FRÆVæwF‚öbÆæR†VÇW"à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¶†WƒÓ†fffcÒÒF†R†VÇW"w26öÆ÷"à ’¢ð –6öç7G'V7F÷"‚ÆæRÂ6—¦RÒÂ†W‚Ò†fffc’°  –6öç7B6öÆ÷"Ò†Wƒ°  –6öç7B÷6—F–öç2Ò²ÂÓÂÂÓÂÂÂÓÂÓÂÂÂÂÂÓÂÂÂÓÂÓÂÂÂÓÂÂÂÂÓ°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç2Â2’“° –vVöÖWG'’æ6ö×WFT&÷VæF–æu7†W&R‚“°  —7WW"‚vVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“°  —F†—2çG—RÒuÆæT†VÇW"s°  ’ò¢  ’¢F†RÆæR&V–ærf—7VÆ—¦VBà ’  ’¢G—RµÆæWÐ ’¢ð —F†—2çÆæRÒÆæS°  ’ò¢  ’¢F†R6–FRÆVæwF‚öbÆæR†VÇW"à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇB ’¢ð —F†—2ç6—¦RÒ6—¦S°  –6öç7B÷6—F–öç3"Ò²ÂÂÂÓÂÂÂÓÂÓÂÂÂÂÂÓÂÓÂÂÂÓÂÓ°  –6öç7BvVöÖWG'“"ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'“"ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚÷6—F–öç3"Â2’“° –vVöÖWG'“"æ6ö×WFT&÷VæF–æu7†W&R‚“°  —F†—2æFB‚æWrÖW6‚‚vVöÖWG'“"ÂæWrÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"Â÷6—G“¢ã"ÂG&ç7&VçC¢G'VRÂFWF…w&—FS¢fÇ6RÂFöæTÖVC¢fÇ6RÒ’’“°  —Ð  —WFFTÖG&—…v÷&ÆB‚f÷&6R’°  —F†—2ç÷6—F–öâç6WB‚ÂÂ“°  —F†—2ç66ÆRç6WB‚ãR¢F†—2ç6—¦RÂãR¢F†—2ç6—¦RÂ“°  —F†—2æÆöö´B‚F†—2çÆæRææ÷&ÖÂ“°  —F†—2çG&ç6ÆFU¢‚ÒF†—2çÆæRæ6öç7FçB“°  —7WW"çWFFTÖG&—…v÷&ÆB‚f÷&6R“°  —Ð  ’ò¢  ’¢WFFW2F†R†VÇW"FòÖF6‚F†R÷6—F–öâæBF—&V7F–öâöbF†P ’¢Æ–v‡B&V–ærf—7VÆ—¦VBà ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒævVöÖWG'’æF—7÷6R‚“° —F†—2æ6†–ÆG&Vå²ÒæÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¦6öç7Bö†—2Òò¤õõU$Uõò¢òæWrfV7F÷#2‚“°¦ÆWBöÆ–æTvVöÖWG'’Âö6öæTvVöÖWG'“° ¢ò¢ ¢¢â4B'&÷rö&¦V7Bf÷"f—7VÆ—¦–ærF—&V7F–öç2à¢ ¢¢§0¢¢6öç7BF—"ÒæWrD…$TRåfV7F÷#2‚Â"Â“°¢ ¢¢òöæ÷&ÖÆ—¦RF†RF—&V7F–öâfV7F÷"†6öçfW'BFòfV7F÷"öbÆVæwF‚¢¢F—"ææ÷&ÖÆ—¦R‚“°¢ ¢¢6öç7B÷&–v–âÒæWrD…$TRåfV7F÷#2‚ÂÂ“°¢¢6öç7BÆVæwF‚Ò°¢¢6öç7B†W‚Ò†fffc°¢ ¢¢6öç7B'&÷t†VÇW"ÒæWrD…$TRä'&÷t†VÇW"‚F—"Â÷&–v–âÂÆVæwF‚Â†W‚“°¢¢66VæRæFB‚'&÷t†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2ö&¦V7C4@¢¢ð¦6Æ72'&÷t†VÇW"W‡FVæG2ö&¦V7C4B°  ’ò¢  ’¢6öç7G'V7G2æWr'&÷r†VÇW"à ’  ’¢&ÒµfV7F÷#7Ò¶F—#ÒƒÂÂ•ÒÒF†R†æ÷&ÖÆ—¦VB’F—&V7F–öâfV7F÷"à ’¢&ÒµfV7F÷#7Ò¶÷&–v–ãÒƒÂÂ•ÒÒö–çBBv†–6‚F†R'&÷r7F'G2à ’¢&Ò¶çVÖ&W'Ò¶ÆVæwFƒÓÒÒÆVæwF‚öbF†R'&÷r–âv÷&ÆBVæ—G2à ’¢&Ò²†çVÖ&W'Ä6öÆ÷'Ç7G&–ær—Ò¶6öÆ÷#Ó†fffcÒÒ6öÆ÷"öbF†R'&÷rà ’¢&Ò¶çVÖ&W'Ò¶†VDÆVæwFƒÖÆVæwF‚£ã%ÒÒF†RÆVæwF‚öbF†R†VBöbF†R'&÷rà ’¢&Ò¶çVÖ&W'Ò¶†VEv–GFƒÖ†VDÆVæwF‚£ã%ÒÒF†Rv–GF‚öbF†R†VBöbF†R'&÷rà ’¢ð –6öç7G'V7F÷"‚F—"ÒæWrfV7F÷#2‚ÂÂ’Â÷&–v–âÒæWrfV7F÷#2‚ÂÂ’ÂÆVæwF‚ÒÂ6öÆ÷"Ò†fffcÂ†VDÆVæwF‚ÒÆVæwF‚¢ã"Â†VEv–GF‚Ò†VDÆVæwF‚¢ã"’°  —7WW"‚“°  —F†—2çG—RÒt'&÷t†VÇW"s°  ––b‚öÆ–æTvVöÖWG'’ÓÓÒVæFVf–æVB’°  •öÆ–æTvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° •öÆ–æTvVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚²ÂÂÂÂÂÒÂ2’“°  •ö6öæTvVöÖWG'’ÒæWr6öæTvVöÖWG'’‚ãRÂÂRÂ“° •ö6öæTvVöÖWG'’çG&ç6ÆFR‚ÂÓãRÂ“°  —Ð  —F†—2ç÷6—F–öâæ6÷’‚÷&–v–â“°  ’ò¢  ’¢F†RÆ–æR'BöbF†R'&÷r†VÇW"à ’  ’¢G—R´Æ–æWÐ ’¢ð —F†—2æÆ–æRÒæWrÆ–æR‚öÆ–æTvVöÖWG'’ÂæWrÆ–æT&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“° —F†—2æÆ–æRæÖG&—„WFõWFFRÒfÇ6S° —F†—2æFB‚F†—2æÆ–æR“°  ’ò¢  ’¢F†R6öæR'BöbF†R'&÷r†VÇW"à ’  ’¢G—R´ÖW6‡Ð ’¢ð —F†—2æ6öæRÒæWrÖW6‚‚ö6öæTvVöÖWG'’ÂæWrÖW6„&6–4ÖFW&–Â‚²6öÆ÷#¢6öÆ÷"ÂFöæTÖVC¢fÇ6RÒ’“° —F†—2æ6öæRæÖG&—„WFõWFFRÒfÇ6S° —F†—2æFB‚F†—2æ6öæR“°  —F†—2ç6WDF—&V7F–öâ‚F—"“° —F†—2ç6WDÆVæwF‚‚ÆVæwF‚Â†VDÆVæwF‚Â†VEv–GF‚“°  —Ð  ’ò¢  ’¢6WG2F†RF—&V7F–öâöbF†R†VÇW"à ’  ’¢&ÒµfV7F÷#7ÒF—"ÒF†Ræ÷&ÖÆ—¦VBF—&V7F–öâfV7F÷"à ’¢ð —6WDF—&V7F–öâ‚F—"’°  ’òòF—"—277VÖVBFò&Ræ÷&ÖÆ—¦V@  ––b‚F—"ç’âã““““’’°  —F†—2çVFW&æ–öâç6WB‚ÂÂÂ“°  —ÒVÇ6R–b‚F—"ç’ÂÓã““““’’°  —F†—2çVFW&æ–öâç6WB‚ÂÂÂ“°  —ÒVÇ6R°  •ö†—2ç6WB‚F—"ç¢ÂÂÒF—"ç‚’ææ÷&ÖÆ—¦R‚“°  –6öç7B&F–ç2ÒÖF‚æ6÷2‚F—"ç’“°  —F†—2çVFW&æ–öâç6WDg&öÔ†—4ævÆR‚ö†—2Â&F–ç2“°  —Ð  —Ð  ’ò¢  ’¢6WG2F†RÆVæwF‚öbF†R†VÇW"à ’  ’¢&Ò¶çVÖ&W'ÒÆVæwF‚ÒÆVæwF‚öbF†R'&÷r–âv÷&ÆBVæ—G2à ’¢&Ò¶çVÖ&W'Ò¶†VDÆVæwFƒÖÆVæwF‚£ã%ÒÒF†RÆVæwF‚öbF†R†VBöbF†R'&÷rà ’¢&Ò¶çVÖ&W'Ò¶†VEv–GFƒÖ†VDÆVæwF‚£ã%ÒÒF†Rv–GF‚öbF†R†VBöbF†R'&÷rà ’¢ð —6WDÆVæwF‚‚ÆVæwF‚Â†VDÆVæwF‚ÒÆVæwF‚¢ã"Â†VEv–GF‚Ò†VDÆVæwF‚¢ã"’°  —F†—2æÆ–æRç66ÆRç6WB‚ÂÖF‚æÖ‚‚ãÂÆVæwF‚Ò†VDÆVæwF‚’Â“²òò6VR3sCS€ —F†—2æÆ–æRçWFFTÖG&—‚‚“°  —F†—2æ6öæRç66ÆRç6WB‚†VEv–GF‚Â†VDÆVæwF‚Â†VEv–GF‚“° —F†—2æ6öæRç÷6—F–öâç’ÒÆVæwFƒ° —F†—2æ6öæRçWFFTÖG&—‚‚“°  —Ð  ’ò¢  ’¢6WG2F†R6öÆ÷"öbF†R†VÇW"à ’  ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ6öÆ÷"ÒF†R6öÆ÷"Fò6WBà ’¢ð —6WD6öÆ÷"‚6öÆ÷"’°  —F†—2æÆ–æRæÖFW&–Âæ6öÆ÷"ç6WB‚6öÆ÷"“° —F†—2æ6öæRæÖFW&–Âæ6öÆ÷"ç6WB‚6öÆ÷"“°  —Ð  –6÷’‚6÷W&6R’°  —7WW"æ6÷’‚6÷W&6RÂfÇ6R“°  —F†—2æÆ–æRæ6÷’‚6÷W&6RæÆ–æR“° —F†—2æ6öæRæ6÷’‚6÷W&6Ræ6öæR“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2æÆ–æRævVöÖWG'’æF—7÷6R‚“° —F†—2æÆ–æRæÖFW&–ÂæF—7÷6R‚“° —F†—2æ6öæRævVöÖWG'’æF—7÷6R‚“° —F†—2æ6öæRæÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¢ò¢ ¢¢â†—2ö&¦V7BFòf—7VÆ—¦RF†R2†W2–â6–×ÆRv’à¢¢F†R‚†—2—2&VBâF†R’†—2—2w&VVââF†R¢†—2—2&ÇVRà¢ ¢¢§0¢¢6öç7B†W4†VÇW"ÒæWrD…$TRä†W4†VÇW"‚R“°¢¢66VæRæFB‚†W4†VÇW"“°¢¢ ¢ ¢¢VvÖVçG2Æ–æU6VvÖVçG0¢¢ð¦6Æ72†W4†VÇW"W‡FVæG2Æ–æU6VvÖVçG2°  ’ò¢  ’¢6öç7G'V7G2æWr†W2†VÇW"à ’  ’¢&Ò¶çVÖ&W'Ò·6—¦SÓÒÒ6—¦RöbF†RÆ–æW2&W&W6VçF–ærF†R†W2à ’¢ð –6öç7G'V7F÷"‚6—¦RÒ’°  –6öç7BfW'F–6W2Ò° “ÂÂÀ—6—¦RÂÂÀ “ÂÂÀ“Â6—¦RÂÀ “ÂÂÀ“ÂÂ6—¦P •Ó°  –6öç7B6öÆ÷'2Ò° “ÂÂÀ“ÂãbÂÀ “ÂÂÀ“ãbÂÂÀ “ÂÂÀ“ÂãbÂ •Ó°  –6öç7BvVöÖWG'’ÒæWr'VffW$vVöÖWG'’‚“° –vVöÖWG'’ç6WDGG&–'WFR‚w÷6—F–öârÂæWrfÆöC3$'VffW$GG&–'WFR‚fW'F–6W2Â2’“° –vVöÖWG'’ç6WDGG&–'WFR‚v6öÆ÷"rÂæWrfÆöC3$'VffW$GG&–'WFR‚6öÆ÷'2Â2’“°  –6öç7BÖFW&–ÂÒæWrÆ–æT&6–4ÖFW&–Â‚²fW'FW„6öÆ÷'3¢G'VRÂFöæTÖVC¢fÇ6RÒ“°  —7WW"‚vVöÖWG'’ÂÖFW&–Â“°  —F†—2çG—RÒt†W4†VÇW"s°  —Ð  ’ò¢  ’¢FVf–æW2F†R6öÆ÷'2öbF†R†W2†VÇW"à ’  ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ„†—46öÆ÷"ÒF†R6öÆ÷"f÷"F†R‚†—2à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ”†—46öÆ÷"ÒF†R6öÆ÷"f÷"F†R’†—2à ’¢&Ò¶çVÖ&W'Ä6öÆ÷'Ç7G&–æwÒ¤†—46öÆ÷"ÒF†R6öÆ÷"f÷"F†R¢†—2à ’¢&WGW&â´†W4†VÇW'Ò&VfW&Væ6RFòF†—2†W2†VÇW"à ’¢ð —6WD6öÆ÷'2‚„†—46öÆ÷"Â”†—46öÆ÷"Â¤†—46öÆ÷"’°  –6öç7B6öÆ÷"ÒæWr6öÆ÷"‚“° –6öç7B'&’ÒF†—2ævVöÖWG'’æGG&–'WFW2æ6öÆ÷"æ'&“°  –6öÆ÷"ç6WB‚„†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Â“° –6öÆ÷"çFô'&’‚'&’Â2“°  –6öÆ÷"ç6WB‚”†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Âb“° –6öÆ÷"çFô'&’‚'&’Â’“°  –6öÆ÷"ç6WB‚¤†—46öÆ÷"“° –6öÆ÷"çFô'&’‚'&’Â"“° –6öÆ÷"çFô'&’‚'&’ÂR“°  —F†—2ævVöÖWG'’æGG&–'WFW2æ6öÆ÷"ææVVG5WFFRÒG'VS°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢g&VW2F†RuR×&VÆFVB&W6÷W&6W2ÆÆö6FVB'’F†—2–ç7Fæ6Râ6ÆÂF†—0 ’¢ÖWF†öBv†VæWfW"F†—2–ç7Fæ6R—2æòÆöævW"W6VB–â–÷W"à ’¢ð –F—7÷6R‚’°  —F†—2ævVöÖWG'’æF—7÷6R‚“° —F†—2æÖFW&–ÂæF—7÷6R‚“°  —Ð §Ð ¢ò¢ ¢¢F†—26Æ72—2W6VBFò6öçfW'B6W&–W2öbF‡2Fòâ'&’ö`¢¢6†W2â—B—27V6–f–6ÆÇ’W6VB–â6öçFW‡BöbföçG2æB5drà¢¢ð¦6Æ726†UF‚°  ’ò¢  ’¢6öç7G'V7G2æWr6†RF‚à ’¢ð –6öç7G'V7F÷"‚’°  —F†—2çG—RÒu6†UF‚s°  ’ò¢  ’¢F†R6öÆ÷"öbF†R6†Rà ’  ’¢G—R´6öÆ÷'Ð ’¢ð —F†—2æ6öÆ÷"ÒæWr6öÆ÷"‚“°  ’ò¢  ’¢F†RF‡2F†B†fR&VVâvVæW&FVBf÷"F†—26†Rà ’  ’¢G—R´'&“ÅFƒçÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2ç7V%F‡2ÒµÓ°  ’ò¢  ’¢F†R7W'&VçBF‚F†B—2&V–ærvVæW&FVBà ’  ’¢G—R³õF‡Ð ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æ7W'&VçEF‚ÒçVÆÃ°  —Ð  ’ò¢  ’¢7&VFW2æWrF‚æBÖ÷fW2—B7W'&VçBö–çBFòF†Rv—fVâöæRà ’  ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚6ö÷&F–æFRà ’¢&Ò¶çVÖ&W'Ò’ÒF†R’6ö÷&F–æFRà ’¢&WGW&âµ6†UF‡Ò&VfW&Væ6RFòF†—26†RF‚à ’¢ð –Ö÷fUFò‚‚Â’’°  —F†—2æ7W'&VçEF‚ÒæWrF‚‚“° —F†—2ç7V%F‡2çW6‚‚F†—2æ7W'&VçEF‚“° —F†—2æ7W'&VçEF‚æÖ÷fUFò‚‚Â’“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FG2â–ç7Fæ6Röb´Æ–æ²Æ–æT7W'fWÒFòF†RF‚'’6öææV7F–æp ’¢F†R7W'&VçBö–çBv—F‚F†Rv—fVâöæRà ’  ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚6ö÷&F–æFRöbF†RVæBö–çBà ’¢&Ò¶çVÖ&W'Ò’ÒF†R’6ö÷&F–æFRöbF†RVæBö–çBà ’¢&WGW&âµ6†UF‡Ò&VfW&Væ6RFòF†—26†RF‚à ’¢ð –Æ–æUFò‚‚Â’’°  —F†—2æ7W'&VçEF‚æÆ–æUFò‚‚Â’“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FG2â–ç7Fæ6Röb´Æ–æ²VG&F–4&W¦–W$7W'fWÒFòF†RF‚'’6öææV7F–æp ’¢F†R7W'&VçBö–çBv—F‚F†Rv—fVâöæRà ’  ’¢&Ò¶çVÖ&W'Ò5‚ÒF†R‚6ö÷&F–æFRöbF†R6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò5’ÒF†R’6ö÷&F–æFRöbF†R6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚6ö÷&F–æFRöbF†RVæBö–çBà ’¢&Ò¶çVÖ&W'Ò’ÒF†R’6ö÷&F–æFRöbF†RVæBö–çBà ’¢&WGW&âµ6†UF‡Ò&VfW&Væ6RFòF†—26†RF‚à ’¢ð —VG&F–47W'fUFò‚5‚Â5’Â‚Â’’°  —F†—2æ7W'&VçEF‚çVG&F–47W'fUFò‚5‚Â5’Â‚Â’“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FG2â–ç7Fæ6Röb´Æ–æ²7V&–4&W¦–W$7W'fWÒFòF†RF‚'’6öææV7F–æp ’¢F†R7W'&VçBö–çBv—F‚F†Rv—fVâöæRà ’  ’¢&Ò¶çVÖ&W'Ò5‚ÒF†R‚6ö÷&F–æFRöbF†Rf—'7B6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò5’ÒF†R’6ö÷&F–æFRöbF†Rf—'7B6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò5'‚ÒF†R‚6ö÷&F–æFRöbF†R6V6öæB6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò5'’ÒF†R’6ö÷&F–æFRöbF†R6V6öæB6öçG&öÂö–çBà ’¢&Ò¶çVÖ&W'Ò‚ÒF†R‚6ö÷&F–æFRöbF†RVæBö–çBà ’¢&Ò¶çVÖ&W'Ò’ÒF†R’6ö÷&F–æFRöbF†RVæBö–çBà ’¢&WGW&âµ6†UF‡Ò&VfW&Væ6RFòF†—26†RF‚à ’¢ð –&W¦–W$7W'fUFò‚5‚Â5’Â5'‚Â5'’Â‚Â’’°  —F†—2æ7W'&VçEF‚æ&W¦–W$7W'fUFò‚5‚Â5’Â5'‚Â5'’Â‚Â’“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢FG2â–ç7Fæ6Röb´Æ–æ²7Æ–æT7W'fWÒFòF†RF‚'’6öææV7F–æp ’¢F†R7W'&VçBö–çBv—F‚F†Rv—fVâÆ—7Böbö–çG2à ’  ’¢&Ò´'&“ÅfV7F÷##çÒG2Òâ'&’öbö–çG2–â$B76Rà ’¢&WGW&âµ6†UF‡Ò&VfW&Væ6RFòF†—26†RF‚à ’¢ð —7Æ–æUF‡'R‚G2’°  —F†—2æ7W'&VçEF‚ç7Æ–æUF‡'R‚G2“°  —&WGW&âF†—3°  —Ð  ’ò¢  ’¢6öçfW'G2F†RF‡2–çFòâ'&’öb6†W2à ’  ’¢&Ò¶&ööÆVçÒ—445rÒ'’FVfVÇB6öÆ–B6†W2&RFVf–æVB6Æö6·v—6R„5r’æB†öÆW2&RFVf–æVB6÷VçFW&6Æö6·v—6R„45r’à ’¢–bF†—2fÆr—26WBFòG'VVÂF†VâF†÷6R&RfÆ—VBà ’¢&WGW&â´'&“Å6†SçÒâ'&’öb6†W2à ’¢ð —Fõ6†W2‚—445r’°  –gVæ7F–öâFõ6†W4æô†öÆW2‚–å7V'F‡2’°  –6öç7B6†W2ÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ–å7V'F‡2æÆVæwFƒ²’ÂÃ²’²²’°  –6öç7BF×F‚Ò–å7V'F‡5²’Ó°  –6öç7BF×6†RÒæWr6†R‚“° —F×6†Ræ7W'fW2ÒF×F‚æ7W'fW3°  —6†W2çW6‚‚F×6†R“°  —Ð  —&WGW&â6†W3°  —Ð  –gVæ7F–öâ—5ö–çD–ç6–FUöÇ–vöâ‚–åBÂ–åöÇ–vöâ’°  –6öç7BöÇ”ÆVâÒ–åöÇ–vöâæÆVæwFƒ°  ’òò–åBöâöÇ–vöâ6öçF÷W"Óâ–ÖÖVF–FR7V66W72÷  ’òòFövvÆ–æröb–ç6–FRö÷WG6–FRBWfW'’6–ævÆR–çFW'6V7F–öâö–çBöbâVFvP ’òòv—F‚F†R†÷&—¦öçFÂÆ–æRF‡&÷Vv‚–åBÂÆVgBöb–å@ ’òòæ÷B6÷VçF–ærÆ÷vW%’VæGö–çG2öbVFvW2æBv†öÆRVFvW2öâF†BÆ–æP –ÆWB–ç6–FRÒfÇ6S° –f÷"‚ÆWBÒöÇ”ÆVâÒÂÒ²ÂöÇ”ÆVã²Ò²²’°  –ÆWBVFvTÆ÷uBÒ–åöÇ–vöå²Ó° –ÆWBVFvT†–v…BÒ–åöÇ–vöå²Ó°  –ÆWBVFvTG‚ÒVFvT†–v…Bç‚ÒVFvTÆ÷uBçƒ° –ÆWBVFvTG’ÒVFvT†–v…Bç’ÒVFvTÆ÷uBç“°  ––b‚ÖF‚æ'2‚VFvTG’’âçVÖ&W"äU4”Äôâ’°  ’òòæ÷B&ÆÆVÀ ––b‚VFvTG’Â’°  –VFvTÆ÷uBÒ–åöÇ–vöå²Ó²VFvTG‚ÒÒVFvTGƒ° –VFvT†–v…BÒ–åöÇ–vöå²Ó²VFvTG’ÒÒVFvTG“°  —Ð  ––b‚‚–åBç’ÂVFvTÆ÷uBç’’ÇÂ‚–åBç’âVFvT†–v…Bç’’’ –6öçF–çVS°  ––b‚–åBç’ÓÓÒVFvTÆ÷uBç’’°  ––b‚–åBç‚ÓÓÒVFvTÆ÷uBç‚—&WGW&à—G'VS°’òò–åB—2öâ6öçF÷W"ð ’òò6öçF–çVS°’òòæò–çFW'6V7F–öâ÷"VFvTÆ÷uBÓâFöW6âwB6÷VçB  —ÒVÇ6R°  –6öç7BW'VFvRÒVFvTG’¢‚–åBç‚ÒVFvTÆ÷uBç‚’ÒVFvTG‚¢‚–åBç’ÒVFvTÆ÷uBç’“° ––b‚W'VFvRÓÓÒ—&WGW&à—G'VS°’òò–åB—2öâ6öçF÷W"ð ––b‚W'VFvRÂ’ –6öçF–çVS° ––ç6–FRÒ–ç6–FS°’òòG'VR–çFW'6V7F–öâÆVgBöb–å@  —Ð  —ÒVÇ6R°  ’òò&ÆÆVÂ÷"6öÆÆ–æV  ––b‚–åBç’ÓÒVFvTÆ÷uBç’’ –6öçF–çVS°’òò&ÆÆVÀ ’òòVFvRÆ–W2öâF†R6ÖR†÷&—¦öçFÂÆ–æR2–å@ ––b‚‚‚VFvT†–v…Bç‚ÃÒ–åBç‚’bb‚–åBç‚ÃÒVFvTÆ÷uBç‚’’ÇÀ ’‚‚VFvTÆ÷uBç‚ÃÒ–åBç‚’bb‚–åBç‚ÃÒVFvT†–v…Bç‚’’—&WGW&à—G'VS°’òò–åC¢ö–çBöâ6öçF÷W" ’òò6öçF–çVS°  —Ð  —Ð  —&WGW&à––ç6–FS°  —Ð  –6öç7B—46Æö6µv—6RÒ6†UWF–Ç2æ—46Æö6µv—6S°  –6öç7B7V%F‡2ÒF†—2ç7V%F‡3° ––b‚7V%F‡2æÆVæwF‚ÓÓÒ’&WGW&âµÓ°  –ÆWB6öÆ–BÂF×F‚ÂF×6†S° –6öç7B6†W2ÒµÓ°  ––b‚7V%F‡2æÆVæwF‚ÓÓÒ’°  —F×F‚Ò7V%F‡5²Ó° —F×6†RÒæWr6†R‚“° —F×6†Ræ7W'fW2ÒF×F‚æ7W'fW3° —6†W2çW6‚‚F×6†R“° —&WGW&â6†W3°  —Ð  –ÆWB†öÆW4f—'7BÒ—46Æö6µv—6R‚7V%F‡5²ÒævWEö–çG2‚’“° –†öÆW4f—'7BÒ—445rò†öÆW4f—'7B¢†öÆW4f—'7C°  ’òò6öç6öÆRæÆör‚$†öÆW2f—'7B"Â†öÆW4f—'7B“°  –6öç7B&WGFW%6†T†öÆW2ÒµÓ° –6öç7BæWu6†W2ÒµÓ° –ÆWBæWu6†T†öÆW2ÒµÓ° –ÆWBÖ–ä–G‚Ò° –ÆWBF×ö–çG3°  –æWu6†W5²Ö–ä–G‚ÒÒVæFVf–æVC° –æWu6†T†öÆW5²Ö–ä–G‚ÒÒµÓ°  –f÷"‚ÆWB’ÒÂÂÒ7V%F‡2æÆVæwFƒ²’ÂÃ²’²²’°  —F×F‚Ò7V%F‡5²’Ó° —F×ö–çG2ÒF×F‚ævWEö–çG2‚“° —6öÆ–BÒ—46Æö6µv—6R‚F×ö–çG2“° —6öÆ–BÒ—445rò6öÆ–B¢6öÆ–C°  ––b‚6öÆ–B’°  ––b‚‚†öÆW4f—'7B’bb‚æWu6†W5²Ö–ä–G‚Ò’–Ö–ä–G‚²³°  –æWu6†W5²Ö–ä–G‚ÒÒ²3¢æWr6†R‚’Â¢F×ö–çG2Ó° –æWu6†W5²Ö–ä–G‚Òç2æ7W'fW2ÒF×F‚æ7W'fW3°  ––b‚†öÆW4f—'7B–Ö–ä–G‚²³° –æWu6†T†öÆW5²Ö–ä–G‚ÒÒµÓ°  ’òö6öç6öÆRæÆör‚v7rrÂ’“°  —ÒVÇ6R°  –æWu6†T†öÆW5²Ö–ä–G‚ÒçW6‚‚²ƒ¢F×F‚Â¢F×ö–çG5²ÒÒ“°  ’òö6öç6öÆRæÆör‚v67rrÂ’“°  —Ð  —Ð  ’òòöæÇ’†öÆW3òÓâ&ö&&Ç’ÆÂ6†W2v—F‚w&öær÷&–VçFF–öà ––b‚æWu6†W5²Ò—&WGW&à—Fõ6†W4æô†öÆW2‚7V%F‡2“°   ––b‚æWu6†W2æÆVæwF‚â’°  –ÆWBÖ&–wV÷W2ÒfÇ6S° –ÆWBFô6†ævRÒ°  –f÷"‚ÆWB4–G‚ÒÂ4ÆVâÒæWu6†W2æÆVæwFƒ²4–G‚Â4ÆVã²4–G‚²²’°  –&WGFW%6†T†öÆW5²4–G‚ÒÒµÓ°  —Ð  –f÷"‚ÆWB4–G‚ÒÂ4ÆVâÒæWu6†W2æÆVæwFƒ²4–G‚Â4ÆVã²4–G‚²²’°  –6öç7B6†òÒæWu6†T†öÆW5²4–G‚Ó°  –f÷"‚ÆWB„–G‚Ò²„–G‚Â6†òæÆVæwFƒ²„–G‚²²’°  –6öç7B†òÒ6†õ²„–G‚Ó° –ÆWB†öÆU÷Væ76–væVBÒG'VS°  –f÷"‚ÆWB3$–G‚Ò²3$–G‚ÂæWu6†W2æÆVæwFƒ²3$–G‚²²’°  ––b‚—5ö–çD–ç6–FUöÇ–vöâ‚†òçÂæWu6†W5²3$–G‚Òç’’°  ––b‚4–G‚ÓÒ3$–G‚—Fô6†ævR²³°  ––b‚†öÆU÷Væ76–væVB’°  –†öÆU÷Væ76–væVBÒfÇ6S° –&WGFW%6†T†öÆW5²3$–G‚ÒçW6‚‚†ò“°  —ÒVÇ6R°  –Ö&–wV÷W2ÒG'VS°  —Ð  —Ð  —Ð  ––b‚†öÆU÷Væ76–væVB’°  –&WGFW%6†T†öÆW5²4–G‚ÒçW6‚‚†ò“°  —Ð  —Ð  —Ð  ––b‚Fô6†ævRâbbÖ&–wV÷W2ÓÓÒfÇ6R’°  –æWu6†T†öÆW2Ò&WGFW%6†T†öÆW3°  —Ð  —Ð  –ÆWBF×†öÆW3°  –f÷"‚ÆWB’ÒÂ–ÂÒæWu6†W2æÆVæwFƒ²’Â–Ã²’²²’°  —F×6†RÒæWu6†W5²’Òç3° —6†W2çW6‚‚F×6†R“° —F×†öÆW2ÒæWu6†T†öÆW5²’Ó°  –f÷"‚ÆWB¢ÒÂ¦ÂÒF×†öÆW2æÆVæwFƒ²¢Â¦Ã²¢²²’°  —F×6†Ræ†öÆW2çW6‚‚F×†öÆW5²¢Òæ‚“°  —Ð  —Ð  ’òö6öç6öÆRæÆör‚'6†R"Â6†W2“°  —&WGW&â6†W3°  —Ð §Ð ¢ò¢ ¢¢'7G&7B&6R6Æ72f÷"6öçG&öÇ2à¢ ¢¢'7G&7@¢¢VvÖVçG2WfVçDF—7F6†W ¢¢ð¦6Æ726öçG&öÇ2W‡FVæG2WfVçDF—7F6†W"°  ’ò¢  ’¢6öç7G'V7G2æWr6öçG&öÇ2–ç7Fæ6Rà ’  ’¢&Ò´ö&¦V7C4GÒö&¦V7BÒF†Rö&¦V7BF†B—2ÖævVB'’F†R6öçG&öÇ2à ’¢&Ò³ô…DÔÄDôÔVÆVÖVçGÒFöÔVÆVÖVçBÒF†R…DÔÂVÆVÖVçBW6VBf÷"WfVçBÆ—7FVæW'2à ’¢ð –6öç7G'V7F÷"‚ö&¦V7BÂFöÔVÆVÖVçBÒçVÆÂ’°  —7WW"‚“°  ’ò¢  ’¢F†Rö&¦V7BF†B—2ÖævVB'’F†R6öçG&öÇ2à ’  ’¢G—R´ö&¦V7C4GÐ ’¢ð —F†—2æö&¦V7BÒö&¦V7C°  ’ò¢  ’¢F†R…DÔÂVÆVÖVçBW6VBf÷"WfVçBÆ—7FVæW'2à ’  ’¢G—R³ô…DÔÄDôÔVÆVÖVçGÐ ’¢FVfVÇBçVÆÀ ’¢ð —F†—2æFöÔVÆVÖVçBÒFöÔVÆVÖVçC°  ’ò¢  ’¢v†WF†W"F†R6öçG&öÇ2&W7öæG2FòW6W"–çWB÷"æ÷Bà ’  ’¢G—R¶&ööÆVçÐ ’¢FVfVÇBG'VP ’¢ð —F†—2æVæ&ÆVBÒG'VS°  ’ò¢  ’¢F†R–çFW&æÂ7FFRöbF†R6öçG&öÇ2à ’  ’¢G—R¶çVÖ&W'Ð ’¢FVfVÇBÓ ’¢ð —F†—2ç7FFRÒÓ°  ’ò¢  ’¢F†—2ö&¦V7BFVf–æW2F†R¶W–&ö&B–çWBöbF†R6öçG&öÇ2à ’  ’¢G—R´ö&¦V7GÐ ’¢ð —F†—2æ¶W—2Ò·Ó°  ’ò¢  ’¢F†—2ö&¦V7BFVf–æW2v†BG—Röb7F–öç2&R76–væVBFòF†Rf–Æ&ÆRÖ÷W6R'WGFöç2à ’¢—BFWVæG2öâF†R6öçG&öÂ–×ÆVÖVçFF–öâv†B¶–æBöbÖ÷W6R'WGFöç2æB7F–öç2&R7W÷'FVBà ’  ’¢G—R·´ÄTeC¢öçVÖ&W"ÂÔ”DDÄS¢öçVÖ&W"Â$”t…C¢öçVÖ&W'×Ð ’¢ð —F†—2æÖ÷W6T'WGFöç2Ò²ÄTeC¢çVÆÂÂÔ”DDÄS¢çVÆÂÂ$”t…C¢çVÆÂÓ°  ’ò¢  ’¢F†—2ö&¦V7BFVf–æW2v†BG—Röb7F–öç2&R76–væVBFòv†B¶–æBöbF÷V6‚–çFW&7F–öâà ’¢—BFWVæG2öâF†R6öçG&öÂ–×ÆVÖVçFF–öâv†B¶–æBöbF÷V6‚–çFW&7F–öâæB7F–öç2&R7W÷'FVBà ’  ’¢G—R·´ôäS¢öçVÖ&W"ÂEtó¢öçVÖ&W'×Ð ’¢ð —F†—2çF÷V6†W2Ò²ôäS¢çVÆÂÂEtó¢çVÆÂÓ°  —Ð  ’ò¢  ’¢6öææV7G2F†R6öçG&öÇ2FòF†RDôÒâF†—2ÖWF†öB†26ò6ÆÆVB'6–FRVffV7G2"6–æ6P ’¢—BFG2F†RÖöGVÆRw2WfVçBÆ—7FVæW'2FòF†RDôÒà ’  ’¢&Ò´…DÔÄDôÔVÆVÖVçGÒVÆVÖVçBÒF†RDôÒVÆVÖVçBFò6öææV7BFòà ’¢ð –6öææV7B‚VÆVÖVçB’°  ––b‚VÆVÖVçBÓÓÒVæFVf–æVB’°  –6öç6öÆRçv&â‚uD…$TRä6öçG&öÇ3¢6öææV7B‚’æ÷r&WV—&W2âVÆVÖVçBâr“²òòFW&V6FVBÂF†Rv&æ–ær6â&R&VÖ÷fVBv—F‚#ƒP —&WGW&ã°  —Ð  ––b‚F†—2æFöÔVÆVÖVçBÓÒçVÆÂ’F†—2æF—66öææV7B‚“°  —F†—2æFöÔVÆVÖVçBÒVÆVÖVçC°  —Ð  ’ò¢  ’¢F—66öææV7G2F†R6öçG&öÇ2g&öÒF†RDôÒà ’¢ð –F—66öææV7B‚’·Ð  ’ò¢  ’¢6ÆÂF†—2ÖWF†öB–b–÷RæòÆöævW"vçBW6RFòF†R6öçG&öÇ2â—Bg&VW2ÆÂ–çFW&æÀ ’¢&W6÷W&6W2æB&VÖ÷fW2ÆÂWfVçBÆ—7FVæW'2à ’¢ð –F—7÷6R‚’·Ð  ’ò¢  ’¢6öçG&öÇ26†÷VÆB–×ÆVÖVçBF†—2ÖWF†öB–bF†W’†fRFòWFFRF†V—"–çFW&æÂ7FFP ’¢W"6–×VÆF–öâ7FWà ’  ’¢&Ò¶çVÖ&W'Ò¶FVÇFÒÒF†RF–ÖRFVÇF–â6V6öæG2à ’¢ð —WFFR‚ò¢FVÇF¢ò’·Ð §Ð ¢ò¢ ¢¢66ÆW2F†RFW‡GW&R2Æ&vR2÷76–&ÆRv—F†–â—G27W&f6Rv—F†÷WB7&÷–æp¢¢÷"7G&WF6†–ærF†RFW‡GW&RâF†RÖWF†öB&W6W'fW2F†R÷&–v–æÂ7V7B&F–òö`¢¢F†RFW‡GW&Râ¶–âFò552ö&¦V7BÖf—C¢6öçF–æ ¢ ¢¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà¢¢&Ò¶çVÖ&W'Ò7V7BÒF†RFW‡GW&Rw27V7B&F–òà¢¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà¢¢ð¦gVæ7F–öâ6öçF–â‚FW‡GW&RÂ7V7B’°  –6öç7B–ÖvT7V7BÒ‚FW‡GW&Ræ–ÖvRbbFW‡GW&Ræ–ÖvRçv–GF‚’òFW‡GW&Ræ–ÖvRçv–GF‚òFW‡GW&Ræ–ÖvRæ†V–v‡B¢°  ––b‚–ÖvT7V7Bâ7V7B’°  —FW‡GW&Rç&WVBç‚Ò° —FW‡GW&Rç&WVBç’Ò–ÖvT7V7Bò7V7C°  —FW‡GW&Ræöfg6WBç‚Ò° —FW‡GW&Ræöfg6WBç’Ò‚ÒFW‡GW&Rç&WVBç’’ò#°  —ÒVÇ6R°  —FW‡GW&Rç&WVBç‚Ò7V7Bò–ÖvT7V7C° —FW‡GW&Rç&WVBç’Ò°  —FW‡GW&Ræöfg6WBç‚Ò‚ÒFW‡GW&Rç&WVBç‚’ò#° —FW‡GW&Ræöfg6WBç’Ò°  —Ð  —&WGW&âFW‡GW&S° §Ð ¢ò¢ ¢¢66ÆW2F†RFW‡GW&RFòF†R6ÖÆÆW7B÷76–&ÆR6—¦RFòf–ÆÂF†R7W&f6RÂÆVf–æp¢¢æòV×G’76RâF†RÖWF†öB&W6W'fW2F†R÷&–v–æÂ7V7B&F–òöbF†RFW‡GW&Rà¢¢¶–âFò552ö&¦V7BÖf—C¢6÷fW&à¢ ¢¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà¢¢&Ò¶çVÖ&W'Ò7V7BÒF†RFW‡GW&Rw27V7B&F–òà¢¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà¢¢ð¦gVæ7F–öâ6÷fW"‚FW‡GW&RÂ7V7B’°  –6öç7B–ÖvT7V7BÒ‚FW‡GW&Ræ–ÖvRbbFW‡GW&Ræ–ÖvRçv–GF‚’òFW‡GW&Ræ–ÖvRçv–GF‚òFW‡GW&Ræ–ÖvRæ†V–v‡B¢°  ––b‚–ÖvT7V7Bâ7V7B’°  —FW‡GW&Rç&WVBç‚Ò7V7Bò–ÖvT7V7C° —FW‡GW&Rç&WVBç’Ò°  —FW‡GW&Ræöfg6WBç‚Ò‚ÒFW‡GW&Rç&WVBç‚’ò#° —FW‡GW&Ræöfg6WBç’Ò°  —ÒVÇ6R°  —FW‡GW&Rç&WVBç‚Ò° —FW‡GW&Rç&WVBç’Ò–ÖvT7V7Bò7V7C°  —FW‡GW&Ræöfg6WBç‚Ò° —FW‡GW&Ræöfg6WBç’Ò‚ÒFW‡GW&Rç&WVBç’’ò#°  —Ð  —&WGW&âFW‡GW&S° §Ð ¢ò¢ ¢¢6öæf–wW&W2F†RFW‡GW&RFòF†RFVfVÇBG&ç6f÷&ÖF–öââ¶–âFò552ö&¦V7BÖf—C¢f–ÆÆà¢ ¢¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà¢¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà¢¢ð¦gVæ7F–öâf–ÆÂ‚FW‡GW&R’°  —FW‡GW&Rç&WVBç‚Ò° —FW‡GW&Rç&WVBç’Ò°  —FW‡GW&Ræöfg6WBç‚Ò° —FW‡GW&Ræöfg6WBç’Ò°  —&WGW&âFW‡GW&S° §Ð ¢ò¢ ¢¢FWFW&Ö–æW2†÷rÖç’'—FW2×W7B&RW6VBFò&W&W6VçBF†RFW‡GW&Rà¢ ¢¢&Ò¶çVÖ&W'Òv–GF‚ÒF†Rv–GF‚öbF†RFW‡GW&Rà¢¢&Ò¶çVÖ&W'Ò†V–v‡BÒF†R†V–v‡BöbF†RFW‡GW&Rà¢¢&Ò¶çVÖ&W'Òf÷&ÖBÒF†RFW‡GW&Rw2f÷&ÖBà¢¢&Ò¶çVÖ&W'ÒG—RÒF†RFW‡GW&Rw2G—Rà¢¢&WGW&â¶çVÖ&W'ÒF†R'—FRÆVæwF‚à¢¢ð¦gVæ7F–öâvWD'—FTÆVæwF‚‚v–GF‚Â†V–v‡BÂf÷&ÖBÂG—R’°  –6öç7BG—T'—FTÆVæwF‚ÒvWEFW‡GW&UG—T'—FTÆVæwF‚‚G—R“°  —7v—F6‚‚f÷&ÖB’°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&rô÷VätÂÕ&VgvW2öW32ãö‡FÖÂövÅFW„–ÖvS$Bç†‡FÖÀ –66RÇ†f÷&ÖC  —&WGW&âv–GF‚¢†V–v‡C° –66R&VDf÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R&VD–çFVvW$f÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R$tf÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B¢"’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R$t–çFVvW$f÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B¢"’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R$t$f÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B¢2’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R$t$f÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B¢B’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ° –66R$t$–çFVvW$f÷&ÖC  —&WGW&â‚‚v–GF‚¢†V–v‡B¢B’òG—T'—FTÆVæwF‚æ6ö×öæVçG2’¢G—T'—FTÆVæwF‚æ'—FTÆVæwFƒ°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2õtT$tÅö6ö×&W76VE÷FW‡GW&U÷37F5÷7&v"ð –66R$t%õ35D5ôE…Côf÷&ÖC  –66R$t$õ35D5ôE…Côf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²2’òB’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢ƒ° –66R$t$õ35D5ôE…C5ôf÷&ÖC  –66R$t$õ35D5ôE…CUôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²2’òB’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢c°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2õtT$tÅö6ö×&W76VE÷FW‡GW&U÷g'F2ð –66R$t%õe%D5ó$%côf÷&ÖC  –66R$t$õe%D5ó$%côf÷&ÖC  —&WGW&â‚ÖF‚æÖ‚‚v–GF‚Âb’¢ÖF‚æÖ‚‚†V–v‡BÂ‚’’òC° –66R$t%õe%D5óD%côf÷&ÖC  –66R$t$õe%D5óD%côf÷&ÖC  —&WGW&â‚ÖF‚æÖ‚‚v–GF‚Â‚’¢ÖF‚æÖ‚‚†V–v‡BÂ‚’’ò#°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2õtT$tÅö6ö×&W76VE÷FW‡GW&UöWF2ð –66R$t%ôUD3ôf÷&ÖC  –66R$t%ôUD3%ôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²2’òB’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢ƒ° –66R$t$ôUD3%ôT5ôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²2’òB’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢c°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2õtT$tÅö6ö×&W76VE÷FW‡GW&Uö7F2ð –66R$t$ô5D5óGƒEôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²2’òB’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢c° –66R$t$ô5D5óWƒEôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²B’òR’¢ÖF‚æfÆö÷"‚‚†V–v‡B²2’òB’¢c° –66R$t$ô5D5óWƒUôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²B’òR’¢ÖF‚æfÆö÷"‚‚†V–v‡B²B’òR’¢c° –66R$t$ô5D5ógƒUôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²R’òb’¢ÖF‚æfÆö÷"‚‚†V–v‡B²B’òR’¢c° –66R$t$ô5D5ógƒeôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²R’òb’¢ÖF‚æfÆö÷"‚‚†V–v‡B²R’òb’¢c° –66R$t$ô5D5ó‡ƒUôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²r’ò‚’¢ÖF‚æfÆö÷"‚‚†V–v‡B²B’òR’¢c° –66R$t$ô5D5ó‡ƒeôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²r’ò‚’¢ÖF‚æfÆö÷"‚‚†V–v‡B²R’òb’¢c° –66R$t$ô5D5ó‡ƒ…ôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²r’ò‚’¢ÖF‚æfÆö÷"‚‚†V–v‡B²r’ò‚’¢c° –66R$t$ô5D5óƒUôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’’ò’¢ÖF‚æfÆö÷"‚‚†V–v‡B²B’òR’¢c° –66R$t$ô5D5óƒeôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’’ò’¢ÖF‚æfÆö÷"‚‚†V–v‡B²R’òb’¢c° –66R$t$ô5D5óƒ…ôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’’ò’¢ÖF‚æfÆö÷"‚‚†V–v‡B²r’ò‚’¢c° –66R$t$ô5D5óƒôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’’ò’¢ÖF‚æfÆö÷"‚‚†V–v‡B²’’ò’¢c° –66R$t$ô5D5ó'ƒôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’ò"’¢ÖF‚æfÆö÷"‚‚†V–v‡B²’’ò’¢c° –66R$t$ô5D5ó'ƒ%ôf÷&ÖC  —&WGW&âÖF‚æfÆö÷"‚‚v–GF‚²’ò"’¢ÖF‚æfÆö÷"‚‚†V–v‡B²’ò"’¢c°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2ôU…E÷FW‡GW&Uö6ö×&W76–öåö'F2ð –66R$t$ô%D5ôf÷&ÖC  –66R$t%ô%D5õ4”täTEôf÷&ÖC  –66R$t%ô%D5õTå4”täTEôf÷&ÖC  —&WGW&âÖF‚æ6V–Â‚v–GF‚òB’¢ÖF‚æ6V–Â‚†V–v‡BòB’¢c°  ’òò‡GG3¢ò÷&Vv—7G'’æ¶‡&öæ÷2æ÷&r÷vV&vÂöW‡FVç6–öç2ôU…E÷FW‡GW&Uö6ö×&W76–öå÷&wF2ð –66R$TEõ$uD3ôf÷&ÖC  –66R4”täTEõ$TEõ$uD3ôf÷&ÖC  —&WGW&âÖF‚æ6V–Â‚v–GF‚òB’¢ÖF‚æ6V–Â‚†V–v‡BòB’¢ƒ° –66R$TEôu$TTåõ$uD3%ôf÷&ÖC  –66R4”täTEõ$TEôu$TTåõ$uD3%ôf÷&ÖC  —&WGW&âÖF‚æ6V–Â‚v–GF‚òB’¢ÖF‚æ6V–Â‚†V–v‡BòB’¢c°  —Ð  —F‡&÷ræWrW'&÷"€ –Væ&ÆRFòFWFW&Ö–æRFW‡GW&R'—FRÆVæwF‚f÷"G¶f÷&ÖGÒf÷&ÖBæÀ ’“° §Ð ¦gVæ7F–öâvWEFW‡GW&UG—T'—FTÆVæwF‚‚G—R’°  —7v—F6‚‚G—R’°  –66RVç6–væVD'—FUG—S  –66R'—FUG—S  —&WGW&â²'—FTÆVæwFƒ¢Â6ö×öæVçG3¢Ó° –66RVç6–væVE6†÷'EG—S  –66R6†÷'EG—S  –66R†ÆdfÆöEG—S  —&WGW&â²'—FTÆVæwFƒ¢"Â6ö×öæVçG3¢Ó° –66RVç6–væVE6†÷'CCCCEG—S  –66RVç6–væVE6†÷'CSSSG—S  —&WGW&â²'—FTÆVæwFƒ¢"Â6ö×öæVçG3¢BÓ° –66RVç6–væVD–çEG—S  –66R–çEG—S  –66RfÆöEG—S  —&WGW&â²'—FTÆVæwFƒ¢BÂ6ö×öæVçG3¢Ó° –66RVç6–væVD–çCS““•G—S  –66RVç6–væVD–çCG—S  —&WGW&â²'—FTÆVæwFƒ¢BÂ6ö×öæVçG3¢2Ó°  —Ð  —F‡&÷ræWrW'&÷"‚Væ¶æ÷vâFW‡GW&RG—RG·G—WÒæ“° §Ð ¢ò¢ ¢¢6Æ726öçF–æ–ærWF–Æ—G’gVæ7F–öç2f÷"FW‡GW&W2à¢ ¢¢†–FV6öç7G'V7F÷ ¢¢ð¦6Æ72FW‡GW&UWF–Ç2°  ’ò¢  ’¢66ÆW2F†RFW‡GW&R2Æ&vR2÷76–&ÆRv—F†–â—G27W&f6Rv—F†÷WB7&÷–æp ’¢÷"7G&WF6†–ærF†RFW‡GW&RâF†RÖWF†öB&W6W'fW2F†R÷&–v–æÂ7V7B&F–òö` ’¢F†RFW‡GW&Râ¶–âFò552ö&¦V7BÖf—C¢6öçF–æ  ’  ’¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà ’¢&Ò¶çVÖ&W'Ò7V7BÒF†RFW‡GW&Rw27V7B&F–òà ’¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà ’¢ð —7FF–26öçF–â‚FW‡GW&RÂ7V7B’°  —&WGW&â6öçF–â‚FW‡GW&RÂ7V7B“°  —Ð  ’ò¢  ’¢66ÆW2F†RFW‡GW&RFòF†R6ÖÆÆW7B÷76–&ÆR6—¦RFòf–ÆÂF†R7W&f6RÂÆVf–æp ’¢æòV×G’76RâF†RÖWF†öB&W6W'fW2F†R÷&–v–æÂ7V7B&F–òöbF†RFW‡GW&Rà ’¢¶–âFò552ö&¦V7BÖf—C¢6÷fW&à ’  ’¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà ’¢&Ò¶çVÖ&W'Ò7V7BÒF†RFW‡GW&Rw27V7B&F–òà ’¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà ’¢ð —7FF–26÷fW"‚FW‡GW&RÂ7V7B’°  —&WGW&â6÷fW"‚FW‡GW&RÂ7V7B“°  —Ð  ’ò¢  ’¢6öæf–wW&W2F†RFW‡GW&RFòF†RFVfVÇBG&ç6f÷&ÖF–öââ¶–âFò552ö&¦V7BÖf—C¢f–ÆÆà ’  ’¢&ÒµFW‡GW&WÒFW‡GW&RÒF†RFW‡GW&Rà ’¢&WGW&âµFW‡GW&WÒF†RWFFVBFW‡GW&Rà ’¢ð —7FF–2f–ÆÂ‚FW‡GW&R’°  —&WGW&âf–ÆÂ‚FW‡GW&R“°  —Ð  ’ò¢  ’¢FWFW&Ö–æW2†÷rÖç’'—FW2×W7B&RW6VBFò&W&W6VçBF†RFW‡GW&Rà ’  ’¢&Ò¶çVÖ&W'Òv–GF‚ÒF†Rv–GF‚öbF†RFW‡GW&Rà ’¢&Ò¶çVÖ&W'Ò†V–v‡BÒF†R†V–v‡BöbF†RFW‡GW&Rà ’¢&Ò¶çVÖ&W'Òf÷&ÖBÒF†RFW‡GW&Rw2f÷&ÖBà ’¢&Ò¶çVÖ&W'ÒG—RÒF†RFW‡GW&Rw2G—Rà ’¢&WGW&â¶çVÖ&W'ÒF†R'—FRÆVæwF‚à ’¢ð —7FF–2vWD'—FTÆVæwF‚‚v–GF‚Â†V–v‡BÂf÷&ÖBÂG—R’°  —&WGW&âvWD'—FTÆVæwF‚‚v–GF‚Â†V–v‡BÂf÷&ÖBÂG—R“°  —Ð §Ð ¦–b‚G—VöbõõD…$TUôDUeDôôÅ5õòÓÒwVæFVf–æVBr’°  •õõD…$TUôDUeDôôÅ5õòæF—7F6„WfVçB‚æWr7W7FöÔWfVçB‚w&Vv—7FW"rÂ²FWF–Ã¢° —&Wf—6–öã¢$Ud•4”ôâÀ —ÒÒ’“° §Ð ¦–b‚G—Vöbv–æF÷rÓÒwVæFVf–æVBr’°  ––b‚v–æF÷råõõD…$TUõò’°  –6öç6öÆRçv&â‚ut$ä”äs¢×VÇF—ÆR–ç7Fæ6W2öbF‡&VRæ§2&V–ær–×÷'FVBâr“°  —ÒVÇ6R°  —v–æF÷råõõD…$TUõòÒ$Ud•4”ôã°  —Ð §Ð ¦W‡÷'B²4U4f–ÆÖ–5FöæTÖ–ærÂFDWVF–öâÂFD÷W&F–öâÂFF—F—fTæ–ÖF–öä&ÆVæDÖöFRÂFF—F—fT&ÆVæF–ærÂu…FöæTÖ–ærÂÇ†f÷&ÖBÂÇv—46ö×&RÂÇv—4FWF‚ÂÇv—57FVæ6–ÄgVæ2ÂÖ&–VçDÆ–v‡BÂæ–ÖF–öä7F–öâÂæ–ÖF–öä6Æ—Âæ–ÖF–öäÆöFW"Âæ–ÖF–öäÖ—†W"Âæ–ÖF–öäö&¦V7Dw&÷WÂæ–ÖF–öåWF–Ç2Â&47W'fRÂ'&”6ÖW&Â'&÷t†VÇW"ÂGF6†VD&–æDÖöFRÂVF–òÂVF–ôæÇ—6W"ÂVF–ô6öçFW‡BÂVF–ôÆ—7FVæW"ÂVF–ôÆöFW"Â†W4†VÇW"Â&6µ6–FRÂ&6–4FWF…6¶–ærÂ&6–56†F÷tÖÂ&F6†VDÖW6‚Â&öæRÂ&ööÆVä¶W–g&ÖUG&6²Â&÷ƒ"Â&÷ƒ2Â&÷ƒ4†VÇW"Â&÷„vVöÖWG'’Â&÷„†VÇW"Â'VffW$GG&–'WFRÂ'VffW$vVöÖWG'’Â'VffW$vVöÖWG'”ÆöFW"Â'—FUG—RÂ66†RÂ6ÖW&Â6ÖW&†VÇW"Â6çf5FW‡GW&RÂ67VÆTvVöÖWG'’Â6F×VÆÅ&öÔ7W'fS2Â6–æVöåFöæTÖ–ærÂ6—&6ÆTvVöÖWG'’Â6Æ×FôVFvUw&–ærÂ6Æö6²Â6öÆ÷"Â6öÆ÷$¶W–g&ÖUG&6²Â6öÆ÷$ÖævVÖVçBÂ6ö×&W76VD'&•FW‡GW&RÂ6ö×&W76VD7V&UFW‡GW&RÂ6ö×&W76VEFW‡GW&RÂ6ö×&W76VEFW‡GW&TÆöFW"Â6öæTvVöÖWG'’Â6öç7FçDÇ†f7F÷"Â6öç7FçD6öÆ÷$f7F÷"Â6öçG&öÇ2Â7V&T6ÖW&Â7V&U&VfÆV7F–öäÖ–ærÂ7V&U&Vg&7F–öäÖ–ærÂ7V&UFW‡GW&RÂ7V&UFW‡GW&TÆöFW"Â7V&UUe&VfÆV7F–öäÖ–ærÂ7V&–4&W¦–W$7W'fRÂ7V&–4&W¦–W$7W'fS2Â7V&–4–çFW'öÆçBÂ7VÆÄf6T&6²Â7VÆÄf6Tg&öçBÂ7VÆÄf6Tg&öçD&6²Â7VÆÄf6TæöæRÂ7W'fRÂ7W'fUF‚Â7W7FöÔ&ÆVæF–ærÂ7W7FöÕFöæTÖ–ærÂ7–Æ–æFW$vVöÖWG'’Â7–Æ–æG&–6ÂÂFF4EFW‡GW&RÂFF'&•FW‡GW&RÂFFFW‡GW&RÂFFFW‡GW&TÆöFW"ÂFFWF–Ç2ÂFV7&VÖVçE7FVæ6–Ä÷ÂFV7&VÖVçEw&7FVæ6–Ä÷ÂFVfVÇDÆöF–ætÖævW"ÂFWF„f÷&ÖBÂFWF…7FVæ6–Äf÷&ÖBÂFWF…FW‡GW&RÂFWF6†VD&–æDÖöFRÂF—&V7F–öæÄÆ–v‡BÂF—&V7F–öæÄÆ–v‡D†VÇW"ÂF—67&WFT–çFW'öÆçBÂFöFV6†VG&öävVöÖWG'’ÂF÷V&ÆU6–FRÂG7DÇ†f7F÷"ÂG7D6öÆ÷$f7F÷"ÂG–æÖ–46÷•W6vRÂG–æÖ–4G&uW6vRÂG–æÖ–5&VEW6vRÂVFvW4vVöÖWG'’ÂVÆÆ—6T7W'fRÂWVÄ6ö×&RÂWVÄFWF‚ÂWVÅ7FVæ6–ÄgVæ2ÂWV—&V7FæwVÆ%&VfÆV7F–öäÖ–ærÂWV—&V7FæwVÆ%&Vg&7F–öäÖ–ærÂWVÆW"ÂWfVçDF—7F6†W"ÂW‡FW&æÅFW‡GW&RÂW‡G'VFTvVöÖWG'’Âf–ÆTÆöFW"ÂfÆöCd'VffW$GG&–'WFRÂfÆöC3$'VffW$GG&–'WFRÂfÆöEG—RÂförÂfötW‡"Âg&ÖV'VffW%FW‡GW&RÂg&öçE6–FRÂg'W7GVÒÂg'W7GVÔ'&’ÂtÄ'VffW$GG&–'WFRÂtÅ4ÃÂtÅ4Ã2Âw&VFW$6ö×&RÂw&VFW$FWF‚Âw&VFW$WVÄ6ö×&RÂw&VFW$WVÄFWF‚Âw&VFW$WVÅ7FVæ6–ÄgVæ2Âw&VFW%7FVæ6–ÄgVæ2Âw&–D†VÇW"Âw&÷WÂ†ÆdfÆöEG—RÂ†VÖ—7†W&TÆ–v‡BÂ†VÖ—7†W&TÆ–v‡D†VÇW"Â–6÷6†VG&öävVöÖWG'’Â–ÖvT&—FÖÆöFW"Â–ÖvTÆöFW"Â–ÖvUWF–Ç2Â–æ7&VÖVçE7FVæ6–Ä÷Â–æ7&VÖVçEw&7FVæ6–Ä÷Â–ç7Fæ6VD'VffW$GG&–'WFRÂ–ç7Fæ6VD'VffW$vVöÖWG'’Â–ç7Fæ6VD–çFW&ÆVfVD'VffW"Â–ç7Fæ6VDÖW6‚Â–çCd'VffW$GG&–'WFRÂ–çC3$'VffW$GG&–'WFRÂ–çC„'VffW$GG&–'WFRÂ–çEG—RÂ–çFW&ÆVfVD'VffW"Â–çFW&ÆVfVD'VffW$GG&–'WFRÂ–çFW'öÆçBÂ–çFW'öÆFTF—67&WFRÂ–çFW'öÆFTÆ–æV"Â–çFW'öÆFU6Öö÷F‚Â–çFW'öÆF–öå6×Æ–ætÖöFRÂ–çFW'öÆF–öå6×Æ–æuG—RÂ–çfW'E7FVæ6–Ä÷Â¶VW7FVæ6–Ä÷Â¶W–g&ÖUG&6²ÂÄôBÂÆF†TvVöÖWG'’ÂÆ–W'2ÂÆW746ö×&RÂÆW74FWF‚ÂÆW74WVÄ6ö×&RÂÆW74WVÄFWF‚ÂÆW74WVÅ7FVæ6–ÄgVæ2ÂÆW757FVæ6–ÄgVæ2ÂÆ–v‡BÂÆ–v‡E&ö&RÂÆ–æRÂÆ–æS2ÂÆ–æT&6–4ÖFW&–ÂÂÆ–æT7W'fRÂÆ–æT7W'fS2ÂÆ–æTF6†VDÖFW&–ÂÂÆ–æTÆö÷ÂÆ–æU6VvÖVçG2ÂÆ–æV$f–ÇFW"ÂÆ–æV$–çFW'öÆçBÂÆ–æV$Ö—ÖÆ–æV$f–ÇFW"ÂÆ–æV$Ö—ÖæV&W7Df–ÇFW"ÂÆ–æV$Ö—ÖÆ–æV$f–ÇFW"ÂÆ–æV$Ö—ÖæV&W7Df–ÇFW"ÂÆ–æV%5$t$6öÆ÷%76RÂÆ–æV%FöæTÖ–ærÂÆ–æV%G&ç6fW"ÂÆöFW"ÂÆöFW%WF–Ç2ÂÆöF–ætÖævW"ÂÆö÷öæ6RÂÆö÷–æuöærÂÆö÷&WVBÂÔõU4RÂÖFW&–ÂÂÖFW&–ÄÆöFW"ÂÖF…WF–Ç2ÂÖG&—ƒ"ÂÖG&—ƒ2ÂÖG&—ƒBÂÖ„WVF–öâÂÖW6‚ÂÖW6„&6–4ÖFW&–ÂÂÖW6„FWF„ÖFW&–ÂÂÖW6„F—7Fæ6TÖFW&–ÂÂÖW6„ÆÖ&W'DÖFW&–ÂÂÖW6„ÖF6ÖFW&–ÂÂÖW6„æ÷&ÖÄÖFW&–ÂÂÖW6…†öætÖFW&–ÂÂÖW6…‡—6–6ÄÖFW&–ÂÂÖW6…7FæF&DÖFW&–ÂÂÖW6…FööäÖFW&–ÂÂÖ–äWVF–öâÂÖ—'&÷&VE&WVEw&–ærÂÖ—„÷W&F–öâÂ×VÇF—Ç”&ÆVæF–ærÂ×VÇF—Ç”÷W&F–öâÂæV&W7Df–ÇFW"ÂæV&W7DÖ—ÖÆ–æV$f–ÇFW"ÂæV&W7DÖ—ÖæV&W7Df–ÇFW"ÂæV&W7DÖ—ÖÆ–æV$f–ÇFW"ÂæV&W7DÖ—ÖæV&W7Df–ÇFW"ÂæWWG&ÅFöæTÖ–ærÂæWfW$6ö×&RÂæWfW$FWF‚ÂæWfW%7FVæ6–ÄgVæ2Âæô&ÆVæF–ærÂæô6öÆ÷%76RÂæõFöæTÖ–ærÂæ÷&ÖÄæ–ÖF–öä&ÆVæDÖöFRÂæ÷&ÖÄ&ÆVæF–ærÂæ÷DWVÄ6ö×&RÂæ÷DWVÄFWF‚Âæ÷DWVÅ7FVæ6–ÄgVæ2ÂçVÖ&W$¶W–g&ÖUG&6²Âö&¦V7C4BÂö&¦V7DÆöFW"Âö&¦V7E76Tæ÷&ÖÄÖÂö7F†VG&öävVöÖWG'’ÂöæTf7F÷"ÂöæTÖ–çW46öç7FçDÇ†f7F÷"ÂöæTÖ–çW46öç7FçD6öÆ÷$f7F÷"ÂöæTÖ–çW4G7DÇ†f7F÷"ÂöæTÖ–çW4G7D6öÆ÷$f7F÷"ÂöæTÖ–çW57&4Ç†f7F÷"ÂöæTÖ–çW57&46öÆ÷$f7F÷"Â÷'F†öw&†–46ÖW&Â4e6†F÷tÖÂ4e6ögE6†F÷tÖÂF‚ÂW'7V7F—fT6ÖW&ÂÆæRÂÆæTvVöÖWG'’ÂÆæT†VÇW"Âö–çDÆ–v‡BÂö–çDÆ–v‡D†VÇW"Âö–çG2Âö–çG4ÖFW&–ÂÂöÆ$w&–D†VÇW"ÂöÇ–†VG&öävVöÖWG'’Â÷6—F–öæÄVF–òÂ&÷W'G”&–æF–ærÂ&÷W'G”Ö—†W"ÂVG&F–4&W¦–W$7W'fRÂVG&F–4&W¦–W$7W'fS2ÂVFW&æ–öâÂVFW&æ–öä¶W–g&ÖUG&6²ÂVFW&æ–öäÆ–æV$–çFW'öÆçBÂ$C$DTrÂ$TEôu$TTåõ$uD3%ôf÷&ÖBÂ$TEõ$uD3ôf÷&ÖBÂ$Ud•4”ôâÂ$t$FWF…6¶–ærÂ$t$f÷&ÖBÂ$t$–çFVvW$f÷&ÖBÂ$t$ô5D5óƒôf÷&ÖBÂ$t$ô5D5óƒUôf÷&ÖBÂ$t$ô5D5óƒeôf÷&ÖBÂ$t$ô5D5óƒ…ôf÷&ÖBÂ$t$ô5D5ó'ƒôf÷&ÖBÂ$t$ô5D5ó'ƒ%ôf÷&ÖBÂ$t$ô5D5óGƒEôf÷&ÖBÂ$t$ô5D5óWƒEôf÷&ÖBÂ$t$ô5D5óWƒUôf÷&ÖBÂ$t$ô5D5ógƒUôf÷&ÖBÂ$t$ô5D5ógƒeôf÷&ÖBÂ$t$ô5D5ó‡ƒUôf÷&ÖBÂ$t$ô5D5ó‡ƒeôf÷&ÖBÂ$t$ô5D5ó‡ƒ…ôf÷&ÖBÂ$t$ô%D5ôf÷&ÖBÂ$t$ôUD3%ôT5ôf÷&ÖBÂ$t$õe%D5ó$%côf÷&ÖBÂ$t$õe%D5óD%côf÷&ÖBÂ$t$õ35D5ôE…Côf÷&ÖBÂ$t$õ35D5ôE…C5ôf÷&ÖBÂ$t$õ35D5ôE…CUôf÷&ÖBÂ$t$FWF…6¶–ærÂ$t$f÷&ÖBÂ$t$–çFVvW$f÷&ÖBÂ$t%ô%D5õ4”täTEôf÷&ÖBÂ$t%ô%D5õTå4”täTEôf÷&ÖBÂ$t%ôUD3ôf÷&ÖBÂ$t%ôUD3%ôf÷&ÖBÂ$t%õe%D5ó$%côf÷&ÖBÂ$t%õe%D5óD%côf÷&ÖBÂ$t%õ35D5ôE…Côf÷&ÖBÂ$tFWF…6¶–ærÂ$tf÷&ÖBÂ$t–çFVvW$f÷&ÖBÂ&u6†FW$ÖFW&–ÂÂ&’Â&–67FW"Â&V7D&VÆ–v‡BÂ&VDf÷&ÖBÂ&VD–çFVvW$f÷&ÖBÂ&V–æ†&EFöæTÖ–ærÂ&VæFW%F&vWBÂ&VæFW%F&vWC4BÂ&WVEw&–ærÂ&WÆ6U7FVæ6–Ä÷Â&WfW'6U7V'G&7DWVF–öâÂ&–ætvVöÖWG'’Â4”täTEõ$TEôu$TTåõ$uD3%ôf÷&ÖBÂ4”täTEõ$TEõ$uD3ôf÷&ÖBÂ5$t$6öÆ÷%76RÂ5$t%G&ç6fW"Â66VæRÂ6†FW$ÖFW&–ÂÂ6†F÷tÖFW&–ÂÂ6†RÂ6†TvVöÖWG'’Â6†UF‚Â6†UWF–Ç2Â6†÷'EG—RÂ6¶VÆWFöâÂ6¶VÆWFöä†VÇW"Â6¶–ææVDÖW6‚Â6÷W&6RÂ7†W&RÂ7†W&TvVöÖWG'’Â7†W&–6ÂÂ7†W&–6Ä†&Ööæ–732Â7Æ–æT7W'fRÂ7÷DÆ–v‡BÂ7÷DÆ–v‡D†VÇW"Â7&—FRÂ7&—FTÖFW&–ÂÂ7&4Ç†f7F÷"Â7&4Ç†6GW&FTf7F÷"Â7&46öÆ÷$f7F÷"Â7FF–46÷•W6vRÂ7FF–4G&uW6vRÂ7FF–5&VEW6vRÂ7FW&Vô6ÖW&Â7G&VÔ6÷•W6vRÂ7G&VÔG&uW6vRÂ7G&VÕ&VEW6vRÂ7G&–æt¶W–g&ÖUG&6²Â7V'G&7DWVF–öâÂ7V'G&7F—fT&ÆVæF–ærÂDõT4‚ÂFævVçE76Tæ÷&ÖÄÖÂFWG&†VG&öävVöÖWG'’ÂFW‡GW&RÂFW‡GW&TÆöFW"ÂFW‡GW&UWF–Ç2ÂF–ÖW"ÂF–ÖW7F×VW'’ÂF÷'W4vVöÖWG'’ÂF÷'W4¶æ÷DvVöÖWG'’ÂG&–ævÆRÂG&–ævÆTfäG&tÖöFRÂG&–ævÆU7G&—G&tÖöFRÂG&–ævÆW4G&tÖöFRÂGV&TvVöÖWG'’ÂUdÖ–ærÂV–çCd'VffW$GG&–'WFRÂV–çC3$'VffW$GG&–'WFRÂV–çC„'VffW$GG&–'WFRÂV–çC„6Æ×VD'VffW$GG&–'WFRÂVæ–f÷&ÒÂVæ–f÷&×4w&÷WÂVæ–f÷&×5WF–Ç2ÂVç6–væVD'—FUG—RÂVç6–væVD–çCG—RÂVç6–væVD–çC#C…G—RÂVç6–væVD–çCS““•G—RÂVç6–væVD–çEG—RÂVç6–væVE6†÷'CCCCEG—RÂVç6–væVE6†÷'CSSSG—RÂVç6–væVE6†÷'EG—RÂe4Õ6†F÷tÖÂfV7F÷#"ÂfV7F÷#2ÂfV7F÷#BÂfV7F÷$¶W–g&ÖUG&6²Âf–FVôg&ÖUFW‡GW&RÂf–FVõFW‡GW&RÂvV$tÃ4E&VæFW%F&vWBÂvV$tÄ'&•&VæFW%F&vWBÂvV$tÄ6ö÷&F–æFU7—7FVÒÂvV$tÄ7V&U&VæFW%F&vWBÂvV$tÅ&VæFW%F&vWBÂvV$uT6ö÷&F–æFU7—7FVÒÂvV%…$6öçG&öÆÆW"Âv—&Vg&ÖTvVöÖWG'’Âw&&÷VæDVæF–ærÂ¦W&ô7W'fGW&TVæF–ærÂ¦W&ôf7F÷"Â¦W&õ6Æ÷TVæF–ærÂ¦W&õ7FVæ6–Ä÷Â'&”æVVG5V–çC3"Â6ÆöæUVæ–f÷&×2Â7&VFT6çf4VÆVÖVçBÂ7&VFTVÆVÖVçDå2ÂvWD'—FTÆVæwF‚ÂvWEVæÆ—EVæ–f÷&Ô6öÆ÷%76RÂÖW&vUVæ–f÷&×2Â&ö&T7–æ2Âv&äöæ6RÓ° 
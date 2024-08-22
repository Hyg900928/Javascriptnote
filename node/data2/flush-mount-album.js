import {
  componentTypes,
  albumBookComparisonEnum,
  anchorIdEnum,
  anchorKeyEnum,
  coverCodeEnum,
  productTypeEnum,
  embellishmentTypes
} from '@/constants/strings';
import { generateAnchorItems } from '@/lib/utils/generateAnchor';
import { newCoverMaterialsData } from '@/constants/generalComponentData';
import { getMagifiersData } from '@/lib/utils/generateMagifiers';
import generateFoilSection from '@/lib/utils/render/foilSectionGenerator';
const fmaImgPrefix = '/clientassets/portal/v2/images/pc/flush-mount-album/';
const img1Src = `${fmaImgPrefix}flush-mount-album-1.jpg`;
const img2Src = `${fmaImgPrefix}flush-mount-album-2.jpg`;
const img3Src = `${fmaImgPrefix}flush-mount-album-3.jpg`;
const img4Src = `${fmaImgPrefix}flush-mount-album-4.jpg`;
const img5Src = `${fmaImgPrefix}flush-mount-album-5.jpg`;
const img6Src = `${fmaImgPrefix}flush-mount-album-7.jpg`;
const img8Src = `${fmaImgPrefix}parent-album-flush-mount-album.jpg`;
const img101Src = `${fmaImgPrefix}flush-mount-album-6.jpg`;
const img106Src = `${fmaImgPrefix}flush-mount-album-sizes.jpg`;
const imgRound1 = `${fmaImgPrefix}Round/2.jpg`;
const imgRound2 = `${fmaImgPrefix}Round/2.jpg`;
const img102Src = `/clientassets/portal/v2/images/pc/fine-art-album/7-20211019.jpg`;
const imgFullSuedeCover = '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/suede_20230525.jpg';
const imgThumbnailSuedeCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/suede_20230525.jpg';

const img13Src = '/clientassets/portal/v2/images/pc/slim-photo-book/10-20210927.jpg';

const imgFullAcrylicCameoCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/acrylic-cameo-cover-20211019.jpg';
const imgFullAcrylicCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/acrylic-cover-20211020.jpg';
const imgFullCanvasCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/canvas-cover-20211019.jpg';
const imgFullCrystalCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/crystal-cover-20211019.jpg';
const imgFullDuoToneCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/duo-tone-cover-20211019.jpg';
const imgFullGenuineLeatherCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/genuine-leather-20211019.jpg';
const imgFullHardCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/hard-cover-20211019.jpg';
const imgFullLeatheretteCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/leatherette-cover-20211019.jpg';
const imgFullLinenCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/linen-cover-20211019.jpg';
const imgFullMetalCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/metal-cover-20211019.jpg';
const imgFullPaperCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/paper-cover-20211019.jpg';
const imgFullPhotoCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/photo-cover-20211019.jpg';
const imgFullSilkCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/silk-cover-20211019.jpg';
const imgFullStichedCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/stiched-cover-20211019.jpg';
const imgFullWoodCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/wood-cover-20211019.jpg';

const imgThumbnailAcrylicCameoCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/acrylic-cameo-cover-20211019.jpg';
const imgThumbnailAcrylicCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/acrylic-cover-20211019.jpg';
const imgThumbnailCanvasCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/canvas-cover-20211019.jpg';
const imgThumbnailCrystalCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/crystal-cover-20211019.jpg';
const imgThumbnailDuoToneCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/duo-tone-cover-20211019.jpg';
const imgThumbnailGenuineLeatherCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/genuine-leather-20211019.jpg';
const imgThumbnailHardCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/hard-cover-20211019.jpg';
const imgThumbnailLeatheretteCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/leatherette-cover-20211019.jpg';
const imgThumbnailLinenCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/linen-cover-20211019.jpg';
const imgThumbnailMetalCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/metal-cover-20211019.jpg';
const imgThumbnailPaperCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/paper-cover-20211019.jpg';
const imgThumbnailPhotoCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/photo-cover-20211019.jpg';
const imgThumbnailSilkCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/silk-cover-20211019.jpg';
const imgThumbnailStichedCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/stiched-cover-20211019.jpg';
const imgThumbnailWoodCover =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/wood-cover-20211019.jpg';
const imgFullDesignCollection =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/full/DesignCollection-20220728.jpg';
const imgThumbnailDesignCollection =
    '/clientassets/portal/v2/images/pc/fine-art-album/cover/thumbnail/DesignCollection-20220728.jpg';

const { navbarAnchorItems, overviewAnchorItems } = generateAnchorItems(
    productTypeEnum.PB_FLUSH_MOUNT_ALBUM
);

const { papersMagifiersData, printCoverTexturesMagifiersData } = getMagifiersData(
    productTypeEnum.PB_FLUSH_MOUNT_ALBUM
);

const coverEmbellishments = generateFoilSection(productTypeEnum.PB_FLUSH_MOUNT_ALBUM);

const pageEmbellishments = generateFoilSection(productTypeEnum.PB_FLUSH_MOUNT_ALBUM, embellishmentTypes.PAGE);

const liningsEmbellishments = generateFoilSection(productTypeEnum.PB_FLUSH_MOUNT_ALBUM, embellishmentTypes.LININGS);
const edgeEmbellishments = generateFoilSection(productTypeEnum.PB_FLUSH_MOUNT_ALBUM, embellishmentTypes.EDEG);

const metaData = {
  title: 'Flush Mount Album | Pro Photographer Professional Albums',
  keywords: 'Flush Mount Album, crystal cover albums, flush mount photo book, hard page photo book',
  description:
      'Flush Mount Albums are lab printed professional albums with rigid pages, silver halide prints and layflat design. See our unbeatable prices!'
};

const makeInfo = {
  product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
  title: 'Flush Mount Album',
  packageType: 'single'
};
const sections = [
  {
    componentType: componentTypes.itemBox,
    className: 'gray-bg',
    VideoModalSrc: 'https://www.youtube.com/embed/jwHsqVVVDlQ',
    showModalImg: '/clientassets/portal/v2/images/icons/Videopc.png',
    videoWidth: '100%',
    videoHeight: '400px',
    modalBtnStyle: {
      position: 'absolute',
      right: '6rem',
      bottom: '3rem'
    },
    textArray: [
      {
        text: 'Flush Mount Album',
        type: 'title',
        isH1: true,
        style: {
          textAlign: 'right',
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          fontWeight: 500,
          position: 'absolute',
          top: '4.19rem',
          right: '5rem',
          color: '#ffffff'
        }
      },
      {
        text: 'Professional Albums',
        type: 'title',
        isH2: true,
        style: {
          textAlign: 'right',
          fontWeight: 'normal',
          position: 'absolute',
          top: '5.31rem',
          right: '5rem',
          fontSize: '0.4rem',
          lineHeight: '0.5rem',
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }
      },
      {
        text: `
          Flush Mount Albums by Zno offer the ultimate range of customization <br />
          for the most discerning photographers. This includes heavy covers, thicker <br />
          pages, more papers and bigger sizes.
          `,
        isHTML: true,
        type: 'description',

        style: {
          // width: '11.92rem',
          textAlign: 'right',
          fontWeight: '200',
          position: 'absolute',
          top: '6.31rem',
          right: '5rem',
          fontSize: '0.33rem',
          lineHeight: '0.5rem',
          whiteSpace: 'nowrap',
          color: '#ffffff'
        }
      }
    ],
    imageObj: {
      src: img1Src,
      width: 1920,
      height: 600,
      name: 'flush-mount-album-1.jpg',
      alt: 'flush mount album leaning against a wall with the pages open showing photo of a wedding couple'
    }
  },
  {
    componentType: componentTypes.overviewItemBox,
    id: anchorIdEnum[anchorKeyEnum.OVERVIEW],
    title: 'Overview',
    isH2: true,
    pageName: 'flush-mount-album.html',
    overviewItems: {
      Specs: overviewAnchorItems,
      'What Is Included': {
        ALBUM: {
          label: 'Album',
          text: ''
        }
      }
    },
    imageObj: {
      src: img2Src,
      width: 1920,
      height: 1090,
      name: 'flush-mount-album-2.jpg',
      alt: 'three flush mount album in different sizes'
    }
  },
  {
    componentType: componentTypes.calculator,
    id: anchorIdEnum[anchorKeyEnum.PRICE],
    startFee: 5,
    makeInfo,
    isSubscribePage: true,
    isSubscribeStatus: true,
    isShowFreeAlbumEntrance: true,
    isShowCoverEmbellishments: true,
    changePriceWithoutSku: true,
    className: 'new-calculator',
    additionalInfo:
        'Extra: cover texture {cur_5}, cameo window {cur_10}, gilding {cur_10}, painting {cur_20}, painted text {cur_10}, laser engraving {cur_10}, debossing text starting at {cur_25}, <br/>Studio Logo Debossing {cur_10} (+Setup Fee starting at {cur_25}), foil {cur_5}, linen lining starting at {cur_10}, raised varnishing starting at {cur_10}, raised foil {cur_18}'
  },
  {
    componentType: componentTypes.itemGroup,
    id: anchorIdEnum[anchorKeyEnum.FEATURES],
    itemGroupData: [
      {
        componentType: componentTypes.itemBox,
        className: 'gray-bg',
        textArray: [
          {
            text: 'Unmatched Thickness',
            type: 'title',
            className: 'color-white',
            isH2: true,
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          },
          {
            text:
                'With 1.1 to 1.5mm pages, the Zno Flush Mount Album showcases a core thickness that’s truly in a league of its own. The album’s <br/>innovative binding offers the epitome of thickness for those seeking an unrivaled classic heirloom album experience.',
            type: 'description',
            className: 'white fs-20',
            style: {
              textAlign: 'center',
              marginTop: '0.33rem',
              fontWeight: 200
            }
          }
        ],
        imageObj: {
          src: img3Src,
          width: 1920,
          height: 866,
          name: 'flush-mount-album-3.jpg',
          alt: 'one flush mount album standing on top of another flush mount album with the pages fanned open'
        }
      },
      {
        componentType: componentTypes.itemBox,
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Pro Paper & Pro Printing',
            type: 'title',
            className: 'color-white',
            isH2: true,
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          },
          {
            text:
                'A pro level book starts with using lab-exclusive photo papers that embody rich colors and fine texture. These are then taken to the next <br/>level by employing unmatched silver halide printing to bring the photos to life in a way that no cheaper printing process can replicate.',
            type: 'description',
            className: 'white fs-20',
            style: {
              textAlign: 'center',
              marginTop: '0.33rem',
              fontWeight: 200
            }
          }
        ],
        imageObj: {
          src: img4Src,
          width: 1920,
          height: 866,
          name: 'flush-mount-album-4.jpg',
          alt: 'three flush mount album in different sizes'
        }
      },
      {
        componentType: componentTypes.itemBox,
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Maximum Customization',
            type: 'title',
            className: 'color-gray',
            isH2: true,
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'left',
              marginTop: '2.67rem',
              paddingLeft: '4.85rem',
              fontWeight: 500
            }
          },
          {
            text:
                'With 17 cover types, 13 sizes, 80 material colors, 5 <br/>papers and 5 cover textures, the Zno Flush Mount <br/>Album offers an industry wide benchmark for the <br/>absolute highest level of lab customization to <br/>cover nearly any professional wedding, boudoir, <br/>newborn, senior or other shooting package.',
            type: 'description',
            className: 'color-gray',
            style: {
              textAlign: 'left',
              marginTop: '0.5rem',
              paddingLeft: '4.85rem',
              fontWeight: 200,
              fontSize: '0.33rem'
            }
          }
        ],
        imageObj: {
          src: img5Src,
          width: 1920,
          height: 866,
          name: 'flush-mount-album-5.jpg',
          alt: 'many flush mount albums laying on a table push up against each other'
        }
      }
    ]
  },
  {
    componentType: componentTypes.itemGroup,
    id: anchorIdEnum[anchorKeyEnum.COVER],
    itemGroupData: [
      {
        componentType: componentTypes.coversBox,
        title: 'Covers',
        isH2: true,
        covers: [
          {
            name: 'Paper Cover',
            coverCode: coverCodeEnum.PAPER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullPaperCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailPaperCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Thick textured Photo Paper Cover with custom photos, colors, and text. Simple, elegant, light, and rigid.',
            learnMoreUrl: '{language_path}/paper-cover.html?product=FMA'
          },
          {
            name: 'Hard Cover',
            coverCode: coverCodeEnum.HARD,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullHardCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailHardCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines: 'Well-bound, sturdy, and rigid cover with a sheen, textured surface.',
            learnMoreUrl: '{language_path}/hard-cover.html?product=FMA'
          },
          {
            name: 'Silk Cover',
            coverCode: coverCodeEnum.SILK,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullSilkCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailSilkCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'A Silk Cover offers a stunning full-wrap printed image onto delicate, light woven fabric.',
            learnMoreUrl: '{language_path}/silk-cover.html?product=FMA'
          },
          {
            name: 'Canvas Cover',
            coverCode: coverCodeEnum.CANVAS,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullCanvasCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailCanvasCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Like a canvas print, the Canvas Cover offers a stunning full-wrap printed image with a rustic touch.',
            learnMoreUrl: '{language_path}/canvas-cover.html?product=FMA'
          },
          {
            name: 'Linen Cover',
            coverCode: coverCodeEnum.LINEN,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullLinenCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailLinenCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Our highly currated woven Linen combine an irresistible softness with understated elegance. Available in 28 colors.',
            learnMoreUrl: '{language_path}/linen-cover.html?product=FMA'
          },
          {
            name: 'Suede & Velvet Cover',
            coverCode: coverCodeEnum.SUEDE_VELVET,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullSuedeCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailSuedeCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'A selection of Velvet or faux Suede materials. Our velvets feature a crushed luxurious nap with mid sheen. And our faux suedes offer an authentic fuzzy leather like touch. Velvet is available in 11 colors and Suede is available in 7 colors.',
            learnMoreUrl: '{language_path}/suede-velvet-cover.html?product=FMA'
          },
          {
            name: 'Leatherette Cover',
            coverCode: coverCodeEnum.LEATHERETTE,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullLeatheretteCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailLeatheretteCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'An alternate option to genuine leather, the Leatherette Cover offers an authentic tactile leather like touch. Available in 31 colors.',
            learnMoreUrl: '{language_path}/leatherette-cover.html?product=FMA'
          },
          {
            name: 'Genuine Leather',
            coverCode: coverCodeEnum.GENUINE_LEATHER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullGenuineLeatherCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailGenuineLeatherCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Our 100% natural Genuine Leather comes in variety of buttery smooth or classic distressed textures. Available in 18 colors.',
            learnMoreUrl: '{language_path}/genuine-leather.html?product=FMA'
          },
          {
            name: 'Stitched Cover',
            coverCode: coverCodeEnum.STITCHED_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullStichedCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailStichedCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'This Flush Mount Album cover style includes beautiful embroidery around the cover edges.',
            learnMoreUrl: '{language_path}/stitched-cover.html?product=FMA'
          },
          {
            name: 'Crystal Cover',
            coverCode: coverCodeEnum.FM_CRYSTAL_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullCrystalCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailCrystalCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines: 'Front cover is precision cut on anti-scratch glass.',
            learnMoreUrl: '{language_path}/crystal-cover.html?product=FMA'
          },
          {
            name: 'Wood Cover',
            coverCode: coverCodeEnum.FM_WOOD_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullWoodCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailWoodCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'The Wood Cover is available in two charming finishes. The Natural Finish allows the wood grain to authentically shine through lighter areas. Whereas the White Base offers a more muted look by softening the wood grain with a white primer under layer.',
            learnMoreUrl: '{language_path}/wood-cover.html?product=FMA'
          },
          {
            name: 'Acrylic Cover',
            coverCode: coverCodeEnum.FM_ACRYLIC_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullAcrylicCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailAcrylicCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'The Acrylic Cover offers a minimalistic solution to those seeking a more modernized photo presentation.',
            learnMoreUrl: '{language_path}/acrylic-cover.html?product=FMA'
          },
          {
            name: 'Acrylic Cameo Cover',
            coverCode: coverCodeEnum.ACRYLIC_CAMEO_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullAcrylicCameoCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailAcrylicCameoCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'This Flush Mount Album cover style includes a precision cut acrylic inlay.',
            learnMoreUrl: '{language_path}/acrylic-cameo-cover.html?product=FMA'
          },
          {
            name: 'Metal Cover',
            coverCode: coverCodeEnum.FM_METAL_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullMetalCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailMetalCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Our Metal Cover is available in two chic finishes. The Natural Finish allows the metal texture to authentically shimmer through lighter areas. Whereas the White Base offers a more muted look by softening the texture with a white primer under layer.',
            learnMoreUrl: '{language_path}/metal-cover.html?product=FMA'
          },
          {
            name: 'Photo Cover',
            coverCode: coverCodeEnum.FM_PHOTO_COVER,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullPhotoCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailPhotoCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Our Photo Cover offers the best of both worlds. Frame your photo with your choice of material.',
            learnMoreUrl: '{language_path}/photo-cover.html?product=FMA'
          },
          {
            name: 'Duotone Cover',
            coverCode: coverCodeEnum.DUOTONE,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullDuoToneCover,
              size: {
                width: 1920,
                height: 600
              }
            },
            thumbnailImage: {
              src: imgThumbnailDuoToneCover,
              size: {
                width: 318,
                height: 200
              }
            },
            detailTextLines:
                'Make it unique. Make it yours. Mix and match your choice of color and material. With a total of 79 options to choose from between linen, genuine leather, and leatherette, the Duotone Cover allows the most customization available.',
            learnMoreUrl: '{language_path}/duotone-cover.html?product=FMA'
          },
          {
            name: 'Design Collection',
            coverCode: coverCodeEnum.LINEN_EUROPE,
            product: productTypeEnum.PB_FLUSH_MOUNT_ALBUM,
            fullImage: {
              src: imgFullDesignCollection,
              size: {
                width: 1920,
                height: 7204
              }
            },
            thumbnailImage: {
              src: imgThumbnailDesignCollection,
              size: {
                width: 370,
                height: 296
              }
            },
            detailTextLines:
                'A collection of pre-made Debossing or UV Painted cover designs for Wedding, Newborn and Boudoir themes. ',
            learnMoreUrl: '{language_path}/design-collection.html?product=FMA'
          }
        ],
        hideRedirectUrl: false,
        styles: {
          textAlign: 'left'
        }
      },
      newCoverMaterialsData,
      {
        componentType: componentTypes.magifiersItemBox,
        id: anchorIdEnum.PRINT_COVER_TEXTURES,
        magifiersData: printCoverTexturesMagifiersData,
        titleProps: {
          text: 'Print Cover Texture',
          isH2: true,
          className: 'single-title'
        }
      },
      coverEmbellishments,
      pageEmbellishments,
      {
        componentType: componentTypes.itemBox,
        id: 'Cover_Corners',
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Cover Corner Options',
            type: 'title',
            isH2: true,
            className: 'color-gray',
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          },
          {
            text: `We offer two styles on cover corner options. Our 1/3" Round corners are only available on Modern Leatherette and Natural Texture Leatherette covers.`,
            isHTML: true,
            type: 'description',
            className: 'color-gray fs-16',
            style: {
              width: '20.83rem',
              textAlign: 'center',
              margin: '0.33rem auto 0',
              fontWeight: 200
            }
          }
        ],
        imageObj: {
          src: imgRound1,
          width: 3840,
          height: 1476,
          name: '',
          alt: ''
        }
      },
      {
        componentType: componentTypes.itemBox,
        id: anchorIdEnum.CAMEO,
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Cameo',
            type: 'title',
            isH2: true,
            className: 'color-gray',
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          },
          {
            text: `12 Styles`,
            isHTML: true,
            type: 'description',
            className: 'color-gray fs-16',
            style: {
              width: '20.83rem',
              textAlign: 'center',
              margin: '0.33rem auto 0',
              fontWeight: 200
            }
          }
        ],
        imageObj: {
          src: img101Src,
          width: 3840,
          height: 1476,
          name: 'flush-mount-album-6.jpg',
          alt: 'graphic showing cameo window options for flush mount album'
        }
      }
    ]
  },
  {
    componentType: componentTypes.itemBox,
    id: anchorIdEnum[anchorKeyEnum.GALLERY],
    className: 'margin-top12 gray-bg',
    textArray: [
      {
        text: 'Gallery',
        type: 'title',
        isH2: true,
        className: 'color-gray',
        style: {
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          textAlign: 'center',
          marginTop: '1.67rem',
          fontWeight: 500
        }
      }
    ],
    imageObj: {
      src: img6Src,
      width: 1920,
      height: 1390,
      name: 'flush-mount-album-7.jpg',
      alt: 'four closeup photos showing different parts of a flush mount album'
    }
  },
  {
    componentType: componentTypes.itemGroup,
    id: anchorIdEnum[anchorKeyEnum.PAPER],
    itemGroupData: [
      {
        componentType: componentTypes.magifiersItemBox,
        magifiersData: papersMagifiersData,
        titleProps: {
          text: 'Papers',
          isH2: true,
          className: 'single-title'
        }
      },
      {
        componentType: componentTypes.itemBox,
        id: 'Page_Corners',
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Page Corner Options',
            type: 'title',
            className: 'color-gray',
            isH2: true,
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          },
          {
            text: `3 Styles`,
            isHTML: true,
            type: 'description',
            className: 'color-gray fs-16',
            style: {
              width: '20.83rem',
              textAlign: 'center',
              margin: '0.33rem auto 0',
              fontWeight: 200
            }
          }
        ],
        imageObj: {
          src: imgRound2,
          width: 1920,
          height: 866,
          name: '',
          alt: ''
        }
      },
      {
        componentType: componentTypes.itemBox,
        id: anchorIdEnum.PAGE_THICKNESS,
        className: 'margin-top12 gray-bg',
        textArray: [
          {
            text: 'Page Thickness',
            type: 'title',
            className: 'color-gray',
            isH2: true,
            style: {
              fontSize: '0.67rem',
              lineHeight: '0.67rem',
              textAlign: 'center',
              marginTop: '1.67rem',
              fontWeight: 500
            }
          }
        ],
        imageObj: {
          src: img102Src,
          width: 1920,
          height: 866,
          name: '',
          alt: ''
        }
      },
      liningsEmbellishments,
      edgeEmbellishments
    ]
  },
  {
    componentType: componentTypes.itemBox,
    id: anchorIdEnum.SIZES,
    className: 'margin-top12 gray-bg',
    textArray: [
      {
        text: 'Sizes',
        type: 'title',
        className: 'color-gray',
        isH2: true,
        style: {
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          textAlign: 'center',
          marginTop: '1.67rem',
          fontWeight: 500
        }
      },
      {
        text: '13 Sizes',
        type: 'description',
        className: 'color-gray fs-20',
        style: {
          textAlign: 'center',
          marginTop: '0.33rem',
          fontWeight: 200
        }
      }
    ],
    imageObj: {
      src: img106Src,
      width: 1920,
      height: 866,
      name: 'flush-mount-album-sizes.jpg',
      alt: 'graphic showing flush mount album sizes'
    }
  },
  {
    componentType: componentTypes.itemBox,
    className: 'margin-top12 gray-bg',
    id: anchorIdEnum[anchorKeyEnum.PARENT_ALBUM_OPTION_AVAILABLE],
    textArray: [
      {
        text: 'Parent Album',
        type: 'title',
        className: 'white margin-left-5',
        isH2: true,
        style: {
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          textAlign: 'left',
          marginTop: '6.15rem',
          fontWeight: 500
        }
      },
      {
        text:
            'A parent album is a miniature version of your album and <br/>is traditionally given to parents of the bride and groom. <br/>You have the option of automatically generating a <br/>parent album at checkout.',
        type: 'description',
        className: 'white margin-left-5',
        style: {
          fontSize: '0.33rem',
          textAlign: 'left',
          marginTop: '0.33rem',
          fontWeight: 200
        }
      },
      {
        text: '<a href="{language_path}/parent-album.html">Learn More</a>',
        type: 'description',
        className: 'white margin-left-5',
        style: {
          fontSize: '0.33rem',
          border: '0.02rem solid #FFFFFF',
          width: '3.33rem',
          height: '0.75rem',
          textAlign: 'center',
          fontWeight: 300,
          lineHeight: '0.75rem',
          marginTop: '0.667rem'
        }
      }
    ],
    imageObj: {
      src: img8Src,
      width: 1920,
      height: 866,
      name: 'parent-album-flush-mount-album.jpg',
      alt: 'one flush mount album with a smaller parent album'
    }
  },
  {
    componentTypes: componentTypes.albumBookCompaireItem,
    className: 'margin-top12 gray-bg',
    id: anchorIdEnum[anchorKeyEnum.COMPARISON],
    tableData: albumBookComparisonEnum,
    title: 'Album&Book <br/> Comparison',
    isH2: true,
    tips:
        '*: 70 pages book is available only for standard paper photo book sizes 8x8 (Square), 8x11 (Landscape) or 11x8 (Portrait) and up'
  },
  {
    componentType: componentTypes.itemBox,
    className: 'margin-top12 gray-bg',
    id: anchorIdEnum[anchorKeyEnum.AlbumThemeDesigns],
    textArray: [
      {
        text: 'Album Theme Designs',
        type: 'title',
        className: 'white margin-left-5',
        isH2: true,
        style: {
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          textAlign: 'left',
          marginTop: '6.15rem',
          fontWeight: 500
        }
      },
      {
        text:
            `Albums come in a range of pre-designed themes that include
           Wedding,<br/> Baby & Maternity, Boudoir, Senior, Family,
            Quinceañeras and pets.`,
        type: 'description',
        className: 'white margin-left-5',
        style: {
          fontSize: '0.33rem',
          textAlign: 'left',
          marginTop: '0.33rem',
          fontWeight: 200
        }
      },
      {
        text: `<span onclick="window.showOutModal('StyleBoxModal.themeModal')">Learn More</span>`,
        type: 'description',
        className: 'white margin-left-5',
        style: {
          cursor: 'pointer',
          fontSize: '0.33rem',
          border: '0.02rem solid #FFFFFF',
          width: '3.33rem',
          height: '0.75rem',
          textAlign: 'center',
          fontWeight: 300,
          lineHeight: '0.75rem',
          marginTop: '0.667rem'
        }
      }
    ],
    imageObj: {
      src: '/clientassets/portal/v2/images/common/pc/theme/new@2x.jpg',
      width: 1920,
      height: 866,
      alt: ''
    }
  },
  {
    componentType: 'VideoBanner',
    videoSrc: '/clientassets/portal/v2/images/pc/flush-mount-album/video/fma-short.MP4',
    videoPoster: '/clientassets/portal/v2/images/pc/flush-mount-album/section-video-poster.jpg',
    style: {
      padding: '1.67rem 5rem',
      background: '#f6f6f6',
      marginTop: '0.25rem'
    },
    videoWidth: '100%'
  },
  {
    componentType: componentTypes.itemBox,
    id: anchorIdEnum.HOW_TO_ORDER,
    className: 'margin-top12 gray-bg',
    textArray: [
      {
        text: 'Order Online <br /> With Zno Designer™',
        type: 'title',
        isHtml: true,
        isH2: true,
        className: 'color-gray',
        style: {
          fontSize: '0.67rem',
          lineHeight: '0.67rem',
          textAlign: 'center',
          marginTop: '5rem',
          fontWeight: 400
        }
      },
      {
        text: `
            Order online right from your web browser.
          `,
        isHTML: true,
        type: 'description',
        className: 'color-gray fs-20',
        style: {
          textAlign: 'center',
          margin: '1.25rem auto 0',
          fontWeight: 200
        }
      }
    ],
    imageObj: {
      src: img13Src,
      width: 1920,
      height: 496,
      name: 'order-flush-mount-album-on-zno-designer.jpg',
      alt: 'logo of zno designer software'
    }
  },
  {
    componentType: componentTypes.makeButton,
    className: 'width-30 margin-top12',
    makeInfo
  }
];

export default {
  metaData,
  sections,
  makeInfo,
  name: 'flush-mount-album',
  anchorNavItems: navbarAnchorItems
};

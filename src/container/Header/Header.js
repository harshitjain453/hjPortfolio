import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Harshit</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
        <div className="tag-cmpp app__flex">
         <a href="https://drive.google.com/file/d/1PNs1E852rCA2EOuo7QHpYhXcgzvfwn_U/view?usp=sharing" target="_blank" rel="noreferrer">
         <p className="p-text">Download CV</p>
         </a>
        

        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
       className="app__header-img"

    >
       <svg style={{zIndex:99}}  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-name="Layer 1" width="450.98585" height="600.33491" viewBox="0 0 930.98585 797.33491">
       <path d="M861.77641,179.89248h-63.256v539.294A64.43223,64.43223,0,0,1,734.088,783.61866H250.46923v.61657a64.43211,64.43211,0,0,0,64.43223,64.43223h546.875a64.43224,64.43224,0,0,0,64.43238-64.43223V244.32471A64.43233,64.43233,0,0,0,861.77641,179.89248Z" transform="translate(-134.50708 -51.33254)" fill="none" /><rect y="73.23747" width="675.73956" height="668.77504" rx="26.74409" fill="none" /><path d="M198.93969,137.82032A51.18169,51.18169,0,0,0,147.758,189.002V728.91312a51.1817,51.1817,0,0,0,51.18169,51.1817H547.96855c137.53377,0,249.02691-111.49315,249.02691-249.02691V189.002a51.18169,51.18169,0,0,0-51.18169-51.18169Z" transform="translate(-134.50708 -51.33254)" fill="none" />
       <path d="M825.03434,500.15646a20.02843,20.02843,0,0,1-25.25562-17.10511L704.2139,454.19109l1.48383-28.39578L818.9509,460.903a20.00042,20.00042,0,0,1,6.08344,39.25348Z" transform="translate(-134.50708 -51.33254)" fill="#ffb6b6" />
       <path d="M503.28666,353.67931c-9.6763-8.07513,4.49286-48.09884.67221-59.69958q-.34251-1.05332-.65155-2.1131a6.77585,6.77585,0,0,1,.27417-4.53153l35.91775-16.8948a87.25283,87.25283,0,0,1,25.48493,16.02185l55.48748,63.37366,55.12384,49.78579,24.18763,10.78278,80.15118,35.74933-.83057,2.39587-.00714.007-8.81,25.58661-.00013.01416,17.62415,12.2858-57.69916-8.69153-38.15979-15.74082L655.30723,446.8572C601.05539,414.20736,511.7949,397.28359,503.28666,353.67931Z" transform="translate(-134.50708 -51.33254)" fill="#7c7c7c" />
       {/* <path d="M759.0174,647.36922a5.67467,5.67467,0,0,1-7.47635-7.59979c-.07873-.58111-.13537-.99841-.21411-1.57953q-.1404-.14382-.28146-.287c-9.48352-9.61987-25.8866-2.95349-26.05365,10.5539-.14841,11.98859-1.45557,24.46185,1.56195,35.8656A45.08207,45.08207,0,0,0,733.05616,698.42a180.74439,180.74439,0,0,1-43.1875-63.56524,174.45086,174.45086,0,0,1-6.23538-18.46765q-2.124-7.70947-3.56116-15.57227a182.83927,182.83927,0,0,1,4.82931-85.41864,48.65851,48.65851,0,0,0,10.97406-27.01745,37.11682,37.11682,0,0,0-.63981-10.67057c-.8664.48642-8.98171-12.4256-8.63442-13.55652-2.04945-1.42312-4.71571-1.4703-6.86387-2.79959-10.68355-6.611-19.564-1.15014-19.43154,13.59894-8.4846,9.63043-5.0198,18.57407,4.93769,24.52069,6.335,3.78327,9.8594,10.92536,15.83958,15.29706-.18259.63-.38612,1.251-.5686,1.881a184.01939,184.01939,0,0,0-6.50913,35.38968c-3.01733-11.63049-10.44961-24.12036-17.4573-31.28308-7.98076-8.16266-18.89037-13.35883-28.9795-19.13709-12.11863-6.94058-26.83781,4.10691-23.09117,17.56031q.05445.19542.10977.39026,1.82963.2438,3.63762.61627a7.69726,7.69726,0,0,1,2.33019,14.15674l-.13669.08081a76.58735,76.58735,0,0,0,6.13374,9.87823c4.72452,36.672,28.12488,41.34033,54.82982,31.269.70487.06549,1.39478.13691,2.09368.18756a187.83042,187.83042,0,0,0,8.3151,47.92676,178.15027,178.15027,0,0,0,10.82044,26.65222l-.17114-.29675a47.07472,47.07472,0,0,0-25.0286-19.253c-15.25844-4.82935-32.86819-1.80225-48.29-4.41882-7.42364-1.25959-13.17306,6.517-9.36279,13.01147q.09121.15555.1833.31073a51.71241,51.71241,0,0,1,6.42136.43653q1.82968.244,3.63763.61627A7.69736,7.69736,0,0,1,622.331,654.9006l-.13684.08081c-.09889.057-.18285.10815-.2816.16522a76.654,76.654,0,0,0,21.30078,15.24853c16.99757,26.85413,41.17563,20.35859,62.47345,2.01929l.015-.006A187.77208,187.77208,0,0,0,731.109,701.89724l41.82688-16.7627c-.03623-.52484-.09363-1.05871-.14493-1.57757a51.20076,51.20076,0,0,1-11.85,3.94891c1.57724-5.0517,3.14234-10.1333,4.71964-15.18487a2.80363,2.80363,0,0,0,.10476-.303c.7931-2.57965,1.60715-5.15052,2.40024-7.73023l-.00012-.00268a74.99533,74.99533,0,0,0-9.14642-16.91553Z" transform="translate(-134.50708 -51.33254)" fill="#f2f2f2" /> */}
       <path d="M529.11783,684.17861l-.48-.6C527.25773,674.69857,529.11783,684.17861,529.11783,684.17861Z" transform="translate(-134.50708 -51.33254)" fill="#2f2e41" />
       <path d="M553.61783,779.96859H419.61976c-10.41068-25.88-17.637-44.39-17.637-44.39s-1.75479,18.13-4.25885,44.39H276.5813c-1.13375-71.36-2.721-144.63-3.24353-167.9l232.525,5.18,23.12823,29.33c.07892.49.15778,1.03.25635,1.64C530.18393,654.17861,542.77335,718.14858,553.61783,779.96859Z" transform="translate(-134.50708 -51.33254)" fill="none" />
       <path d="M551.58652,278.07473l-.02221-.0415a6.77589,6.77589,0,0,0-3.36731-3.04487c-14.71222-11.415-30.8208-16.61859-48.89917-13.05981-2.96-8.96-5.72-8.96-5.72-8.96l-39.21-12.95-5.64-34.45-96.61-3.27-8.78,42.99006s-54,9.68-54,16.68,9,7,0,7-11.41-8-19.2,0a25.42459,25.42459,0,0,1-2.11,1.9c-.09.08-.19.15-.28.23a66.71272,66.71272,0,0,0-25.15,58.95l16.61,165.23,17.73,176.31,242.64,10.1,16.25-150.03,16.52929-249.62335A6.83438,6.83438,0,0,0,551.58652,278.07473Z" transform="translate(-134.50708 -51.33254)" fill="#7c7c7c" />
       <path d="M153.27549,721.16421c1.38533,3.48516,2.78334,6.03881,4.19381,7.30163l470.58,1c1.41046-1.26282,2.80847-3.81647,4.19379-7.30157,16.459-41.40662-14.58991-86.30713-59.14771-86.39173L212.44755,635.088C167.95014,635.00344,136.8388,679.81368,153.27549,721.16421Z" transform="translate(-134.50708 -51.33254)" fill="#fff" />
       <path d="M628.43088,730.46633l-.3833-.001-470.96142-1.001-.2837-.25391c-1.46679-1.31348-2.92431-3.82422-4.45605-7.67676h0a62.60946,62.60946,0,0,1,6.5957-59.15429,64.504,64.504,0,0,1,53.3833-28.291h.124l360.648.68457a64.74962,64.74962,0,0,1,53.52343,28.49414,62.84785,62.84785,0,0,1,6.55176,59.2666c-1.53222,3.85254-2.98974,6.36328-4.45605,7.67676Zm-439.52063-3.094,399.01319-1.20942c28.16479-.08538,48.8833-27.27349,40.53729-54.17346a28.73906,28.73906,0,0,0-3.49567-7.60119A62.75342,62.75342,0,0,0,573.09348,636.773l-360.648-.68457h-.12012a38.66351,38.66351,0,0,0-13.337,2.85114c-23.29569,8.81494-38.87332,30.97351-40.1686,55.84741q-.02474.47524-.04931.95068a30.086,30.086,0,0,0,28.49739,31.59485q.82052.0423,1.64242.03973Z" transform="translate(-134.50708 -51.33254)" fill="#e6e6e6" />
       <path d="M719.56839,367.79235c-5.1538-21.64584-4.29431-42.9657,4.53083-63.85373a4.89248,4.89248,0,0,1,5.22058-4.52878l48.22375,3.42179a4.89243,4.89243,0,0,1,4.52875,5.22058l-4.53082,63.85373a4.89245,4.89245,0,0,1-5.22052,4.52877l-48.22376-3.42178A4.89246,4.89246,0,0,1,719.56839,367.79235Z" transform="translate(-134.50708 -51.33254)" fill="#f2f2f2" />
       <path d="M724.636,348.7683c-4.12451-10.66662-1.48736-25.33682,2.91284-41.051a4.58184,4.58184,0,0,1,4.88922-4.24137l41.44422,2.94074a4.582,4.582,0,0,1,4.24157,4.88922L774.092,368.127a4.582,4.582,0,0,1-4.88947,4.24133l-25.67383-1.82172A20.40973,20.40973,0,0,1,724.636,348.7683Z" transform="translate(-134.50708 -51.33254)" fill="#fff" />
       <path d="M753.329,351.55221q-1.89889-.3263-3.79773-.65253a12.7528,12.7528,0,0,0,.99445-4.33807c.59912-7.99164.65955-16.05957.97919-24.06757a1.51852,1.51852,0,0,0-2.56067-1.06067q-4.76889,3.95-9.53784,7.8999c-1.48816,1.23261.64441,3.34461,2.12133,2.12134q3.4229-2.8351,6.84583-5.67023-.31421,7.87062-.62836,15.7414c-.10046,2.51831.20563,5.57648-.82538,7.94379a3.82729,3.82729,0,0,1-.54693.88745q-2.10242-.36127-4.20471-.72248c-1.008-.17315-2.28882.66834-1.84522,1.84522.96472,2.55908,3.80853,3.36755,6.247,2.38128a5.07575,5.07575,0,0,0,.62238-.33337l5.33917.91736C754.41971,354.76949,755.23093,351.879,753.329,351.55221Z" transform="translate(-134.50708 -51.33254)" fill="#7c7c7c" />
       {/* <path d="M999.56839,582.79232c-5.1538-21.64587-4.29431-42.9657,4.53083-63.8537a4.89247,4.89247,0,0,1,5.22058-4.52881l48.22375,3.42175a4.89247,4.89247,0,0,1,4.52881,5.22059l-4.53088,63.85369a4.89247,4.89247,0,0,1-5.22058,4.52881l-48.22376-3.42181A4.89246,4.89246,0,0,1,999.56839,582.79232Z" transform="translate(-134.50708 -51.33254)" fill="#f2f2f2" /> */}
       {/* <path d="M1004.636,563.76833c-4.12451-10.66662-1.48736-25.33679,2.91284-41.051a4.58187,4.58187,0,0,1,4.88922-4.24134l41.44428,2.94074a4.582,4.582,0,0,1,4.24158,4.88922L1054.092,583.127a4.58207,4.58207,0,0,1-4.88941,4.24133l-25.67383-1.82172A20.40973,20.40973,0,0,1,1004.636,563.76833Z" transform="translate(-134.50708 -51.33254)" fill="#fff" /> */}
       {/* <path d="M1031.691,552.93453a8.44685,8.44685,0,0,0,1.55506-.943,8.60713,8.60713,0,0,0,2.81482-8.95166c-1.94458-7.144-10.49011-7.18763-16.38983-6.32795-1.90326.27735-1.09406,3.16846.79754,2.89283,3.976-.57935,10.218-1.04755,12.35449,3.2951a5.70551,5.70551,0,0,1-.91333,6.28467,5.55392,5.55392,0,0,1-3.37634,1.60522,8.92281,8.92281,0,0,0-3.928-.73272c-1.39007.06561-2.16473,2.08728-.75708,2.79516a9.01165,9.01165,0,0,0,4.00971.94544,6.50011,6.50011,0,0,1,3.66668,6.19794,6.72266,6.72266,0,0,1-7.65478,5.63855l-.03693-.00568c-1.88513-.37921-2.69177,2.51184-.79754,2.89282a9.74994,9.74994,0,0,0,11.38659-7.77606q.03882-.20636.06885-.41425A9.11118,9.11118,0,0,0,1031.691,552.93453Z" transform="translate(-134.50708 -51.33254)" fill="#6c63ff" /><path d="M945.56839,240.79235c-5.1538-21.64584-4.29431-42.9657,4.53083-63.85373a4.89246,4.89246,0,0,1,5.22058-4.52878l48.22375,3.42179a4.89242,4.89242,0,0,1,4.52875,5.22056l-4.53082,63.85372a4.89245,4.89245,0,0,1-5.22052,4.52877L950.0972,246.0129A4.89249,4.89249,0,0,1,945.56839,240.79235Z" transform="translate(-134.50708 -51.33254)" fill="#f2f2f2" /> */}
       {/* <path d="M950.636,221.7683c-4.12451-10.66662-1.48736-25.33682,2.91284-41.051A4.58185,4.58185,0,0,1,958.438,176.476l41.44422,2.94073a4.582,4.582,0,0,1,4.24157,4.88924l-4.03179,56.82114a4.582,4.582,0,0,1-4.88947,4.24133l-25.67383-1.82172A20.40974,20.40974,0,0,1,950.636,221.7683Z" transform="translate(-134.50708 -51.33254)" fill="#fff" /> */}
       {/* <path d="M976.122,193.17409c-4.24841-1.4743-8.97253,1.8855-9.45471,6.24152-.54644,4.93732,4.76441,8.835,9.36219,7.49316,1.84954-.53979,1.06256-3.43573-.79749-2.89288-3.37018.98358-6.96515-2.65539-5.02753-5.90887a4.4314,4.4314,0,0,1,4.52661-2.21479,5.01781,5.01781,0,0,1,3.344,3.03461c1.6535,3.72638-.31152,7.50952-2.9162,10.218-1.48547,1.54468-3.22839,2.74512-4.82947,4.15314a6.983,6.983,0,0,0-2.746,4.954,5.9975,5.9975,0,0,0,3.41217,5.18237c2.55768,1.31537,5.467.89715,8.18787.45935,1.90106-.30591,1.09424-3.19727-.79755-2.89282-2.3797.38287-5.94263.96307-7.45056-1.51831-1.29138-2.12494,1.36914-3.99079,2.81879-5.12122,3.64331-2.84094,7.32763-6.50964,7.87469-11.34C982.077,199.06429,980.066,194.54281,976.122,193.17409Z" transform="translate(-134.50708 -51.33254)" fill="#6c63ff" /> */}
       <path d="M244.30308,485.46261l23.76,10.7c-11.17,9.06-28.18,21.25-44.84,26.88995l-26.47-18.05c-9.86-38.02-3.82-77.2,8.03-110.33a249.437,249.437,0,0,1,25.94-52.36,66.72351,66.72351,0,0,1,25.15-58.94995c.1-.08.19-.15.28-.23a87.29725,87.29725,0,0,1,29.92,60.63l.53,8.76,1.06006,17.26,2.68994,44.08-31.9,49.6Z" transform="translate(-134.50708 -51.33254)" fill="#7c7c7c" />
       <path d="M312.65931,673.64583a2.94832,2.94832,0,0,0,2.32,1.11h162.34a2.98714,2.98714,0,0,0,2.92-3.6l-2.52-11.97a2.99256,2.99256,0,0,0-1.86-2.17,2.89376,2.89376,0,0,0-1.06-.2h-157.31a2.89367,2.89367,0,0,0-1.06.2,2.99235,2.99235,0,0,0-1.86,2.17l-2.52,11.97A2.98485,2.98485,0,0,0,312.65931,673.64583Z" transform="translate(-134.50708 -51.33254)" fill="#2f2e41" />
       <path d="M250.50928,405.68587v187.26a9.00715,9.00715,0,0,0,9,9h277.5a9.00709,9.00709,0,0,0,9-9v-187.26a9.01149,9.01149,0,0,0-9-8.99h-277.5A9.01152,9.01152,0,0,0,250.50928,405.68587Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       <path d="M363.53931,565.20583v102.56h71.85v-102.56a3.448,3.448,0,0,0-2.43-3.3,3.1758,3.1758,0,0,0-1.03-.16h-64.92a3.46327,3.46327,0,0,0-3.47,3.45648v.00348Zm28.04,35.24a7.67034,7.67034,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z" transform="translate(-134.50708 -51.33254)" fill="#2f2e41" /><circle cx="270.96555" cy="84.60005" r="62.52662" fill="#ffb6b6" />
       <path d="M480.3378,124.99416c-6.74105,2.09284-13.23983,3.32651-17.62371-2.203s-3.23829-11.852-9.75913-14.51759c-5.26511-2.15886-11.34534-1.23365-16.65442.77111-.94726.35242-1.87259.74894-2.77575,1.14545-.50666-.44061-1.0134-.859-1.56415-1.25571a19.86737,19.86737,0,0,0-14.29721-3.48057,19.4935,19.4935,0,0,1,8.65765,8.26111c-1.80646.90315-3.74731,1.57821-5.48535,2.57742-23.87866,13.72867-50.43421,19.25774-48.267-3.65686,7.22571,19.03352,1.60819,25.81868-8.98807,43.2001l-.41858,1.01328c1.05738-4.56-6.377-4.77612-12.79916-3.21625-4.74341,1.15213-1.67371,12.20979,4.40588,19.82668-13.59228-20.46563-33.95031-51.71247-16.346-67.38875,2.59643-2.31207,4.2257-5.57411,4.69226-13.92275.27661-4.95,8.70166-6.19033,13.15167-3.98738a42.35382,42.35382,0,0,1,24.453-34.80681c13.61429-6.05815,27.46,3.2611,42.25287,5.06679,8.20764,1.00188,14.432,4.30752,14.75977,14.78194.21826,6.97528,10.72851,9.47272,17.60174,10.70638,4.36182.77112,9.27442.30845,12.75513,3.06215,4.03146,3.19433,4.07544,8.81187,4.0535,14.20915a19.84476,19.84476,0,0,0-11.169,3.062,19.41814,19.41814,0,0,1,11.27917,3.96544,1.20946,1.20946,0,0,1,.17615.13217C473.61875,117.416,473.134,119.33265,480.3378,124.99416Z" transform="translate(-134.50708 -51.33254)" fill="#2f2e41" />
       <path d="M525.43271,429.873c24.43219-7.59244,50.58765.61838,75.15393-6.38971a50.94433,50.94433,0,0,0,15.78882-7.41535,98.11409,98.11409,0,0,0,11.49176-10.227c7.39-7.30911,15.4151-14.98388,26.51776-14.89923,14.62049.11148,25.84644,10.9719,35.59162,20.56159,1.37732,1.35537,3.50018-.76444,2.12134-2.12131-8.95478-8.81192-18.62964-18.10831-31.37586-20.73871a28.95455,28.95455,0,0,0-17.11633,1.42191,44.68458,44.68458,0,0,0-12.719,8.69693c-3.925,3.59982-7.54553,7.5191-11.5241,11.06192a47.9721,47.9721,0,0,1-14.136,8.92233c-11.2619,4.48438-23.61536,5.02536-35.59332,4.89484-15.03632-.16382-30.431-1.18784-44.998,3.33892-1.83777.57111-1.05347,3.46805.79755,2.89286Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       <path d="M695.33451,391.28527,702.845,404.525l3.63415,6.40631c.64581,1.13845,1.30945,2.26876,1.93817,3.41668.38623.70511,1.23,1.977.42432,2.64514a3.91277,3.91277,0,0,1-2.283.35627c-1.32385.0028-2.64868-.02683-3.97247-.04026l-7.44837-.07547-15.39331-.15594a1.5009,1.5009,0,0,0,0,3c8.93622.09051,17.87757.27927,26.81421.27164a6.41218,6.41218,0,0,0,4.38532-1.19971,4.17168,4.17168,0,0,0,.79535-4.80908,45.6791,45.6791,0,0,0-3.03327-5.56412l-3.27069-5.76569-7.5105-13.23971a1.50112,1.50112,0,0,0-2.59039,1.51416Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       <path d="M794.60386,423.72689h-69.0307a2.87631,2.87631,0,1,1-.0174-5.75259q.0087,0,.0174,0h69.0307a2.87631,2.87631,0,1,1,.01739,5.75259Q794.61255,423.72694,794.60386,423.72689Z" transform="translate(-134.50708 -51.33254)" fill="#e6e6e6" />
       {/* <path d="M794.60386,470.0552h-69.0307a2.87631,2.87631,0,1,1-.0174-5.7526q.0087,0,.0174,0h69.0307a2.87631,2.87631,0,1,1,.01739,5.7526Q794.61255,470.05525,794.60386,470.0552Z" transform="translate(-134.50708 -51.33254)" fill="#e6e6e6" /><path d="M862.36912,446.891h-136.796a2.87631,2.87631,0,1,1-.0174-5.75259q.0087,0,.0174,0h136.796a2.87631,2.87631,0,1,1,.01739,5.75259Q862.37781,446.89109,862.36912,446.891Z" transform="translate(-134.50708 -51.33254)" fill="#e6e6e6" /> */}
       <path d="M770.78159,396.5624c15.18738-20.58936,41.12409-29.46692,56.76563-49.66489a50.94453,50.94453,0,0,0,8.32843-15.32681,98.12491,98.12491,0,0,0,3.20092-15.04681c1.62458-10.26627,3.54419-21.20334,12.53962-27.7117,11.84558-8.5705,27.32324-6.47,40.85516-4.51615a1.50086,1.50086,0,0,0,.45257-2.96567c-12.43444-1.79537-25.736-3.55456-37.56353,1.87632A28.95431,28.95431,0,0,0,842.41221,294.491a44.68408,44.68408,0,0,0-5.096,14.541c-1.03,5.22529-1.62549,10.52759-2.73242,15.73868a47.97265,47.97265,0,0,1-6.10413,15.56195c-6.4173,10.28391-16.04987,18.03723-25.77765,25.02713-12.21161,8.77463-25.2215,17.06852-34.27655,29.3443-1.14239,1.54871,1.20551,3.41818,2.35608,1.85831Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       <path d="M884.81217,264.83291l13.89355,6.21829,6.72272,3.00885c1.1947.5347,2.39887,1.05228,3.58545,1.60471.72882.33932,2.162.86425,1.90869,1.87982-.17254.69177-1.09918,1.24859-1.62829,1.63931-1.065.78644-2.14991,1.5473-3.22443,2.32062l-6.04578,4.35119-12.49456,8.99247a1.5009,1.5009,0,0,0,1.777,2.41705c7.25342-5.22034,14.56916-10.36465,21.76477-15.66428a6.41232,6.41232,0,0,0,2.82251-3.56417A4.17157,4.17157,0,0,0,911.686,273.691a45.68288,45.68288,0,0,0-5.73969-2.68622l-6.05041-2.708-13.89356-6.21817a1.50112,1.50112,0,0,0-1.19018,2.75437Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       {/* <path d="M1009.60386,280.72689h-69.0307a2.87631,2.87631,0,1,1-.0174-5.75259q.0087,0,.0174,0h69.0307a2.87631,2.87631,0,1,1,.01739,5.75259Q1009.61255,280.72694,1009.60386,280.72689Z" transform="translate(-134.50708 -51.33254)" fill="#6c63ff" /> */}
       <path d="M823.78159,487.37478c15.18738,20.58935,41.12409,29.46692,56.76563,49.66485a50.94407,50.94407,0,0,1,8.32843,15.32679,98.12491,98.12491,0,0,1,3.20092,15.04681c1.62458,10.2663,3.54419,21.20337,12.53962,27.71167,11.84558,8.5705,27.32324,6.47,40.85516,4.51611a1.50086,1.50086,0,0,1,.45257,2.9657c-12.43444,1.79541-25.736,3.55457-37.56353-1.87634a28.95436,28.95436,0,0,1-12.94818-11.2843,44.68421,44.68421,0,0,1-5.096-14.541c-1.03-5.22528-1.62549-10.52759-2.73242-15.73865a47.97274,47.97274,0,0,0-6.10413-15.56195c-6.4173-10.28387-16.04993-18.03717-25.77765-25.027-12.21161-8.77465-25.2215-17.06854-34.27655-29.34429-1.14239-1.54871,1.20551-3.41822,2.35608-1.85834Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       <path d="M937.81217,619.10427l13.89355-6.21826,6.72272-3.00885c1.1947-.53473,2.39887-1.05225,3.58545-1.60474.72882-.33929,2.162-.86426,1.90869-1.87982-.17254-.69177-1.09918-1.2486-1.62829-1.63934-1.065-.78644-2.14991-1.54731-3.22443-2.32062l-6.04578-4.3512L940.52952,589.089a1.5009,1.5009,0,0,1,1.777-2.41705c7.25342,5.22033,14.56916,10.36462,21.76477,15.6643a6.41216,6.41216,0,0,1,2.82251,3.56421,4.17159,4.17159,0,0,1-2.20782,4.34577,45.68288,45.68288,0,0,1-5.73969,2.68622l-6.05041,2.708-13.89356,6.21814a1.50112,1.50112,0,0,1-1.19018-2.75433Z" transform="translate(-134.50708 -51.33254)" fill="#3f3d56" />
       {/* <path d="M1062.60386,611.72689h-69.0307a2.87631,2.87631,0,0,1-.02558-5.75256c.00855-.00006.017-.00006.02558,0h69.0307a2.87631,2.87631,0,0,1,.02551,5.75256C1062.621,611.727,1062.6124,611.727,1062.60386,611.72689Z" transform="translate(-134.50708 -51.33254)" fill="#6c63ff" /> */}
       <path d="M275.67424,499.92292a20.02846,20.02846,0,0,1-29.64458,7.18541l-71.89528,34.21351-4.81827-20.15066L242.534,478.02394a20.00043,20.00043,0,0,1,33.14028,21.899Z" transform="translate(-134.50708 -51.33254)" fill="#ffb6b6" />
       <path d="M247.96953,396.0002l-50.59,103.37,21.38-9.69,14.88-6.75,7.46,28.34s-4.94,4.8-12.73,11.11c-11.17,9.06-28.18,21.25-44.84,26.89-13.04,4.42-25.85,4.83-35.47-3.41-18.26-15.64-.41-77.75,16.84-125.04,11.55-31.67,22.82-56.68,22.82-56.68,0-33.4,64.81863-81.42658,76.8486-87.99658h0c6.87-3.74,8.76964,1.707,8.76964,1.707l-37.69826,55.18959,11.27,45.7,3.19,12.91Z" transform="translate(-134.50708 -51.33254)" fill="#7c7c7c" />
       
       </svg>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.node, images.redux ].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');

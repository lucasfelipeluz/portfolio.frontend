/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSettings } from 'src/core/context/settingsContext';
import { colors as defaultColors } from 'src/core/theme/theme';

interface ColorProps {
  backgroundColorLeftScreen: string;
  itensColorLeftScreen: string;
  blueItems: string;
  redItems: string;
  yellowItems: string;
  greenItems: string;
}

/**
 * @deprecated
 */
export default function WelcomeSvg() {
  const { layoutMode } = useSettings();

  const [colors, setColors] = React.useState<ColorProps>({
    backgroundColorLeftScreen: defaultColors.backgroundDarkMode1,
    itensColorLeftScreen: defaultColors.backgroundDarkMode2,
    blueItems: defaultColors.primary.dark.main,
    redItems: defaultColors.error.dark.main,
    yellowItems: defaultColors.warning.dark.main,
    greenItems: defaultColors.success.dark.main,
  });

  useEffect(() => {
    if (layoutMode === 'light') {
      setColors({
        backgroundColorLeftScreen: defaultColors.backgroundDarkMode1,
        itensColorLeftScreen: defaultColors.backgroundDarkMode2,
        blueItems: defaultColors.primary.dark.main,
        redItems: defaultColors.error.dark.main,
        yellowItems: defaultColors.warning.dark.main,
        greenItems: defaultColors.success.dark.main,
      });
    } else {
      setColors({
        backgroundColorLeftScreen: defaultColors.backgroundLightMode1,
        itensColorLeftScreen: defaultColors.backgroundLightMode2,
        blueItems: defaultColors.primary.light.main,
        redItems: defaultColors.error.light.main,
        yellowItems: defaultColors.warning.light.main,
        greenItems: defaultColors.success.light.main,
      });
    }
  }, [layoutMode]);

  return (
    <svg
      width='291'
      height='350'
      viewBox='0 0 291 350'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='svg'
      style={{ transition: '0.3s linear' }}
    >
      <g clipPath='url(#clip0_1333_412)'>
        <path
          d='M267.456 27.8667H161.132C157.89 27.8667 155.262 30.4933 155.262 33.7334V110.587C155.262 113.827 157.89 116.453 161.132 116.453H267.456C270.698 116.453 273.326 113.827 273.326 110.587V33.7334C273.326 30.4933 270.698 27.8667 267.456 27.8667Z'
          fill={colors.backgroundColorLeftScreen}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M173.014 109.561C167.112 109.561 162.328 104.732 162.328 98.7742C162.328 92.8168 167.112 87.9873 173.014 87.9873C178.916 87.9873 183.7 92.8168 183.7 98.7742C183.7 104.732 178.916 109.561 173.014 109.561ZM173.038 98.729C173.826 98.729 174.465 98.092 174.465 97.3063C174.465 96.5205 173.826 95.8835 173.038 95.8835C172.249 95.8835 171.61 96.5205 171.61 97.3063C171.61 98.092 172.249 98.729 173.038 98.729ZM173.038 99.4404C171.608 99.4404 170.45 100.595 170.45 102.019H175.625C175.625 100.595 174.467 99.4404 173.038 99.4404Z'
          fill={colors.blueItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M162.327 47.2608C162.327 46.6114 162.852 46.085 163.503 46.085H238.425C239.074 46.085 239.6 46.6123 239.6 47.2608V79.355C239.6 80.0043 239.076 80.5307 238.425 80.5307H163.503C162.853 80.5307 162.327 80.0034 162.327 79.355V47.2608ZM191.364 96.7649H250.339C251.522 96.7649 252.481 97.7231 252.481 98.9052C252.481 100.087 251.522 101.045 250.339 101.045H191.364C190.181 101.045 189.222 100.087 189.222 98.9052C189.222 97.7231 190.181 96.7649 191.364 96.7649ZM191.364 103.721H261.061C262.244 103.721 263.202 104.679 263.202 105.861C263.202 107.043 262.244 108.001 261.061 108.001H191.364C190.181 108.001 189.222 107.043 189.222 105.861C189.222 104.679 190.181 103.721 191.364 103.721ZM191.364 89.809H235.329C236.511 89.809 237.47 90.7673 237.47 91.9493C237.47 93.1313 236.511 94.0896 235.329 94.0896H191.364C190.181 94.0896 189.222 93.1313 189.222 91.9493C189.222 90.7673 190.181 89.809 191.364 89.809ZM155.262 32.8767C155.262 30.1098 157.506 27.8667 160.274 27.8667H268.542C271.31 27.8667 273.554 30.1092 273.554 32.8767V37.8868H155.262V32.8767Z'
          fill={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M248.737 72.9956H262.661C264.744 72.9956 266.431 74.6824 266.431 76.7631C266.431 78.8438 264.744 80.5306 262.661 80.5306H248.737C246.655 80.5306 244.967 78.8438 244.967 76.7631C244.967 74.6824 246.655 72.9956 248.737 72.9956Z'
          fill={colors.blueItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M161.986 35.154C163.181 35.154 164.151 34.1854 164.151 32.9906C164.151 31.7957 163.181 30.8271 161.986 30.8271C160.79 30.8271 159.82 31.7957 159.82 32.9906C159.82 34.1854 160.79 35.154 161.986 35.154Z'
          fill={colors.redItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M169.052 35.154C170.248 35.154 171.217 34.1854 171.217 32.9906C171.217 31.7957 170.248 30.8271 169.052 30.8271C167.856 30.8271 166.887 31.7957 166.887 32.9906C166.887 34.1854 167.856 35.154 169.052 35.154Z'
          fill={colors.yellowItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M176.345 35.154C177.541 35.154 178.51 34.1854 178.51 32.9906C178.51 31.7957 177.541 30.8271 176.345 30.8271C175.149 30.8271 174.18 31.7957 174.18 32.9906C174.18 34.1854 175.149 35.154 176.345 35.154Z'
          fill={colors.greenItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M258.577 240.416V219.325C258.577 206.536 258.577 193.776 258.577 181.016V161.451C258.577 160.747 246.396 160.16 231.748 160.16H228.696C214.078 160.16 201.867 160.747 201.867 161.451V240.475C201.867 241.179 214.049 241.765 228.696 241.765H231.748C246.366 241.795 258.577 241.179 258.577 240.416Z'
          fill='#D8DEED'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M171.956 312.958L172.073 313.016C172.69 313.339 173.482 313.163 173.776 312.606L208.148 249.51C208.471 248.923 208.207 248.19 207.59 247.867L207.473 247.808C206.857 247.486 206.064 247.662 205.771 248.219L197.258 263.824C191.711 274.032 186.163 284.211 180.586 294.419L171.398 311.256C171.075 311.843 171.34 312.606 171.956 312.958Z'
          fill='#D8DEED'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M257.315 246.781H235.799C222.766 246.781 209.733 246.781 196.73 246.781H176.77C176.066 246.781 175.449 247.368 175.449 248.072V248.219C175.449 248.923 176.036 249.509 176.77 249.509H257.373C258.078 249.509 258.694 248.923 258.694 248.219V248.072C258.694 247.368 258.078 246.781 257.315 246.781Z'
          fill='#D8DEED'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M267.793 311.256L258.605 294.419C253.058 284.211 247.51 274.032 241.933 263.824L233.42 248.219C233.127 247.661 232.334 247.456 231.718 247.808L231.601 247.867C230.984 248.189 230.72 248.952 231.043 249.509L265.415 312.605C265.709 313.163 266.501 313.368 267.118 313.016L267.235 312.957C267.851 312.605 268.116 311.843 267.793 311.256Z'
          fill='#D8DEED'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M134.655 279.198C136.765 280.246 137.486 281.283 137.598 282.19C137.763 283.717 137.406 284.943 136.555 286.96C134.908 290.993 133.508 295.081 132.383 299.278C132.053 299.207 131.725 299.133 131.397 299.054C132.084 301.674 132.06 303.678 132.06 303.678C101.22 303.678 86.0569 303.678 86.5713 303.678C87.3428 303.678 92.9197 288.587 112.599 287.053C113.165 287.009 113.714 286.98 114.247 286.967C114.367 286.466 114.574 286.015 114.949 285.331C114.125 283.312 113.49 278.578 113.274 276.607C113.274 276.526 113.302 276.445 113.33 276.364C113.44 276.147 113.745 276.039 113.994 276.147L120.223 279.198C121.287 278.81 122.412 278.456 123.599 278.102C124.724 277.759 125.848 277.466 126.905 277.198L129.135 271.407C129.217 271.185 129.492 271.047 129.711 271.157C129.793 271.185 129.848 271.241 129.903 271.324C131.057 272.951 133.893 277.1 134.655 279.198Z'
          fill='#FFCB3D'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M85.3893 301.819C85.1571 300.351 85.7766 299.458 87.2478 299.139C93.3155 298.804 98.7144 299.254 103.445 300.489C108.175 301.725 110.93 302.804 111.71 303.726H87.2478C86.2092 303.726 85.3893 302.885 85.3893 301.819ZM133.579 291.887C134.287 291.068 136.463 287.545 136.463 287.545C136.463 287.545 134.069 294.81 132.627 299.316C132.709 298.933 131.566 301.992 131.43 301.2V301.173C131.24 300.272 130.505 299.616 129.58 299.562C128.709 299.507 127.784 299.48 126.805 299.48C125.553 299.48 124.274 299.562 123.023 299.725L121.2 294.181C122.968 295.083 124.982 295.41 126.941 295.246C127.621 295.192 128.274 295.055 128.927 294.864C130.723 294.345 132.328 293.28 133.579 291.887ZM127.034 285.184C127.42 285.616 128.049 285.766 128.595 285.519C129.091 285.231 129.354 284.672 129.249 284.105C129.205 283.866 129.363 283.637 129.602 283.592C129.841 283.548 130.071 283.706 130.115 283.945C130.29 284.89 129.843 285.824 129.013 286.294L128.983 286.309C128.245 286.654 127.413 286.558 126.782 286.126C126.585 286.598 126.192 287.002 125.663 287.241C124.6 287.645 123.408 287.247 122.872 286.309C122.752 286.098 122.825 285.829 123.036 285.708C123.247 285.588 123.516 285.661 123.637 285.872C123.954 286.427 124.685 286.671 125.325 286.429C125.81 286.21 126.087 285.761 126.037 285.321C126.036 285.318 126.034 285.315 126.033 285.313C125.905 285.091 125.88 284.814 125.905 284.565C125.931 284.372 126.033 284.206 126.16 284.123C126.415 283.929 126.797 284.039 126.95 284.316C127.085 284.583 127.096 284.907 127.034 285.184ZM119.599 285.196C119.908 285.778 119.624 286.608 119.315 286.663C119.083 286.691 118.799 286.386 118.696 286.193C118.567 285.971 118.541 285.694 118.567 285.445C118.593 285.252 118.696 285.086 118.825 285.003C119.083 284.809 119.444 284.919 119.599 285.196ZM132.818 280.503C133.104 281.084 132.844 281.859 132.531 281.97C132.297 281.998 132.01 281.693 131.906 281.499C131.776 281.278 131.75 281.001 131.776 280.752C131.802 280.558 131.906 280.392 132.036 280.309C132.297 280.115 132.661 280.226 132.818 280.503Z'
          fill='#DE6903'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M153.42 203.2C156.613 200.083 163.13 197.639 173.9 203.797C175.542 204.706 174.943 207.561 173.122 207.557L154.359 207.43C152.949 207.44 152.355 204.249 153.42 203.2Z'
          fill='#474961'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M130.988 303.719H134.98C137.039 304.354 138.337 305.702 138.875 307.763C139.413 309.823 138.115 311.799 134.98 313.692L134.948 313.685L134.951 313.692H85.6382C82.5034 311.799 81.2051 309.823 81.7433 307.763C82.2814 305.702 83.5797 304.354 85.6382 303.719H130.988Z'
          fill='#3ABF7C'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M135.684 139.685H45.981C42.4586 139.685 39.582 137.08 39.582 133.889V80.3621C39.582 77.1713 42.4586 74.5654 45.981 74.5654H135.684C139.206 74.5654 142.083 77.1713 142.083 80.3621V133.862C142.083 137.08 139.206 139.685 135.684 139.685Z'
          fill={colors.backgroundColorLeftScreen}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M39.6113 74.2148C39.6113 70.9739 42.2401 68.3467 45.4823 68.3467H136.182C139.425 68.3467 142.053 70.9755 142.053 74.2148V80.96H39.6113V74.2148Z'
          fill={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M55.389 104.72H66.6898C67.622 104.72 68.3776 105.475 68.3776 106.407C68.3776 107.338 67.622 108.093 66.6898 108.093H55.389C54.4568 108.093 53.7012 107.338 53.7012 106.407C53.7012 105.475 54.4568 104.72 55.389 104.72ZM55.389 123.493H66.6898C67.622 123.493 68.3776 124.249 68.3776 125.18C68.3776 126.112 67.622 126.867 66.6898 126.867H55.389C54.4568 126.867 53.7012 126.112 53.7012 125.18C53.7012 124.249 54.4568 123.493 55.389 123.493ZM72.7072 104.72H84.0081C84.9402 104.72 85.6959 105.475 85.6959 106.407C85.6959 107.338 84.9402 108.093 84.0081 108.093H72.7072C71.7751 108.093 71.0194 107.338 71.0194 106.407C71.0194 105.475 71.7751 104.72 72.7072 104.72ZM72.7072 123.493H84.0081C84.9402 123.493 85.6959 124.249 85.6959 125.18C85.6959 126.112 84.9402 126.867 84.0081 126.867H72.7072C71.7751 126.867 71.0194 126.112 71.0194 125.18C71.0194 124.249 71.7751 123.493 72.7072 123.493ZM90.0254 104.72H101.326C102.258 104.72 103.014 105.475 103.014 106.407C103.014 107.338 102.258 108.093 101.326 108.093H90.0254C89.0933 108.093 88.3376 107.338 88.3376 106.407C88.3376 105.475 89.0933 104.72 90.0254 104.72ZM90.0254 123.493H101.326C102.258 123.493 103.014 124.249 103.014 125.18C103.014 126.112 102.258 126.867 101.326 126.867H90.0254C89.0933 126.867 88.3376 126.112 88.3376 125.18C88.3376 124.249 89.0933 123.493 90.0254 123.493ZM55.389 95.3335H76.3763C77.3085 95.3335 78.0641 96.0886 78.0641 97.0202C78.0641 97.9517 77.3085 98.7068 76.3763 98.7068H55.389C54.4568 98.7068 53.7012 97.9517 53.7012 97.0202C53.7012 96.0886 54.4568 95.3335 55.389 95.3335ZM102.941 95.3335H126.57C127.502 95.3335 128.258 96.0886 128.258 97.0202C128.258 97.9517 127.502 98.7068 126.57 98.7068H102.941C102.009 98.7068 101.253 97.9517 101.253 97.0202C101.253 96.0886 102.009 95.3335 102.941 95.3335ZM102.941 114.107H126.57C127.502 114.107 128.258 114.862 128.258 115.793C128.258 116.725 127.502 117.48 126.57 117.48H102.941C102.009 117.48 101.253 116.725 101.253 115.793C101.253 114.862 102.009 114.107 102.941 114.107ZM82.3937 114.107H86.6498C87.582 114.107 88.3376 114.862 88.3376 115.793C88.3376 116.725 87.582 117.48 86.6498 117.48H82.3937C81.4615 117.48 80.7059 116.725 80.7059 115.793C80.7059 114.862 81.4615 114.107 82.3937 114.107ZM92.6672 95.3335H96.9234C97.8555 95.3335 98.6112 96.0886 98.6112 97.0202C98.6112 97.9517 97.8555 98.7068 96.9234 98.7068H92.6672C91.7351 98.7068 90.9794 97.9517 90.9794 97.0202C90.9794 96.0886 91.7351 95.3335 92.6672 95.3335ZM107.344 104.72H126.57C127.502 104.72 128.258 105.475 128.258 106.407C128.258 107.338 127.502 108.093 126.57 108.093H107.344C106.412 108.093 105.656 107.338 105.656 106.407C105.656 105.475 106.412 104.72 107.344 104.72Z'
          fill={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M55.389 114.107H76.3763C77.3085 114.107 78.0641 114.862 78.0641 115.794C78.0641 116.725 77.3085 117.48 76.3763 117.48H55.389C54.4568 117.48 53.7012 116.725 53.7012 115.794C53.7012 114.862 54.4568 114.107 55.389 114.107ZM92.6672 114.107H96.9234C97.8555 114.107 98.6112 114.862 98.6112 115.794C98.6112 116.725 97.8555 117.48 96.9234 117.48H92.6672C91.7351 117.48 90.9794 116.725 90.9794 115.794C90.9794 114.862 91.7351 114.107 92.6672 114.107Z'
          fill={colors.blueItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M82.3929 95.3335H86.649C87.5812 95.3335 88.3368 96.0886 88.3368 97.0202C88.3368 97.9517 87.5812 98.7068 86.649 98.7068H82.3929C81.4607 98.7068 80.7051 97.9517 80.7051 97.0202C80.7051 96.0886 81.4607 95.3335 82.3929 95.3335ZM107.343 123.493H126.569C127.501 123.493 128.257 124.249 128.257 125.18C128.257 126.112 127.501 126.867 126.569 126.867H107.343C106.411 126.867 105.655 126.112 105.655 125.18C105.655 124.249 106.411 123.493 107.343 123.493Z'
          fill={colors.redItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M54.5813 59.2534H17.8901C14.6479 59.2534 12.0195 61.88 12.0195 65.1201V83.6001C12.0195 86.8402 14.6479 89.4668 17.8901 89.4668H54.5813C57.8235 89.4668 60.4519 86.8402 60.4519 83.6001V65.1201C60.4519 61.88 57.8235 59.2534 54.5813 59.2534Z'
          fill={colors.blueItems}
          style={{ transition: '1s linear' }}
        />
        <path
          d='M27.6767 67.4668L17.8906 75.3355L28.1642 80.9601'
          stroke={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M43.8793 80.9601L53.7013 74.228L43.4277 67.4668'
          stroke={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M33.4473 84.2996L37.9184 64.6431'
          stroke={colors.itensColorLeftScreen}
          style={{ transition: '1s linear' }}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M66.4297 272.107C66.4782 272.104 66.3804 272.332 66.4297 272.332V273.364V274.155C66.4297 272.538 66.3404 276.483 66.3403 275.658C66.3403 276.792 66.3403 275.142 66.3403 275.039V275.245C66.3403 275.245 66.3403 275.451 66.3403 275.658L66.4297 311.555C66.4297 312.689 65.5098 313.609 64.375 313.609C63.2402 313.609 62.3203 312.689 62.3203 311.555V209.769C62.3203 208.781 63.0187 207.955 63.9491 207.759C64.2123 207.637 64.5058 207.569 64.8153 207.569H239.465C240.6 207.569 241.52 208.488 241.52 209.622C241.52 210.756 240.6 211.675 239.465 211.675H66.4297V272.107Z'
          fill='#D8DEED'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M105.854 202.987L108.677 191.605H87.4869C85.2854 191.605 83.4652 189.933 83.4652 187.909V155.672C83.4362 153.619 85.2267 151.947 87.4575 151.947H151.946C154.147 151.947 155.967 153.619 155.967 155.643V187.909C155.967 189.933 154.147 191.605 151.946 191.605H126.123L124.957 202.987H132.603C133.777 202.987 134.687 203.926 134.687 205.07C134.687 206.243 133.747 207.153 132.603 207.153H99.8742C98.7001 207.153 97.7901 206.214 97.7901 205.07C97.7314 203.926 98.7001 202.987 99.8742 202.987H105.854Z'
          fill='#474961'
          style={{ transition: '1s linear' }}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M126.998 183.31L127.085 203.017H124.98L126.998 183.31Z'
          fill='white'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M219.402 306.748C218.276 301.966 217.901 295.778 217.151 295.684H216.306L208.238 295.778C208.238 295.778 206.55 303.467 205.705 306.655C205.612 306.842 205.518 307.405 205.33 307.78C205.143 308.342 205.143 308.905 205.143 309.468C205.33 312.374 206.456 314.906 208.989 316.125C211.897 317.531 214.055 318.938 217.057 316.125C220.153 313.312 220.528 311.53 219.402 306.748Z'
          fill='#4B44BE'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M193.979 296.434L183.753 296.997C183.753 296.997 179.719 304.029 173.809 305.623C168.274 307.217 159.08 311.062 163.208 313.312C166.21 315.094 185.817 313.5 190.602 313.875C194.166 314.156 195.198 311.999 194.823 307.217C194.542 303.56 193.979 296.434 193.979 296.434Z'
          fill='#4B44BE'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M181.784 169.289C181.784 169.289 174.936 225.454 174.467 229.111C173.998 232.768 176.812 251.521 176.812 255.084C176.812 258.647 183.473 296.997 183.473 296.997L194.074 296.528C194.074 296.528 191.916 240.081 192.198 237.362C192.479 234.643 204.018 201.919 204.018 201.919C204.018 201.919 204.862 210.545 204.862 213.358C204.862 216.171 208.052 295.965 208.052 295.965H217.34L230.473 178.384L230.286 176.133L181.784 169.289Z'
          fill='url(#paint0_linear_1333_412)'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M213.023 60.7083C213.023 60.7083 202.797 64.6464 200.546 65.584C198.294 66.5217 196.981 69.3347 196.981 69.3347C196.981 69.3347 195.855 68.6783 195.855 70.5536C195.855 72.4289 196.793 76.7421 197.543 77.9611C198.763 79.8364 199.795 81.8054 200.827 83.7745C201.765 85.7436 201.39 89.8693 200.452 90.4318C199.514 90.9944 182.252 106.559 182.252 106.559L167.992 150.535L169.868 164.413L172.777 178.102C172.777 178.102 172.214 179.134 173.34 180.259C174.559 181.384 179.719 189.917 179.719 189.917L181.501 177.352L175.685 158.787L173.621 143.128L187.318 115.186L234.694 123.625L239.853 154.098L230.284 180.071L228.596 192.73L236.664 185.697C237.133 185.322 238.071 183.353 238.446 182.322L243.231 168.82L246.796 147.254C246.796 147.254 216.869 93.3386 215.368 90.1506C214.711 88.7441 215.462 85.181 215.837 83.4932C216.212 81.8992 216.963 79.8364 217.713 79.2738C218.839 78.0548 219.402 76.2733 219.683 74.6793C219.683 73.5541 220.153 69.1471 219.027 70.1785C218.839 70.4598 217.995 69.1471 217.62 67.3656C216.963 64.5526 215.087 62.396 213.023 60.7083Z'
          fill='url(#paint1_linear_1333_412)'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M209.176 104.684C208.426 105.341 207.3 105.247 206.549 104.59C205.987 103.747 205.518 102.903 205.142 102.059C204.392 100.559 198.575 91.9321 198.575 91.9321C198.575 91.9321 184.691 95.4952 182.439 96.9017C180.188 98.4019 178.124 100.465 177.373 103.09C176.623 105.716 165.928 136.939 165.365 138.909C164.802 140.784 162.082 143.878 163.395 151.473C164.709 159.162 171.932 178.853 172.683 179.04C173.433 179.228 181.126 175.477 181.126 175.477C181.126 175.477 175.028 151.004 175.028 148.566C175.028 146.128 180.469 139.19 182.721 134.502C184.879 129.813 186.567 125.688 187.318 123.625C188.068 121.562 180.751 164.225 180.751 164.225C180.751 164.225 180.563 172.008 182.064 172.758C183.471 173.414 199.795 179.696 203.547 181.103C203.923 181.29 204.392 181.009 204.579 180.634L207.019 173.695C207.019 173.602 207.112 173.508 207.206 173.602C207.3 173.602 207.3 173.695 207.3 173.695L209.552 181.197C209.645 181.572 210.114 181.759 210.49 181.759L230.66 177.446C230.66 177.446 230.378 140.315 230.753 134.033C231.035 127.938 230.284 124.562 231.41 126.25C232.63 128.032 237.696 144.816 237.696 147.629C237.696 150.442 231.973 175.102 231.973 175.102L239.478 179.321C239.478 179.321 249.704 152.223 250.173 148.66C250.736 145.097 250.923 143.222 249.235 139.659C247.546 136.096 238.258 103.653 238.258 103.653C238.258 103.653 237.32 99.7147 230.472 97.6518C223.624 95.589 218.558 92.5885 217.338 92.6823C216.118 92.776 212.366 99.9022 210.677 102.059C209.927 102.996 210.114 103.372 209.176 104.684Z'
          fill='url(#paint2_linear_1333_412)'
          style={{ transition: '1s linear' }}
        />
        <path
          d='M212.929 60.802C212.929 60.802 201.484 65.0214 199.138 66.7092C197.356 68.0219 196.981 69.2408 196.981 69.2408C196.981 69.2408 195.761 68.6782 195.855 70.4598C195.949 72.2413 194.448 67.7406 194.072 66.2403C193.791 64.8339 193.697 60.802 196.793 57.8015C199.889 54.801 203.36 52.6444 206.174 52.8319C208.989 53.0194 211.428 53.8633 213.679 56.0199C215.931 58.1765 216.494 58.0828 216.963 58.2703C217.432 58.4578 219.777 60.9895 220.059 63.7087C220.34 66.4279 219.496 70.4598 219.496 70.4598C219.496 70.4598 218.933 69.8972 218.37 70.2723C217.807 70.7411 217.62 67.6468 215.649 63.99C214.336 61.3646 212.929 60.802 212.929 60.802Z'
          fill='url(#paint3_linear_1333_412)'
          style={{ transition: '1s linear' }}
        />
        <path
          opacity='0.07'
          d='M205.706 196.199C204.392 200.044 199.326 207.451 195.949 211.952C192.572 216.453 182.346 225.829 183.003 237.362C183.66 248.802 190.602 278.338 190.602 281.057C190.602 283.682 187.975 296.247 186.005 300.091C184.035 303.936 183.097 310.874 184.129 310.874C185.911 310.78 187.881 310.593 189.664 310.124C191.352 309.749 193.041 309.374 194.636 308.811C195.292 308.53 195.48 306.28 195.48 306.28C195.574 305.342 195.386 304.404 195.199 303.561C194.73 302.154 194.354 300.654 194.167 299.247C193.791 288.464 192.76 263.429 193.041 261.741C193.416 258.459 190.789 241.957 193.229 233.893C195.574 225.642 205.706 196.199 205.706 196.199Z'
          fill='black'
          style={{ transition: '1s linear' }}
        />
        <path
          opacity='0.07'
          d='M181.032 175.665L179.25 189.167C179.25 189.167 181.032 191.98 181.502 189.636C182.064 187.291 185.723 182.884 183.378 179.696C181.22 176.508 181.032 175.665 181.032 175.665Z'
          fill='black'
          style={{ transition: '1s linear' }}
        />
        <path
          opacity='0.07'
          d='M230.473 179.415L229.91 185.885L229.159 192.074C229.159 192.074 226.532 193.949 226.626 191.511C226.72 189.073 222.311 185.416 225.594 182.978C228.878 180.54 230.473 179.415 230.473 179.415Z'
          fill='black'
          style={{ transition: '1s linear' }}
        />
        <path
          opacity='0.07'
          d='M198.483 92.1197C198.952 92.0259 196.325 92.6822 198.67 91.9321C202.704 90.6194 201.015 83.0244 201.015 83.0244C201.015 83.0244 201.391 85.8374 205.237 86.9626C209.083 88.0877 210.022 87.2439 204.299 89.963C198.576 92.6822 201.578 93.5261 201.954 96.9954'
          fill='black'
          style={{ transition: '1s linear' }}
        />
        <path
          opacity='0.07'
          d='M187.036 126.438L180.656 165.163C180.656 165.163 180.75 172.101 181.97 173.039C183.189 173.977 187.317 174.727 188.161 175.383C189.099 176.039 198.95 179.321 196.323 173.789C195.76 172.57 182.439 165.163 188.349 157.286C194.259 149.504 193.227 138.721 190.413 131.126C188.724 126.719 187.88 122.031 188.161 117.342L187.036 126.438Z'
          fill='black'
          style={{ transition: '1s linear' }}
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_1333_412'
          x1='174.393'
          y1='233.167'
          x2='230.528'
          y2='233.167'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4F68CA' />
          <stop offset='1' stopColor='#5ACEED' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1333_412'
          x1='167.982'
          y1='126.675'
          x2='246.866'
          y2='126.675'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FCA992' />
          <stop offset='0.41' stopColor='#FCB88C' />
          <stop offset='0.71' stopColor='#F8C548' />
          <stop offset='1' stopColor='#F89C51' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_1333_412'
          x1='163.003'
          y1='137.051'
          x2='250.655'
          y2='137.051'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#5A87AE' />
          <stop offset='1' stopColor='#7658F4' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_1333_412'
          x1='193.986'
          y1='61.8518'
          x2='220.343'
          y2='61.8518'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#4F68CA' />
          <stop offset='1' stopColor='#5ACEED' />
        </linearGradient>
        <clipPath id='clip0_1333_412'>
          <rect width='291' height='350' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

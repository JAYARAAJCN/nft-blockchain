import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.jpg' width={40} height={40} />
      <svg className={style.svgText} viewBox='0 0 313 58'>
        <path d='M 175.11 3.705 L 172.835 8.84 Q 170.105 7.345 167.278 6.37 A 17.784 17.784 0 0 0 163.313 5.512 A 22.246 22.246 0 0 0 161.005 5.395 A 13.084 13.084 0 0 0 156.139 6.286 A 12.297 12.297 0 0 0 153.725 7.573 A 13.192 13.192 0 0 0 150.264 11.094 A 17.847 17.847 0 0 0 148.688 13.975 A 20.549 20.549 0 0 0 147.358 18.35 Q 146.966 20.386 146.868 22.72 A 37.902 37.902 0 0 0 146.835 24.31 Q 146.835 29.77 148.525 33.638 A 15.717 15.717 0 0 0 150.431 36.918 A 12.417 12.417 0 0 0 153.205 39.585 A 11.655 11.655 0 0 0 159.581 41.656 A 14.295 14.295 0 0 0 160.095 41.665 A 14.795 14.795 0 0 0 163.733 41.234 A 12.242 12.242 0 0 0 166.562 40.138 Q 168.727 38.968 170.187 37.742 A 12.96 12.96 0 0 0 171.015 36.985 L 171.015 27.04 L 161.59 27.04 L 161.59 22.165 L 176.865 22.165 L 176.865 46.28 L 171.405 46.28 L 171.405 41.73 A 23.324 23.324 0 0 1 168.559 43.87 A 30.78 30.78 0 0 1 165.88 45.403 A 15.336 15.336 0 0 1 159.766 47.027 A 18.285 18.285 0 0 1 158.665 47.06 A 17.271 17.271 0 0 1 152.612 46.02 A 15.932 15.932 0 0 1 149.305 44.33 A 17.477 17.477 0 0 1 144.15 38.937 A 22.068 22.068 0 0 1 142.87 36.563 A 24.394 24.394 0 0 1 140.98 30.342 A 33.694 33.694 0 0 1 140.53 24.7 Q 140.53 17.42 143 11.863 A 21.275 21.275 0 0 1 146.76 6.047 A 19.146 19.146 0 0 1 150.118 3.153 A 18.092 18.092 0 0 1 157.507 0.293 A 24.091 24.091 0 0 1 161.33 0 A 29.418 29.418 0 0 1 165.209 0.244 A 21.846 21.846 0 0 1 168.87 1.04 Q 172.185 2.08 175.11 3.705 Z M 297.505 3.705 L 295.23 8.84 Q 292.5 7.345 289.673 6.37 A 17.784 17.784 0 0 0 285.708 5.512 A 22.246 22.246 0 0 0 283.4 5.395 A 13.084 13.084 0 0 0 278.534 6.286 A 12.297 12.297 0 0 0 276.12 7.573 A 13.192 13.192 0 0 0 272.659 11.094 A 17.847 17.847 0 0 0 271.083 13.975 A 20.549 20.549 0 0 0 269.753 18.35 Q 269.361 20.386 269.263 22.72 A 37.902 37.902 0 0 0 269.23 24.31 Q 269.23 29.77 270.92 33.638 A 15.717 15.717 0 0 0 272.826 36.918 A 12.417 12.417 0 0 0 275.6 39.585 A 11.655 11.655 0 0 0 281.976 41.656 A 14.295 14.295 0 0 0 282.49 41.665 A 14.795 14.795 0 0 0 286.128 41.234 A 12.242 12.242 0 0 0 288.957 40.138 Q 291.122 38.968 292.582 37.742 A 12.96 12.96 0 0 0 293.41 36.985 L 293.41 27.04 L 283.985 27.04 L 283.985 22.165 L 299.26 22.165 L 299.26 46.28 L 293.8 46.28 L 293.8 41.73 A 23.324 23.324 0 0 1 290.954 43.87 A 30.78 30.78 0 0 1 288.275 45.403 A 15.336 15.336 0 0 1 282.161 47.027 A 18.285 18.285 0 0 1 281.06 47.06 A 17.271 17.271 0 0 1 275.007 46.02 A 15.932 15.932 0 0 1 271.7 44.33 A 17.477 17.477 0 0 1 266.545 38.937 A 22.068 22.068 0 0 1 265.265 36.563 A 24.394 24.394 0 0 1 263.375 30.342 A 33.694 33.694 0 0 1 262.925 24.7 Q 262.925 17.42 265.395 11.863 A 21.275 21.275 0 0 1 269.155 6.047 A 19.146 19.146 0 0 1 272.513 3.153 A 18.092 18.092 0 0 1 279.902 0.293 A 24.091 24.091 0 0 1 283.725 0 A 29.418 29.418 0 0 1 287.604 0.244 A 21.846 21.846 0 0 1 291.265 1.04 Q 294.58 2.08 297.505 3.705 Z M 23.66 46.28 L 16.705 46.28 L 0 2.405 L 6.045 0.065 L 20.345 39.52 L 34.71 0.26 L 40.3 2.405 L 23.66 46.28 Z M 232.245 46.28 L 226.395 46.28 L 226.395 12.48 L 232.05 12.48 L 232.05 18.135 Q 233.87 15.405 236.698 13.553 A 11.255 11.255 0 0 1 241.316 11.847 A 14.709 14.709 0 0 1 243.425 11.7 Q 247.793 11.7 250.475 13.709 A 8.619 8.619 0 0 1 251.972 15.145 A 11.962 11.962 0 0 1 254.315 19.941 Q 254.739 21.658 254.792 23.666 A 21.947 21.947 0 0 1 254.8 24.245 L 254.8 46.28 L 248.95 46.28 L 248.95 24.895 Q 248.95 21.911 247.792 19.888 A 7.128 7.128 0 0 0 247.228 19.045 A 5.577 5.577 0 0 0 243.148 16.866 A 7.84 7.84 0 0 0 242.45 16.835 A 8.529 8.529 0 0 0 237.998 18.112 A 11.28 11.28 0 0 0 236.795 18.948 Q 234.13 21.06 232.245 23.92 L 232.245 46.28 Z M 83.33 43.55 L 85.8 38.675 A 12.062 12.062 0 0 0 87.843 40.057 Q 88.854 40.606 90.058 41.048 A 15.647 15.647 0 0 0 95.005 41.982 A 17.852 17.852 0 0 0 95.55 41.99 A 17.623 17.623 0 0 0 97.554 41.884 Q 99.625 41.646 100.903 40.875 A 5.03 5.03 0 0 0 101.043 40.788 A 4.842 4.842 0 0 0 102.039 39.947 A 3.284 3.284 0 0 0 102.895 37.7 Q 102.895 36.335 102.213 35.295 A 4.15 4.15 0 0 0 101.609 34.584 Q 100.95 33.952 99.862 33.333 A 14.501 14.501 0 0 0 99.71 33.248 Q 97.89 32.24 94.445 31.07 Q 89.7 29.445 87.328 27.203 Q 84.955 24.96 84.955 20.995 A 7.878 7.878 0 0 1 87.521 15.135 A 11.351 11.351 0 0 1 88.368 14.398 A 11.547 11.547 0 0 1 92.291 12.417 Q 93.953 11.924 95.945 11.77 A 24.393 24.393 0 0 1 97.825 11.7 Q 101.075 11.7 103.61 12.383 A 25.2 25.2 0 0 1 106.297 13.264 A 20.222 20.222 0 0 1 108.16 14.105 L 106.535 18.915 A 15.943 15.943 0 0 0 104.151 17.768 A 19.625 19.625 0 0 0 102.537 17.225 A 16.266 16.266 0 0 0 99.623 16.674 A 20.694 20.694 0 0 0 97.565 16.575 Q 94.185 16.575 92.43 17.94 A 6.059 6.059 0 0 0 91.547 18.768 Q 91.091 19.3 90.873 19.867 A 2.944 2.944 0 0 0 90.675 20.93 A 3.198 3.198 0 0 0 91.647 23.239 A 4.603 4.603 0 0 0 92.04 23.595 A 6.422 6.422 0 0 0 92.885 24.16 Q 94.363 25.006 97.239 25.957 A 54.939 54.939 0 0 0 97.37 26 Q 103.805 28.145 106.34 30.745 A 8.838 8.838 0 0 1 108.865 36.755 A 11.632 11.632 0 0 1 108.875 37.245 Q 108.875 41.632 105.462 44.236 A 10.802 10.802 0 0 1 105.203 44.428 A 13.034 13.034 0 0 1 101.058 46.36 Q 99.326 46.841 97.28 46.992 A 26.275 26.275 0 0 1 95.355 47.06 A 25.993 25.993 0 0 1 91.545 46.793 A 20.116 20.116 0 0 1 88.433 46.085 Q 85.564 45.179 83.621 43.768 A 11.849 11.849 0 0 1 83.33 43.55 Z M 117.975 34.645 L 117.975 18.785 L 112.125 18.785 L 112.125 13.715 L 118.105 13.715 L 119.34 3.055 L 123.825 3.055 L 123.825 13.715 L 133.185 13.715 L 133.185 18.785 L 123.825 18.785 L 123.825 35.1 Q 123.825 38.441 125.075 39.995 A 3.612 3.612 0 0 0 125.417 40.365 Q 127.01 41.86 129.22 41.86 Q 130.845 41.86 132.308 41.34 A 16.726 16.726 0 0 0 134.373 40.45 A 14.799 14.799 0 0 0 135.005 40.105 L 136.63 44.785 A 12.055 12.055 0 0 1 135.578 45.342 Q 135.057 45.588 134.442 45.83 A 28.187 28.187 0 0 1 133.12 46.313 Q 130.91 47.06 128.505 47.06 A 14.699 14.699 0 0 1 128.429 47.06 Q 123.608 47.035 120.803 43.843 Q 118.435 41.149 118.05 36.517 A 22.605 22.605 0 0 1 117.975 34.645 Z M 69.29 15.21 L 69.29 12.48 L 74.62 12.48 L 74.62 38.09 A 7.897 7.897 0 0 0 74.686 39.153 Q 74.902 40.735 75.822 41.308 Q 77.025 42.055 78.455 42.055 L 77.22 46.605 A 11.52 11.52 0 0 1 74.448 46.298 Q 70.784 45.388 69.747 41.782 A 8.834 8.834 0 0 1 69.68 41.535 A 13.85 13.85 0 0 1 67.659 43.762 A 18.524 18.524 0 0 1 65.617 45.338 Q 63.205 46.956 59.558 47.054 A 17.683 17.683 0 0 1 59.085 47.06 Q 54.86 47.06 51.415 44.915 A 14.916 14.916 0 0 1 46.596 40.023 A 18.15 18.15 0 0 1 45.922 38.838 A 17.698 17.698 0 0 1 44.213 33.675 A 23.819 23.819 0 0 1 43.875 29.575 Q 43.875 24.505 45.923 20.475 Q 47.97 16.445 51.578 14.073 A 14.493 14.493 0 0 1 58.854 11.729 A 17.802 17.802 0 0 1 59.865 11.7 A 14.68 14.68 0 0 1 62.981 12.019 A 12.157 12.157 0 0 1 65.162 12.708 A 16.901 16.901 0 0 1 67.949 14.199 A 14.367 14.367 0 0 1 69.29 15.21 Z M 209.43 15.21 L 209.43 12.48 L 214.76 12.48 L 214.76 38.09 A 7.897 7.897 0 0 0 214.826 39.153 Q 215.042 40.735 215.963 41.308 Q 217.165 42.055 218.595 42.055 L 217.36 46.605 A 11.52 11.52 0 0 1 214.588 46.298 Q 210.924 45.388 209.887 41.782 A 8.834 8.834 0 0 1 209.82 41.535 A 13.85 13.85 0 0 1 207.799 43.762 A 18.524 18.524 0 0 1 205.757 45.338 Q 203.345 46.956 199.698 47.054 A 17.683 17.683 0 0 1 199.225 47.06 Q 195 47.06 191.555 44.915 A 14.916 14.916 0 0 1 186.736 40.023 A 18.15 18.15 0 0 1 186.062 38.838 A 17.698 17.698 0 0 1 184.353 33.675 A 23.819 23.819 0 0 1 184.015 29.575 Q 184.015 24.505 186.063 20.475 Q 188.11 16.445 191.718 14.073 A 14.493 14.493 0 0 1 198.994 11.729 A 17.802 17.802 0 0 1 200.005 11.7 A 14.68 14.68 0 0 1 203.121 12.019 A 12.157 12.157 0 0 1 205.302 12.708 A 16.901 16.901 0 0 1 208.089 14.199 A 14.367 14.367 0 0 1 209.43 15.21 Z M 68.77 37.635 L 68.77 19.5 Q 67.015 18.265 64.903 17.518 Q 62.79 16.77 60.45 16.77 A 10.351 10.351 0 0 0 57.219 17.26 A 9.115 9.115 0 0 0 54.958 18.363 A 10.595 10.595 0 0 0 51.695 21.888 A 12.976 12.976 0 0 0 51.22 22.783 A 13.431 13.431 0 0 0 50.08 26.473 A 17.991 17.991 0 0 0 49.855 29.38 Q 49.855 33.02 51.22 35.848 A 11.441 11.441 0 0 0 53.239 38.803 A 10.203 10.203 0 0 0 54.99 40.268 Q 57.395 41.86 60.385 41.86 Q 62.855 41.86 65.065 40.658 A 12.643 12.643 0 0 0 68.133 38.349 A 11.746 11.746 0 0 0 68.77 37.635 Z M 208.91 37.635 L 208.91 19.5 Q 207.155 18.265 205.043 17.518 Q 202.93 16.77 200.59 16.77 A 10.351 10.351 0 0 0 197.359 17.26 A 9.115 9.115 0 0 0 195.098 18.363 A 10.595 10.595 0 0 0 191.835 21.888 A 12.976 12.976 0 0 0 191.36 22.783 A 13.431 13.431 0 0 0 190.22 26.473 A 17.991 17.991 0 0 0 189.995 29.38 Q 189.995 33.02 191.36 35.848 A 11.441 11.441 0 0 0 193.379 38.803 A 10.203 10.203 0 0 0 195.13 40.268 Q 197.535 41.86 200.525 41.86 Q 202.995 41.86 205.205 40.658 A 12.643 12.643 0 0 0 208.273 38.349 A 11.746 11.746 0 0 0 208.91 37.635 Z'></path>
        {/*  <path d='M 39.101 5.4 L 39.101 1.2 L 47.301 1.2 L 47.301 40.6 A 12.15 12.15 0 0 0 47.402 42.236 Q 47.734 44.67 49.151 45.55 Q 51.001 46.7 53.201 46.7 L 51.301 53.7 A 17.722 17.722 0 0 1 47.036 53.228 Q 41.399 51.828 39.804 46.28 A 13.59 13.59 0 0 1 39.701 45.9 A 21.307 21.307 0 0 1 36.591 49.326 A 28.498 28.498 0 0 1 33.451 51.75 Q 29.501 54.4 23.401 54.4 Q 16.901 54.4 11.601 51.1 A 22.947 22.947 0 0 1 4.187 43.574 A 27.923 27.923 0 0 1 3.151 41.75 A 27.228 27.228 0 0 1 0.52 33.808 A 36.644 36.644 0 0 1 0.001 27.5 A 33.142 33.142 0 0 1 0.997 19.232 A 27.968 27.968 0 0 1 3.151 13.5 Q 6.301 7.3 11.851 3.65 A 22.297 22.297 0 0 1 23.045 0.044 A 27.388 27.388 0 0 1 24.601 0 A 22.584 22.584 0 0 1 29.394 0.491 A 18.703 18.703 0 0 1 32.751 1.55 A 26.002 26.002 0 0 1 37.037 3.844 A 22.103 22.103 0 0 1 39.101 5.4 Z M 38.301 39.9 L 38.301 12 Q 35.601 10.1 32.351 8.95 Q 29.101 7.8 25.501 7.8 A 15.924 15.924 0 0 0 20.529 8.554 A 14.024 14.024 0 0 0 17.051 10.25 A 16.301 16.301 0 0 0 12.031 15.674 A 19.962 19.962 0 0 0 11.301 17.05 A 20.663 20.663 0 0 0 9.547 22.727 A 27.678 27.678 0 0 0 9.201 27.2 Q 9.201 32.8 11.301 37.15 A 17.602 17.602 0 0 0 14.406 41.696 A 15.697 15.697 0 0 0 17.101 43.95 Q 20.801 46.4 25.401 46.4 Q 29.201 46.4 32.601 44.55 Q 36.001 42.7 38.301 39.9 Z'></path>
        <path d='M138.329 28.0091C138.329 29.0661 138.261 30.167 138.124 31.3121H111.62C111.803 33.6021 112.556 35.3637 113.88 36.5968C115.25 37.7859 116.916 38.3804 118.88 38.3804C121.802 38.3804 123.833 37.1913 124.975 34.8132H137.439C136.8 37.2354 135.636 39.4153 133.946 41.3531C132.303 43.2908 130.225 44.8102 127.714 45.9112C125.203 47.0121 122.395 47.5626 119.291 47.5626C115.547 47.5626 112.214 46.792 109.292 45.2506C106.37 43.7092 104.087 41.5072 102.443 38.6446C100.8 35.7821 99.9777 32.4351 99.9777 28.6036C99.9777 24.7722 100.777 21.4252 102.375 18.5626C104.018 15.7001 106.301 13.4981 109.223 11.9567C112.145 10.4153 115.501 9.64465 119.291 9.64465C122.989 9.64465 126.276 10.3933 129.152 11.8907C132.029 13.388 134.266 15.5239 135.864 18.2984C137.508 21.0729 138.329 24.3098 138.329 28.0091ZM126.345 25.0364C126.345 23.0987 125.66 21.5573 124.29 20.4123C122.92 19.2673 121.208 18.6948 119.154 18.6948C117.19 18.6948 115.524 19.2453 114.154 20.3462C112.83 21.4472 112.008 23.0106 111.689 25.0364H126.345Z'></path>
        <path d='M167.793 9.77676C172.267 9.77676 175.828 11.186 178.476 14.0046C181.17 16.779 182.517 20.6105 182.517 25.4989V47.0342H170.874V27.0182C170.874 24.552 170.212 22.6363 168.888 21.2711C167.564 19.9058 165.784 19.2232 163.547 19.2232C161.309 19.2232 159.529 19.9058 158.205 21.2711C156.881 22.6363 156.219 24.552 156.219 27.0182V47.0342H144.508V10.1731H156.219V15.0615C157.406 13.432 159.004 12.1549 161.013 11.2301C163.021 10.2612 165.281 9.77676 167.793 9.77676Z'></path>
        <path d='M208.05 47.4966C204.535 47.4966 201.384 46.9461 198.599 45.8451C195.814 44.7441 193.577 43.1147 191.888 40.9567C190.244 38.7988 189.376 36.2005 189.285 33.1617H201.749C201.932 34.8793 202.548 36.2005 203.599 37.1253C204.649 38.0061 206.018 38.4465 207.708 38.4465C209.443 38.4465 210.812 38.0721 211.817 37.3235C212.821 36.5308 213.324 35.4518 213.324 34.0866C213.324 32.9415 212.913 31.9947 212.091 31.246C211.315 30.4973 210.333 29.8808 209.146 29.3964C208.004 28.9119 206.361 28.3614 204.215 27.7449C201.11 26.82 198.576 25.8952 196.613 24.9704C194.65 24.0456 192.961 22.6803 191.545 20.8747C190.13 19.0691 189.422 16.713 189.422 13.8064C189.422 9.49051 191.043 6.12149 194.285 3.69932C197.526 1.23311 201.749 0 206.954 0C212.251 0 216.519 1.23311 219.761 3.69932C223.003 6.12149 224.738 9.51253 224.966 13.8724H212.296C212.205 12.3751 211.634 11.208 210.584 10.3713C209.534 9.49051 208.187 9.05011 206.543 9.05011C205.128 9.05011 203.987 9.42445 203.119 10.1731C202.252 10.8777 201.818 11.9127 201.818 13.2779C201.818 14.7752 202.548 15.9423 204.01 16.779C205.471 17.6158 207.753 18.5186 210.858 19.4875C213.963 20.5004 216.474 21.4692 218.391 22.3941C220.355 23.3189 222.044 24.6621 223.459 26.4237C224.875 28.1853 225.582 30.4533 225.582 33.2278C225.582 35.8702 224.875 38.2703 223.459 40.4282C222.09 42.5862 220.081 44.3037 217.433 45.5809C214.785 46.858 211.657 47.4966 208.05 47.4966Z'></path>
        <path d='M268.813 28.0091C268.813 29.0661 268.744 30.167 268.607 31.3121H242.103C242.286 33.6021 243.039 35.3637 244.363 36.5968C245.733 37.7859 247.4 38.3804 249.363 38.3804C252.285 38.3804 254.317 37.1913 255.458 34.8132H267.922C267.283 37.2354 266.119 39.4153 264.43 41.3531C262.786 43.2908 260.709 44.8102 258.197 45.9112C255.686 47.0121 252.878 47.5626 249.774 47.5626C246.03 47.5626 242.697 46.792 239.775 45.2506C236.853 43.7092 234.57 41.5072 232.926 38.6446C231.283 35.7821 230.461 32.4351 230.461 28.6036C230.461 24.7722 231.26 21.4252 232.858 18.5626C234.501 15.7001 236.784 13.4981 239.706 11.9567C242.628 10.4153 245.984 9.64465 249.774 9.64465C253.472 9.64465 256.759 10.3933 259.636 11.8907C262.512 13.388 264.749 15.5239 266.347 18.2984C267.991 21.0729 268.813 24.3098 268.813 28.0091ZM256.828 25.0364C256.828 23.0987 256.143 21.5573 254.773 20.4123C253.403 19.2673 251.691 18.6948 249.637 18.6948C247.674 18.6948 246.007 19.2453 244.637 20.3462C243.313 21.4472 242.491 23.0106 242.172 25.0364H256.828Z'></path>
        <path d='M272.662 28.5376C272.662 24.7502 273.393 21.4252 274.854 18.5626C276.36 15.7001 278.392 13.4981 280.949 11.9567C283.506 10.4153 286.359 9.64465 289.51 9.64465C292.203 9.64465 294.555 10.1731 296.564 11.2301C298.618 12.287 300.193 13.6743 301.289 15.3918V10.1731H313V47.0342H301.289V41.8155C300.148 43.533 298.55 44.9203 296.495 45.9772C294.486 47.0342 292.135 47.5626 289.441 47.5626C286.336 47.5626 283.506 46.792 280.949 45.2506C278.392 43.6651 276.36 41.4412 274.854 38.5786C273.393 35.672 272.662 32.325 272.662 28.5376ZM301.289 28.6036C301.289 25.7851 300.467 23.5611 298.824 21.9317C297.226 20.3022 295.262 19.4875 292.934 19.4875C290.605 19.4875 288.619 20.3022 286.976 21.9317C285.378 23.5171 284.579 25.7191 284.579 28.5376C284.579 31.3561 285.378 33.6021 286.976 35.2756C288.619 36.9051 290.605 37.7198 292.934 37.7198C295.262 37.7198 297.226 36.9051 298.824 35.2756C300.467 33.6462 301.289 31.4222 301.289 28.6036Z'></path> */}
      </svg> 
    </div>
  )
}

export default Logo

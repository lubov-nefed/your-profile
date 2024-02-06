const loginPaths = {
    '/': 'pages/login/login.html',
    '/pages/create-account/create-account.html': '../login/login.html',
    '/pages/profile-preview/profile-preview.html': '../login/login.html',
    '/pages/login/login.html': 'login.html'
}

const createHeader = (currentPath) => {
    return `<header class="header">
    <div class="header__container container">
        <a class="header__link" href="/">
            <svg class="header__logo header__logo--light-theme" xmlns="http://www.w3.org/2000/svg" width="272"
                height="60" fill="none">
                <g clip-path="url(#a)">
                    <path fill="#5B46AE"
                        d="M22.785 18.258c9.573.855 17.197 8.145 18.597 17.785.704 4.863-.49 10.166-3.211 14.26-2.095 3.161-4.748 5.502-8.113 7.169-2.086 1.028-4.181 1.658-6.568 1.987-1.048.146-3.932.146-4.98 0-4.67-.64-8.817-2.67-12.01-5.882-3.023-3.04-5.023-6.876-5.753-11.04-.524-2.962-.421-5.812.334-8.827.868-3.472 2.748-6.797 5.306-9.38 4.327-4.379 10.354-6.616 16.398-6.072Zm-3.803 3.395c-1.374.656-1.992 2.064-1.769 4.008.13 1.096.327 1.848 1.048 4.06.66 2.03.713 2.392.335 2.582-.163.086-1.082.112-3.744.112-4.035 0-4.121.009-4.825.648-.55.492-.798 1.071-.798 1.814 0 .898.48 1.736 1.21 2.099l.344.164-.378.146c-.438.164-1.03.769-1.228 1.244-.223.518-.18 1.296.095 1.857.24.501.712.976 1.055 1.062.258.07.25.139-.051.32-.61.363-1.125 1.252-1.125 1.96 0 .433.257 1.09.567 1.452.455.536.884.734 1.742.786l.73.052-.351.233c-.988.656-.936 2.142.102 2.79l.412.259h4.345c5.35-.009 7.247-.147 10.157-.743 1.485-.302 3.348-.51 4.645-.51.962 0 1.357-.103 1.468-.388.094-.26.06-10.728-.043-10.952-.18-.389-.37-.441-2.095-.501-1.786-.07-2.078-.13-2.593-.502-.686-.5-1.811-1.96-2.824-3.67-.936-1.59-1.417-2.29-2.206-3.24-1.4-1.675-1.554-2.012-2.078-4.543-.344-1.667-.515-2.263-.713-2.496-.327-.362-.816-.397-1.434-.103Z" />
                </g>
                <rect width="3.349" height="10.866" fill="#5B46AE" rx="1.674"
                    transform="matrix(.9727 -.2441 .24655 .96617 14.966 5.01)" />
                <rect width="3.349" height="10.866" fill="#5B46AE" rx="1.674"
                    transform="matrix(.9727 -.2441 .24655 .96617 14.966 5.01)" />
                <rect width="3.338" height="8.531" fill="#5B46AE" rx="1.669"
                    transform="matrix(.65726 -.756 .75875 .64869 7.743 11.329)" />
                <rect width="3.338" height="8.531" fill="#5B46AE" rx="1.669"
                    transform="matrix(.65726 -.756 .75875 .64869 7.743 11.329)" />
                <rect width="3.355" height="8.488" fill="#5B46AE" rx="1.678"
                    transform="matrix(.97355 .2325 -.23577 .97084 23.874 5.282)" />
                <rect width="3.355" height="8.488" fill="#5B46AE" rx="1.678"
                    transform="matrix(.97355 .2325 -.23577 .97084 23.874 5.282)" />
                <path fill="#48DFB7" stroke="#5B46AE"
                    d="m253.878 14.936.067.279.275.082L263.255 18l-9.035 2.703-.275.082-.067.28-2.378 9.812-2.378-9.813-.067-.279-.275-.082L239.745 18l9.035-2.703.275-.082.067-.28 2.378-9.812 2.378 9.813Z" />
                <path fill="#5B46AE" d="m55.483 24.02 4.826 11.02 4.94-11.02h8.056l-9.31 18.05V51h-7.372v-9.006L47.465 24.02h8.018Zm26.42 27.36c-1.774 0-3.345-.279-4.713-.836-1.368-.557-2.52-1.317-3.458-2.28a10.471 10.471 0 0 1-2.09-3.344 11.26 11.26 0 0 1-.684-3.914c0-1.368.228-2.673.684-3.914a9.946 9.946 0 0 1 2.09-3.344c.938-.963 2.09-1.723 3.458-2.28 1.368-.557 2.939-.836 4.712-.836 1.799 0 3.37.279 4.712.836 1.368.557 2.508 1.317 3.42 2.28a9.212 9.212 0 0 1 2.09 3.344c.482 1.241.722 2.546.722 3.914 0 1.368-.24 2.673-.722 3.914a9.658 9.658 0 0 1-2.09 3.344c-.912.963-2.052 1.723-3.42 2.28-1.342.557-2.913.836-4.712.836Zm-3.535-10.374c0 .887.152 1.66.456 2.318.304.633.722 1.127 1.254 1.482.532.33 1.14.494 1.824.494.684 0 1.292-.165 1.824-.494.532-.355.95-.849 1.254-1.482.304-.659.456-1.431.456-2.318s-.152-1.647-.456-2.28c-.304-.659-.722-1.153-1.254-1.482-.532-.355-1.14-.532-1.824-.532-.684 0-1.292.177-1.824.532-.532.33-.95.823-1.254 1.482-.304.633-.456 1.393-.456 2.28Zm17.604 3.154V31.012h7.22v11.514c0 .861.19 1.545.57 2.052.405.481.95.722 1.634.722.38 0 .76-.05 1.14-.152.38-.101.76-.304 1.14-.608.405-.304.798-.735 1.178-1.292V31.012h7.22V43.02c0 .684.101 1.165.304 1.444.203.253.557.405 1.064.456V51c-.633.127-1.203.215-1.71.266-.507.076-.95.114-1.33.114-1.216 0-2.179-.228-2.888-.684-.709-.456-1.165-1.153-1.368-2.09l-.152-.722c-.937 1.241-2.065 2.14-3.382 2.698-1.292.532-2.761.798-4.408.798-2.001 0-3.546-.62-4.636-1.862-1.064-1.241-1.596-3.027-1.596-5.358Zm38.749-6.992c-1.394 0-2.66.152-3.8.456-1.14.304-1.989.81-2.546 1.52V51h-7.22V31.012h6.612v3.8c.709-1.343 1.596-2.369 2.66-3.078 1.064-.735 2.191-1.102 3.382-1.102h.57c.126 0 .24.013.342.038v6.498ZM146.733 51V24.02h11.628c1.317 0 2.533.266 3.648.798a9.022 9.022 0 0 1 2.888 2.166 9.47 9.47 0 0 1 1.862 3.002 8.864 8.864 0 0 1 .684 3.382c0 1.596-.38 3.103-1.14 4.522a9.39 9.39 0 0 1-3.116 3.496c-1.317.887-2.863 1.33-4.636 1.33h-4.408V51h-7.41Zm7.41-14.744h3.914c.304 0 .595-.089.874-.266.279-.177.507-.481.684-.912.203-.43.304-1 .304-1.71 0-.76-.114-1.343-.342-1.748-.203-.43-.469-.722-.798-.874a1.797 1.797 0 0 0-.912-.266h-3.724v5.776Zm30.098.912c-1.394 0-2.66.152-3.8.456-1.14.304-1.989.81-2.546 1.52V51h-7.22V31.012h6.612v3.8c.709-1.343 1.596-2.369 2.66-3.078 1.064-.735 2.191-1.102 3.382-1.102h.57c.126 0 .24.013.342.038v6.498Zm12.844 14.212c-1.773 0-3.344-.279-4.712-.836-1.368-.557-2.52-1.317-3.458-2.28a10.484 10.484 0 0 1-2.09-3.344 11.26 11.26 0 0 1-.684-3.914c0-1.368.228-2.673.684-3.914a9.957 9.957 0 0 1 2.09-3.344c.938-.963 2.09-1.723 3.458-2.28 1.368-.557 2.939-.836 4.712-.836 1.799 0 3.37.279 4.712.836 1.368.557 2.508 1.317 3.42 2.28a9.203 9.203 0 0 1 2.09 3.344c.482 1.241.722 2.546.722 3.914 0 1.368-.24 2.673-.722 3.914a9.648 9.648 0 0 1-2.09 3.344c-.912.963-2.052 1.723-3.42 2.28-1.342.557-2.913.836-4.712.836Zm-3.534-10.374c0 .887.152 1.66.456 2.318.304.633.722 1.127 1.254 1.482.532.33 1.14.494 1.824.494.684 0 1.292-.165 1.824-.494.532-.355.95-.849 1.254-1.482.304-.659.456-1.431.456-2.318s-.152-1.647-.456-2.28c-.304-.659-.722-1.153-1.254-1.482-.532-.355-1.14-.532-1.824-.532-.684 0-1.292.177-1.824.532-.532.33-.95.823-1.254 1.482-.304.633-.456 1.393-.456 2.28Zm19.2-2.242h-2.47V33.33h2.47v-2.166c0-1.267.216-2.407.646-3.42a7.456 7.456 0 0 1 1.9-2.584c.811-.735 1.774-1.292 2.888-1.672 1.115-.405 2.331-.608 3.648-.608.988 0 1.938.114 2.85.342.938.203 1.888.532 2.85.988a27.157 27.157 0 0 1 3.04 1.71l-2.736 5.472a10.792 10.792 0 0 0-2.736-1.786c-.962-.43-1.887-.646-2.774-.646-.481 0-.899.076-1.254.228a1.643 1.643 0 0 0-.836.646c-.177.279-.266.633-.266 1.064v2.432h11.362V51h-7.22V38.764h-4.142V51h-7.22V38.764Zm22.804-15.504h7.22v19.798c0 .735.152 1.305.456 1.71.329.38.798.57 1.406.57.304 0 .633-.05.988-.152.354-.101.684-.24.988-.418l.912 5.32c-.862.405-1.837.722-2.926.95a14.524 14.524 0 0 1-3.04.342c-1.926 0-3.408-.494-4.446-1.482-1.039-1.013-1.558-2.445-1.558-4.294V23.26Zm24.262 28.12c-1.748 0-3.306-.266-4.674-.798-1.368-.557-2.521-1.305-3.458-2.242a9.709 9.709 0 0 1-2.09-3.23 10.32 10.32 0 0 1-.722-3.838c0-1.925.418-3.686 1.254-5.282.836-1.621 2.064-2.913 3.686-3.876 1.621-.988 3.622-1.482 6.004-1.482 2.381 0 4.382.481 6.004 1.444 1.621.963 2.85 2.23 3.686 3.8.836 1.57 1.254 3.28 1.254 5.13 0 .38-.026.773-.076 1.178-.026.38-.064.722-.114 1.026h-14.022c.05.71.24 1.292.57 1.748.354.43.785.747 1.292.95a4.72 4.72 0 0 0 3.838-.228c.709-.355 1.178-.849 1.406-1.482l6.118 1.748a8.816 8.816 0 0 1-2.242 2.812c-.938.81-2.052 1.457-3.344 1.938-1.292.456-2.749.684-4.37.684Zm-3.42-12.502h6.612c-.076-.659-.266-1.216-.57-1.672a2.888 2.888 0 0 0-1.14-1.064c-.456-.253-.988-.38-1.596-.38-.608 0-1.153.127-1.634.38a3.265 3.265 0 0 0-1.14 1.064c-.279.456-.456 1.013-.532 1.672Z" />
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M42 18.35H0V60h42z" />
                    </clipPath>
                </defs>
            </svg>
            <svg class="header__logo header__logo--dark-theme undisplayed" xmlns="http://www.w3.org/2000/svg"
                width="272" height="60" fill="none">
                <g clip-path="url(#a)">
                    <path fill="white"
                        d="M22.785 18.258c9.573.855 17.197 8.145 18.597 17.785.704 4.863-.49 10.166-3.211 14.26-2.095 3.161-4.748 5.502-8.113 7.169-2.086 1.028-4.181 1.658-6.568 1.987-1.048.146-3.932.146-4.98 0-4.67-.64-8.817-2.67-12.01-5.882-3.023-3.04-5.023-6.876-5.753-11.04-.524-2.962-.421-5.812.334-8.827.868-3.472 2.748-6.797 5.306-9.38 4.327-4.379 10.354-6.616 16.398-6.072Zm-3.803 3.395c-1.374.656-1.992 2.064-1.769 4.008.13 1.096.327 1.848 1.048 4.06.66 2.03.713 2.392.335 2.582-.163.086-1.082.112-3.744.112-4.035 0-4.121.009-4.825.648-.55.492-.798 1.071-.798 1.814 0 .898.48 1.736 1.21 2.099l.344.164-.378.146c-.438.164-1.03.769-1.228 1.244-.223.518-.18 1.296.095 1.857.24.501.712.976 1.055 1.062.258.07.25.139-.051.32-.61.363-1.125 1.252-1.125 1.96 0 .433.257 1.09.567 1.452.455.536.884.734 1.742.786l.73.052-.351.233c-.988.656-.936 2.142.102 2.79l.412.259h4.345c5.35-.009 7.247-.147 10.157-.743 1.485-.302 3.348-.51 4.645-.51.962 0 1.357-.103 1.468-.388.094-.26.06-10.728-.043-10.952-.18-.389-.37-.441-2.095-.501-1.786-.07-2.078-.13-2.593-.502-.686-.5-1.811-1.96-2.824-3.67-.936-1.59-1.417-2.29-2.206-3.24-1.4-1.675-1.554-2.012-2.078-4.543-.344-1.667-.515-2.263-.713-2.496-.327-.362-.816-.397-1.434-.103Z" />
                </g>
                <rect width="3.349" height="10.866" fill="white" rx="1.674"
                    transform="matrix(.9727 -.2441 .24655 .96617 14.967 5.01)" />
                <rect width="3.349" height="10.866" fill="white" rx="1.674"
                    transform="matrix(.9727 -.2441 .24655 .96617 14.967 5.01)" />
                <rect width="3.338" height="8.531" fill="white" rx="1.669"
                    transform="matrix(.65726 -.756 .75875 .64869 7.743 11.329)" />
                <rect width="3.338" height="8.531" fill="white" rx="1.669"
                    transform="matrix(.65726 -.756 .75875 .64869 7.743 11.329)" />
                <rect width="3.355" height="8.488" fill="white" rx="1.678"
                    transform="matrix(.97355 .2325 -.23577 .97084 23.874 5.282)" />
                <rect width="3.355" height="8.488" fill="white" rx="1.678"
                    transform="matrix(.97355 .2325 -.23577 .97084 23.874 5.282)" />
                <path fill="#48DFB7" stroke="white"
                    d="m253.878 14.936.067.279.275.082L263.255 18l-9.035 2.703-.275.082-.067.28-2.378 9.812-2.378-9.813-.067-.279-.275-.082L239.745 18l9.035-2.703.275-.082.067-.28 2.378-9.812 2.378 9.813Z" />
                <path fill="white"
                    d="m55.483 24.02 4.826 11.02 4.94-11.02h8.056l-9.31 18.05V51h-7.372v-9.006L47.465 24.02h8.018Zm26.42 27.36c-1.774 0-3.345-.279-4.713-.836-1.368-.557-2.52-1.317-3.458-2.28a10.471 10.471 0 0 1-2.09-3.344 11.26 11.26 0 0 1-.684-3.914c0-1.368.228-2.673.684-3.914a9.946 9.946 0 0 1 2.09-3.344c.938-.963 2.09-1.723 3.458-2.28 1.368-.557 2.939-.836 4.712-.836 1.799 0 3.37.279 4.712.836 1.368.557 2.508 1.317 3.42 2.28a9.212 9.212 0 0 1 2.09 3.344c.482 1.241.722 2.546.722 3.914 0 1.368-.24 2.673-.722 3.914a9.658 9.658 0 0 1-2.09 3.344c-.912.963-2.052 1.723-3.42 2.28-1.342.557-2.913.836-4.712.836Zm-3.535-10.374c0 .887.152 1.66.456 2.318.304.633.722 1.127 1.254 1.482.532.33 1.14.494 1.824.494.684 0 1.292-.165 1.824-.494.532-.355.95-.849 1.254-1.482.304-.659.456-1.431.456-2.318s-.152-1.647-.456-2.28c-.304-.659-.722-1.153-1.254-1.482-.532-.355-1.14-.532-1.824-.532-.684 0-1.292.177-1.824.532-.532.33-.95.823-1.254 1.482-.304.633-.456 1.393-.456 2.28Zm17.604 3.154V31.012h7.22v11.514c0 .861.19 1.545.57 2.052.405.481.95.722 1.634.722.38 0 .76-.05 1.14-.152.38-.101.76-.304 1.14-.608.405-.304.798-.735 1.178-1.292V31.012h7.22V43.02c0 .684.101 1.165.304 1.444.203.253.557.405 1.064.456V51c-.633.127-1.203.215-1.71.266-.507.076-.95.114-1.33.114-1.216 0-2.179-.228-2.888-.684-.709-.456-1.165-1.153-1.368-2.09l-.152-.722c-.937 1.241-2.065 2.14-3.382 2.698-1.292.532-2.761.798-4.408.798-2.001 0-3.546-.62-4.636-1.862-1.064-1.241-1.596-3.027-1.596-5.358Zm38.749-6.992c-1.394 0-2.66.152-3.8.456-1.14.304-1.989.81-2.546 1.52V51h-7.22V31.012h6.612v3.8c.709-1.343 1.596-2.369 2.66-3.078 1.064-.735 2.191-1.102 3.382-1.102h.57c.126 0 .24.013.342.038v6.498ZM146.733 51V24.02h11.628c1.317 0 2.533.266 3.648.798a9.022 9.022 0 0 1 2.888 2.166 9.47 9.47 0 0 1 1.862 3.002 8.864 8.864 0 0 1 .684 3.382c0 1.596-.38 3.103-1.14 4.522a9.39 9.39 0 0 1-3.116 3.496c-1.317.887-2.863 1.33-4.636 1.33h-4.408V51h-7.41Zm7.41-14.744h3.914c.304 0 .595-.089.874-.266.279-.177.507-.481.684-.912.203-.43.304-1 .304-1.71 0-.76-.114-1.343-.342-1.748-.203-.43-.469-.722-.798-.874a1.797 1.797 0 0 0-.912-.266h-3.724v5.776Zm30.098.912c-1.394 0-2.66.152-3.8.456-1.14.304-1.989.81-2.546 1.52V51h-7.22V31.012h6.612v3.8c.709-1.343 1.596-2.369 2.66-3.078 1.064-.735 2.191-1.102 3.382-1.102h.57c.126 0 .24.013.342.038v6.498Zm12.844 14.212c-1.773 0-3.344-.279-4.712-.836-1.368-.557-2.52-1.317-3.458-2.28a10.484 10.484 0 0 1-2.09-3.344 11.26 11.26 0 0 1-.684-3.914c0-1.368.228-2.673.684-3.914a9.957 9.957 0 0 1 2.09-3.344c.938-.963 2.09-1.723 3.458-2.28 1.368-.557 2.939-.836 4.712-.836 1.799 0 3.37.279 4.712.836 1.368.557 2.508 1.317 3.42 2.28a9.203 9.203 0 0 1 2.09 3.344c.482 1.241.722 2.546.722 3.914 0 1.368-.24 2.673-.722 3.914a9.648 9.648 0 0 1-2.09 3.344c-.912.963-2.052 1.723-3.42 2.28-1.342.557-2.913.836-4.712.836Zm-3.534-10.374c0 .887.152 1.66.456 2.318.304.633.722 1.127 1.254 1.482.532.33 1.14.494 1.824.494.684 0 1.292-.165 1.824-.494.532-.355.95-.849 1.254-1.482.304-.659.456-1.431.456-2.318s-.152-1.647-.456-2.28c-.304-.659-.722-1.153-1.254-1.482-.532-.355-1.14-.532-1.824-.532-.684 0-1.292.177-1.824.532-.532.33-.95.823-1.254 1.482-.304.633-.456 1.393-.456 2.28Zm19.2-2.242h-2.47V33.33h2.47v-2.166c0-1.267.216-2.407.646-3.42a7.456 7.456 0 0 1 1.9-2.584c.811-.735 1.774-1.292 2.888-1.672 1.115-.405 2.331-.608 3.648-.608.988 0 1.938.114 2.85.342.938.203 1.888.532 2.85.988a27.157 27.157 0 0 1 3.04 1.71l-2.736 5.472a10.792 10.792 0 0 0-2.736-1.786c-.962-.43-1.887-.646-2.774-.646-.481 0-.899.076-1.254.228a1.643 1.643 0 0 0-.836.646c-.177.279-.266.633-.266 1.064v2.432h11.362V51h-7.22V38.764h-4.142V51h-7.22V38.764Zm22.804-15.504h7.22v19.798c0 .735.152 1.305.456 1.71.329.38.798.57 1.406.57.304 0 .633-.05.988-.152.354-.101.684-.24.988-.418l.912 5.32c-.862.405-1.837.722-2.926.95a14.524 14.524 0 0 1-3.04.342c-1.926 0-3.408-.494-4.446-1.482-1.039-1.013-1.558-2.445-1.558-4.294V23.26Zm24.262 28.12c-1.748 0-3.306-.266-4.674-.798-1.368-.557-2.521-1.305-3.458-2.242a9.709 9.709 0 0 1-2.09-3.23 10.32 10.32 0 0 1-.722-3.838c0-1.925.418-3.686 1.254-5.282.836-1.621 2.064-2.913 3.686-3.876 1.621-.988 3.622-1.482 6.004-1.482 2.381 0 4.382.481 6.004 1.444 1.621.963 2.85 2.23 3.686 3.8.836 1.57 1.254 3.28 1.254 5.13 0 .38-.026.773-.076 1.178-.026.38-.064.722-.114 1.026h-14.022c.05.71.24 1.292.57 1.748.354.43.785.747 1.292.95a4.72 4.72 0 0 0 3.838-.228c.709-.355 1.178-.849 1.406-1.482l6.118 1.748a8.816 8.816 0 0 1-2.242 2.812c-.938.81-2.052 1.457-3.344 1.938-1.292.456-2.749.684-4.37.684Zm-3.42-12.502h6.612c-.076-.659-.266-1.216-.57-1.672a2.888 2.888 0 0 0-1.14-1.064c-.456-.253-.988-.38-1.596-.38-.608 0-1.153.127-1.634.38a3.265 3.265 0 0 0-1.14 1.064c-.279.456-.456 1.013-.532 1.672Z" />
                <defs>
                    <clipPath id="a">
                        <path fill="white" d="M42 18.35H0V60h42z" />
                    </clipPath>
                </defs>
            </svg>
        </a>
        <div class="header__btns">
            <button class="header__theme-btn btn">
                <img class="theme-btn__img" src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/light-dark-icon.svg" alt="Switch theme">
            </button>
            <a class="header__btn btn header__btn--basic-color-style login-btn" href='${loginPaths[currentPath]}'>
                Login</a>
        </div>
    </div>
    </header>`
}

export { createHeader }
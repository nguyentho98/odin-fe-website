import React from "react";
import { Modal, ModalBody } from "reactstrap";
import "./ModalThank.scss";
function ModalThank(props) {
    const { isShowModalThank, setIsShowModalThank } = props;
  return (
    <>
      <Modal
        className="modal-thank"
        isOpen={isShowModalThank}
        toggle={function noRefCheck() {}}
      >
        <button className="close" onClick={()=>setIsShowModalThank(false)}>
          ×
        </button>
        <ModalBody>
          <div className="icon-thank">
            <svg
              width="197"
              height="197"
              viewBox="0 0 197 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_94:343)">
                <circle
                  cx="98.5"
                  cy="94.5"
                  r="94.5"
                  fill="#D7ECFF"
                  fill-opacity="0.3"
                />
              </g>
              <g clip-path="url(#clip0_94:343)">
                <path
                  d="M133.225 47.25H64.8745C55.5296 47.25 47.9536 54.7149 47.9536 63.924V108.729C47.9536 117.938 55.5296 125.404 64.8745 125.404H70.1592V148.343L93.7251 125.404H133.225C142.57 125.404 150.145 117.938 150.145 108.729V63.924C150.145 54.7149 142.57 47.25 133.225 47.25Z"
                  fill="#FFC73B"
                />
                <path
                  d="M127.162 118.481C120.508 128.748 120.268 141.322 125.434 151.499C136.832 152.059 148.212 146.705 154.866 136.438C161.521 126.172 161.761 113.597 156.595 103.421C145.196 102.861 133.816 108.216 127.162 118.481Z"
                  fill="#ADC165"
                />
                <path
                  d="M119.437 125.577C119.437 124.626 118.667 123.855 117.715 123.855H93.1857C92.7325 123.855 92.2979 124.034 91.9753 124.352L71.4929 144.584V125.577C71.4929 124.626 70.7216 123.855 69.7698 123.855H64.5188C56.1975 123.855 49.4278 117.085 49.4278 108.764V63.5877C49.4278 55.2673 56.1975 48.4976 64.5188 48.4976H64.7765C65.7282 48.4976 66.4987 47.7263 66.4987 46.7754C66.4987 45.8237 65.7282 45.0532 64.7765 45.0532H64.5188C54.2985 45.0532 45.9834 53.3674 45.9834 63.5877V108.764C45.9834 118.984 54.2985 127.299 64.5188 127.299H68.0476V148.707C68.0476 149.402 68.4653 150.028 69.106 150.296C69.321 150.385 69.5459 150.429 69.7698 150.429C70.215 150.429 70.6522 150.257 70.9802 149.932L93.893 127.299H117.715C118.667 127.299 119.437 126.528 119.437 125.577Z"
                  fill="black"
                />
                <path
                  d="M158.132 102.641C157.851 102.09 157.297 101.731 156.68 101.701C154.77 101.607 152.859 101.672 150.969 101.89V63.5868C150.969 53.3673 142.655 45.0522 132.435 45.0522H72.1665C71.2148 45.0522 70.4443 45.8236 70.4443 46.7744C70.4443 47.7262 71.2148 48.4966 72.1665 48.4966H132.434C140.755 48.4966 147.524 55.2664 147.524 63.5868V102.465C144.692 103.082 141.935 104.048 139.329 105.351C133.802 108.115 129.095 112.332 125.716 117.545C122.338 122.757 120.411 128.776 120.145 134.95C119.9 140.606 121.046 146.264 123.459 151.378L118.604 158.869C118.086 159.668 118.314 160.735 119.112 161.252C119.402 161.439 119.726 161.529 120.048 161.529C120.611 161.529 121.165 161.252 121.494 160.743L126.35 153.252C126.577 153.257 126.804 153.26 127.032 153.26C131.58 153.26 136.154 152.362 140.36 150.633C141.239 150.272 141.659 149.266 141.297 148.386C140.935 147.506 139.929 147.086 139.05 147.447C135.742 148.807 132.183 149.593 128.605 149.773L133.556 142.134L142.23 140.803C143.17 140.658 143.815 139.779 143.672 138.839C143.527 137.899 142.647 137.254 141.708 137.398L136.064 138.264L141.367 130.083L147.608 129.125C148.548 128.981 149.194 128.102 149.049 127.161C148.905 126.221 148.025 125.577 147.086 125.721L143.875 126.213L150.51 115.977C151.027 115.178 150.799 114.112 150.001 113.594C149.203 113.077 148.137 113.305 147.619 114.103L141.357 123.763L140.969 121.232C140.824 120.291 139.947 119.646 139.005 119.79C138.065 119.934 137.42 120.814 137.564 121.754L138.54 128.111L133.546 135.814L132.785 130.849C132.64 129.909 131.761 129.265 130.821 129.409C129.881 129.553 129.235 130.432 129.38 131.372L130.728 140.162L125.711 147.903C122.08 138.566 123.106 127.906 128.607 119.419C134.487 110.346 144.729 104.932 155.501 105.109C160.069 114.876 159.301 126.431 153.421 135.502C150.965 139.292 147.806 142.438 144.035 144.854C143.233 145.367 143 146.433 143.513 147.233C144.026 148.035 145.092 148.268 145.892 147.755C150.08 145.073 153.586 141.581 156.312 137.376C159.69 132.163 161.617 126.144 161.883 119.971C162.143 113.98 160.846 107.988 158.132 102.641Z"
                  fill="black"
                />
                <path
                  d="M62.0684 89.0835C61.2773 89.4937 60.2935 89.6987 59.1167 89.6987C57.5933 89.6987 56.3726 89.2178 55.4546 88.2559C54.5366 87.2939 54.0776 86.0317 54.0776 84.4692C54.0776 82.7896 54.5928 81.4321 55.623 80.397C56.6582 79.3618 57.9644 78.8442 59.5415 78.8442C60.5571 78.8442 61.3994 78.9883 62.0684 79.2764V81.0049C61.3604 80.585 60.5791 80.375 59.7246 80.375C58.5869 80.375 57.6641 80.7388 56.9561 81.4663C56.2529 82.1938 55.9014 83.1655 55.9014 84.3813C55.9014 85.5386 56.231 86.4614 56.8901 87.1499C57.5493 87.8335 58.416 88.1753 59.4902 88.1753C60.4814 88.1753 61.3408 87.9409 62.0684 87.4722V89.0835ZM69.627 89.5229H67.979V88.3511H67.9497C67.4321 89.2495 66.6729 89.6987 65.6719 89.6987C64.9346 89.6987 64.356 89.4985 63.936 89.0981C63.521 88.6978 63.3135 88.168 63.3135 87.5088C63.3135 86.0928 64.1289 85.2676 65.7598 85.0332L67.9863 84.7183C67.9863 83.6489 67.4785 83.1143 66.4629 83.1143C65.5693 83.1143 64.7637 83.4219 64.0459 84.0371V82.5503C64.8369 82.0815 65.75 81.8472 66.7852 81.8472C68.6797 81.8472 69.627 82.7798 69.627 84.645V89.5229ZM67.9863 85.8389L66.4116 86.0586C65.9233 86.1221 65.5547 86.2417 65.3057 86.4175C65.0615 86.5884 64.9395 86.8911 64.9395 87.3257C64.9395 87.6431 65.0518 87.9043 65.2764 88.1094C65.5059 88.3096 65.811 88.4097 66.1919 88.4097C66.7095 88.4097 67.1367 88.229 67.4736 87.8677C67.8154 87.5015 67.9863 87.0425 67.9863 86.4907V85.8389ZM65.8403 78.0239C66.0308 78.0044 66.2383 77.9946 66.4629 77.9946C66.9219 77.9946 67.2979 78.0972 67.5908 78.3022C67.8887 78.5024 68.0376 78.7759 68.0376 79.1226C68.0376 79.4204 67.9399 79.6719 67.7446 79.877C67.5542 80.082 67.3149 80.2017 67.0269 80.2358V80.6021H66.1333V79.7305C66.6948 79.7305 66.9756 79.5547 66.9756 79.2031C66.9756 78.9199 66.7583 78.7783 66.3237 78.7783C66.2261 78.7783 66.0649 78.8003 65.8403 78.8442V78.0239ZM82.9204 89.5229H81.2212V85.436C81.2212 84.6499 81.1089 84.0811 80.8843 83.7295C80.6646 83.3779 80.291 83.2021 79.7637 83.2021C79.3193 83.2021 78.9409 83.4243 78.6284 83.8687C78.3208 84.313 78.167 84.8452 78.167 85.4653V89.5229H76.4604V85.2969C76.4604 83.9004 75.9673 83.2021 74.981 83.2021C74.522 83.2021 74.1436 83.4121 73.8457 83.832C73.5527 84.252 73.4062 84.7964 73.4062 85.4653V89.5229H71.707V82.0229H73.4062V83.2095H73.4355C73.9775 82.3013 74.7661 81.8472 75.8013 81.8472C76.3188 81.8472 76.7705 81.9912 77.1562 82.2793C77.5469 82.5625 77.813 82.936 77.9546 83.3999C78.5112 82.3647 79.3413 81.8472 80.4448 81.8472C82.0952 81.8472 82.9204 82.8652 82.9204 84.9014V89.5229ZM95.6865 80.1772H96.8584C96.9609 80.4458 97.0122 80.7729 97.0122 81.1587C97.0122 82.1255 96.4678 82.709 95.3789 82.9092C96.0283 83.5879 96.353 84.5327 96.353 85.7437C96.353 86.9399 95.999 87.8994 95.291 88.6221C94.5879 89.3398 93.6431 89.6987 92.4565 89.6987C91.2993 89.6987 90.374 89.3496 89.6807 88.6514C88.9873 87.9482 88.6406 87.0181 88.6406 85.8608C88.6406 84.6011 88.9971 83.6172 89.71 82.9092C90.4229 82.2012 91.3848 81.8472 92.5957 81.8472C92.8154 81.8472 93.123 81.8813 93.5186 81.9497C93.7969 81.9985 94.1875 82.0229 94.6904 82.0229C95.0127 82.0229 95.2812 81.9302 95.4961 81.7446C95.7158 81.5591 95.8257 81.3345 95.8257 81.0708C95.8257 80.7388 95.7793 80.4409 95.6865 80.1772ZM92.5298 83.2021C91.8706 83.2021 91.3481 83.4341 90.9624 83.8979C90.5767 84.3618 90.3838 85.0015 90.3838 85.8169C90.3838 86.603 90.5791 87.2231 90.9697 87.6772C91.3604 88.1265 91.8828 88.3511 92.5371 88.3511C93.2061 88.3511 93.7188 88.1289 94.0752 87.6846C94.4365 87.2402 94.6172 86.6079 94.6172 85.7876C94.6172 84.9624 94.4365 84.3252 94.0752 83.876C93.7188 83.4268 93.2036 83.2021 92.5298 83.2021ZM104.988 89.5229H103.289V85.2969C103.289 83.8955 102.793 83.1948 101.802 83.1948C101.285 83.1948 100.857 83.3901 100.521 83.7808C100.184 84.1665 100.015 84.6548 100.015 85.2456V89.5229H98.3086V82.0229H100.015V83.2681H100.044C100.606 82.3208 101.417 81.8472 102.476 81.8472C103.292 81.8472 103.914 82.1133 104.344 82.6455C104.773 83.1729 104.988 83.937 104.988 84.938V89.5229ZM112.928 88.439H112.898V89.5229H111.199V78.4194H112.898V83.3413H112.928C113.509 82.3452 114.358 81.8472 115.477 81.8472C116.424 81.8472 117.164 82.1841 117.696 82.8579C118.233 83.5269 118.501 84.4253 118.501 85.5532C118.501 86.8081 118.201 87.814 117.601 88.5708C117 89.3228 116.18 89.6987 115.14 89.6987C114.163 89.6987 113.426 89.2788 112.928 88.439ZM112.884 85.458V86.3882C112.884 86.9351 113.057 87.3989 113.404 87.7798C113.755 88.1606 114.2 88.3511 114.737 88.3511C115.367 88.3511 115.86 88.1069 116.216 87.6187C116.578 87.1255 116.758 86.4395 116.758 85.5605C116.758 84.8232 116.59 84.2471 116.253 83.832C115.921 83.4121 115.469 83.2021 114.898 83.2021C114.292 83.2021 113.804 83.417 113.433 83.8467C113.067 84.2764 112.884 84.8135 112.884 85.458ZM125.994 89.5229H124.346V88.3511H124.317C123.799 89.2495 123.04 89.6987 122.039 89.6987C121.302 89.6987 120.723 89.4985 120.303 89.0981C119.888 88.6978 119.681 88.168 119.681 87.5088C119.681 86.0928 120.496 85.2676 122.127 85.0332L124.354 84.7183C124.354 83.6489 123.846 83.1143 122.83 83.1143C121.937 83.1143 121.131 83.4219 120.413 84.0371V82.5503C121.204 82.0815 122.117 81.8472 123.152 81.8472C125.047 81.8472 125.994 82.7798 125.994 84.645V89.5229ZM124.354 85.8389L122.779 86.0586C122.291 86.1221 121.922 86.2417 121.673 86.4175C121.429 86.5884 121.307 86.8911 121.307 87.3257C121.307 87.6431 121.419 87.9043 121.644 88.1094C121.873 88.3096 122.178 88.4097 122.559 88.4097C123.077 88.4097 123.504 88.229 123.841 87.8677C124.183 87.5015 124.354 87.0425 124.354 86.4907V85.8389ZM123.064 92.0718C122.815 92.0718 122.601 91.9888 122.42 91.8228C122.244 91.6567 122.156 91.4565 122.156 91.2222C122.156 90.9878 122.247 90.79 122.427 90.6289C122.613 90.4727 122.825 90.3945 123.064 90.3945C123.313 90.3945 123.526 90.4727 123.702 90.6289C123.877 90.79 123.965 90.9878 123.965 91.2222C123.965 91.4565 123.877 91.6567 123.702 91.8228C123.526 91.9888 123.313 92.0718 123.064 92.0718ZM134.754 89.5229H133.055V85.2969C133.055 83.8955 132.559 83.1948 131.568 83.1948C131.05 83.1948 130.623 83.3901 130.286 83.7808C129.949 84.1665 129.781 84.6548 129.781 85.2456V89.5229H128.074V82.0229H129.781V83.2681H129.81C130.372 82.3208 131.182 81.8472 132.242 81.8472C133.057 81.8472 133.68 82.1133 134.109 82.6455C134.539 83.1729 134.754 83.937 134.754 84.938V89.5229Z"
                  fill="#212B35"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_94:343"
                  x="0"
                  y="0"
                  width="197"
                  height="197"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.843137 0 0 0 0 0.92549 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_94:343"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_94:343"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_94:343">
                  <rect
                    width="116.477"
                    height="116.477"
                    fill="white"
                    transform="translate(45.7559 45.0522)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-success">
            <svg
              width="302"
              height="34"
              viewBox="0 0 302 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 2.83333C9.18 2.83333 2.83333 9.18 2.83333 17C2.83333 24.82 9.18 31.1667 17 31.1667C24.82 31.1667 31.1667 24.82 31.1667 17C31.1667 9.18 24.82 2.83333 17 2.83333ZM17 28.3333C10.7525 28.3333 5.66666 23.2475 5.66666 17C5.66666 10.7525 10.7525 5.66667 17 5.66667C23.2475 5.66667 28.3333 10.7525 28.3333 17C28.3333 23.2475 23.2475 28.3333 17 28.3333ZM14.1667 20.0742L23.5025 10.7384L25.5 12.75L14.1667 24.0834L8.5 18.4167L10.4975 16.4192L14.1667 20.0742Z"
                fill="#0FD186"
              />
              <path
                d="M53.4102 15.7383C53.4102 17.3919 53.0586 18.8535 52.3555 20.123C51.6523 21.3926 50.6628 22.3561 49.3867 23.0137C48.1172 23.6712 46.61 24 44.8652 24H39.8457L41.1445 17.9453H39.5137L39.9141 15.9238H41.5645L42.8242 9.99609H47.1797C48.4427 9.99609 49.5462 10.2305 50.4902 10.6992C51.4408 11.168 52.1634 11.8418 52.6582 12.7207C53.1595 13.5931 53.4102 14.599 53.4102 15.7383ZM50.8809 15.9238C50.8809 14.6543 50.513 13.6875 49.7773 13.0234C49.0417 12.3594 48 12.0273 46.6523 12.0273H44.8164L43.9766 15.9238H46.9844L46.5645 17.9453H43.5566L42.6973 21.9785H44.8359C46.75 21.9785 48.2344 21.4414 49.2891 20.3672C50.3503 19.2865 50.8809 17.8053 50.8809 15.9238ZM63.0293 24H60.6367C60.6367 23.8372 60.6562 23.541 60.6953 23.1113C60.7344 22.6751 60.7734 22.3398 60.8125 22.1055H60.7734C60.3633 22.7044 60.0085 23.1406 59.709 23.4141C59.416 23.681 59.097 23.8861 58.752 24.0293C58.4069 24.1725 58.0163 24.2441 57.5801 24.2441C56.6296 24.2441 55.8906 23.9089 55.3633 23.2383C54.8359 22.5677 54.5723 21.64 54.5723 20.4551C54.5723 19.2441 54.8555 18.0918 55.4219 16.998C55.9948 15.9043 56.7565 15.0905 57.707 14.5566C58.6641 14.0228 59.7773 13.7559 61.0469 13.7559C62.0951 13.7559 63.3418 13.9121 64.7871 14.2246L63.4102 20.748C63.3125 21.2103 63.2246 21.7799 63.1465 22.457C63.0684 23.1276 63.0293 23.6419 63.0293 24ZM62.1309 15.6699C61.7272 15.5723 61.2812 15.5234 60.793 15.5234C60.0508 15.5234 59.3965 15.7188 58.8301 16.1094C58.2637 16.4935 57.8079 17.0794 57.4629 17.8672C57.1178 18.6549 56.9453 19.4785 56.9453 20.3379C56.9453 20.9889 57.069 21.4935 57.3164 21.8516C57.5703 22.2031 57.9382 22.3789 58.4199 22.3789C59.123 22.3789 59.7546 22.0111 60.3145 21.2754C60.8809 20.5397 61.2943 19.5664 61.5547 18.3555L62.1309 15.6699ZM64.6406 9.51758C64.3802 10.39 63.9538 11.0671 63.3613 11.5488C62.7754 12.0241 62.082 12.2617 61.2812 12.2617C60.5716 12.2617 59.9857 12.0632 59.5234 11.666C59.0677 11.2624 58.8398 10.722 58.8398 10.0449C58.8398 9.84961 58.8659 9.67383 58.918 9.51758H60.2168L60.1875 9.82031C60.1875 10.1849 60.3014 10.4648 60.5293 10.6602C60.7637 10.8555 61.0566 10.9531 61.4082 10.9531C62.3327 10.9531 62.9544 10.4746 63.2734 9.51758H64.6406ZM75.9688 16.4414C75.9688 16.7734 75.8678 17.418 75.666 18.375L74.4746 24H72.1113L73.3223 18.2188C73.4525 17.5221 73.5176 17.0957 73.5176 16.9395C73.5176 16.5488 73.4134 16.2331 73.2051 15.9922C73.0033 15.7448 72.7135 15.6211 72.3359 15.6211C71.9193 15.6211 71.4733 15.7871 70.998 16.1191C70.5293 16.4447 70.1126 16.8841 69.748 17.4375C69.3835 17.9909 69.1426 18.541 69.0254 19.0879L67.9805 24H65.5977L67.1113 17.0078C67.3457 15.888 67.5182 14.8854 67.6289 14H69.9336C69.8815 14.5534 69.7806 15.2695 69.6309 16.1484H69.6699C70.1908 15.3867 70.7832 14.7975 71.4473 14.3809C72.1178 13.9642 72.7819 13.7559 73.4395 13.7559C74.2467 13.7559 74.8685 13.987 75.3047 14.4492C75.7474 14.9115 75.9688 15.5755 75.9688 16.4414ZM79.6113 28.6973C78.5371 28.6973 77.5052 28.4499 76.5156 27.9551L76.9355 25.9629C77.8665 26.5684 78.8171 26.8711 79.7871 26.8711C80.7962 26.8711 81.597 26.5944 82.1895 26.041C82.7819 25.4876 83.2051 24.599 83.459 23.375L83.7129 22.1543H83.6738C83.1855 22.916 82.6908 23.4564 82.1895 23.7754C81.6947 24.0879 81.1445 24.2441 80.5391 24.2441C79.6016 24.2441 78.8626 23.9186 78.3223 23.2676C77.7884 22.61 77.5215 21.6823 77.5215 20.4844C77.5215 19.2474 77.7917 18.1048 78.332 17.0566C78.8789 16.002 79.6243 15.1882 80.5684 14.6152C81.5124 14.0423 82.5833 13.7559 83.7812 13.7559C84.8424 13.7559 86.1608 13.9056 87.7363 14.2051L85.8711 23.043C85.5716 24.4557 85.1647 25.5527 84.6504 26.334C84.1361 27.1152 83.4655 27.7044 82.6387 28.1016C81.8184 28.4987 80.8092 28.6973 79.6113 28.6973ZM85.0801 15.6699C84.6764 15.5723 84.1816 15.5234 83.5957 15.5234C82.9186 15.5234 82.2936 15.7383 81.7207 16.168C81.1478 16.5977 80.6986 17.1803 80.373 17.916C80.054 18.6517 79.8945 19.4525 79.8945 20.3184C79.8945 20.9889 80.0247 21.5 80.2852 21.8516C80.5456 22.2031 80.9004 22.3789 81.3496 22.3789C81.8053 22.3789 82.2383 22.2227 82.6484 21.9102C83.0586 21.5977 83.4329 21.1126 83.7715 20.4551C84.11 19.7975 84.3542 19.1074 84.5039 18.3848L85.0801 15.6699ZM99.8652 18.668L102.922 24H100.275L97.5312 18.7656H97.4922L96.3789 24H94.0156L97.1699 9.19531H99.5332L97.5898 18.2871H97.6289L102.111 14H104.982L99.8652 18.668ZM103.967 28.6973C103.511 28.6973 103.078 28.6289 102.668 28.4922L103.078 26.5977C103.332 26.7539 103.658 26.832 104.055 26.832C104.875 26.832 105.572 26.3926 106.145 25.5137L107.15 23.9512L105.266 14H107.717L108.654 20.8848L108.693 21.5195L108.674 21.9297H108.723C108.885 21.513 109.042 21.168 109.191 20.8945L112.932 14H115.441L108.713 25.2695C107.971 26.513 107.232 27.3952 106.496 27.916C105.767 28.4368 104.924 28.6973 103.967 28.6973ZM110.627 12.2617H108.879L111.828 9.07812H114.025L110.627 12.2617ZM130.627 16.4512C130.627 16.8027 130.529 17.444 130.334 18.375L129.143 24H126.779L127.99 18.2188C128.12 17.5221 128.186 17.0957 128.186 16.9395C128.186 16.0605 127.788 15.6211 126.994 15.6211C126.571 15.6211 126.122 15.7904 125.646 16.1289C125.178 16.4609 124.761 16.9004 124.396 17.4473C124.038 17.9941 123.801 18.5508 123.684 19.1172L122.639 24H120.266L123.42 9.19531H125.783L124.299 16.1387H124.338C124.878 15.3835 125.477 14.7975 126.135 14.3809C126.792 13.9642 127.45 13.7559 128.107 13.7559C128.941 13.7559 129.569 13.9935 129.992 14.4688C130.415 14.9375 130.627 15.5983 130.627 16.4512ZM141.936 17.8379C141.936 19.0488 141.691 20.1556 141.203 21.1582C140.721 22.1543 140.051 22.9193 139.191 23.4531C138.339 23.9805 137.352 24.2441 136.232 24.2441C134.976 24.2441 133.986 23.8828 133.264 23.1602C132.548 22.4375 132.189 21.4382 132.189 20.1621C132.189 18.9512 132.43 17.8509 132.912 16.8613C133.4 15.8717 134.071 15.1068 134.924 14.5664C135.777 14.026 136.766 13.7559 137.893 13.7559C139.13 13.7559 140.113 14.1204 140.842 14.8496C141.571 15.5723 141.936 16.5684 141.936 17.8379ZM139.553 17.8965C139.553 17.1999 139.39 16.6465 139.064 16.2363C138.745 15.8262 138.299 15.6211 137.727 15.6211C137.134 15.6211 136.597 15.8262 136.115 16.2363C135.633 16.64 135.253 17.1901 134.973 17.8867C134.699 18.5833 134.562 19.3288 134.562 20.123C134.562 20.8262 134.725 21.3796 135.051 21.7832C135.383 22.1803 135.832 22.3789 136.398 22.3789C137.004 22.3789 137.548 22.1771 138.029 21.7734C138.518 21.3633 138.892 20.8099 139.152 20.1133C139.419 19.4167 139.553 18.6777 139.553 17.8965ZM135.686 27.4375C135.334 27.4375 135.041 27.3236 134.807 27.0957C134.572 26.8743 134.455 26.6042 134.455 26.2852C134.455 25.9727 134.569 25.7057 134.797 25.4844C135.031 25.2695 135.327 25.1621 135.686 25.1621C136.044 25.1621 136.337 25.2695 136.564 25.4844C136.799 25.6992 136.916 25.9661 136.916 26.2852C136.916 26.6107 136.799 26.8841 136.564 27.1055C136.33 27.3268 136.037 27.4375 135.686 27.4375ZM151.242 16.3633C150.995 16.1549 150.686 15.9792 150.314 15.8359C149.95 15.6927 149.546 15.6211 149.104 15.6211C148.485 15.6211 147.919 15.8034 147.404 16.168C146.896 16.5326 146.48 17.0599 146.154 17.75C145.829 18.4336 145.666 19.153 145.666 19.9082C145.666 20.7155 145.845 21.3307 146.203 21.7539C146.568 22.1706 147.085 22.3789 147.756 22.3789C148.16 22.3789 148.586 22.2975 149.035 22.1348C149.491 21.972 149.898 21.7734 150.256 21.5391L149.846 23.5215C148.921 24.0033 148.003 24.2441 147.092 24.2441C145.907 24.2441 144.979 23.8828 144.309 23.1602C143.638 22.431 143.303 21.4251 143.303 20.1426C143.303 18.9837 143.553 17.9095 144.055 16.9199C144.556 15.9238 145.253 15.1491 146.145 14.5957C147.043 14.0358 148.059 13.7559 149.191 13.7559C149.667 13.7559 150.139 13.8145 150.607 13.9316C151.076 14.0423 151.441 14.1855 151.701 14.3613L151.242 16.3633ZM162.199 24H159.797L158.352 14H160.695L161.34 19.918C161.411 20.4909 161.447 21.0378 161.447 21.5586L161.438 21.8418H161.477C161.757 21.1777 162.056 20.5397 162.375 19.9277L165.51 14H168.117L162.199 24ZM172.902 10.6113C172.902 11.002 172.762 11.3275 172.482 11.5879C172.202 11.8418 171.861 11.9688 171.457 11.9688C171.066 11.9688 170.734 11.8516 170.461 11.6172C170.194 11.3828 170.061 11.0736 170.061 10.6895C170.061 10.2923 170.204 9.97005 170.49 9.72266C170.777 9.47526 171.122 9.35156 171.525 9.35156C171.903 9.35156 172.225 9.47201 172.492 9.71289C172.766 9.94727 172.902 10.2467 172.902 10.6113ZM170.246 24.166C169.53 24.166 168.983 23.987 168.605 23.6289C168.234 23.2643 168.049 22.7467 168.049 22.0762C168.049 21.7376 168.085 21.4056 168.156 21.0801L169.611 14H171.984L170.656 20.2988C170.52 20.9499 170.451 21.3698 170.451 21.5586C170.451 22.0534 170.734 22.3008 171.301 22.3008C171.633 22.3008 171.929 22.2487 172.189 22.1445L171.818 23.9414C171.258 24.0911 170.734 24.166 170.246 24.166ZM182.746 16.4609C182.746 17.6654 182.186 18.554 181.066 19.127C179.947 19.6934 178.247 19.9896 175.969 20.0156L175.949 20.123V20.3184C175.949 20.9954 176.151 21.5228 176.555 21.9004C176.958 22.2715 177.521 22.457 178.244 22.457C178.739 22.457 179.266 22.3691 179.826 22.1934C180.393 22.0111 180.91 21.7799 181.379 21.5L180.988 23.4434C180.005 23.9772 178.921 24.2441 177.736 24.2441C176.441 24.2441 175.428 23.8828 174.699 23.1602C173.977 22.4375 173.615 21.4186 173.615 20.1035C173.615 18.9707 173.863 17.9128 174.357 16.9297C174.852 15.9401 175.542 15.1654 176.428 14.6055C177.313 14.0391 178.283 13.7559 179.338 13.7559C180.386 13.7559 181.216 14.0033 181.828 14.498C182.44 14.9928 182.746 15.6471 182.746 16.4609ZM180.461 16.5195C180.461 16.194 180.34 15.9368 180.1 15.748C179.865 15.5527 179.54 15.4551 179.123 15.4551C178.433 15.4551 177.808 15.7383 177.248 16.3047C176.688 16.8711 176.32 17.5677 176.145 18.3945C179.022 18.3945 180.461 17.7695 180.461 16.5195ZM181.037 12.2617L179.914 10.2012L177.912 12.2617H176.291L179.152 9.04883H181.018L182.551 12.2617H181.037ZM193.742 16.4414C193.742 16.7734 193.641 17.418 193.439 18.375L192.248 24H189.885L191.096 18.2188C191.226 17.5221 191.291 17.0957 191.291 16.9395C191.291 16.5488 191.187 16.2331 190.979 15.9922C190.777 15.7448 190.487 15.6211 190.109 15.6211C189.693 15.6211 189.247 15.7871 188.771 16.1191C188.303 16.4447 187.886 16.8841 187.521 17.4375C187.157 17.9909 186.916 18.541 186.799 19.0879L185.754 24H183.371L184.885 17.0078C185.119 15.888 185.292 14.8854 185.402 14H187.707C187.655 14.5534 187.554 15.2695 187.404 16.1484H187.443C187.964 15.3867 188.557 14.7975 189.221 14.3809C189.891 13.9642 190.555 13.7559 191.213 13.7559C192.02 13.7559 192.642 13.987 193.078 14.4492C193.521 14.9115 193.742 15.5755 193.742 16.4414ZM207.287 15.8164H204.855L203.898 20.3379C203.781 20.9043 203.723 21.2852 203.723 21.4805C203.723 21.7799 203.791 21.998 203.928 22.1348C204.064 22.265 204.289 22.3301 204.602 22.3301C204.901 22.3301 205.357 22.2129 205.969 21.9785L205.578 23.8242C204.927 24.0781 204.283 24.2051 203.645 24.2051C202.102 24.2051 201.33 23.4531 201.33 21.9492C201.33 21.5716 201.398 21.0768 201.535 20.4648L202.512 15.8164H200.91L201.34 14H202.893L203.41 11.6074L205.891 10.9531L205.256 14H207.707L207.287 15.8164ZM217.795 16.4512C217.795 16.8027 217.697 17.444 217.502 18.375L216.311 24H213.947L215.158 18.2188C215.288 17.5221 215.354 17.0957 215.354 16.9395C215.354 16.0605 214.956 15.6211 214.162 15.6211C213.739 15.6211 213.29 15.7904 212.814 16.1289C212.346 16.4609 211.929 16.9004 211.564 17.4473C211.206 17.9941 210.969 18.5508 210.852 19.1172L209.807 24H207.434L210.588 9.19531H212.951L211.467 16.1387H211.506C212.046 15.3835 212.645 14.7975 213.303 14.3809C213.96 13.9642 214.618 13.7559 215.275 13.7559C216.109 13.7559 216.737 13.9935 217.16 14.4688C217.583 14.9375 217.795 15.5983 217.795 16.4512ZM227.814 24H225.422C225.422 23.8372 225.441 23.541 225.48 23.1113C225.52 22.6751 225.559 22.3398 225.598 22.1055H225.559C225.148 22.7044 224.794 23.1406 224.494 23.4141C224.201 23.681 223.882 23.8861 223.537 24.0293C223.192 24.1725 222.801 24.2441 222.365 24.2441C221.415 24.2441 220.676 23.9089 220.148 23.2383C219.621 22.5677 219.357 21.64 219.357 20.4551C219.357 19.2441 219.641 18.0918 220.207 16.998C220.78 15.9043 221.542 15.0905 222.492 14.5566C223.449 14.0228 224.562 13.7559 225.832 13.7559C226.88 13.7559 228.127 13.9121 229.572 14.2246L228.195 20.748C228.098 21.2103 228.01 21.7799 227.932 22.457C227.854 23.1276 227.814 23.6419 227.814 24ZM226.916 15.6699C226.512 15.5723 226.066 15.5234 225.578 15.5234C224.836 15.5234 224.182 15.7188 223.615 16.1094C223.049 16.4935 222.593 17.0794 222.248 17.8672C221.903 18.6549 221.73 19.4785 221.73 20.3379C221.73 20.9889 221.854 21.4935 222.102 21.8516C222.355 22.2031 222.723 22.3789 223.205 22.3789C223.908 22.3789 224.54 22.0111 225.1 21.2754C225.666 20.5397 226.079 19.5664 226.34 18.3555L226.916 15.6699ZM225.91 12.2617L223.479 9.07812H225.51L227.541 12.2617H225.91ZM240.754 16.4414C240.754 16.7734 240.653 17.418 240.451 18.375L239.26 24H236.896L238.107 18.2188C238.238 17.5221 238.303 17.0957 238.303 16.9395C238.303 16.5488 238.199 16.2331 237.99 15.9922C237.788 15.7448 237.499 15.6211 237.121 15.6211C236.704 15.6211 236.258 15.7871 235.783 16.1191C235.314 16.4447 234.898 16.8841 234.533 17.4375C234.169 17.9909 233.928 18.541 233.811 19.0879L232.766 24H230.383L231.896 17.0078C232.131 15.888 232.303 14.8854 232.414 14H234.719C234.667 14.5534 234.566 15.2695 234.416 16.1484H234.455C234.976 15.3867 235.568 14.7975 236.232 14.3809C236.903 13.9642 237.567 13.7559 238.225 13.7559C239.032 13.7559 239.654 13.987 240.09 14.4492C240.533 14.9115 240.754 15.5755 240.754 16.4414ZM252.307 16.4512C252.307 16.8027 252.209 17.444 252.014 18.375L250.822 24H248.459L249.67 18.2188C249.8 17.5221 249.865 17.0957 249.865 16.9395C249.865 16.0605 249.468 15.6211 248.674 15.6211C248.251 15.6211 247.801 15.7904 247.326 16.1289C246.857 16.4609 246.441 16.9004 246.076 17.4473C245.718 17.9941 245.48 18.5508 245.363 19.1172L244.318 24H241.945L245.1 9.19531H247.463L245.979 16.1387H246.018C246.558 15.3835 247.157 14.7975 247.814 14.3809C248.472 13.9642 249.13 13.7559 249.787 13.7559C250.62 13.7559 251.249 13.9935 251.672 14.4688C252.095 14.9375 252.307 15.5983 252.307 16.4512ZM267.316 16.3633C267.069 16.1549 266.76 15.9792 266.389 15.8359C266.024 15.6927 265.62 15.6211 265.178 15.6211C264.559 15.6211 263.993 15.8034 263.479 16.168C262.971 16.5326 262.554 17.0599 262.229 17.75C261.903 18.4336 261.74 19.153 261.74 19.9082C261.74 20.7155 261.919 21.3307 262.277 21.7539C262.642 22.1706 263.16 22.3789 263.83 22.3789C264.234 22.3789 264.66 22.2975 265.109 22.1348C265.565 21.972 265.972 21.7734 266.33 21.5391L265.92 23.5215C264.995 24.0033 264.077 24.2441 263.166 24.2441C261.981 24.2441 261.053 23.8828 260.383 23.1602C259.712 22.431 259.377 21.4251 259.377 20.1426C259.377 18.9837 259.628 17.9095 260.129 16.9199C260.63 15.9238 261.327 15.1491 262.219 14.5957C263.117 14.0358 264.133 13.7559 265.266 13.7559C265.741 13.7559 266.213 13.8145 266.682 13.9316C267.15 14.0423 267.515 14.1855 267.775 14.3613L267.316 16.3633ZM278.107 17.8379C278.107 19.0488 277.863 20.1556 277.375 21.1582C276.893 22.1543 276.223 22.9193 275.363 23.4531C274.51 23.9805 273.524 24.2441 272.404 24.2441C271.148 24.2441 270.158 23.8828 269.436 23.1602C268.719 22.4375 268.361 21.4382 268.361 20.1621C268.361 18.9512 268.602 17.8509 269.084 16.8613C269.572 15.8717 270.243 15.1068 271.096 14.5664C271.949 14.026 272.938 13.7559 274.064 13.7559C275.301 13.7559 276.285 14.1204 277.014 14.8496C277.743 15.5723 278.107 16.5684 278.107 17.8379ZM275.725 17.8965C275.725 17.1999 275.562 16.6465 275.236 16.2363C274.917 15.8262 274.471 15.6211 273.898 15.6211C273.306 15.6211 272.769 15.8262 272.287 16.2363C271.805 16.64 271.424 17.1901 271.145 17.8867C270.871 18.5833 270.734 19.3288 270.734 20.123C270.734 20.8262 270.897 21.3796 271.223 21.7832C271.555 22.1803 272.004 22.3789 272.57 22.3789C273.176 22.3789 273.719 22.1771 274.201 21.7734C274.689 21.3633 275.064 20.8099 275.324 20.1133C275.591 19.4167 275.725 18.6777 275.725 17.8965ZM275.842 12.2617L274.719 10.2012L272.717 12.2617H271.096L273.957 9.04883H275.822L277.355 12.2617H275.842ZM289.523 16.4414C289.523 16.7734 289.423 17.418 289.221 18.375L288.029 24H285.666L286.877 18.2188C287.007 17.5221 287.072 17.0957 287.072 16.9395C287.072 16.5488 286.968 16.2331 286.76 15.9922C286.558 15.7448 286.268 15.6211 285.891 15.6211C285.474 15.6211 285.028 15.7871 284.553 16.1191C284.084 16.4447 283.667 16.8841 283.303 17.4375C282.938 17.9909 282.697 18.541 282.58 19.0879L281.535 24H279.152L280.666 17.0078C280.9 15.888 281.073 14.8854 281.184 14H283.488C283.436 14.5534 283.335 15.2695 283.186 16.1484H283.225C283.745 15.3867 284.338 14.7975 285.002 14.3809C285.673 13.9642 286.337 13.7559 286.994 13.7559C287.801 13.7559 288.423 13.987 288.859 14.4492C289.302 14.9115 289.523 15.5755 289.523 16.4414ZM293.166 28.6973C292.092 28.6973 291.06 28.4499 290.07 27.9551L290.49 25.9629C291.421 26.5684 292.372 26.8711 293.342 26.8711C294.351 26.8711 295.152 26.5944 295.744 26.041C296.337 25.4876 296.76 24.599 297.014 23.375L297.268 22.1543H297.229C296.74 22.916 296.245 23.4564 295.744 23.7754C295.249 24.0879 294.699 24.2441 294.094 24.2441C293.156 24.2441 292.417 23.9186 291.877 23.2676C291.343 22.61 291.076 21.6823 291.076 20.4844C291.076 19.2474 291.346 18.1048 291.887 17.0566C292.434 16.002 293.179 15.1882 294.123 14.6152C295.067 14.0423 296.138 13.7559 297.336 13.7559C298.397 13.7559 299.715 13.9056 301.291 14.2051L299.426 23.043C299.126 24.4557 298.719 25.5527 298.205 26.334C297.691 27.1152 297.02 27.7044 296.193 28.1016C295.373 28.4987 294.364 28.6973 293.166 28.6973ZM298.635 15.6699C298.231 15.5723 297.736 15.5234 297.15 15.5234C296.473 15.5234 295.848 15.7383 295.275 16.168C294.702 16.5977 294.253 17.1803 293.928 17.916C293.609 18.6517 293.449 19.4525 293.449 20.3184C293.449 20.9889 293.579 21.5 293.84 21.8516C294.1 22.2031 294.455 22.3789 294.904 22.3789C295.36 22.3789 295.793 22.2227 296.203 21.9102C296.613 21.5977 296.988 21.1126 297.326 20.4551C297.665 19.7975 297.909 19.1074 298.059 18.3848L298.635 15.6699Z"
                fill="#0FD186"
              />
            </svg>
          </div>
          <div className="content-text">
            Học viện cảm ơn bạn đã tin tưởng và lựa chọn tìm hiểu về Odin
            Language Academy. Đội ngũ chăm sóc học viên sẽ gửi lại cho bạn về
            thông tin giới thiệu về học viện và tư vấn chi tiết về những khoá
            học qua email cho bạn.
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalThank;

const SidePanelWrapper = styled.div`
  display: flex;
  width: 58px;
  padding: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid #E2E2E5;
  background: #F8F9FF;
  box-shadow: 0 4px 20px 0 rgba(11, 87, 111, 0.15)
  font-family: sans-serif;
  box-sizing: border-box;
`;

const ButtonIconWrapper = styled.button`
  display: flex;
  box-sizing: border-box;
  overlow: hidden;
  width: 46px;
  height: 46px;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonActionWrapper = styled.button`
  display: flex;
  box-sizing: border-box;
  overlow: hidden;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 22px;
  outline: none;
  border: none;
  padding: 0;
  background: ${(props) => (props.$active ? "#384BFF" : "#FFFFFF")};
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(45, 52, 60, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImgButtonWrapper = styled.span`
  display: flex;
  box-sizing: border-box;
  overlow: hidden;
  cursor: pointer;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
`;

// todo: replace on iconDefault. Now - from layout
const iconDefaultProfile = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
  >
    <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" fill="#02193A" />
    <rect x="0.5" y="0.5" width="45" height="45" rx="22.5" stroke="#E2E2E5" />
    <path
      d="M19.4547 36C19.1732 36 18.8908 35.8999 18.6645 35.696C18.1791 35.2602 18.1398 34.512 18.5765 34.0275C18.7009 33.8891 18.8216 33.7498 18.9385 33.6095L16.2553 30.9262C15.7933 30.4642 15.7933 29.7169 16.2553 29.2549C16.7173 28.7929 17.4646 28.7929 17.9266 29.2549L20.2983 31.6267C20.6097 31.0543 20.8669 30.4614 21.0755 29.8366L19.8017 28.5628C19.3397 28.1008 19.3397 27.3535 19.8017 26.8915C20.2637 26.4295 21.011 26.4295 21.473 26.8915L21.7404 27.159C21.9724 26.7437 22.4493 26.4865 22.9422 26.566C23.5884 26.6596 24.0364 27.2581 23.9429 27.9044C23.8475 28.5609 23.7184 29.1922 23.5538 29.8011C23.552 29.8076 23.5501 29.8151 23.5482 29.8226C22.9581 31.9821 21.9134 33.8536 20.3348 35.6081C20.1019 35.8681 19.7793 35.9991 19.4557 35.9991L19.4547 36ZM11.1826 27.7267C10.859 27.7267 10.5373 27.5948 10.3035 27.3358C9.86674 26.8513 9.90602 26.1031 10.3914 25.6672C16.1599 20.4738 21.8676 22.305 27.2134 21.6475C27.0525 21.2257 27.1433 20.7309 27.4827 20.3914C27.9448 19.9294 28.692 19.9294 29.154 20.3914L29.8339 21.0704C30.4315 20.8694 31.0273 20.6159 31.623 20.2932L31.6193 20.2895C31.1573 19.8275 31.1573 19.0802 31.6193 18.6182C32.0813 18.1562 32.8285 18.1562 33.2905 18.6182L33.6104 18.9371C33.7488 18.8211 33.8881 18.7005 34.0284 18.5752C34.5129 18.1375 35.2611 18.1777 35.6969 18.6631C36.1327 19.1485 36.0944 19.8958 35.609 20.3316C29.8386 25.5251 24.1243 23.6939 18.787 24.3513C18.9469 24.7731 18.8571 25.2679 18.5176 25.6074C18.0556 26.0694 17.3084 26.0694 16.8464 25.6074L16.1674 24.9284C15.5688 25.1276 14.9731 25.3829 14.3783 25.7056L14.3811 25.7093C14.8431 26.1714 14.8431 26.9186 14.3811 27.3806C13.9191 27.8427 13.1718 27.8427 12.7098 27.3806L12.3909 27.0617C12.2516 27.1768 12.1122 27.2974 11.9729 27.4227C11.7475 27.6257 11.4641 27.7267 11.1826 27.7267ZM25.3635 19.4534C25.0614 19.4534 24.7584 19.3383 24.5284 19.1073L24.2609 18.8399C24.028 19.2551 23.5529 19.5001 23.0591 19.4337C22.4129 19.3402 21.9649 18.7407 22.0584 18.0954C22.4933 15.0923 23.6399 12.6447 25.6675 10.3907C26.1052 9.90625 26.8505 9.86697 27.3359 10.3028C27.8204 10.7386 27.8596 11.4868 27.4238 11.9713C27.2994 12.1097 27.1779 12.2491 27.0619 12.3894L29.7451 15.0726C30.2071 15.5346 30.2071 16.2819 29.7451 16.7439C29.2831 17.206 28.5358 17.206 28.0738 16.7439L25.7021 14.3721C25.3897 14.9464 25.1316 15.5421 24.923 16.1688C24.9558 16.1949 24.9876 16.2239 25.0175 16.2539L26.1996 17.436C26.6616 17.898 26.6616 18.6453 26.1996 19.1073C25.9686 19.3383 25.6665 19.4534 25.3644 19.4534H25.3635Z"
      fill="white"
    />
  </svg>
);

const iconActiveGuide = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <rect width="18" height="18" rx="9" fill="white" />
    <path
      d="M7.84446 12.85H9.60281V14.5H7.84446V12.85ZM9.01669 3.5C12.1524 3.621 13.5181 6.591 11.6542 8.8185C11.1677 9.3685 10.3823 9.7315 9.9955 10.1935C9.60281 10.65 9.60281 11.2 9.60281 11.75H7.84446C7.84446 10.8315 7.84446 10.056 8.23716 9.506C8.62399 8.956 9.40939 8.6315 9.89586 8.2685C11.3143 7.0365 10.9626 5.293 9.01669 5.15C8.55035 5.15 8.10311 5.32384 7.77335 5.63327C7.4436 5.94271 7.25835 6.36239 7.25835 6.8H5.5C5.5 5.92479 5.87051 5.08542 6.53001 4.46655C7.18952 3.84768 8.08401 3.5 9.01669 3.5Z"
      fill="#384BFF"
    />
  </svg>
);

const iconDefaultGuide = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <rect width="18" height="18" rx="9" fill="#02193A" />
    <path
      d="M7.84446 12.85H9.60281V14.5H7.84446V12.85ZM9.01669 3.5C12.1524 3.621 13.5181 6.591 11.6542 8.8185C11.1677 9.3685 10.3823 9.7315 9.9955 10.1935C9.60281 10.65 9.60281 11.2 9.60281 11.75H7.84446C7.84446 10.8315 7.84446 10.056 8.23716 9.506C8.62399 8.956 9.40939 8.6315 9.89586 8.2685C11.3143 7.0365 10.9626 5.293 9.01669 5.15C8.55035 5.15 8.10311 5.32384 7.77335 5.63327C7.4436 5.94271 7.25835 6.36239 7.25835 6.8H5.5C5.5 5.92479 5.87051 5.08542 6.53001 4.46655C7.18952 3.84768 8.08401 3.5 9.01669 3.5Z"
      fill="white"
    />
  </svg>
);

return (
  <SidePanelWrapper>
    {/* todo: need conditions - default or icon mutaton*/}
    <ButtonIconWrapper>{iconDefaultProfile}</ButtonIconWrapper>
    {/* todo: need  conditions for buttons*/}
    {/* todo: need  arrays  buttons*/}
    {/* todo: need  conditions  icons*/}
    <ButtonActionWrapper>
      <ImgButtonWrapper>{iconDefaultGuide}</ImgButtonWrapper>
    </ButtonActionWrapper>
    <ButtonActionWrapper $active>
      <ImgButtonWrapper>{iconActiveGuide}</ImgButtonWrapper>
    </ButtonActionWrapper>
  </SidePanelWrapper>
);

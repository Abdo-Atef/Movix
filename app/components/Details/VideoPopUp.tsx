interface VideoPopUpProps {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  videoKey: string | null;
  setVideoKey: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function VideoPopUp({
  modalShow,
  setModalShow,
  videoKey,
  setVideoKey,
}: VideoPopUpProps) {
  const hidePopUp = () => {
    setModalShow(false);
    setVideoKey(null);
  };

  return (
    <div
      className={`
      fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 duration-300
        ${modalShow ? "opacity-100 visible" : "opacity-0 invisible"} `}
    >
      <div onClick={hidePopUp} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10"></div>
      <div
        className={`absolute z-50 w-full max-w-[800px] sm:h-[450px] h-[280px] ${
          modalShow
            ? "opacity-100 visible scale-100 duration-300"
            : "opacity-0 invisible -scale-50"
        }`}
      >
        <div className="w-full h-full">
          <div className="flex justify-end items-center mb-2">
            <button onClick={hidePopUp} className="text-white">
              close
            </button>
          </div>
          <div className="bg-white w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoKey}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share recommended: false"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

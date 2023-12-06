import editor1 from "../../../public/assets/editorpick1.png";
import editor2 from "../../../public/assets/editorpick2.png";
import editor3 from "../../../public/assets/editorpick3.png";
import editor4 from "../../../public/assets/editorpick4.png";

const EditorPick = () => {
  return (
    <div>
      <div className="pt-10">
        <div className="flex flex-col max-w-[40rem] mx-auto text-center gap-2 flex-wrap">
          <h2 className="text-2xl font-bold">EDITOR PICK</h2>
          <p className="text-sm font-normal text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="bg-[#FAFAFA] mt-10 pb-10">
          <div className="flex gap-5 w-fit mx-auto flex-wrap font-bold text-base">
            <div className="relative ">
              <img src={editor1} className="object-cover" />
              <a
                href="#"
                className="absolute left-7 bottom-7 py-2 px-[4rem] bg-white"
              >
                MEN
              </a>
            </div>
            <div className="relative">
              <img src={editor2} className="object-cover" />
              <a
                href="#"
                className="absolute left-7 bottom-7 py-2 px-6 bg-white"
              >
                WOMEN
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <img src={editor3} className="object-cover" />
                <a
                  href=""
                  className="absolute left-7 bottom-7 py-2 px-4 bg-white"
                >
                  ACCESSORIES
                </a>
              </div>
              <div className="relative">
                <img src={editor4} className="object-cover" />
                <a
                  href=""
                  className="absolute left-7 bottom-7 py-2 px-7 bg-white"
                >
                  KIDS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;

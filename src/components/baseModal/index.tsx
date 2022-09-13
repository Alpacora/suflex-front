import { IModal } from "../../interfaces";

export function BaseModal({ title, children, handleCloseModal }: IModal) {
  return (
    <div className="h-full w-full flex justify-center items-center fixed z-50">
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="flex flex-col justify-center items-center bg-white w-[40vw] h-[60vh] rounded-md">
          <div className="flex flex-row w-full h-[6vh] justify-between items-center px-5">
            <div className="flex-1" />
            <h1 className="flex-1 text-xl mb-4 font-bold text-slate-500">{title}</h1>
            <div className="flex-1 flex justify-end items-end">
              <button className="inline-block" onClick={handleCloseModal}>X</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-[80%] w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

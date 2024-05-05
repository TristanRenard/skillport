import { Dialog } from "@headlessui/react"

const PopUp = ({ open, onClose, clickBtn, message, success, btnText }) => (
  <Dialog as="div" open={open} onClose={onClose}>
    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-50" />
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-2 w-11/12 md:w-1/4 h-1/4 items-center bg-white p-10 rounded-xl z-50">
      <Dialog.Title as="h3" className="text-4xl font-bold text-primary z-50">
        {success ? "Success" : "Error"}
      </Dialog.Title>
      <Dialog.Description as="p" className="text-lg text-center font-semibold text-quaternary z-50">
        {!success && "An error occurred"} <br />
        {message}
      </Dialog.Description>
      <button onClick={clickBtn} className="btn-primary w-full bg-gradient-to-br from-primary to-[#df9884] rounded-xl p-2 text-quinary font-semibold border-tertiary border-2 disabled:opacity-50 z-50">
        {btnText}
      </button>
    </div>
  </Dialog>
)

export default PopUp

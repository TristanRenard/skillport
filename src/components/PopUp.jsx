import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"

const PopUp = ({ open, onClose, clickBtn, message, success, btnText }) => (
  <Dialog as="div" open={open} onClose={onClose}>
    <DialogBackdrop className="fixed inset-0 bg-black/30 z-50" />
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <DialogPanel className="flex flex-col justify-center gap-2 w-11/12 md:w-1/4 min-h-[25vh] items-center bg-white p-10 rounded-xl">
        <DialogTitle as="h3" className="text-4xl font-bold text-primary">
          {success ? "Success" : "Error"}
        </DialogTitle>
        <Description as="p" className="text-lg text-center font-semibold text-quaternary">
          {!success && "An error occurred"} <br />
          {message}
        </Description>
        <button onClick={clickBtn} className="btn-primary w-full bg-gradient-to-br from-primary to-[#df9884] rounded-xl p-2 text-quinary font-semibold border-tertiary border-2 disabled:opacity-50">
          {btnText}
        </button>
      </DialogPanel>
    </div>
  </Dialog>
)

export default PopUp

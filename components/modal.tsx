interface ModalProps {
    title: string;
    children?: React.ReactNode;
    status: boolean;
    cancelButtonLabel: string;
    saveButtonLabel: string;
    handleClose: () => void;
    handleSave: () => void;
}

const ModalDialog = (props: ModalProps) => {
return (
    <>
    {props.status && (
        <div>
            <div id="dialog" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                <div className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in">
                </div>
                <div tabIndex={0} className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start justify-center">
                                <div className="mt-3 text-center sm:mt-0 sm:text-left w-100">
                                    <h3 id="dialog-title" className="text-base font-semibold text-black">{props.title}</h3>
                                    <div className="mt-2">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button 
                            type="button"  
                            className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto cursor-pointer">
                            {props.saveButtonLabel}
                        </button>
                        <button 
                            type="button"  
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-black inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto cursor-pointer"
                            onClick={props.handleClose}>
                            {props.cancelButtonLabel}
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )}
        
    </>
   
    )
}

export default ModalDialog
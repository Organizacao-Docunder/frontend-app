import CustomModal from "@/components/CustomModal";

export default function ModalSecretAnswers({ isModalOpen, setIsModalOpen }) {
  return (
    <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} customStyle={"max-w-3xl"}>
      <div className="flex flex-col py-1 px-4 w-full justify-center">
        <h3 className="text-h3 font-weight-600 text-neutral-2">Termos e condições de uso</h3>
        <div className="flex items-center gap-1 mb-3">
          <span className="tag">#Python</span>
          <span className="tag">#Dev</span>
        </div>
        <div className="flex flex-col gap-2 max-h-72 overflow-y-auto">
          <h5 className="text-neutral-2 font-weight-500">1. Lorem ipsum dolor sit amet consectetur</h5>
          <p className="text-neutral-2">
            Massa mauris lacus suspendisse in. Ligula blandit suspendisse morbi tempus malesuada cursus amet. Sed tellus volutpat consequat tincidunt leo est ut commodo est. Porta laoreet mi diam in scelerisque mauris. Cursus nibh volutpat nec fringilla mi. Donec at laoreet eget velit at ac quam risus. Interdum cras volutpat odio scelerisque dolor maecenas. Mauris faucibus aliquam condimentum aliquam tellus ipsum tellus aliquam condimentum. Praesent tempor non id nunc ut posuere nulla libero. Urna nisl porta ut augue ornare. Hac semper pulvinar tincidunt donec erat faucibus senectus aliquet.
          </p>
          <h5 className="text-neutral-2 font-weight-500">
            Tincidunt egestas facilisis ipsum libero consequat
          </h5>
          <p className="text-neutral-2">
            Risus lacus accumsan nunc velit leo sed turpis lacus. Urna sapien malesuada non lectus quis arcu nunc venenatis ut. Facilisis pretium donec lorem ridiculus ornare. Condimentum nec pharetra odio leo velit. Ac amet tortor sagittis pellentesque in tincidunt volutpat. Est nunc adipiscing mattis elit malesuada nulla. Venenatis velit arcu ornare sit odio tempor eget sodales urna.Lorem ipsum dolor sit amet consectetur. Massa mauris lacus suspendisse in. Ligula blandit suspendisse morbi tempus malesuada cursus amet. Sed tellus volutpat consequat tincidunt leo est ut commodo est. Porta laoreet mi diam in scelerisque mauris. Cursus nibh volutpat nec fringilla mi. Donec at laoreet eget velit at ac quam risus. Interdum cras volutpat odio scelerisque dolor maecenas. Mauris faucibus aliquam condimentum aliquam tellus ipsum tellus aliquam condimentum. Praesent tempor non id nunc ut posuere nulla libero. Urna nisl porta ut augue ornare. Hac semper pulvinar tincidunt donec erat faucibus senectus aliquet. Tincidunt egestas facilisis ipsum libero consequat. Risus lacus accumsan nunc velit leo sed turpis lacus. Urna sapien malesuada non lectus quis arcu nunc venenatis ut. Facilisis pretium donec lorem ridiculus ornare. Condimentum nec pharetra odio leo velit. Ac amet tortor sagittis pellentesque in tincidunt volutpat. Est nunc adipiscing mattis elit malesuada nulla. Venenatis velit arcu ornare sit odio tempor eget sodales urna.Lorem ipsum dolor sit amet consectetur. Massa mauris lacus suspendisse in. Ligula blandit suspendisse morbi tempus malesuada cursus amet. Sed tellus volutpat consequat tincidunt leo est ut commodo est. Porta laoreet mi diam in scelerisque mauris. Cursus nibh volutpat nec fringilla mi.
          </p>
        </div>
        <div className="flex justify-center w-full gap-20">
          <button onClick={() => setIsModalOpen(false)} className="rounded-lg py-2 px-4 mt-8 bg-primary-1 text-h5 text-neutral-1 font-weight-bold">Fechar</button>
        </div>
      </div>
    </CustomModal>
  )
}
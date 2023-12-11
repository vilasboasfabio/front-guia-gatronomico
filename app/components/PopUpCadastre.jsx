import React from 'react';

function PopUpCadastre({ isOpen, onClose }) {
  if (!isOpen) {
    // Se o modal estiver fechado, não renderize nada
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      {/* serve para  bloquear o fundo da página */}
      <div className="bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-left overflow-auto" onClick={e => e.stopPropagation()}>
        {/* serve para bloquear o fundo da página */}
        <div className="flex justify-end">
          {/* botão de fechar */}
          <button className="p-1 hover:bg-gray-200 rounded" onClick={onClose}>X</button>
        
        </div>
        <h2 className='text-bronze mx-auto'>Obrigado por escolher a Elite Chefs.</h2>
        {/* título da página */}
        <div className="mt-4 text-justify">
          {/* texto de fundo */}
        A sua proposta será analisada o mais breve possível pela nossa equipe. E não se esqueça de ficar de olho no seu e-mail, pois é lá que nós nos comunicaremos durante o processo da análise 😉
        </div>
      </div>
    </div>
  );
}

export default PopUpCadastre;
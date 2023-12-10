import React from 'react';

function PopUpCadastre({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-8 m-4 max-w-xs max-h-full text-left overflow-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end">
          <button className="p-1 hover:bg-gray-200 rounded" onClick={onClose}>X</button>
        
        </div>
        <h2 className='text-bronze mx-auto'>Obrigado por escolher a Elite Chefs.</h2>
        <div className="mt-4 text-justify">
        A sua proposta será analisada o mais breve possível pela nossa equipe. E não se esqueça de ficar de olho no seu e-mail, pois é lá que nós nos comunicaremos durante o processo da análise 😉
        </div>
      </div>
    </div>
  );
}

export default PopUpCadastre;
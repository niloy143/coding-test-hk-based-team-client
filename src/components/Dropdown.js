import React from 'react';

const Dropdown = ({ sector: { sector, subSectors }, others: { involvedInSectors, setInvolvedInSectors } }) => {

    const addSector = sector => {
        const sectorExists = [...involvedInSectors].find(sr => sr === sector);
        if (!sectorExists) {
            setInvolvedInSectors([...involvedInSectors, sector]);
        }
    }

    return (
        <div className="collapse collapse-arrow bg-neutral/10 rounded-md">
            <input type="checkbox" />
            <div className="collapse-title">{sector}</div>
            <div className="collapse-content">
                <div className='flex flex-col gap-1'>
                    {
                        subSectors.map((subSector, i) => {
                            if (typeof subSector === 'object') {
                                return <Dropdown sector={subSector} others={{ involvedInSectors, setInvolvedInSectors }} key={i} />
                            }
                            else {
                                return <div key={i} className="cursor-pointer hover:text-blue-500 px-5 py-2" onClick={() => addSector(subSector)}>{subSector}</div>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
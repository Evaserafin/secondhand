import React from "react";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";


const Section3 = () => {
    return (
        <div id="o-nas">
            <div className="p-3 mb-2 bg-light text-dark m-auto">
                <div className="row gx-4">
                    <div className="col-12 col-sm-4 col-lg-3 m-auto text-center">
                        <img src={Icon1} alt="ikonka ubrania"/><br/>
                        <div className="p-3 bg-light">Wybierz rzeczy<br/>
                            <hr/>
                            ubrania, zabawki, sprzęt i inne
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 m-auto text-center">
                        <img src={Icon2} alt="ikonka worka"/><br/>
                        <div className="p-3 bg-light">Spakuj je<br/>
                            <hr/>
                            Skorzystaj z<br/>worków na śmieci
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 m-auto text-center">
                        <img src={Icon3} alt="ikonka wyszukiwania"/><br/>
                        <div className="p-3 bg-light">Zdecyduj komu<br/>chcesz pomóc<br/>
                            <hr/>
                            Wybierz zaufane<br/>miejsce
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 m-auto text-center">
                        <img src={Icon4} alt="ikonkasa ładowania"/><br/>
                        <div className="p-3 bg-light">Zamów kuriera<br/>
                            <hr/>
                            Kurier przyjedzie<br/>w dogodnym terminie
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Section3;

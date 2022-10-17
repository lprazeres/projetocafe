import { SuccessMainArea, SuccessImageArea, SuccessTextArea, SuccessTextInformationArea, SuccessContextClientArea, SuccessTitleText, YellowTitle, BoldText } from './styles';
import { useContext } from "react";
import { CoffeeContext } from '../../context/CoffeeContext';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import llustrationMoto from '../../assets/llustrationMoto.png'

export function Success() {

    const { clients, paymentType }: any = useContext(CoffeeContext)

    return (
        <SuccessMainArea>
            <SuccessTextArea>
                <SuccessTitleText>
                    <YellowTitle>Uhu! Pedido Confirmado</YellowTitle>
                    <div>Agora é só Aguardar que logo o café chegará até você.</div>
                </SuccessTitleText>
                <SuccessTextInformationArea>

                    {clients.map(client => {
                        return (
                            <>
                                <SuccessContextClientArea>
                                    <MapPin size={32} color="#7011d0" />
                                    <span>
                                        <div>
                                            Entrega na <BoldText>{client.rua}, {client.numero}</BoldText>
                                        </div>
                                        <BoldText>
                                            {client.bairro} - {client.cidade} - {client.uf}
                                        </BoldText>
                                    </span>
                                </SuccessContextClientArea>
                                <SuccessContextClientArea>
                                    <Timer size={32} color="#b9b53c" />
                                    <span>
                                        <div>
                                            Previsão de entrega:
                                        </div>
                                        <BoldText>
                                            20 min - 30 min
                                        </BoldText>
                                    </span>
                                </SuccessContextClientArea>
                                <SuccessContextClientArea>
                                <CurrencyDollar size={32} color="#d34a1d" />
                                    <span>
                                        <div>
                                            Pagamento na entrega:
                                        </div>
                                        <BoldText>
                                            {client.payment}
                                        </BoldText>
                                    </span>
                                </SuccessContextClientArea>
                            </>
                        )
                    })}
                </SuccessTextInformationArea>
            </SuccessTextArea>
            <SuccessImageArea>
                <img src={llustrationMoto} />
            </SuccessImageArea>
        </SuccessMainArea>

    )
}
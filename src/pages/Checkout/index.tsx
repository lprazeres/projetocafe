import { useContext, useState } from "react"
import { CoffeeContext } from "../../context/CoffeeContext"
import { CheckoutArea, SelectedCoffeeArea, InformationArea, TypeOfCoffeeArea, ButtonsArea, AreaOptionCoffee, FormInputs, ButtonGroupArea, FormInputsContent, InputForm, FormInputsTitle, TaskInput, OpcionalInput, InputRow, ButtonGroupPosition, SubmitButtonArea, ResponseArea, ResponsePayment, ButtonDelete, MoneySpace } from "./styles"
import { NavLink } from 'react-router-dom';
import { List, MapPinLine, CreditCard, Money } from 'phosphor-react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




export function Checkout() {


    const { products, handleLessCoffee, handlePlusCoffee, totalPriceCoffee, handleDeleteCoffee, finalPriceToPay, handleSubmit, handleCheckout, register, clients, cep, rua, numero, bairro, cidade, uf }: any = useContext(CoffeeContext)

    const [buttonSubmit, setButtonSubmit] = useState(1);

    function handleTest() {
        setButtonSubmit(2);
    }

    return (
        <div>
            <CheckoutArea>
                <div>
                    <h1>COMPLETE SEU PEDIDO</h1>

                    <FormInputs>
                        <FormInputsTitle>

                            <h2><MapPinLine size={32} color="#db9e1a" /> Endereço de entrega</h2>
                            <h3>Informe o endereço onde deseja receber seu pedido</h3>

                        </FormInputsTitle>

                        <form onSubmit={handleSubmit(handleCheckout)}>
                            <FormInputsContent>
                                <div>
                                    <InputForm
                                        placeholder="CEP"
                                        id="cep"
                                        {...register('cep')}
                                    />
                                </div>

                                <div>
                                    <TaskInput
                                        placeholder="RUA"
                                        id="rua"
                                        {...register('rua')}
                                    />
                                </div>
                                <InputRow>
                                    <InputForm
                                        placeholder="NÚMERO"
                                        id="numero"
                                        {...register('numero')}
                                    />
                                    <OpcionalInput
                                        placeholder="COMPLEMENTO - OPCIONAL"
                                        id="complemento"
                                        {...register('complemento')}
                                    />
                                </InputRow>
                                <InputRow>
                                    <InputForm
                                        placeholder="BAIRRO"
                                        id="bairro"
                                        {...register('bairro')}
                                    />
                                    <InputForm
                                        placeholder="CIDADE"
                                        id="cidade"
                                        {...register('cidade')}
                                    />
                                    <InputForm
                                        placeholder="UF"
                                        id="uf"
                                        {...register('uf')}
                                    />
                                </InputRow>

                                <ButtonGroupPosition>
                                    <ButtonGroup size="lg" className="mb-2" /*onClick={handlePayment}*/>
                                        <ButtonGroupArea>
                                            <Button variant="secondary" size="lg"><CreditCard size={32} color="#050505" />Cartão de Crédito</Button>
                                            <Button variant="secondary" size="lg"><CreditCard size={32} color="#050505" />Cartão de Débito</Button>
                                            <Button variant="secondary" size="lg"><Money size={32} color="#050505" />Dinheiro</Button>
                                        </ButtonGroupArea>
                                    </ButtonGroup>
                                </ButtonGroupPosition>

                                <SubmitButtonArea>
                                    <Button variant="secondary" size="lg" onClick={handleTest} disabled={!cep || !rua || !numero || !bairro || !cidade || !uf} type='submit'>Enviar</Button>
                                        {
                                            buttonSubmit === 1 ? '' :
                                                <NavLink to='/success' title='Success'>
                                                    <a>
                                                        <Button variant="secondary" size="lg" type='submit'>Confirmar Pedido</Button>
                                                    </a>
                                                </NavLink>
                                                
                                    }
                                </SubmitButtonArea>
                            </FormInputsContent>
                        </form>
                    </FormInputs>
                </div>
                <div>
                    <h1>PEDIDO</h1>
                    <AreaOptionCoffee>
                        {products.map(product => {
                            if (product.countCoffee > 0) {
                                return (

                                    <SelectedCoffeeArea>
                                        <div>{product.img}</div>
                                        <div>
                                            <InformationArea>
                                                <div>{product.title}</div>
                                                <div>
                                                    <span>R$</span><span>{product.price}</span>
                                                </div>
                                                <TypeOfCoffeeArea>
                                                    <span>{product.typeOne}</span>
                                                    <span>{product.typeTwo}</span>
                                                </TypeOfCoffeeArea>
                                                <ButtonsArea>
                                                    <span><button onClick={event => handleLessCoffee(event, product.id)}>-</button></span>
                                                    <span><div>{product.countCoffee}</div></span>
                                                    <span><button onClick={event => handlePlusCoffee(event, product.id)}>+</button></span>
                                                    <a><NavLink to='/' title='Checkout'><List size={32} color="#141418" /></NavLink></a>
                                                </ButtonsArea>
                                                <ButtonDelete onClick={event => handleDeleteCoffee(event, product.id)}>delete</ButtonDelete>
                                            </InformationArea>
                                        </div>
                                    </SelectedCoffeeArea>
                                )
                            }
                        })}
                        <ResponseArea>
                            <ResponsePayment>
                                <span>Total de Itens:</span>
                                <MoneySpace><span>R$</span><span>{totalPriceCoffee}</span></MoneySpace>
                            </ResponsePayment>
                            <ResponsePayment>
                                <span>Entrega:</span>
                                <MoneySpace><span>R$</span><span>3.5</span></MoneySpace>
                            </ResponsePayment>
                            <ResponsePayment>
                                <span>TOTAL:</span>
                                <MoneySpace><span>R$</span><span>{finalPriceToPay}</span></MoneySpace>
                            </ResponsePayment>
                        </ResponseArea>
                    </AreaOptionCoffee>
                </div>
            </CheckoutArea >
        </div >
    )
}
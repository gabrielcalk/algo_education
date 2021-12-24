import {useState} from 'react'

import {ReactComponent as BrazilFlag} from '../../images/brazil_flag.svg'
import {ReactComponent as USAFlag} from '../../images/usa_flag.svg'
import {Text, DivText, DivFlag, SvgIcon} from './style.js'

function RenderSortingBubbleInfo(props) {
    const [changeLanguage, setChangeLanguage] = useState("portuguese")
    return (
        <>
            <h3>Bubble</h3>
            <main>
                <section>
                    <h3>Bubble Sort Algorithm (code): </h3>
                    <pre>{`
                    function bubbleSort(array) {
                        let sort = false
                        
                        while(!sort){
                            sort = true
                            for(let i = 0; i < array.length-1; i ++){
                                if(array[i] > array[i + 1]){
                                    const temp = array[i]
                                    array[i] = array[i + 1]
                                    array[i + 1] = temp
                                    sort = false
                                }
                            }
                        }
                        return array
                    `}
                    </pre>
                </section>
                <section>
                    <DivFlag>
                        <div>
                        <SvgIcon>
                            <svg onClick={() => setChangeLanguage('portuguese')}>
                                <BrazilFlag/>
                            </svg>
                        </SvgIcon>
                        <SvgIcon>
                            <svg onClick={() => setChangeLanguage('english')}>
                                <USAFlag/>
                            </svg>
                        </SvgIcon>
                        </div>
                    </DivFlag>

                    <Text>
                        {(changeLanguage === "portuguese")
                            ? <article>
                                <DivText>
                                    <div>
                                        <h2><p>O Bubble Sort é considerado um algoritmo de ordenação (sort) básico e intuito.</p></h2>

                                        <p>Apesar de ser o primeiro algoritmo de ordem que aprendemos ele definitivamente não é um dos mais eficientes.</p>

                                        <p>Essa ineficiência occore pelo fato do Bubble Sort levar mais tempo para executar (alta complexidade de tempo) a sua função do que muitos outros algoritmos de ordenação.</p>
                                    </div>
                                </DivText>

                                <p>Vamos para um exemplo:</p>

                                <code>[9, 6, 3, 5, 1]</code>

                                <p>Qual a melhor forma de ordenar os valores acima?</p>

                                <p>De acordo com o Bubble Sort é comparar todos os valores disponíveis, colocar o maior valor de N números e repetir o processo até ter uma lista organizada.</p>

                                <p>Vamos ordenar de acordo com o Bubble Sort!</p>
                                
                                <h3>1) A primeira comparação será do número 9 com o número 6.</h3>

                                <p>Pelo fato de 9 ser maior que 6 iríamos comparar o 9 (maior número) com o próximo número, que no caso seria o 3.</p>

                                <DivText>
                                    <div>
                                        <h3>2) A segunda comparação seria feita entre o 9 e 3.</h3>

                                        <p>9 claramente é maior do que 3, então continuaremos com o 9 (lembre-se que o nosso objetivo é encontrar o maior valor e adicioná-lo no final)</p>
                                        
                                        <h3>3) Terceira comparação: 9 e 5.</h3>

                                        <p>9 {'>'} 5 = verdadeiro</p>
                                        
                                        <p>Podemos seguir com o número 9.</p>

                                    </div>
                                </DivText>
                                <h3>4) A Quarta e última comparação seria feita entre o 9 e 1.</h3>

                                <p>Como 9 é maior do que 1, então o número 9 assumiria a posição do 1 (no final da lista).</p>

                                <p>Essa seria a nossa lista no primeiro loop que realizamos: [6, 3, 5, 1, 9].</p>

                                <p>E então, continuaremos o processo mas agora procurando o segundo maior número, dado que o maior já foi encontrado.</p>

                                <p>O algoritmo finalizará quando nenhum número na posição X + 1 for menor do que o número na posição X.</p>

                                <p>Quando isso acontecer, a variável "sort" será true e, portanto, iremos retornar o array ordenado.</p>
                            </article>
                        : <h2>Hello</h2>
                        }
                    </Text>
                </section>
            </main>
        </>
    );
}

export default RenderSortingBubbleInfo;
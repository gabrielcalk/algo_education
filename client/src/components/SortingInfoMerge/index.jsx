import {useState} from 'react'

import {ReactComponent as BrazilFlag} from '../../images/brazil_flag.svg'
import {ReactComponent as USAFlag} from '../../images/usa_flag.svg'
import {Text, DivFlag, InfoEachAlgo, NameAlgo} from './style.js'

function RenderSortingMergeInfo() {
    const [changeLanguage, setChangeLanguage] = useState("portuguese")
    return (
        <>
        <NameAlgo>
            <h2>Merge Sort</h2>
        </NameAlgo>
            <main>
                <InfoEachAlgo>
                        <section>
                            <h3>Merge Sort Algorithm (using recursive function): </h3>
                            <pre>{`
                            function mergeSort(array) {
                                if(array.length <= 1) return array;

                                const middleIndex = Math.floor(array.length / 2);
                                const leftSide = array.slice(0, middleIndex);
                                const rightSide = array.slice(middleIndex);
                                return SortedArrays(mergeSort(leftSide), mergeSort(rightSide));
                            }
                              
                            function SortedArrays(leftSide, rightSide){
                                const sortedArray = new Array(leftSide.length + rightSide.length);
                                let k = 0;
                                let i = 0;
                                let j = 0;
                                while(i < leftSide.length && j < rightSide.length){
                                    if(leftSide[i] <= rightSide[j]){
                                        sortedArray[k++] = leftSide[i++];
                                    } else{
                                        sortedArray[k++] = rightSide[j++];
                                    }
                                }
                                while(i < leftSide.length){
                                    sortedArray[k++] = leftSide[i++];
                                }
                                while(j < rightSide.length){
                                    sortedArray[k++] = rightSide[j++]
                                }
                                return sortedArray
                            }
                            `}
                            </pre>
                        </section>

                        <div>
                            <h3>Time Complexity (complexidade de tempo): </h3>
                            <h4>O(nlog(n)) all scenarios</h4>
                            <br></br>
                            <h3>Space Complexity (complexidade de espaço): </h3>
                            <h4>O(nlog(n)) all scenarios</h4>
                        </div>
                </InfoEachAlgo>

                <section>
                    <DivFlag>
                        <div>
                            <svg onClick={() => setChangeLanguage('portuguese')}>
                                <BrazilFlag/>
                            </svg>
                            <svg onClick={() => setChangeLanguage('english')}>
                                <USAFlag/>
                            </svg>
                        </div>
                    </DivFlag>

                    <Text>
                        {(changeLanguage === "portuguese")
                            ? <article>
                                    <div>
                                        <h2><p>O Bubble Sort é considerado um algoritmo de ordenação (sort) básico e intuito.</p></h2>

                                        <p>Apesar de ser o primeiro algoritmo de ordem que aprendemos ele definitivamente não é um dos mais eficientes.</p>

                                        <p>Essa ineficiência occore pelo fato do Bubble Sort levar mais tempo para executar (alta complexidade de tempo) a sua função do que muitos outros algoritmos de ordenação.</p>
                                    </div>

                                <p>Vamos para um exemplo:</p>

                                <code>[9, 6, 3, 5, 1]</code>

                                <p>Qual a melhor forma de ordenar os valores acima?</p>

                                <p>De acordo com o Bubble Sort é comparar todos os valores disponíveis, colocar o maior valor de N números na última posição e repetir o processo até ter uma lista organizada.</p>

                                <p>Vamos ordenar de acordo com o Bubble Sort!</p>
                                
                                <h3>1) A primeira comparação será do número 9 com o número 6.</h3>

                                <p>Pelo fato de 9 ser maior que 6 iríamos comparar o 9 (maior número) com o próximo número, que no caso seria o 3.</p>

                                    <div>
                                        <h3>2) A segunda comparação seria feita entre o 9 e 3.</h3>

                                        <p>9 claramente é maior do que 3, então continuaremos com o 9 (lembre-se que o nosso objetivo é encontrar o maior valor e adicioná-lo no final).</p>
                                        
                                        <h3>3) Terceira comparação: 9 e 5.</h3>

                                        <p>9 {'>'} 5 = verdadeiro</p>
                                        
                                        <p>Podemos seguir com o número 9.</p>

                                    </div>
                                <h3>4) A Quarta e última comparação seria feita entre o 9 e 1.</h3>

                                <p>Como 9 é maior do que 1, então o número 9 assumiria a posição do 1 (no final da lista); isso acontece pois toda a lista já foi percorrida.</p>

                                <p>Essa seria a nossa lista no primeiro loop que realizamos: [6, 3, 5, 1, 9].</p>

                                <p>E então, continuaremos o processo mas agora procurando o segundo maior número, dado que o maior já foi encontrado.</p>

                                <p>O algoritmo finalizará quando nenhum número na posição X + 1 for menor do que o número na posição X.</p>

                                <p>Quando isso acontecer, a variável "sort" será true e, portanto, iremos retornar o array ordenado.</p>
                            </article>
                        : 
                        // If the user click on USA flag, then change the language of the text
                        <article>
                            <div>
                                <h2><p>Bubble Sort is considered an essential and basic sort algorithm.</p></h2>

                                <p>Despite being the first ordering algorithm we learned, it is not one of the most efficient.</p>

                                <p>This inefficiency is because Bubble Sort takes longer to execute (high time complexity) its function than many other sorting algorithms.</p>
                            </div>

                        <p>Let's go to an example:</p>

                        <code>[9, 6, 3, 5, 1]</code>

                        <p>What is the best way to sort the values ​​above?</p>

                        <p>According to Bubble Sort, it is to compare all available values, add the highest value in the last position and repeat the process until you have an organized list.</p>

                        <p>Let's sort according to Bubble Sort!</p>
                        
                        <h3>1) The first comparison will be number 9 with number 6.</h3>

                        <p>Because 9 is greater than 6, we would compare 9 (highest number) with the following number, which is 3.</p>

                            <div>
                                <h3>2) The second comparison would be between 9 and 3.</h3>

                                <p>9 is greater than 3, so we'll continue with 9 (remember, our goal is to find the highest value and add it at the end of the array).</p>
                                
                                <h3>3) Third comparison: 9 and 5.</h3>

                                <p>9 {'>'} 5 = true</p>
                                
                                <p>We can go on with the number 9.</p>

                            </div>
                        <h3>4) The fourth and last comparison would be between 9 and 1.</h3>

                        <p>Since 9 is greater than 1 (this change happened because we already went through all the values on the array), the number 9 would take the number 1 position (at the end of the list).</p>

                        <p>This would be our list in the first loop: [6, 3, 5, 1, 9].</p>

                        <p>And then, we will continue the process but now looking for the second-highest number as the highest has already been found.</p>

                        <p>The algorithm will terminate when all the numbers at position X + 1 are less than those at position X.</p>

                        <p>The variable "sort" will be "true" when this happens. </p>
                    </article>
                        }
                    </Text>
                </section>
            </main>
        </>
    );
}

export default RenderSortingMergeInfo;
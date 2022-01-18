import {useState} from 'react'

import {ReactComponent as BrazilFlag} from '../../images/brazil_flag.svg'
import {ReactComponent as USAFlag} from '../../images/usa_flag.svg'
import mergeSortBreak from '../../images/mergeSortBreak.png'
import mergeSortMerging from '../../images/mergeSortMerging.png'
import {Text, DivFlag, InfoEachAlgo, NameAlgo, MainContainer} from './style.js'

function RenderSortingMergeInfo() {
    const [changeLanguage, setChangeLanguage] = useState("portuguese")
    return (
        <>
        <NameAlgo>
            <h2>Merge Sort</h2>
        </NameAlgo>
            <MainContainer>
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
                                        <h2><p>O algoritmo Merge Sort é um dos mais eficientes para ordenar uma lista, inclusive utilizado por muitas linguages.</p></h2>

                                        <p>Na minha opinião, ele deve ser um dos últimos (juntamente com o Quick Sort) a ser estudado, pois o seu conceito é menos intuitivo que os demais.</p>
                                    </div>

                                <p>Apesar de ser um algoritmo sofisticado, o Merge Sort é "incapaz" de ordernar uma lista inicial com mais de um elemento.</p>

                                <p>Isso significa que ele quebrará uma lista de números inteiros em pequenas listas com apenas um número, e depois juntará os elementos novamente já na ordem desejada.</p>
                                
                                <p>Vamos pegar a seguinte lista de número inteiros:</p>
                                
                                <code>[5, 2, 6, 2, 1, 4, 8, 7]</code>

                                <p>O Merge Sort quebrará toda a estrutura acima até sobrar apenas 8 elementos distintosç vamos para um exemplo ilustrativo:</p>
                                
                                <section>
                                    <img src={mergeSortBreak} alt="breaking the array"/>
                                </section>
                                
                                <div>
                                    <h3>Com os elementos separados, podemos fazer o processo inverso para ir construindo a nossa lista ordenada a partir de listas menores já ordenadas.</h3>
                                </div>

                                <section>
                                    <img src={mergeSortMerging} alt="merging the array"/>
                                </section>

                            </article>
                        : 
                        // If the user click on USA flag, then change the language of the text
                            <article>
                                    <div>
                                        <h2><p>The Merge Sort algorithm is one of the most efficient to sort a list, even used by many languages.</p></h2>

                                        <p>In my opinion, it should be one of the last (along with Quick Sort) to be studied, as its concept is less intuitive than the others.</p>
                                    </div>

                                <p>Despite being a sophisticated algorithm, Merge Sort is "unable" to sort an initial list with more than one element.</p>

                                <p>This means it will break a list of integer numbers into small lists of just one number and then reassemble the elements in the desired order.</p>
                                
                                <p>Let's take the following list of integers:</p>
                                
                                <code>[5, 2, 6, 2, 1, 4, 8, 7]</code>

                                <p>Merge will break the entire structure above until only 8 distinct elements are left; let's go to an illustrative example: </p>
                                
                                <section>
                                    <img src={mergeSortBreak} alt="breaking the array"/>
                                </section>
                                
                                <div>
                                    <h3>With the elements separated, we can do the reverse process to build our sorted list from smaller, sorted lists.</h3>
                                </div>

                                <section>
                                    <img src={mergeSortMerging} alt="merging the array"/>
                                </section>

                            </article>
                        }
                    </Text>
                </section>
            </MainContainer>
        </>
    );
}

export default RenderSortingMergeInfo;
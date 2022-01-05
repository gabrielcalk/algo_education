import {useState} from 'react'

import {ReactComponent as BrazilFlag} from '../../images/brazil_flag.svg'
import {ReactComponent as USAFlag} from '../../images/usa_flag.svg'
import {Text, DivFlag, InfoEachAlgo, NameAlgo} from './style.js'

function RenderSortingSelectionInfo() {
    const [changeLanguage, setChangeLanguage] = useState("portuguese")
    return (
        <>
        <NameAlgo>
            <h2>Selection Sort</h2>
        </NameAlgo>
            <main>
                <InfoEachAlgo>
                        <section>
                            <h3>Selection Sort Algorithm (code): </h3>
                            <pre>{`
                            function selectionSort(array) {
                                let index = 0
                                while(index < array.length){
                                    let smallIndex = index;
                                    for (let i = index; i < array.length; i++){
                                        if(array[smallIndex] > array[i])
                                            smallIndex = i;
                                    }
                                    swap(index, smallIndex, array)
                                    index ++
                                }
                                return array
                            }
                            
                            function swap(i, j, array){
                                const temp = array[j];
                                array[j] = array[i];
                                array[i] = temp;
                            }
                            
                            `}
                            </pre>
                        </section>

                        <div>
                            <h3>Time Complexity (complexidade de tempo): </h3>
                            <h4>O(n^2)</h4>
                            <h3>Space Complexity (complexidade de espaço): </h3>
                            <h4>O(i)</h4>
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
                                        <h2><p>O Selection Sort é considerado um dos algoritmos de ordenação introdutórios, isso acontece pois ele é um dos mais fáceis de se aprender (e um dos menos ineficientes).</p></h2>

                                        <p>O algoritmo por seleção, ou também chamado de “Selection Sort”, ordena uma determinada lista através de 3 simples passos:</p>

                                        <p>1) Encontrar o menor elemento de uma determinada lista;</p>

                                        <p>2) Adicionar esse elemento na primeira posição;</p>

                                        <p>3) Repetir o processo até que a lista esteja ordenada;</p>
                                    </div>

                                <p>Sim, é bem parecido o Bubble Sort, contudo invés de adicionarmos o maior no final, o Selection adiciona o menor no começo.</p>

                                <p>Vamos pegar a seguinte lista:</p>

                                <code>[6, 2, 4, 3, 1]</code>

                                <p>No primeiro loop, que irá percorrer todo o array, o algoritmo perceberá que o último elemento dessa lista é o menor número da mesma, portanto o “1” irá para a primeira posição e o número que ocupava a primeira posição irá para o antigo lugar do menor número:</p>

                                <code>[<span>1</span>, 2, 4, 3, <span>6</span>]</code>

                                <p>Sabendo que [0] é o menor número do array, o próximo loop começará da posição [1] e irá até o fim da lista novamente, contudo, agora para encontrar o segundo menor número.</p>

                                <p>Esse processo de avançar a posição, observar o menor e trocar posição ocorre até que toda a lista em questão seja percorrida, ou seja, quando a lista estiver ordenada:</p>

                                <code><span>[6, 2, 4, 3, 1]</span></code>
                            </article>
                        : 
                        // If the user click on USA flag, then change the language of the text
                        <article>
                                <div>
                                    <h2><p>Selection Sort is considered one of the introductory sorting algorithms because it is one of the easiest to learn (and one of the least inefficient).</p></h2>

                                    <p>The selection algorithm, or also called "Selection Sort," sorts a given list through 3 simple steps:</p>

                                    <p>1) Find the smallest element of a given list;</p>

                                    <p>2) Add this element in the first position;</p>

                                    <p>3) Repeat the process until the list is sorted;</p>
                                </div>

                            <p>Yes, it's very similar to Bubble Sort. However, instead of adding the biggest one at the end, Selection adds the smallest one at the beginning.</p>

                            <p>Let's take the following list:</p>

                            <code>[6, 2, 4, 3, 1]</code>

                            <p>In the first loop, which will go through the entire array, the algorithm will notice that the last element of this list is the smallest number in it, so the "1" will go to the first position, and the number that occupied the first position will go to the old place of the smallest number:</p>

                            <code>[<span>1</span>, 2, 4, 3, <span>6</span>]</code>

                            <p>Knowing that [0] is the smallest number in the array, the following loop will start from the position [1] and go to the end of the list again; however, now find the second smallest number.</p>

                            <p>This process of advancing the position, observing the most minor and changing position takes place until the entire list in question is covered, that is, when the list is sorted:</p>

                            <code><span>[6, 2, 4, 3, 1]</span></code>
                        </article>
                        }
                    </Text>
                </section>
            </main>
        </>
    );
}

export default RenderSortingSelectionInfo;
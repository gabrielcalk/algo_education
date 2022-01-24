import { Container } from "./style";

function RenderVideoAndCode() {
  return (
    <Container>
      <div>
        <div>
          <h3>Linear Search Code</h3>
          <pre>
            {`
        function linearSearch(array, targetNumber){
            for(let i = 0; i < array.length; i++)
                if (array[i] == targetNumber)
                    return array[i];
            return -1;
        }`}
          </pre>
        </div>
        <div>
          <h3>Binary Search Code</h3>
          <pre>
            {`
        function binarySearch(array, targetNumber) {
            let right = array.length - 1;
            let left = 0;
            while (left <= right){
                let middle = Math.floor((right + left) / 2)
                if(targetNumber == array[middle])
                    return middle
                else if(targetNumber > array[middle])
                    left = middle + 1
                else 
                    right = middle - 1
            }
            
            return -1
        }`}
          </pre>
        </div>
      </div>
      <section>
        <h3>Explanation About Sort Algorithm</h3>
        <div>
          <iframe
            width="680"
            height="400"
            src="https://www.youtube-nocookie.com/embed/QpANyJ13fos"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
}

export default RenderVideoAndCode;

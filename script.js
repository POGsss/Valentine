window.addEventListener("load", function(){
    setTimeout(loaded, 2500);
      
    function loaded(){
           var load = document.getElementById("loader");
           load.style.left = "-100%";
           load.style.borderRight = "100px solid #D1193E";
          load.style.visibility = "hidden";
    }
  });

document.getElementById('yes-btn').addEventListener('click', function() {
  const question = document.getElementById('question');
  const gif = document.getElementById('image');

  question.textContent = 'Nyak! sabi na crush mo ko eh'; 
  gif.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRka2VnMXQ1OTZiMjdoY3dlcmE4dm1sbHJhdHBiYjVvbjZ4MDcwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FGOyI3XnaQOrmPaonP/giphy.gif';
});

document.getElementById('no-btn').addEventListener('mouseover', function() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
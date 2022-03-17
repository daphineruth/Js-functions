function clickme () {
    const header = document.getElementsByTagName('h1');
    header.style.color = 'red';
  
    document.getElementsByTagName('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  };
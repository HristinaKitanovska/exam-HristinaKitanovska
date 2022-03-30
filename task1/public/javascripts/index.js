function deleteFakultet(id) {
    fetch('http://localhost:3000/fakultets/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
  };

  function deleteUniverzitet(id) {
    fetch('http://localhost:3000/univerzitets/' + id, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(res => {
      location.reload();
    })
  };
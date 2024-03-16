fetch('https://api.github.com/repos/Jtansjevhscscc/insta/contents/activite.json', {
  method: 'PUT',
  headers: {
    'Authorization': 'token VOTRE_TOKEN_GITHUB',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    message: 'Ajout de nouvelles données',
    content: window.btoa(JSON.stringify({ nom: name, email: email })),
    sha: 'SHA_DU_FICHIER_SUR_GITHUB', // Si vous mettez à jour le fichier existant
  })
})
.then(response => response.json())
.then(data => {
  console.log('Données envoyées avec succès :', data);
})
.catch(error => {
  console.error('Erreur lors de l\'envoi des données :', error);
});

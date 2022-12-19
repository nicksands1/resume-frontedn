const showVisitor = visitor => {
    document.querySelector('#visits').innerHTML = `<p>${visitor}</p>`
};

const fetchVisitors = () => {
    fetch("https://4q3hidt45l.execute-api.us-east-1.amazonaws.com/cloud_api/cloud_api")
    .then(data => data.json())
    .then(data => showVisitor(data.visitor));
}

fetchVisitors();
showVisitor();

let state = {
       count: 0
};
function setState(newState){
       state = { ...state, ...newState};//operator yang ada di js
       render();//mengulang komponen setelah state atau proses pengolahan 
};

function render() {
       document.getElementById('count').innerHTML = `Hitung Nilai: ${state.count}`; 
}

document.getElementById('tambah').addEventListener('click',() => {
       setState({count: state.count + 1});
});

render();
       
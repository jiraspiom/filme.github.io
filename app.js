angular.module('AppAula6', []).controller('aula6Controler',function ($scope, $http) {
    $scope.titulo = "titulo da pagina"
    

    $scope.carregarPessoas = function (){
        $http({
            url: 'pessoa.json',
            method: 'GET'
        }).then(function(resposta){
            $scope.listaPessoas = resposta.data;
        })
    };
});
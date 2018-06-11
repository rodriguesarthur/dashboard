angular.module("dashboard", []);


angular.module("dashboard").controller("table-task", function ($scope){

  $scope.task = [
    {solicitacao: 'TASK001111', status: 'Pendente', inicio: '11/01/2018', final: '12/01/2018'},
    {solicitacao: 'TASK001122', status: 'Concluído', inicio: '15/01/2018', final: '16/01/2018'},
    {solicitacao: 'TASK001133', status: 'Pendente', inicio: '18/01/2018', final: '19/01/2018'},
    {solicitacao: 'TASK001144', status: 'Cancelado', inicio: '25/02/2018', final: '26/02/2018'},
    {solicitacao: 'TASK001144', status: 'Concluído', inicio: '25/02/2018', final: '26/02/2018'},
    {solicitacao: 'TASK001155', status: 'Cancelado', inicio: '01/03/2018', final: '02/03/2018'}
  ];
});
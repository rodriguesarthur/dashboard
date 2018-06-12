angular.module("dashboard", []);


angular.module("dashboard").controller("table-task", function ($scope){

  $scope.task = [
    {solicitacao: 'TASK000001', status: 'Pendente', inicio: '11/01/2018', final: '12/01/2018'},
    {solicitacao: 'TASK000002', status: 'Concluído', inicio: '15/01/2018', final: '16/01/2018'},
    {solicitacao: 'TASK000003', status: 'Pendente', inicio: '18/01/2018', final: '19/01/2018'},
    {solicitacao: 'TASK000004', status: 'Cancelado', inicio: '25/02/2018', final: '26/02/2018'},
    {solicitacao: 'TASK000005', status: 'Concluído', inicio: '25/02/2018', final: '26/02/2018'},
    {solicitacao: 'TASK000006', status: 'Cancelado', inicio: '01/03/2018', final: '02/03/2018'},
    {solicitacao: 'TASK000007', status: 'Concluído', inicio: '02/03/2018', final: '03/03/2018'},
    {solicitacao: 'TASK000008', status: 'Pendente', inicio: '05/03/2018', final: '06/03/2018'},
    {solicitacao: 'TASK000009', status: 'Cancelado', inicio: '09/03/2018', final: '10/03/2018'},
    {solicitacao: 'TASK000010', status: 'Pendente', inicio: '14/03/2018', final: '15/03/2018'},
    {solicitacao: 'TASK000011', status: 'Concluído', inicio: '16/03/2018', final: '17/03/2018'},
    {solicitacao: 'TASK000023', status: 'Cancelado', inicio: '15/03/2018', final: '16/03/2018'},
  ];
});
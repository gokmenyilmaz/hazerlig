import linq from "linq";

export default class TurnuvaService
{

    static turnuvalariGetirAsync =  function (id) {

        var result=[{"TurnuvaId":"1", "TurnuvaAdi":"\u0130kili Tak\u0131m 2020-1", "BaslamaTarihi":"2014-02-20 20:00:00", "TurnuvaTipi":"\u0130kiliTak\u0131m", "KayitBaslangicTarihi":"", "KayitBitisTarihi":"", "MaxOyuncuSayisi":""},
        {"TurnuvaId":"2", "TurnuvaAdi":"Trabzon Veteran Turnuvas\u0131", "BaslamaTarihi":"2001-07-20 20:00:00", "TurnuvaTipi":"Eleminasyon", "KayitBaslangicTarihi":"", "KayitBitisTarihi":"", "MaxOyuncuSayisi":""},
        {"TurnuvaId":"3", "TurnuvaAdi":"10 Kas\u0131m Atat\u00fcrk\u00fc Anma", "BaslamaTarihi":"2001-10-20 20:00:00", "TurnuvaTipi":"Eleminasyon", "KayitBaslangicTarihi":"", "KayitBitisTarihi":"", "MaxOyuncuSayisi":""},
        {"TurnuvaId":"4", "TurnuvaAdi":"Mini Raket Turnuvas\u0131", "BaslamaTarihi":"2011-10-20 20:00:00", "TurnuvaTipi":"Eleminasyon", "KayitBaslangicTarihi":"", "KayitBitisTarihi":"", "MaxOyuncuSayisi":""}]
        
        return result;
    
    }


    static turnuvalariGetirAsync1 = async function (id) {

        // var apiBasePath=AppService.getApiBasePath();
     
        // var path =apiBasePath  + "/Turnuva/TurnuvalariGetir";
           
        // var options = {
        //     method: 'GET',
        // };
    
        // const response = await fetch(path, options);
    
        // var result = await response.json();
        // return result.Data;
    
    }




   
}









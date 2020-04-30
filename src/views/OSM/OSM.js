import {Component} from 'react';
import React from 'react'
//var osm = require('osm');
var base = 'http://www.openstreetmap.org/export/embed.html';

class OSM extends Component {

     


    render() {
        
        //var map = osm().position(47.88038, 10.6222475);
        //var map = osm().radius(0.008);

        var lon = 78.88038;
        var lat = 19.6222475;
        //var iframe= document.createElement('iframe');
        var fullsrc = base
          + '?layer=mapnik'
          + '&bbox=' + [lon , lat , lon , lat ].join(',')
          + '&marker=' + [lat, lon].join(',')

         var height='420px'; 
         var width= '350px';

    return (    
                <>      
                    <iframe src={fullsrc} height={height} width={width}></iframe>     
                </>
            );

    }

}
export default OSM;

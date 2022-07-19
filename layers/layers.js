var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipalities_1 = new ol.format.GeoJSON();
var features_Municipalities_1 = format_Municipalities_1.readFeatures(json_Municipalities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipalities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipalities_1.addFeatures(features_Municipalities_1);
var lyr_Municipalities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipalities_1, 
                style: style_Municipalities_1,
                interactive: false,
                title: '<img src="styles/legend/Municipalities_1.png" /> Municipalities'
            });
var format_Zones_2 = new ol.format.GeoJSON();
var features_Zones_2 = format_Zones_2.readFeatures(json_Zones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_2.addFeatures(features_Zones_2);
var lyr_Zones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zones_2, 
                style: style_Zones_2,
                interactive: false,
                title: '<img src="styles/legend/Zones_2.png" /> Zones'
            });
var format_UPHC_3 = new ol.format.GeoJSON();
var features_UPHC_3 = format_UPHC_3.readFeatures(json_UPHC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPHC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPHC_3.addFeatures(features_UPHC_3);
var lyr_UPHC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPHC_3, 
                style: style_UPHC_3,
                interactive: true,
                title: '<img src="styles/legend/UPHC_3.png" /> UPHC'
            });
var format_UCHC_4 = new ol.format.GeoJSON();
var features_UCHC_4 = format_UCHC_4.readFeatures(json_UCHC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCHC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCHC_4.addFeatures(features_UCHC_4);
var lyr_UCHC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCHC_4, 
                style: style_UCHC_4,
                interactive: true,
                title: '<img src="styles/legend/UCHC_4.png" /> UCHC'
            });
var format_EOC_5 = new ol.format.GeoJSON();
var features_EOC_5 = format_EOC_5.readFeatures(json_EOC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EOC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EOC_5.addFeatures(features_EOC_5);
var lyr_EOC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EOC_5, 
                style: style_EOC_5,
                interactive: true,
                title: '<img src="styles/legend/EOC_5.png" /> EOC'
            });
var format_Dispensary_6 = new ol.format.GeoJSON();
var features_Dispensary_6 = format_Dispensary_6.readFeatures(json_Dispensary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dispensary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dispensary_6.addFeatures(features_Dispensary_6);
var lyr_Dispensary_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dispensary_6, 
                style: style_Dispensary_6,
                interactive: true,
                title: '<img src="styles/legend/Dispensary_6.png" /> Dispensary'
            });
var format_TN_District_7 = new ol.format.GeoJSON();
var features_TN_District_7 = format_TN_District_7.readFeatures(json_TN_District_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN_District_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN_District_7.addFeatures(features_TN_District_7);
var lyr_TN_District_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TN_District_7, 
                style: style_TN_District_7,
                interactive: true,
                title: '<img src="styles/legend/TN_District_7.png" /> TN_District'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Municipalities_1.setVisible(false);lyr_Zones_2.setVisible(false);lyr_UPHC_3.setVisible(true);lyr_UCHC_4.setVisible(false);lyr_EOC_5.setVisible(false);lyr_Dispensary_6.setVisible(false);lyr_TN_District_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Municipalities_1,lyr_Zones_2,lyr_UPHC_3,lyr_UCHC_4,lyr_EOC_5,lyr_Dispensary_6,lyr_TN_District_7];
lyr_Municipalities_1.set('fieldAliases', {'VILL_ID_2': 'VILL_ID_2', 'LOCATION': 'LOCATION', 'TYPE': 'TYPE', });
lyr_Zones_2.set('fieldAliases', {'VILL_ID_2': 'VILL_ID_2', 'LOCATION': 'LOCATION', 'TYPE': 'TYPE', });
lyr_UPHC_3.set('fieldAliases', {'S_NO': 'S_NO', 'District': 'District', 'Corp/Mun': 'Corp/Mun', 'FACILITY': 'FACILITY', 'TYPE': 'TYPE', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'id': 'id', 'Image': 'Image', });
lyr_UCHC_4.set('fieldAliases', {'S_NO': 'S_NO', 'District': 'District', 'Corp/Mun': 'Corp/Mun', 'FACILITY': 'FACILITY', 'TYPE': 'TYPE', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'id': 'id', 'Image': 'Image', });
lyr_EOC_5.set('fieldAliases', {'S_NO': 'S_NO', 'District': 'District', 'Corp/Mun': 'Corp/Mun', 'FACILITY': 'FACILITY', 'TYPE': 'TYPE', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'id': 'id', 'Image': 'Image', });
lyr_Dispensary_6.set('fieldAliases', {'S_NO': 'S_NO', 'District': 'District', 'Corp/Mun': 'Corp/Mun', 'FACILITY': 'FACILITY', 'TYPE': 'TYPE', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'id': 'id', 'Image': 'Image', });
lyr_TN_District_7.set('fieldAliases', {'dist_name': 'District', 'dist_id': 'dist_id', 'district_i': 'district_i', 'Type': 'Type', 'x': 'x', 'y': 'y', });
lyr_Municipalities_1.set('fieldImages', {'VILL_ID_2': 'TextEdit', 'LOCATION': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_Zones_2.set('fieldImages', {'VILL_ID_2': 'TextEdit', 'LOCATION': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_UPHC_3.set('fieldImages', {'S_NO': 'Hidden', 'District': 'Hidden', 'Corp/Mun': 'TextEdit', 'FACILITY': 'TextEdit', 'TYPE': 'TextEdit', 'Latitude': 'Hidden', 'Longtitude': 'Hidden', 'id': 'Hidden', 'Image': 'ExternalResource', });
lyr_UCHC_4.set('fieldImages', {'S_NO': 'Hidden', 'District': 'Hidden', 'Corp/Mun': 'TextEdit', 'FACILITY': 'TextEdit', 'TYPE': 'TextEdit', 'Latitude': 'Hidden', 'Longtitude': 'Hidden', 'id': 'Hidden', 'Image': 'ExternalResource', });
lyr_EOC_5.set('fieldImages', {'S_NO': 'Hidden', 'District': 'Hidden', 'Corp/Mun': 'TextEdit', 'FACILITY': 'TextEdit', 'TYPE': 'TextEdit', 'Latitude': 'Hidden', 'Longtitude': 'Hidden', 'id': 'Hidden', 'Image': 'ExternalResource', });
lyr_Dispensary_6.set('fieldImages', {'S_NO': 'Hidden', 'District': 'Hidden', 'Corp/Mun': 'TextEdit', 'FACILITY': 'TextEdit', 'TYPE': 'TextEdit', 'Latitude': 'Hidden', 'Longtitude': 'Hidden', 'id': 'Hidden', 'Image': 'ExternalResource', });
lyr_TN_District_7.set('fieldImages', {'dist_name': 'TextEdit', 'dist_id': 'Hidden', 'district_i': 'Hidden', 'Type': 'Hidden', 'x': 'Hidden', 'y': 'Hidden', });
lyr_Municipalities_1.set('fieldLabels', {'VILL_ID_2': 'no label', 'LOCATION': 'no label', 'TYPE': 'no label', });
lyr_Zones_2.set('fieldLabels', {'VILL_ID_2': 'no label', 'LOCATION': 'no label', 'TYPE': 'no label', });
lyr_UPHC_3.set('fieldLabels', {'Corp/Mun': 'inline label', 'FACILITY': 'inline label', 'TYPE': 'inline label', 'Image': 'Hidden', });
lyr_UCHC_4.set('fieldLabels', {'Corp/Mun': 'inline label', 'FACILITY': 'inline label', 'TYPE': 'inline label', 'Image': 'Hidden', });
lyr_EOC_5.set('fieldLabels', {'Corp/Mun': 'inline label', 'FACILITY': 'inline label', 'TYPE': 'inline label', 'Image': 'Hidden', });
lyr_Dispensary_6.set('fieldLabels', {'Corp/Mun': 'inline label', 'FACILITY': 'inline label', 'TYPE': 'inline label', 'Image': 'Hidden', });
lyr_TN_District_7.set('fieldLabels', {'dist_name': 'inline label', });
lyr_TN_District_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
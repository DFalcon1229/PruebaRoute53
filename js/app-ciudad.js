let ciudadesGuayas = ['Guayaquil', 'Daule', 'Durán'];
let ciudadesPichincha = ['Quito', 'Machachi', 'Cayambe'];
let ciudadesManabi = ['Portoviejo', 'Manta', 'Chone'];

selectProvincia.addEventListener('change', function(){
    if (selectProvincia.value == 'Guayas') {
        ciudad1.value = ciudadesGuayas[0];
        ciudad1.textContent = ciudadesGuayas[0];
        ciudad2.value = ciudadesGuayas[1];
        ciudad2.textContent = ciudadesGuayas[1];
        ciudad3.value = ciudadesGuayas[2];
        ciudad3.textContent = ciudadesGuayas[2];
    } else if (selectProvincia.value == 'Manabi') {
        ciudad1.value = ciudadesManabi[0];
        ciudad1.textContent = ciudadesManabi[0];
        ciudad2.value = ciudadesManabi[1];
        ciudad2.textContent = ciudadesManabi[1];
        ciudad3.value = ciudadesManabi[2];
        ciudad3.textContent = ciudadesManabi[2];
    } else if (selectProvincia.value == 'Pichincha') {
        ciudad1.value = ciudadesPichincha[0];
        ciudad1.textContent = ciudadesPichincha[0];
        ciudad2.value = ciudadesPichincha[1];
        ciudad2.textContent = ciudadesPichincha[1];
        ciudad3.value = ciudadesPichincha[2];
        ciudad3.textContent = ciudadesPichincha[2];
    }

    
});
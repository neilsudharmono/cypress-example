const validInputSurcharges={
    name: 'Wall installation',
    desc: 'Sample Surcharge from Automation testing'
}

const surchargePagination={
    first_page : '',
    second_page : '',
    third_page : ''
}

const surchargeSorting={
    surcharge_az : 'zzz',
    surcharge_za : '1111'
}

const surchargeSearch={
    by_name : 'Brick ',
    by_description : 'Installation of product',
    by_invalid_keyword : 'THIS IS INVALID',
    by_lower : 'test',
    lower_result : 'test',
    by_upper : 'TEST',
    upper_result : 'test',
    by_combine_keywords : 'wall installation',
    combine_keyword_result : 'Wall installation'
}


export {
    validInputSurcharges, 
    surchargePagination,
    surchargeSorting,
    surchargeSearch
};
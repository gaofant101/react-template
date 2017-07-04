export const dictionary = {
    total: 2,
    item: [
        {
            fundesc: '操作系统类型',
            tabname: 'dc_d_ostype',
            recnum: 20,
            columns: [
                {
                    colid: 1,
                    coldesc: '序列号',
                    colname: 'id',
                    autofill: true,
                },
                {
                    colid: 2,
                    coldesc: '内容',
                    colname: 'name',
                    autofill: false,
                },
            ],
            rows: [
                {
                    rownum: 1,
                    rowval: [
                        'Windows',
                    ],
                },
                {
                    rownum: 2,
                    rowval: [
                        'CentOS',
                    ],
                },
            ],
        },
        {
            fundesc: '开发语言种类',
            tabname: 'dc_d_devlang',
            recnum: 50,
            columns: [
                {
                    colid: 1,
                    coldesc: '序列号',
                    colname: 'id',
                    autofill: true,
                },
                {
                    colid: 2,
                    coldesc: '内容',
                    colname: 'name',
                    autofill: false,
                },
                {
                    colid: 3,
                    coldesc: '备注',
                    colname: 'note',
                    autofill: false,
                },
            ],
            rows: [
                {
                    rownum: 1,
                    rowval: [
                        'Java',
                        '17年排行第一',
                    ],
                },
                {
                    rownum: 2,
                    rowval: [
                        'C',
                        '17年排行第二',
                    ],
                },
            ],
        },
    ],
};

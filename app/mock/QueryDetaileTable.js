export const Tabledata1 = [
    {
        "cost": "2.025",
        "name": "安恒数据库审计",
        "QRTotal": 39,
        "header": [
            {
                "id": "happentime",
                "key": "happentime",
                "name": "发生时间",
                "width": 10,
                "algin": "left"
            },
            {
                "id": "sip",
                "key": "sip",
                "name": "客户端IP",
                "width": 8,
                "algin": "left"
            },
            {
                "id": "dip",
                "key": "dip",
                "name": "服务端IP",
                "width": 8,
                "algin": "left"
            },
            {
                "id": "payload",
                "key": "payload",
                "name": "报文",
                "width": 40,
                "algin": "left"
            },
            {
                "id": "backresult",
                "key": "backresult",
                "name": "执行结果",
                "width": 20,
                "algin": "left"
            },
            {
                "id": "effectrow",
                "key": "effectrow",
                "name": "影响行数",
                "width": 5,
                "algin": "left"
            },
            {
                "id": "cost",
                "key": "cost",
                "name": "耗时",
                "width": 5,
                "algin": "left"
            }
        ],
        "QueryResult": [
            {
                "id": 1,
                "发生时间": "2017-04-20 00:52:17",
                "唯一编号": "1704200052170000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 2,
                "发生时间": "2017-04-20 00:52:16",
                "唯一编号": "1704200052160000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 3,
                "发生时间": "2017-04-20 00:52:15",
                "唯一编号": "1704200052150000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 4,
                "发生时间": "2017-04-20 00:52:14",
                "唯一编号": "1704200052140000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 5,
                "发生时间": "2017-04-20 00:52:13",
                "唯一编号": "1704200052130000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 6,
                "发生时间": "2017-04-20 00:52:12",
                "唯一编号": "1704200052120000005",
                "报文": "62:26:91:32:50:58 select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 7,
                "发生时间": "2017-04-20 00:52:11",
                "唯一编号": "1704200052110000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 8,
                "发生时间": "2017-04-20 00:52:10",
                "唯一编号": "1704200052100000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 9,
                "发生时间": "2017-04-20 00:52:09",
                "唯一编号": "1704200052090000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            },
            {
                "id": 10,
                "发生时间": "2017-04-20 00:52:08",
                "唯一编号": "1704200052080000005",
                "报文": "select b.client_tcp_port, b.client_net_address, b.connect_time,  a.host_name, a.program_name, a.login_name  from master.sys.dm_exec_sessions a, master.sys.dm_exec_connections b  where a.session_id=b.session_id and client_tcp_port!=0 ",
                "会话ID": "1704191006120000005",
                "保护对象": "DB采集器.beijing_SQLserver",
                "耗时": "0",
                "策略名称": "",
                "模板ID": "1491873674",
                "返回内容": "",
                "影响行数": "0",
                "返回结果": "",
                "客户端IP": "192.168.22.239",
                "客户端端口": "41211",
                "客户端MAC": "62:26:91:32:50:58",
                "服务器IP": "192.168.21.80",
                "服务器端口": "1433",
                "服务器MAC": "19:45:85:15:80:42",
                "应用类型": "MSSQL",
                "登录用户名": "",
                "客户端用户名": "",
                "SID": "",
                "客户端程序名": "",
                "主机名": "",
                "风险级别": "0",
                "应用用户名": ""
            }
        ],
        "children": [
            {
                "FieldName": "apptypeid",
                "name": "数据库类型",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 0
                    }
                ]
            },
            {
                "FieldName": "appuser",
                "name": "应用用户名",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "attackgradeid",
                "name": "告警级别",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "clientprg",
                "name": "客户端程序名",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "clientuser",
                "name": "客户端用户名",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "dip",
                "name": "服务端IP",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "dmac",
                "name": "服务端MAC",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "dport",
                "name": "服务端端口",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "hostname",
                "name": "客户端主机名",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "loginuser",
                "name": "数据库登录用户",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "policyname",
                "name": "规则",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "sid",
                "name": "SID",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "sip",
                "name": "客户端IP",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "192.168.22.239",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "smac",
                "name": "客户端MAC",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "62:26:91:32:50:58",
                        "Num": 39
                    }
                ]
            },
            {
                "FieldName": "sqlid",
                "name": "SQL种类",
                "ItemsTotal": 1,
                "children": [
                    {
                        "ID": 1,
                        "name": "62:26:91:32:50:58",
                        "Num": 39
                    }
                ]
            }
        ]
    }
];

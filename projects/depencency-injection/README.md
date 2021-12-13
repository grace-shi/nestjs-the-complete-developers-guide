# Dependency Injection 项目

### 模块依赖图
                
                            Computer Moudle  
                          Computer Controller 
                                  run()       
                                    ｜
                    ------------------------------------
                    ⬇                                 ⬇
                CPU Module                        Disk Module
                CPU Service                       Disk Service
                 compute()                          getData()
                    |                                  |
                    -------------------------------------
                                    ⬇
                               Power Module
                               Power Service
                               supplyPower()

                               

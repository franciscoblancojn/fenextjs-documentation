# useData

Hook personalizado para administrar y validar datos con múltiples opciones para manejar cambios, envío y estados de error.

### Importación

Para importar el componente useData, se puede hacer desde fenextjs

```tsx copy
import { useData } from "fenextjs";
```

### Parámetros

| Parámetro   | Tipo                                   | Requerido | Default | Descripcion                                                           |
| ----------- | -------------------------------------- | --------- | ------- | --------------------------------------------------------------------- |
| defaultData | T                                      | sí        |         | Los datos predeterminados para inicializar el hook.                   |
| options     | useDataOptions\<T, M, RT, RM, ET, EM\> | no        |         | Un objeto que contiene varias opciones de configuración para el hook. |

### useDataOptions

Opciones para personalizar el comportamiento del hook.

| Nombre                              | Descripcion                                                                                                                                                                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data                                | Datos opcionales para sobrescribir los datos predeterminados.                                                                                                                                                                       |
| refreshDataIfChangeDefaultData      | Opciones para refrescar los datos si los datos predeterminados cambian.                                                                                                                                                             |
| onChangeDataAfter                   | Función de callback que se llama después de que los datos cambian.                                                                                                                                                                  |
| onDeleteDataAfter                   | Función de callback que se llama después de que los datos se eliminan.                                                                                                                                                              |
| onMemo                              | Función de memoización para transformar los datos antes de pasarlos como valor memorizado.                                                                                                                                          |
| memoDependencies                    | Lista de variable que depende onMemo para actualizarce o ejecutarce.                                                                                                                                                                |
| validator                           | Instancia de clase validadora para validar los datos de data.                                                                                                                                                                       |
| validatorMemo                       | Instancia de clase validadora para validar los datos de dataMemo.                                                                                                                                                                   |
| onSubmitData                        | Función de callback para enviar los datos.                                                                                                                                                                                          |
| onBeforeSubmitData                  | Función de callback que se llama antes de un envío de datos, proporcionando los datos que se van a enviar y el resultado de su validacion.                                                                                          |
| onAfterSubmitDataOk                 | Función de callback que se llama después de un envío éxitoso de datos.                                                                                                                                                              |
| onAfterSubmitParseError             | Función de callback para manejar errores de análisis.                                                                                                                                                                               |
| onAfterSubmitDataError              | Función de callback para manejar errores después de enviar los datos.                                                                                                                                                               |
| afterSubmitDataSetIsChangeFalse     | Determinar si se cambia el valor de isChange despues del terminar onSubmitData.                                                                                                                                                     |
| onSubmitDataMemo                    | Función de callback para enviar los datos de dataMemo.                                                                                                                                                                              |
| onBeforeSubmitDataMemo              | Función de callback que se llama antes de un envío de datos de dataMemo, proporcionando los dataMemo que se van a enviar y el resultado de su validacion.                                                                           |
| onAfterSubmitDataMemoOk             | Función de callback que se llama después de un envío éxitoso de datos de dataMemo.                                                                                                                                                  |
| onAfterSubmitParseErrorMemo         | Función de callback para manejar errores de análisis de dataMemo.                                                                                                                                                                   |
| onAfterSubmitDataMemoError          | Función de callback para manejar errores después de enviar los datos de dataMemo.                                                                                                                                                   |
| afterSubmitDataMemoSetIsChangeFalse | Determinar si se cambia el valor de isChange despues del terminar onSubmitDataMemo.                                                                                                                                                 |
| autoOnValidate                      | Indicador para validar automáticamente los datos.                                                                                                                                                                                   |
| env_log                             | Objetos que determinar que variables se muestran en la consola.                                                                                                                                                                     |
| useGlobalContext                    | Activar contexto global para que la data que se maneje en distintos useData, con el mismo nombre de useGlobalContext, este sincronizada. (Solo funciona despues que window cargue). **No se recomienda usar para datos sencibles**. |

### useDataOptionsRefreshDataIfChangeDefaultDataOptions

Opciones para refrescar los datos cuando los datos predeterminados cambian.

| Nombre           | Descripcion                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------ | ------- |
| active           | Indicador para indicar si los datos deben actualizarse cuando cambian los datos predeterminados. | false   |
| useReloadKeyData | Indicador para recargar la clave de los datos cuando cambian los datos predeterminados.          | false   |

### setDataOptions

Opciones para configurar los datos.

| Nombre                      | Descripcion                                                                                                   | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| useOptionsOnChangeDataAfter | Indicador para controlar si se debe usar el callback `onChangeDataAfter` al configurar los datos.             | true    |
| useSetIsChange              | Indicador para controlar si el estado `isChange` debe configurarse en `true` después de configurar los datos. | true    |

### Returns

| Parametro               | Tipo                                                                                                                     | Descripcion                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| data                    | T                                                                                                                        | Datos guardados en useData.                                                               |
| onChangeData            | (id: keyof T) =\> (value: typeof data[keyof T], \_options?: onChangeDataOptionsProps\<T\>) =\> void                      | Función para manejar los cambios en los datos.                                            |
| onDeleteData            | (id: keyof T) =\> void                                                                                                   | Función para eliminar datos.                                                              |
| isChange                | boolean                                                                                                                  | Valor que determina si la informacion guardada en data ha cambiado.                       |
| setData                 | (nData: T, optionsData?: setDataOptions) =\> void                                                                        | Función para asignar nuevos datos.                                                        |
| setDataFunction         | (f: (p: T) =\> T, optionsData?: setDataOptions) =\> void                                                                 | Función para actualizar los datos usando una función.                                     |
| dataMemo                | M                                                                                                                        | Datos guardados en useData y transformados con la funcion onMemo proporcionada.           |
| setIsChange             | (f: boolean) =\> void                                                                                                    | Función para actualizar la variable isChange.                                             |
| onRestart               | function                                                                                                                 | Función para restablecer los datos a su valor default.                                    |
| onConcatData            | (v: Partial\<T\> \| Array\<T\>) =\> void                                                                                 | Función para concatenar nuevos datos a los datos actuales.                                |
| keyData                 | number                                                                                                                   | Valor de key asignado a data, que cambia con algunos acciones.                            |
| setKeyData              | (f: number) =\> void                                                                                                     | Función para actualizar la variable keyData.                                              |
| onReloadKeyData         | function                                                                                                                 | Función para actualizar la variable keyData a un numero generado del Time.                |
| validator               | FenextjsValidatorClass                                                                                                   | Validador asignado a data.                                                                |
| validatorData           | \{ [id in keyof T]?: FenextjsValidatorClass\<any\> \| undefined; \}                                                      | Validador asignado a cada elemento de data.                                               |
| validatorMemo           | FenextjsValidatorClass                                                                                                   | Validador asignado a dataMemo.                                                            |
| validatorDataMemo       | \{ [id in keyof T]?: FenextjsValidatorClass\<any\> \| undefined; \}                                                      | Validador asignado a cada elemento de dataMemo.                                           |
| isValidData             | boolean \| ErrorFenextjs                                                                                                 | Valor del resultado de validar data.                                                      |
| isValidDataMemo         | boolean \| ErrorFenextjs                                                                                                 | Valor del resultado de validar dataMemo.                                                  |
| onValidateData          | function                                                                                                                 | Funcion para ejecutar validator a data y guardar el resultado en isValidData.             |
| onValidateDataMemo      | function                                                                                                                 | Funcion para ejecutar validatorMemo a dataMemo y guardar el resultado en isValidDataMemo. |
| onSubmitData            | (optionsSubmitData: \{ data?: T; onSaveData?: (p: \{ data: T; result: RT \}) =\> T; useValidator?: boolean; \}) =\> void | Función para enviar los datos.                                                            |
| onSubmitDataMemo        | (optionsSubmitDataMemo: \{ dataMemo?: M; useValidatorMemo?: boolean; \}) =\> void                                        | Función para enviar datos memorizados.                                                    |
| loaderSubmit            | boolean                                                                                                                  | Valor que determina si esta procesando el envio de data con onSubmitData.                 |
| loaderSubmitMemo        | boolean                                                                                                                  | Valor que determina si esta procesando el envio de dataMemo con onSubmitDataMemo.         |
| resultSubmitData        | RT                                                                                                                       | Valor del resultado al ejecutar onSubmitData.                                             |
| resultSubmitDataMemo    | RM                                                                                                                       | Valor del resultado al ejecutar onSubmitDataMemo.                                         |
| dataError               | ET                                                                                                                       | Valor del error al ejecutar onSubmitData en caso que ocurra un error.                     |
| dataErrorMemo           | EM                                                                                                                       | Valor del error al ejecutar onSubmitDataMemo en caso que ocurra un error.                 |
| setResultSubmitData     | Dispatch\<SetStateAction\<RT \| undefined\>\>                                                                            | Funcion para modificar el valor de resultSubmitData.                                      |
| setResultSubmitDataMemo | Dispatch\<SetStateAction\<RM \| undefined\>\>                                                                            | Funcion para modificar el valor de resultSubmitDataMemo.                                  |
| setDataError            | Dispatch\<SetStateAction\<ET \| undefined\>\>                                                                            | Funcion para modificar el valor de dataError.                                             |
| setDataErrorMemo        | Dispatch\<SetStateAction\<EM \| undefined\>\>                                                                            | Funcion para modificar el valor de dataErrorMemo.                                         |

### Usos

- Ejecutar y Detectar acción

```tsx copy
const { setData } = useData({
  defaultData: initialData,
  options: { onChangeDataAfter: console.log },
});
setData(newValue);
```

- Definiendo interfaz

```tsx copy
const { setData } = useData<{ name: string }>({
  defaultData: { name: "example" },
});
setData({ name: "new name" });
```

- Usando para un formulario

```tsx copy
interface useFormLoginDataProps {
    email: string;
    password: string;
}
const {
    data,
    onChangeData,
    onSubmitData,
    dataError,
    loaderSubmit,
    isValidData,
    validatorData,
} = useData<
    useFormLoginDataProps,
    any,
    useFormLoginResultProps,
    any,
    ErrorFenextjs | undefined
>(
    { email: '', password: '' },
    {
        onSubmitData: (data)=>{
            //proceso de login
        },
        validator: FenextjsValidator<useFormLoginDataProps>()
            .setName('onLogin')
            .isObject({
                email: FenextjsValidator()
                    .isString('Email requerido')
                    .isEmail('Email invalido')
                    .isRequired('Email requerido',
                password: FenextjsValidator()
                    .isString('Contraseña requerido')
                    .isRequired('Contraseña es requerida')
                    .isMinOrEqual(6, 'La contraseña es muy corta'),
            }),
        onAfterSubmitDataOk: async ({ result }) => {
            console.log("Ingreso éxitoso")
        },
        onAfterSubmitDataError: ({ error }) => {
            console.log("Ocurrio un error", error)
        },
    },
);
<FormBase  onSubmit={onSubmitData}>
    <InputText
        id="email"
        placeholder={'Correo electrónico'}
        validator={validatorData?.email}
        onChange={onChangeData('email')}
        defaultValue={data.email}
        errorWithIsChange={true}
    />
    <InputPassword
        id="password"
        placeholder={'Contraseña'}
        validator={validatorData?.password}
        onChange={onChangeData('password')}
        defaultValue={data.password}
        errorWithIsChange={true}
    />
    {dataError && <ErrorComponent error={dataError} />}
    <Button
        disabled={isValidData !== true}
        loader={loaderSubmit}
        onClick={onSubmitData}
        full={true}
        size="extra-strong"
    >
        Entrar
    </Button>
</FormBase>

```

- Usando useGlobalContext

```tsx copy
const DATA1 = useData<string>(
    "",
    {
        useGlobalContext:"name-of-context-custom"
    },
);
const DATA2 = useData<string>(
    "",
    {
        useGlobalContext:"name-of-context-custom"
    },
);

<Title>DATA1 value = {DATA1.data}</Title>
<Title>DATA2 value = {DATA2.data}</Title>

<Button
    onClick={()=>{
        DATA1.setData("value1")
    }}
>
    setData1 to "value1"
</Button>
<Button
    onClick={()=>{
        DATA2.setData("value2")
    }}
>
    setData2 to "value2"
</Button>

```

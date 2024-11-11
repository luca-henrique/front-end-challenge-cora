import { useQuery } from "@tanstack/react-query";
import api from "../../services/axios";

import { SVGProps } from "react";

const Estorno = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#3B3B3B"
      d="M8.157 3.92a.5.5 0 0 0-.707-.007l-3.8 3.73a.499.499 0 0 0-.15.378.5.5 0 0 0 .133.358l3.73 4.04a.5.5 0 1 0 .734-.68l-2.955-3.2h9.914c2.415 0 4.444 2.102 4.444 4.731 0 2.63-2.029 4.731-4.444 4.731H4a.5.5 0 1 0 0 1h11.056c3.02 0 5.444-2.603 5.444-5.73 0-3.129-2.424-5.732-5.444-5.732H5.183L8.15 4.627a.5.5 0 0 0 .007-.707Z"
    />
  </svg>
)

const Debito = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#3B3B3B"
      fillRule="evenodd"
      d="M11.702 12.981c.018-.23.22-.4.448-.382 1.464.117 2.74.332 3.66.617.457.142.85.309 1.139.505.273.186.551.469.551.862 0 .251-.116.46-.262.619a2.021 2.021 0 0 1-.55.399c-.427.224-1.017.414-1.711.568-1.395.31-3.302.498-5.394.498s-3.999-.188-5.393-.498c-.694-.154-1.284-.344-1.711-.568a2.02 2.02 0 0 1-.55-.4.913.913 0 0 1-.262-.618c0-.345.216-.606.444-.784.234-.183.551-.338.914-.47.731-.268 1.747-.481 2.931-.625a.417.417 0 0 1 .1.828c-1.153.14-2.098.342-2.744.579-.326.119-.551.238-.688.344a.412.412 0 0 0-.122.129c.005.01.016.027.04.053.056.06.158.139.325.226.332.175.84.345 1.503.492 1.32.293 3.163.478 5.213.478 2.05 0 3.894-.184 5.213-.478.664-.147 1.172-.317 1.504-.492.167-.087.269-.165.325-.226a.25.25 0 0 0 .04-.053c-.01-.02-.048-.08-.185-.174-.19-.13-.495-.267-.918-.398-.839-.26-2.047-.468-3.478-.582a.417.417 0 0 1-.382-.449Zm-9.203 1.61v.001ZM14.274 3.455a.417.417 0 0 1 .59 0l2.22 2.221.002.002a.415.415 0 0 1 0 .59h-.001L14.864 8.49a.417.417 0 0 1-.59-.59l1.512-1.51h-1.434a4.77 4.77 0 0 0-4.769 4.768v2.536a.417.417 0 0 1-.833 0v-2.536a5.603 5.603 0 0 1 5.602-5.602h1.434l-1.511-1.511a.417.417 0 0 1 0-.59Z"
      clipRule="evenodd"
    />
  </svg>
)


const Recebimento = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#1A93DA"
      fillRule="evenodd"
      d="M2.963 4.365c0-.23.187-.417.417-.417h1.778c3.205 0 5.835 2.492 5.835 5.603v3.13l1.617-1.548a.417.417 0 1 1 .576.602l-2.322 2.223a.417.417 0 0 1-.576 0l-2.322-2.223a.417.417 0 1 1 .576-.602l1.617 1.548v-3.13c0-2.617-2.221-4.77-5-4.77h-1.78a.417.417 0 0 1-.416-.416Zm4.13 8.733a.417.417 0 0 1-.359.467c-1.124.147-2.042.358-2.668.602-.315.122-.532.244-.663.353-.107.089-.124.14-.126.15.002.007.01.032.048.075.057.064.16.146.325.237.332.182.839.359 1.501.513 1.318.306 3.16.499 5.21.499 2.048 0 3.89-.193 5.208-.5.663-.153 1.17-.33 1.501-.512.166-.091.269-.173.325-.237.039-.044.047-.068.049-.075-.002-.009-.013-.042-.073-.102a1.637 1.637 0 0 0-.44-.282c-.434-.208-1.086-.401-1.914-.558a.417.417 0 0 1 .155-.819c.86.163 1.591.373 2.118.625.263.125.496.271.67.445.175.174.317.406.317.69 0 .25-.11.462-.256.627-.144.162-.336.3-.55.416-.427.235-1.018.433-1.713.594-1.396.325-3.304.521-5.398.521-2.093 0-4-.196-5.397-.52-.695-.162-1.286-.36-1.714-.595a2.027 2.027 0 0 1-.549-.416.946.946 0 0 1-.256-.627c0-.34.201-.603.426-.79.23-.19.54-.35.894-.489.714-.278 1.706-.5 2.862-.651.228-.03.437.13.467.359Zm10.35 1.574v-.003.003Zm0-.003v-.002.002Zm-14.166-.002v.002-.002Z"
      clipRule="evenodd"
    />
  </svg>
);

export const TransectionList = () => {
  const fetchTransectionData = async () => {
    return await api.get("/list");
  };

  const {
    data,
    isLoading,
  } = useQuery({ queryKey: ["groups"], queryFn: fetchTransectionData });


  console.log(data)


  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div>
      <header>
        <button>Crédito</button>
        <button>Débito</button>
      </header>
      <div>
        {data.data.results.map((item) => (
          <div>
            {item.date}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #DEE4E9",
                borderRadius: "16px",
                gap: "24px",
                padding: "32px 16px"
              }}
            >
              {item.items.map((transection) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Estorno />
                    <h5>{transection.description}</h5>
                    <h5>{transection.label}</h5>
                    <h5>{transection.dateEvent}</h5>
                    <h5>{transection.amount}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/*
amount:2990
dateEvent: "2024-01-11T14:47:46Z"
description: "Assinatura mensal"
entry: "DEBIT"
id: "uvw987rst654xyz321"
label: "Débito automático"
name: "Empresa XYZ"
status:"COMPLETED"
*/

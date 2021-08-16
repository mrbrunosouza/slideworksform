import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { CheckboxGroup, Container, StyledForm, Dropdown, Submit, SubmitSection, Tag, Tags, TextArea, Wrapper } from "./styles";

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";



interface CreateFormData {
  name: string,
  email: string,
  description: string,
  option1: boolean,
  option2: boolean,
  option3: boolean,
  dropdown: string,
  tags: string,
}

type Option = {
  id: string;
  name: string;
}

type LabelOption = Option & {
  color: string;
}

const creatInputFormSchema = yup.object().shape({
  name: yup.string().required("Informe uma descrição"),
  email: yup.string().email("Informe um e-mail válido").required("E-mail obrigatório"),
  description: yup.string().required("Informe o conteúdo do cartão"),
  dropdown: yup.string().required("Informe uma lista"),
})

export function Form() {

  const [lists, setLists] = useState<Option[]>([])
  const [labels, setLabels] = useState<LabelOption[]>([])
  const [loading, setLoading] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState<LabelOption[]>([])
  const [active, setActive] = useState(false)

  useEffect(() =>{
    async function loadList() {
      const response = await api.get(`boards/${process.env.REACT_APP_BOARD_ID}/lists`)
    
      setLists(response.data.map((item: Option) => ({
        id: item.id,
        name: item.name,
      })))
    }

    async function loadLabels() {
      const response = await api.get(`boards/${process.env.REACT_APP_BOARD_ID}/labels`)
    
      setLabels(response.data.map((item: LabelOption) => ({
        id: item.id,
        name: item.name,
        color: item.color,
      })))
    }

    loadList()
    loadLabels()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(creatInputFormSchema),
  });

  const handleCreateForm: SubmitHandler<CreateFormData> = async (
    values
  ) => {
    setLoading(true);

    const description = 
      `E-mail: ${values.email} 
      \n\n ${values.description}
      `

    try {
      const result = await api.post(`cards`, null, {
        params: {
          name: values.name,
          desc: description,
          idList: values.dropdown,
          idLabels: selectedLabels.map((item) => item.id).join(',')
        }
      })

      const idCard = result.data.id

      const checklistResult = await api.post(`checklists`, null, {
        params: {
          idCard,
          name: 'Opções'
        }
      })

      const idChecklist = checklistResult.data.id

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 01',
          checked: values.option1
        }
      })

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 02',
          checked: values.option2
        }
      })

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 03',
          checked: values.option3
        }
      })

      reset();
      setSelectedLabels([])

    } catch (error) {

      console.log(error)

    } finally {
      setLoading(false);
    }
  };

  function handleToggleLabel(label: LabelOption) {
    const newLabels = [...selectedLabels]

    const labelIndex = newLabels.findIndex((item) => item.id === label.id);

    if(labelIndex === -1) {
      newLabels.push(label);
    } else {
      newLabels.splice(labelIndex, 1);
    }
    setSelectedLabels(newLabels);
  }

  return(
    <Container>
      <Wrapper>
        <StyledForm onSubmit={handleSubmit(handleCreateForm)}>
          <section className="firstSection">
            <Input description="Name">
              <input
                type="text"
                className={`name ${errors.name ? "haserrors" : ""}`}
                {...register("name")}
                onChange={(e) => {
                  setValue(
                    "name",
                    e.target.value
                  );
                }}
              />
            </Input>
            <CheckboxGroup>
              <Checkbox id="option1" description="Opção 1" >
                <input type="checkbox" id="option1" {...register("option1")}/>
              </Checkbox>
              <Checkbox id="option2" description="Opção 2" >
                <input type="checkbox" id="option2" {...register("option2")}/>
              </Checkbox>
              <Checkbox id="option3" description="Opção 3" >
                <input type="checkbox" id="option3" {...register("option3")}/>
              </Checkbox>
            </CheckboxGroup>
          </section>
          <section className="secondSection">
            <Input description="E-mail">
              <input
                type="email"
                className={`email ${errors.name ? "haserrors" : ""}`}
                {...register("email")}
                onChange={(e) => {
                  setValue(
                    "email",
                    e.target.value
                  );
                }}
              />
            </Input>
            <div className="dropdownSection">
              <label htmlFor="dropdown">Listas</label>    
              <Dropdown 
                id="dropdown"
                className={`dropdown ${errors.dropdown ? "haserrors" : ""}`}
                {...register("dropdown")}
              >
                <option value="">Selecione uma lista</option>
                {lists.map((option) => (
                  <option value={option.id} key={option.id}>{option.name}</option>
                ))}
              </Dropdown>
            </div>
          </section>
          <section className="thirdSection">
          <TextArea 
              id="description" 
              rows={10}
              placeholder="Type something..."
              className={`description ${errors.name ? "haserrors" : ""}`}
              {...register("description")}
              onChange={(e) => {
                setValue(
                  "description",
                  e.target.value
                );
              }}
            ></TextArea>    
            <div>
              <label>Tags</label>
              <SubmitSection>
                <Tags>
                  {labels.map((label) => (
                    <Tag 
                      key={label.id} 
                      type="button"
                      onClick={() => handleToggleLabel(label)}
                      active={selectedLabels.some(item => item.id === label.id)}
                      color={label.color}
                    >{label.name}</Tag>
                  ))}
                </Tags>
                <Submit type="submit" disabled={loading}>
                  {loading ? "Carregando..." : "Enviar"}
                </Submit>
              </SubmitSection>
            </div>
          </section>
        </StyledForm>
      </Wrapper>
    </Container>
  )
}
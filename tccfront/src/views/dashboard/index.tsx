import React from 'react'

// ** componentes
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import ReactPlayer from 'react-player'
import { Switch } from '../../components/switch';
import { FormAddRoom } from './form';
import { Modal } from '../../components/modal';

// ** estilos e icones
import { style } from './style';
import { MdAdd, MdDelete, MdMoreHoriz } from 'react-icons/md';
import { api } from '../../services/services';



// ** constantes
const initialState = [
  {
    id: 1,
    name: '2º Andar',
    rooms: [
      {
        id: 1,
        name: 'Lab. circuitos',
        camera: 'http://localhost:3001/stream/index.m3u8?id=5',
        sonoff: [
          {
            id: 1,
            name: 'Lâmpada lab. circ.',
            status: 'off'
          }
        ]
      },

      {
        id: 2,
        name: 'Lab. circuitos',
        camera: 'https://www.youtube.com/watch?v=Cc-y4qujQGM&t=2s&ab_channel=SEI-Servi%C3%A7odeEntregadeImagens',
        sonoff: [
        ]
      }
    ]
  }
]

const RenderTitle = (props: { name: string }) => {
  const title = props.name;
  const [name, setName] = React.useState<string>(title || 'Editar título');
  const [isNameFocused, setIsNamedFocused] = React.useState(false);

  return (<>
    {!isNameFocused ? (
      <Typography
        sx={{ ...style.titleCard }}
        onClick={() => {
          setIsNamedFocused(true);
        }}
      >
        {name}
      </Typography>
    ) : (
      <TextField
        autoFocus
        value={name}
        onChange={event => setName(event.target.value)}
        onBlur={event => setIsNamedFocused(false)}
      />
    )}
  </>)
}

export function Dashboard() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [group, setGroup] = React.useState<any[]>(initialState);

  const handleRemoveContainer = (id: number) => {
    const removeID = group.filter((container) => container.id !== id)
    setGroup(removeID)
  }

  const getStatusDevice = async () => {
    try {
      const response = await api.get('/sonoff/info');

      console.log(response.data)
      return response.data;
    } catch (error) {
      return error
    }
  }

  React.useEffect(() => {
    const a = getStatusDevice()
    console.log('response', a)
  }, [])

  const toggleDevice = async (state: string) => {
    try {
      const response = await api.post('/sonoff', {
        state: state
      });
      console.log('response state:', response)
      return response.data.switch;
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const handleAddContainer = () => {
    const id = group.length + 1;
    setGroup((prev: any) => [...prev, {
      id: id,
      name: '',
      rooms: []
    }])
  }

  return (
    <Box>
      <Modal
        title='Selecione as salas que deseja adicionar'
        component={<FormAddRoom />}
        open={open}
        setOpen={setOpen}
      />

      <Box display="flex" justifyContent='space-between' mb={3}>
        <Typography variant='h4'>
          Dashboard
        </Typography>

        <Button
          title='Adicionar'
          variant="contained"
          startIcon={<MdAdd size={22} />}
          onClick={handleAddContainer}
        >
          Criar container
        </Button>
      </Box>

      {group.map((element, index) => (
        <Paper key={element.id} sx={{ mb: 2 }}>
          <Box>
            <Box sx={{ ...style.topCard }}>
              <RenderTitle name={element.name} />

              <IconButton onClick={() => handleRemoveContainer(element.id)}>
                <MdDelete size={22} />
              </IconButton>
            </Box>

            <Box display="flex" px={4}>
              {element.rooms.map((item: any) => (
                <Box mr={4} key={item.id}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant='subtitle1'>
                      {item.name}
                    </Typography>

                    <IconButton>
                      <MdMoreHoriz size={22} />
                    </IconButton>
                  </Box>

                  <ReactPlayer
                    url={item.camera}
                    muted
                    playing

                    controls
                    width={'20rem'}
                    height={'13rem'}
                  />
                  <Box mb={2}>
                    <Typography
                      mt={2}
                      variant='subtitle2'
                    >
                      Dispositivos
                    </Typography>

                    <Switch
                      title={'Lampada'}
                      status={'off'}
                      change={e => toggleDevice(e)}
                    />
                    {item.sonoff.map((sonoff: any) => (
                      <Switch
                        key={sonoff.id}
                        title={sonoff.name}
                        status={sonoff.status}
                        change={e => {}}
                      />
                    ))}
                  </Box>
                </Box>
              ))}

              <IconButton
                sx={{ ...style.addButton }}
                onClick={() => setOpen(true)}
              >
                <MdAdd size={30} />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      ))
      }
    </Box >
  )
}
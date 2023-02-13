import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Link,
} from '@chakra-ui/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

export default function FormCard() {

    const MySwal = withReactContent(Swal)
    function showOTP(){
        MySwal.fire({
            title: <p>Sending OTP...</p>,
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                MySwal.showLoading()
            },
        }).then(() => {
             MySwal.fire({
                 title: <p>Enter OTP</p>,
                 confirmButtonText: 'Verify',
                 confirmButtonColor: 'green',
                 html: <input id="swal-input2" className="swal2-input"></input>
             }).then(() => {
                 MySwal.fire({
                     title: <p>Withdrawal Successful</p>,

                     icon: 'success',
                        text: "Transaction may take a few minutes to show up on the blockchain",
                     confirmButtonText: 'Close',
                     confirmButtonColor: 'green',

                 })
             })
        })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Send Ethereum
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="address" isRequired>
                                    <FormLabel>Ethereum Address</FormLabel>
                                    <Input type="text" placeholder="0x5w1tch30.."
                                    />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="amount" isRequired>
                            <FormLabel>Amount</FormLabel>
                                <NumberInput step={0.001} min={0.000001} >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                        </FormControl>
                        <FormControl id="amount-confirm" isRequired>
                            <FormLabel>Confirm Amount</FormLabel>
                            <NumberInput step={0.001} min={0.000001} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={showOTP}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Send Ethereum

                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Facing an issue? <Link color={'blue.400'}>Contact us</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
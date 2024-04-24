import { Box, Flex, Grid, Heading, Image, Text, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const Index = () => {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Classic Tee",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1629956356549-63b8a150c8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwdGVlfGVufDB8fHx8MTcxMzk5MDI4OHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3MTM5OTAyODl8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Leather Boots",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1613673720017-56e42d90fee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHN8ZW58MHx8fHwxNzEzOTkwMjg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Heading as="h1" size="xl">
          Clothing Store
        </Heading>
        <HStack spacing={4}>
          <IconButton icon={<FaSearch />} aria-label="Search" />
          <IconButton icon={<FaHeart />} aria-label="Favorites" />
          <IconButton icon={<FaShoppingCart />} aria-label="Cart" />
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {products.map((product) => (
          <Box key={product.id} boxShadow="md" p={5} rounded="md" bg="white">
            <Image src={product.image} alt={product.name} borderRadius="md" boxSize="300px" objectFit="cover" />
            <VStack align="stretch" mt={4}>
              <Text fontWeight="bold" fontSize="lg">
                {product.name}
              </Text>
              <Text fontSize="md" color="gray.500">
                {product.price}
              </Text>
              <Button colorScheme="blue" leftIcon={<FaShoppingCart />} onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;

import {
    Controller,
    Post,
    Body,
    Request,
    UseGuards,
    Delete,
    NotFoundException,
    Param
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Roles } from "src/auth/decorators/roles.decorator";
import { Role } from "src/auth/enums/role.enum";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { ItemDTO } from "./dtos/item.dto";

@ApiTags("cart")
@Controller("cart")
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Post("/")
    async addItemToCart(@Request() req, @Body() itemDTO: ItemDTO) {
        const userId = req.user.userId;
        const cart = await this.cartService.addItemToCart(userId, itemDTO);

        return cart;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Delete("/")
    async removeItemFromCart(@Request() req, @Body() { productId }) {
        const userId = req.user.userId;
        const cart = await this.cartService.removeItemFromCart(
            userId,
            productId
        );
        if (!cart) throw new NotFoundException("Product Not found");
        return cart;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.User)
    @Delete("/:id")
    async deleteCart(@Param("id") userId: string) {
        const cart = await this.cartService.deleteCart(userId);
        if (!cart) throw new NotFoundException("Cart does not exist");
        return cart;
    }
}

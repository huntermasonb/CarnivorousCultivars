using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class PlantPrices : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateModified",
                table: "Plants",
                type: "TEXT",
                nullable: false,
                defaultValue: "CURRENT_TIMESTAMP");

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Plants",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateModified",
                table: "Plants");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Plants");
        }
    }
}

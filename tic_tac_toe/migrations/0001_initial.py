# Generated by Django 5.0.1 on 2024-02-12 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tic_tac_toe_room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player1', models.CharField(blank=True, max_length=100, null=True)),
                ('player2', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]